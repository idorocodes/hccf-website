export interface Devotional {
  id: string;
  date: string;
  dayOfWeek: string;
  title: string;
  scripture: string;
  scriptureText: string;
  thought: string;
  prayer: string;
  confession: string;
  campusFocus: string;
}

export const devotionals: Devotional[] = [
  {
    id: "dev-today",
    date: "October 6, 2026",
    dayOfWeek: "Tuesday",
    title: "The Discipline of the Secret Place",
    scripture: "Matthew 6:6",
    scriptureText:
      "But thou, when thou prayest, enter into thy closet, and when thou hast shut thy door, pray to thy Father which is in secret; and thy Father which seeth in secret shall reward thee openly.",
    thought:
      "Amidst early morning lecture rushes, noisy hostel corridors, and impending continuous assessment tests, the quiet place of communion with God remains your greatest advantage. True spiritual stamina on university campuses is built when nobody is watching. Protect your sacred 30 minutes before your phone and social notifications flood your morning.",
    prayer:
      "Heavenly Father, grant me the grace of holy consistency. In the midst of busy academic demands, cause my heart to prioritize intimacy with You above all else. In Jesus' name, Amen.",
    confession:
      "I am rooted and grounded in Christ. My mind is alert, my spirit is alive to God, and I walk in divine wisdom throughout this day.",
    campusFocus: "Commit your morning study session and roommate relationships to God today."
  },
  {
    id: "dev-yesterday",
    date: "October 5, 2026",
    dayOfWeek: "Monday",
    title: "Intellectual Diligence as Kingdom Witness",
    scripture: "Daniel 1:17",
    scriptureText:
      "As for these four children, God gave them knowledge and skill in all learning and wisdom: and Daniel had understanding in all visions and dreams.",
    thought:
      "God is never glorified by slipshod academic effort. When Christian students read diligently, attend lectures punctually, and write exams with untainted integrity, we showcase the superior standard of the Kingdom of God. The Holy Spirit does not replace study; He illuminates a diligent mind.",
    prayer:
      "Lord Jesus, endow me with the spirit of excellence that distinguished Daniel. Deliver me from procrastination and exam anxiety. Let my grades reflect Your glory.",
    confession:
      "I have an unction from the Holy One and I know all things. I comprehend complex concepts effortlessly and retain what I study.",
    campusFocus: "Review your lecture notes within 24 hours of receiving them."
  },
  {
    id: "dev-tomorrow",
    date: "October 7, 2026",
    dayOfWeek: "Wednesday",
    title: "Light in Campus Corridors",
    scripture: "Matthew 5:14-16",
    scriptureText:
      "Ye are the light of the world. A city that is set on an hill cannot be hid... Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven.",
    thought:
      "Every university faculty, laboratory, and department is a mission field. You don't need a microphone to preach; your kindness to a stressed coursemate, your honesty in group assignments, and your refusal to compromise moral standards are loud sermons. Be unashamed of the Gospel.",
    prayer:
      "Holy Spirit, make me a fearless ambassador for Christ on FUOYE campus. Open doors of fruitful conversations with friends who do not yet know You.",
    confession:
      "I am the light of my faculty. Darkness cannot comprehend me. Christ shines through my words, conduct, and deeds.",
    campusFocus: "Encourage a coursemate who is stressed about tests or finances."
  }
];
