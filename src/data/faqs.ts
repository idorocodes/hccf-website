export interface FAQItem {
  question: string;
  answer: string;
  category: 'General' | 'First Timers' | 'Academics & Life' | 'Giving & Service';
}

export const faqs: FAQItem[] = [
  {
    category: "General",
    question: "Is HCCF open to students from all church denominations?",
    answer:
      "Yes, absolutely! His Coming Campus Fellowship is an open Christian campus family. We welcome all students regardless of their home church denomination, academic discipline, or stage in their Christian journey."
  },
  {
    category: "General",
    question: "Where exactly does HCCF meet on FUOYE campus?",
    answer:
      "Our main gatherings hold at the [HCCF Auditorium / Main Campus Chapel, Oye-Ekiti]. For students at the Ikole campus, fellowship cell clusters and dedicated shuttle arrangements connect both student communities."
  },
  {
    category: "First Timers",
    question: "What should I expect when I attend my first Sunday Fellowship?",
    answer:
      "You will receive a warm welcome without any pressure. Services feature vibrant contemporary and reverent worship, in-depth biblical teaching, and a short, hospitable first-timers' welcome reception where you will meet brethren and receive a small gift."
  },
  {
    category: "Academics & Life",
    question: "How do members balance active fellowship service with rigorous study schedules?",
    answer:
      "We strongly champion academic excellence. HCCF organizes faculty-specific tutorial groups, study marathons, and exam prayer retreats. Many of our executive members and unit leaders consistently graduate with first-class and second-class upper honors."
  },
  {
    category: "First Timers",
    question: "Are there hostel shuttles available for Sunday services?",
    answer:
      "Yes! Free fellowship shuttle buses pick up students from designated points including Phase 1, Phase 2, Federal Gate, and Ayegbaju junction every Sunday morning starting at 07:45 AM."
  },
  {
    category: "Giving & Service",
    question: "How can I join a ministry unit like Choir, Media, or Technical?",
    answer:
      "You can sign up directly via our Ministries page or speak to our Ushers and Unit Heads after any Sunday fellowship. Units provide training, so prior professional experience is not strictly required."
  }
];
