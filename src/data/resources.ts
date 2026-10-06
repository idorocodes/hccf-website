export interface StudyResource {
  id: string;
  title: string;
  category: 'Bible Study Outline' | 'Freshers Guide' | 'Academic Tool' | 'Prayer Guide';
  description: string;
  format: 'PDF Outline' | 'Study Guide' | 'Digital Notes';
  fileSize: string;
  dateAdded: string;
}

export const studyResources: StudyResource[] = [
  {
    id: "res-eph4",
    title: "Ephesians 4:13 Study Syllabus — The Stature of Christ",
    category: "Bible Study Outline",
    description: "An exhaustive 8-week cell group teaching guide exploring spiritual maturity, apostolic gifts, and doctrinal stability.",
    format: "PDF Outline",
    fileSize: "1.2 MB",
    dateAdded: "May 2026"
  },
  {
    id: "res-freshers-guide",
    title: "Freshers' Ultimate Campus & Spiritual Survival Manual",
    category: "Freshers Guide",
    description: "Essential guide for 100-Level students: navigating FUOYE portal, hostel registration, lecture halls, time management, and finding godly friendships.",
    format: "Study Guide",
    fileSize: "2.4 MB",
    dateAdded: "April 2026"
  },
  {
    id: "res-exam-retreat",
    title: "Semester Examination Prayer & Scripture Confession Booklet",
    category: "Prayer Guide",
    description: "Daily scriptural declarations against exam anxiety, memory fatigue, and failure, with wisdom keys for revision.",
    format: "PDF Outline",
    fileSize: "850 KB",
    dateAdded: "May 2026"
  },
  {
    id: "res-cgpa-calculator",
    title: "Academic Diligence Tracker & CGPA Goal Planner",
    category: "Academic Tool",
    description: "Structured template for tracking course units, continuous assessment scores, revision calendars, and semester GPA goals.",
    format: "Digital Notes",
    fileSize: "620 KB",
    dateAdded: "March 2026"
  }
];
