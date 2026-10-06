import React, { useState } from 'react';
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from '@vis.gl/react-google-maps';
import {
  MapPin,
  Navigation,
  Compass,
  ExternalLink,
  Layers,
  Copy,
  Check,
  Clock,
  Sparkles,
} from 'lucide-react';

export interface CampusLocation {
  id: 'oye' | 'ikole';
  name: string;
  tagline: string;
  town: string;
  lat: number;
  lng: number;
  venue: string;
  landmark: string;
  serviceTimes: string;
  googleMapsUrl: string;
  faculties: string;
}

export const campusLocations: CampusLocation[] = [
  {
    id: 'oye',
    name: 'FUOYE Main Campus (Oye-Ekiti)',
    tagline: 'HCCF Main Fellowship Auditorium',
    town: 'Oye-Ekiti, Ekiti State',
    lat: 7.7981,
    lng: 5.3283,
    venue: 'HCCF Auditorium & Student Center (Behind Phase 1 LT)',
    landmark: '5 minutes walk from FUOYE Main Gate or Science Complex',
    serviceTimes: 'Sundays: 08:30 AM • Wednesdays: 05:30 PM',
    googleMapsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=7.7981,5.3283&destination_place_id=ChIJ__8y-G_6ShARfUoYE_Main_Campus',
    faculties: 'Sciences, Humanities, Social Sciences, Management, Pharmacy, Law, Basic Medical Sciences',
  },
  {
    id: 'ikole',
    name: 'FUOYE Ikole Campus (Ikole-Ekiti)',
    tagline: 'Faculty of Engineering & Agriculture Center',
    town: 'Ikole-Ekiti, Ekiti State',
    lat: 7.7983,
    lng: 5.5144,
    venue: 'Engineering Lecture Hall 2 / HCCF Ikole Fellowship Center',
    landmark: 'Opposite Faculty of Engineering New Complex, Ikole Campus',
    serviceTimes: 'Sundays: 08:30 AM • Wednesdays: 05:30 PM',
    googleMapsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=7.7983,5.5144&destination_place_id=ChIJ__8y-G_6ShARfUoYE_Ikole_Campus',
    faculties: 'Faculty of Engineering & Faculty of Agriculture',
  },
];

interface CampusGoogleMapProps {
  initialCampus?: 'oye' | 'ikole';
  height?: string;
  className?: string;
}

