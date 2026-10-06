export type GivingCategoryType =
  | 'Tithe'
  | 'Offering'
  | 'Thanksgiving'
  | 'Missions'
  | 'Welfare'
  | 'Building Project'
  | 'Other';

export interface GivingPayload {
  amount: number;
  category: GivingCategoryType;
  customCategory?: string;
  donorName?: string;
  donorEmail?: string;
  donorPhone?: string;
  isAnonymous: boolean;
  notes?: string;
}

export interface Ministry {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  keyResponsibilities: string[];
  schedule: string;
  scriptureReference: string;
  leadRole: string;
  image: string;
}

export interface Sermon {
  id: string;
  slug: string;
  title: string;
  speaker: string;
  speakerRole: string;
  date: string;
  duration: string;
  category: string;
  series?: string;
  scripture: string;
  summary: string;
  thumbnail: string;
  videoUrl?: string;
  audioUrl?: string;
  notesSummary?: string[];
}

export interface ChurchEvent {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  date: string;
  formattedDate: string;
  time: string;
  venue: string;
  category: 'Fellowship' | 'Conference' | 'Outreach' | 'Academic' | 'Special';
  image: string;
  isFeatured?: boolean;
  registrationOpen: boolean;
  scheduleHighlights?: string[];
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'Fellowship' | 'Worship' | 'Outreach' | 'Events' | 'Campus' | 'Community';
  imageUrl: string;
  caption: string;
  date: string;
}

export interface StudentTestimony {
  id: string;
  name: string;
  department: string;
  level: string;
  quote: string;
  fullStory: string;
  photo: string;
  date: string;
}

export interface FellowshipLeader {
  id: string;
  name: string;
  role: string;
  category: 'Executive' | 'Pastoral' | 'Unit Head';
  departmentLevel?: string;
  bio: string;
  photo: string;
}

export interface Announcement {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: 'Notice' | 'Fellowship Update' | 'Academic Support' | 'Welfare';
  image: string;
  urgent?: boolean;
}

export interface HistoryMilestone {
  year: string;
  title: string;
  description: string;
}
