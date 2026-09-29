export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "#courses" },
  { label: "Creators", href: "#creators" },
];

export const partnerLogos = ["Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum"];

export const courseCategories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

export type Course = {
  id: string;
  title: string;
  author: string;
  rating: number;
  level: string;
  price: number;
  lessons: number;
  duration: string;
  comments: number;
  tone: string;
};

export const courses: Course[] = [
  { id: "figma", title: "Learn Figma from Basic", author: "pixelperf studio", rating: 4.5, level: "Beginner", price: 25, lessons: 17, duration: "2 hours 16 mins", comments: 69, tone: "from-sky-200 to-indigo-300" },
  { id: "digital-asset", title: "Build Digital Asset", author: "pixelperf studio", rating: 4.5, level: "Beginner", price: 25, lessons: 17, duration: "2 hours 16 mins", comments: 69, tone: "from-neutral-200 to-neutral-400" },
  { id: "big-data", title: "The Power of Big Data", author: "pixelperf studio", rating: 4.5, level: "Beginner", price: 25, lessons: 17, duration: "2 hours 16 mins", comments: 69, tone: "from-slate-700 to-slate-900" },
  { id: "productivity", title: "Balancing Productivity and Life", author: "pixelperf studio", rating: 4.5, level: "Beginner", price: 25, lessons: 17, duration: "2 hours 16 mins", comments: 69, tone: "from-zinc-300 to-zinc-500" },
  { id: "money", title: "Mastering Money Management", author: "pixelperf studio", rating: 4.5, level: "Beginner", price: 25, lessons: 17, duration: "2 hours 16 mins", comments: 69, tone: "from-emerald-100 to-teal-300" },
  { id: "startup", title: "From Idea to Startup Success", author: "pixelperf studio", rating: 4.5, level: "Beginner", price: 25, lessons: 17, duration: "2 hours 16 mins", comments: 69, tone: "from-amber-100 to-orange-300" },
];

export const learningPaths = [
  { label: "Design", icon: "PenTool" },
  { label: "Development", icon: "Code" },
  { label: "IT & Software", icon: "Laptop" },
  { label: "Business", icon: "Briefcase" },
  { label: "Marketing", icon: "Megaphone" },
  { label: "Photography", icon: "Camera" },
] as const;

export const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

export const creatorPerks = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export const testimonials = [
  { name: "Sarah M.", role: "Enthusiastic Learner", quote: "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning." },
  { name: "James L.", role: "Lifelong Learner", quote: "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development." },
  { name: "Alex B.", role: "Inspired Creator", quote: "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's so fulfilling to see my courses making a positive impact on learners globally." },
];

export const footerColumns = [
  { title: "Explore", links: ["Featured Courses", "Featured Categories", "Business", "IT", "Design"] },
  { title: "Categories", links: ["Development", "Marketing", "Photography", "Finance", "Sport"] },
  { title: "Company", links: ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"] },
];