export const CampusGoogleMap: React.FC<CampusGoogleMapProps> = ({
  initialCampus = 'oye',
  height = '480px',
  className = '',
}) => {
  const apiKey = (import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string) || '';
  const [selectedCampus, setSelectedCampus] = useState<'oye' | 'ikole'>(initialCampus);
  const [activeMarkerId, setActiveMarkerId] = useState<'oye' | 'ikole' | null>(initialCampus);
  const [copied, setCopied] = useState(false);

  const activeCampus = campusLocations.find((c) => c.id === selectedCampus) || campusLocations[0];

  const handleCampusSelect = (id: 'oye' | 'ikole') => {
    setSelectedCampus(id);
    setActiveMarkerId(id);
  };

  const handleCopyCoords = (lat: number, lng: number) => {
    navigator.clipboard.writeText(`${lat}, ${lng}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDirectionsClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`rounded-3xl overflow-hidden border border-[#DFD7C9] bg-white shadow-sm ${className}`}>
      {/* Top Controls Header */}
      <div className="p-4 sm:p-5 bg-[#F4EFE6] border-b border-[#E2D9C8] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="p-1 rounded-md bg-[#141414] text-[#F4D900] inline-flex">
              <Compass className="w-3.5 h-3.5" />
            </span>
            <span className="text-[11px] font-black uppercase tracking-wider text-black">
              Interactive Google Maps Navigation
            </span>
          </div>
          <h4 className="text-base sm:text-lg font-black text-[#141414]">
            Locate HCCF on FUOYE Campus
          </h4>
        </div>

        {/* Campus Switcher Buttons */}
        <div className="flex items-center gap-2 self-stretch sm:self-auto">
          <div className="p-1 rounded-xl bg-white border border-[#DFD7C9] flex items-center gap-1 w-full sm:w-auto shadow-2xs">
            {campusLocations.map((campus) => (
              <button
                key={campus.id}
                type="button"
                onClick={() => handleCampusSelect(campus.id)}
                className={`flex-1 sm:flex-none px-3.5 py-1.5 rounded-lg text-xs font-black transition-all ${
                  selectedCampus === campus.id
                    ? 'bg-[#141414] text-[#FAF7F2] shadow-xs'
                    : 'text-neutral-700 hover:text-black hover:bg-[#FAF7F2]'
                }`}
              >
                {campus.id === 'oye' ? '🏛️ Oye Campus' : '⚙️ Ikole Campus'}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => handleDirectionsClick(activeCampus.googleMapsUrl)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#141414] hover:bg-black text-[#FAF7F2] text-xs font-black transition-all shadow-xs shrink-0"
            title="Open Turn-by-Turn Navigation in Google Maps"
          >
            <Navigation className="w-3.5 h-3.5 text-[#F4D900]" />
            <span className="hidden sm:inline">Directions</span>
          </button>
        </div>
      </div>

      {/* Map Rendering Container */}
      <div className="relative w-full" style={{ height }}>
        {apiKey ? (
          <APIProvider apiKey={apiKey} libraries={['marker']}>
            <Map
              mapId="DEMO_MAP_ID"
              internalUsageAttributionIds={['gmp_git_agentskills_v1']}
              center={{ lat: activeCampus.lat, lng: activeCampus.lng }}
              zoom={16}
              gestureHandling="greedy"
              disableDefaultUI={false}
              className="w-full h-full"
            >
              {/* Oye Main Campus Marker */}
              <AdvancedMarker
                position={{ lat: 7.7981, lng: 5.3283 }}
                title="HCCF FUOYE Main Campus Auditorium"
                onClick={() => handleCampusSelect('oye')}
              >
                <Pin
                  background="#141414"
                  borderColor="#F4D900"
                  glyphColor="#F4D900"
                  scale={selectedCampus === 'oye' ? 1.3 : 1.1}
                />
              </AdvancedMarker>

              {/* Ikole Campus Marker */}
              <AdvancedMarker
                position={{ lat: 7.7983, lng: 5.5144 }}
                title="HCCF FUOYE Ikole Campus Center"
                onClick={() => handleCampusSelect('ikole')}
              >
                <Pin
                  background="#101A73"
                  borderColor="#F4D900"
                  glyphColor="#F4D900"
                  scale={selectedCampus === 'ikole' ? 1.3 : 1.1}
                />
              </AdvancedMarker>

              {/* InfoWindow on Selected Campus Marker */}
              {activeMarkerId && (
                <InfoWindow
                  position={{
                    lat: activeCampus.lat,
                    lng: activeCampus.lng,
                  }}
                  onCloseClick={() => setActiveMarkerId(null)}
                >
                  <div className="p-2 max-w-xs text-[#141414] font-sans">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="text-[10px] font-black uppercase tracking-wider text-black bg-[#F4D900] px-1.5 py-0.5 rounded">
                        {activeCampus.id === 'oye' ? 'Main Campus' : 'Ikole Campus'}
                      </span>
                    </div>
                    <h5 className="text-sm font-black text-black">
                      {activeCampus.tagline}
                    </h5>
                    <p className="text-xs text-neutral-700 mt-1">
                      📍 {activeCampus.venue}
                    </p>
                    <p className="text-[11px] text-neutral-600 mt-1 font-semibold">
                      🕒 {activeCampus.serviceTimes}
                    </p>
                    <div className="mt-2 pt-2 border-t border-neutral-200">
                      <a
                        href={activeCampus.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-black text-black hover:underline"
                      >
                        <span>Open Directions in Google Maps</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </InfoWindow>
              )}
            </Map>
          </APIProvider>
        ) : (
          /* Fallback preview if API key is not yet set */
          <div className="w-full h-full bg-[#FAF7F2] flex flex-col items-center justify-center p-6 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#F4EFE6] border border-[#DFD7C9] flex items-center justify-center text-black">
              <MapPin className="w-7 h-7 text-black" />
            </div>
            <div>
              <h5 className="text-base font-black text-[#141414]">
                {activeCampus.name}
              </h5>
              <p className="text-xs text-neutral-600 mt-1 max-w-sm">
                {activeCampus.venue} • {activeCampus.landmark}
              </p>
            </div>
            <button
              type="button"
              onClick={() => handleDirectionsClick(activeCampus.googleMapsUrl)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#141414] hover:bg-black text-[#FAF7F2] text-xs font-black transition-all shadow-sm"
            >
              <Navigation className="w-4 h-4 text-[#F4D900]" />
              <span>Open in Google Maps App</span>
            </button>
          </div>
        )}
      </div>

      {/* Campus Details Footer Bar */}
      <div className="p-4 sm:p-5 bg-[#FAF7F2] border-t border-[#E2D9C8] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="font-bold text-black">{activeCampus.name}</span>
            <span className="text-neutral-400">•</span>
            <span className="text-neutral-600">{activeCampus.landmark}</span>
          </div>
          <p className="text-neutral-700">
            <strong>Services:</strong> {activeCampus.serviceTimes}
          </p>
        </div>

        <div className="flex items-center gap-2 self-stretch sm:self-auto shrink-0">
          <button
            type="button"
            onClick={() => handleCopyCoords(activeCampus.lat, activeCampus.lng)}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-[#DFD7C9] text-neutral-800 hover:text-black font-bold transition-colors shadow-2xs"
            title="Copy GPS Coordinates"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-black" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-black" />
                <span>Copy GPS</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => handleDirectionsClick(activeCampus.googleMapsUrl)}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-[#141414] hover:bg-black text-[#FAF7F2] font-black transition-all shadow-xs"
          >
            <Navigation className="w-3.5 h-3.5 text-[#F4D900]" />
            <span>Open in Google Maps</span>
            <ExternalLink className="w-3 h-3 text-neutral-400" />
          </button>
        </div>
      </div>
    </div>
  );
};
