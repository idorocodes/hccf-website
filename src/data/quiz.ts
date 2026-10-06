export interface QuizQuestion {
  id: number;
  question: string;
  subtitle: string;
  options: {
    label: string;
    description: string;
    ministryId: string;
    iconName?: string;
  }[];
}

export const ministryQuizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What gift, talent, or passion do you feel most drawn to?",
    subtitle: "Select the area where your heart comes alive in service.",
    options: [
      {
        label: "Music, Vocals or Instrumental Worship",
        description: "Singing praise, playing piano, drums, or lead guitar in God's presence.",
        ministryId: "voice-of-grace",
      },
      {
        label: "Cameras, Livestream, Design or Sound Engineering",
        description: "Managing live audio consoles, photography, videography, or social media.",
        ministryId: "media-technical",
      },
      {
        label: "Intercession, Spiritual Warfare & Prayer Watches",
        description: "Praying for hours, travailing for campus revival and the brethren.",
        ministryId: "prayer-intercession",
      },
      {
        label: "Welcoming, Orderliness & Protocol",
        description: "Smiling at the entrance, seating guests, and ensuring sacred excellence.",
        ministryId: "ushering-protocol",
      },
      {
        label: "Evangelism, Hostel Outreaches & Soul Winning",
        description: "Walking up to students in Phase 1 & 2 hostels to share the Gospel of Christ.",
        ministryId: "evangelism-missions",
      },
      {
        label: "Academic Tutorials, Bible Study & Student Welfare",
        description: "Teaching 100L courses, sharing study notes, and distributing food to students in need.",
        ministryId: "academic-welfare",
      },
    ],
  },
  {
    id: 2,
    question: "How does your FUOYE lecture timetable look?",
    subtitle: "We believe in balancing academic distinction with faithful fellowship service.",
    options: [
      {
        label: "Flexible, can attend weekday rehearsals & Saturday meetings",
        description: "Ideal for choir rehearsals, evangelism walks, and prayer retreats.",
        ministryId: "voice-of-grace",
      },
      {
        label: "Technical/Lab heavy, prefer flexible digital or service-day duties",
        description: "Ideal for Sunday media production, audio mixing, and design work.",
        ministryId: "media-technical",
      },
      {
        label: "Prefer early mornings or late evenings for spiritual devotions",
        description: "Ideal for fellowship prayer chain and night intercessions.",
        ministryId: "prayer-intercession",
      },
      {
        label: "Available on fellowship days (Sundays & Wednesdays)",
        description: "Perfect for greeting students, distributing bulletins, and ushering.",
        ministryId: "ushering-protocol",
      },
    ],
  },
  {
    id: 3,
    question: "What is your greatest desire for your time at FUOYE?",
    subtitle: "Your purpose in university matters to God.",
    options: [
      {
        label: "To raise a fragrant sound of unbroken praise on campus",
        description: "Deepening your walk through prophetic worship and consecration.",
        ministryId: "voice-of-grace",
      },
      {
        label: "To deploy professional media skills for kingdom impact",
        description: "Broadcasting the Gospel to thousands across the globe.",
        ministryId: "media-technical",
      },
      {
        label: "To see revival and souls delivered from darkness into light",
        description: "Watching fellow FUOYE students repent and surrender to Jesus.",
        ministryId: "evangelism-missions",
      },
      {
        label: "To maintain a 4.5+ CGPA while grounding other students in the Word",
        description: "Demonstrating that godly believers are top of their class.",
        ministryId: "academic-welfare",
      },
    ],
  },
];
