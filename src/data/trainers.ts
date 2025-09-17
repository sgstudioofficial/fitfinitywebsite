// Centralized trainers data for easy management
export interface Trainer {
  name: string;
  specialty: string;
  experience: string;
  bio: string;
  image: string;
  rating: number;
  sessions: number;
  bookingUrl: string;
}

export const trainers: Trainer[] = [
  {
    name: "Coach Vishal",
    specialty: "Strength training & HIIT (High-Intensity Interval Training)",
    experience: "8+ Years",
    bio: "Vishal specializes in weight training, and advanced stretching techniques. With a structured and personalized approach, he helps clients achieve peak performance while maintaining proper form and preventing injury. His focus on both strength and flexibility ensures long-term results, effective weight loss, and overall functional fitness. Many of his clients have successfully reduced up to 5kg in just one month under his guidance.",
    image: "/images/coaches/coachvishal.png",
    rating: 4.9,
    sessions: 1450,
    bookingUrl: "https://forms.google.com/example-marcus"
  },
  {
    name: "Coach Meena",
    specialty: "Strength training & HIIT (High-Intensity Interval Training)",
    experience: "5+ years",
    bio: "Meena Sharma is a dedicated fitness coach with 4 years of professional experience, combining her expertise as a HYROX athlete and state-level karate player to deliver dynamic and result-driven training. She specializes in building strength, endurance, and overall fitness while keeping sessions engaging and approachable. Known for her enthusiasm and positive energy, Meena creates an environment where clients feel supported, motivated, and inspired to achieve their goals. Her athletic background and commitment to continuous growth make her a rising name in the fitness industry.",
    image: "/images/coaches/coachmeena.png",
    rating: 5,
    sessions: 2100,
    bookingUrl: "https://forms.google.com/example-sarah"
  },
  {
    name: "Coach Deva",
    specialty: "Strength training & HIIT (High-Intensity Interval Training)",
    experience: "7+ years",
    bio: "Coach Deva is a dedicated fitness trainer specializing in HIIT, strength training, and weight management. Known for his high-energy sessions and results-driven approach, he creates dynamic workouts that help clients burn fat, build muscle, and improve overall endurance. Whether your goal is weight loss, improved athletic performance, or total-body conditioning, Coach Deva blends expert programming with motivating guidance to keep every session challenging, effective, and fun.",
    image: "/images/coaches/coachdeva.png",
    rating: 4.9,
    sessions: 1800,
    bookingUrl: "https://forms.google.com/example-mike"
  },
  {
    name: "Coach Arnav",
    specialty: "Strength training & HIIT (High-Intensity Interval Training)",
    experience: "8+ years",
    bio: "Coach Arnav is a passionate fitness coach focused strength training, and weight-loss programs that deliver real results. His training style combines intense, functional workouts with smart programming to help clients build strength, burn fat, and boost endurance. Whether you’re starting your fitness journey or pushing toward advanced goals, Coach Arnav brings motivation, expertise, and a supportive approach to keep every session effective and inspiring.",
    image: "",
    rating: 4.8,
    sessions: 1500,
    bookingUrl: "https://forms.google.com/example-elena"
  }
];