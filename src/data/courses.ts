import { courseCategories } from "@/data/landing";

export type Category = (typeof courseCategories)[number];

export type Course = {
  id: string;
  title: string;
  author: string;
  image: string;
  categories: Category[];
  rating: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  price: number;
  lessons: number;
  duration: string;
  comments: number;
  learners: string;
};

export const courses: Course[] = [
  {
    id: "figma-basic",
    title: "Learn Figma from Basic",
    author: "purepearl studio",
    image: "/images/courses/planning-sketch.jpg",
    categories: ["Featured", "UI/UX Design", "Graphic Design", "Drawing & Painting"],
    rating: 4.5, level: "Beginner", price: 25, lessons: 17, duration: "2 hours 16 mins", comments: 59, learners: "26+",
  },
  {
    id: "beautiful-interfaces",
    title: "Designing Beautiful Interfaces",
    author: "pixelforge",
    image: "/images/courses/abstract-waves.jpg",
    categories: ["Featured", "UI/UX Design", "Graphic Design", "Animation"],
    rating: 4.8, level: "Intermediate", price: 39, lessons: 24, duration: "3 hours 40 mins", comments: 84, learners: "41+",
  },
  {
    id: "motion-design",
    title: "Motion Design Essentials",
    author: "loopworks",
    image: "/images/courses/social-icons.jpg",
    categories: ["UI/UX Design", "Animation", "Social Media", "Digital Illustration"],
    rating: 4.6, level: "Beginner", price: 29, lessons: 19, duration: "2 hours 52 mins", comments: 47, learners: "18+",
  },
  {
    id: "digital-illustration",
    title: "Digital Illustration for Beginners",
    author: "inkandpixel",
    image: "/images/courses/brush-pile.jpg",
    categories: ["Digital Illustration", "Drawing & Painting", "Graphic Design", "Crafts"],
    rating: 4.7, level: "Beginner", price: 32, lessons: 21, duration: "4 hours 05 mins", comments: 63, learners: "35+",
  },
  {
    id: "colour-and-brush",
    title: "Colour and Brush Techniques",
    author: "atelier nova",
    image: "/images/courses/paint-brushes.jpg",
    categories: ["Drawing & Painting", "Crafts", "Digital Illustration"],
    rating: 4.9, level: "Intermediate", price: 45, lessons: 28, duration: "5 hours 10 mins", comments: 112, learners: "52+",
  },
  {
    id: "home-studio",
    title: "Build Your Home Music Studio",
    author: "soundcraft lab",
    image: "/images/courses/music-studio.jpg",
    categories: ["Featured", "Music"],
    rating: 4.6, level: "Beginner", price: 35, lessons: 22, duration: "3 hours 20 mins", comments: 71, learners: "29+",
  },
  {
    id: "mixing-basics",
    title: "Mixing and Mastering Basics",
    author: "soundcraft lab",
    image: "/images/courses/team-desk.jpg",
    categories: ["Music", "Productivity"],
    rating: 4.4, level: "Intermediate", price: 42, lessons: 26, duration: "4 hours 30 mins", comments: 38, learners: "14+",
  },
  {
    id: "grow-your-audience",
    title: "Growing an Audience Online",
    author: "reachlab",
    image: "/images/courses/meeting-glass.jpg",
    categories: ["Social Media", "Marketing", "Creative Marketing"],
    rating: 4.5, level: "Beginner", price: 27, lessons: 16, duration: "2 hours 05 mins", comments: 52, learners: "33+",
  },
  {
    id: "marketing-analytics",
    title: "Marketing Analytics in Practice",
    author: "datawise",
    image: "/images/courses/analytics-laptop.jpg",
    categories: ["Marketing", "Data Science", "Creative Marketing"],
    rating: 4.7, level: "Intermediate", price: 49, lessons: 30, duration: "5 hours 45 mins", comments: 90, learners: "38+",
  },
  {
    id: "big-data",
    title: "The Power of Big Data",
    author: "datawise",
    image: "/images/courses/data-dashboard.jpg",
    categories: ["Featured", "Data Science", "Web Development"],
    rating: 4.8, level: "Advanced", price: 59, lessons: 34, duration: "6 hours 15 mins", comments: 128, learners: "60+",
  },
  {
    id: "trading-charts",
    title: "Trading Charts for Beginners",
    author: "marketmind",
    image: "/images/courses/trading-charts.jpg",
    categories: ["Data Science", "Freelance & Entrepreneurship"],
    rating: 4.3, level: "Beginner", price: 30, lessons: 15, duration: "2 hours 30 mins", comments: 41, learners: "22+",
  },
  {
    id: "brand-storytelling",
    title: "Storytelling for Brands",
    author: "narrative co.",
    image: "/images/courses/team-meeting.jpg",
    categories: ["Creative Marketing", "Marketing", "Social Media", "Film & Video", "Photography"],
    rating: 4.6, level: "Intermediate", price: 37, lessons: 20, duration: "3 hours 10 mins", comments: 66, learners: "27+",
  },
  {
    id: "film-on-budget",
    title: "Filmmaking on a Budget",
    author: "framebyframe",
    image: "/images/courses/film-clapper.jpg",
    categories: ["Featured", "Film & Video", "Music", "Animation"],
    rating: 4.7, level: "Beginner", price: 34, lessons: 23, duration: "3 hours 55 mins", comments: 77, learners: "31+",
  },
  {
    id: "cinematic-photography",
    title: "Cinematic Landscape Photography",
    author: "wildlight",
    image: "/images/courses/photographer.jpg",
    categories: ["Photography", "Film & Video", "Social Media"],
    rating: 4.9, level: "Intermediate", price: 44, lessons: 25, duration: "4 hours 20 mins", comments: 95, learners: "48+",
  },
  {
    id: "film-photography",
    title: "Film Photography Basics",
    author: "wildlight",
    image: "/images/courses/vintage-camera.jpg",
    categories: ["Photography", "Crafts", "Cooking"],
    rating: 4.5, level: "Beginner", price: 26, lessons: 14, duration: "2 hours 10 mins", comments: 36, learners: "19+",
  },
  {
    id: "money-management",
    title: "Mastering Money Management",
    author: "fundwise",
    image: "/images/courses/finance-docs.jpg",
    categories: ["Featured", "Freelance & Entrepreneurship", "Productivity"],
    rating: 4.6, level: "Beginner", price: 28, lessons: 18, duration: "2 hours 45 mins", comments: 58, learners: "44+",
  },
  {
    id: "startup-success",
    title: "From Idea to Startup Success",
    author: "launchpad",
    image: "/images/courses/startup-talk.jpg",
    categories: ["Freelance & Entrepreneurship", "Marketing", "Web Development", "Cooking"],
    rating: 4.7, level: "Intermediate", price: 52, lessons: 32, duration: "5 hours 30 mins", comments: 101, learners: "56+",
  },
  {
    id: "productivity-and-life",
    title: "Balancing Productivity and Life",
    author: "mindful works",
    image: "/images/courses/books.jpg",
    categories: ["Productivity", "Freelance & Entrepreneurship"],
    rating: 4.4, level: "Beginner", price: 22, lessons: 12, duration: "1 hour 50 mins", comments: 33, learners: "17+",
  },
  {
    id: "everyday-cooking",
    title: "Everyday Cooking Made Simple",
    author: "tasteful kitchen",
    image: "/images/courses/cooking.jpg",
    categories: ["Cooking", "Productivity"],
    rating: 4.8, level: "Beginner", price: 24, lessons: 20, duration: "3 hours 00 mins", comments: 88, learners: "63+",
  },
  {
    id: "build-websites",
    title: "Build Websites from Scratch",
    author: "codecanvas",
    image: "/images/courses/coffee-desk.jpg",
    categories: ["Web Development", "Freelance & Entrepreneurship", "Productivity"],
    rating: 4.6, level: "Beginner", price: 38, lessons: 29, duration: "5 hours 00 mins", comments: 74, learners: "46+",
  },
];

export function getCoursesByCategory(category: Category) {
  return courses.filter((course) => course.categories.includes(category));
}

export const learnerAvatars = [
  "/images/avatars/avatar-1.jpg",
  "/images/avatars/avatar-2.jpg",
  "/images/avatars/avatar-3.jpg",
  "/images/avatars/avatar-4.jpg",
  "/images/avatars/avatar-5.jpg",
  "/images/avatars/avatar-6.jpg",
];
