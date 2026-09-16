// ────────────────────────────────────────────
//  bio.js — Edit ALL your personal info here
// ────────────────────────────────────────────
import profilePhoto from "../pictures/profile/profile.jpg";

export const bio = {
  // ── Identity ──
  fullName: "Vihan S Hettiarachchi",
  brandName: "Vihan",           // shown in navbar & footer
  brandHighlight: "Hetti",           // the part that gets the accent color
  headline: "DESIGN ENTHUSIAST",     // hero title after your name
  tagline: "Mechanical Engineer ing ",

  // ── Hero subtitle ──
  subtitle:
    "Specializing in Design for Manufacturing, Automation, and Sustainable Engineering. Delivering structural integrity through technical precision and purposeful design.",

  // ── About / Biography ──
  bioTitle: "Engineering with Purpose",
  bioText: [
    "I bridge the gap between abstract theoretical engineering and tangible physical production. With over a decade of experience across aerospace and robotics, my methodology centers on structural logic and long-term durability.",
    "I believe that true mechanical elegance is found in the removal of the unnecessary — every design decision must justify its existence through function, cost, or longevity. My approach marries analytical rigour with practical manufacturing knowledge to deliver systems that perform under real-world conditions.",
  ],
  competencies: ["DFM / DFA", "FEA / CFD", "Robotics", "Aerospace", "Composites"],

  // ── Profile photo ──
  profilePhoto:profilePhoto,
  // ── Stats ──
  stats: [
    { value: "10+", label: "Years Experience" },
    { value: "50+", label: "Projects Delivered" },
    { value: "CEng", label: "Chartered Engineer" },
    { value: "3", label: "Awards Won" },
  ],

  // ── Contact info ──
  email: "vihan@example.com",
  phone: "+94 71 234 5678",
  location: "Colombo, Sri Lanka",

  // ── Social links ──
  socialLinks: {
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    resume: "/cv.pdf",   // path to downloadable CV file
  },

  // ── Footer ──
  copyrightName: "Vihan S Hettiarachchi",
  footerTagline: "Mechanical Engineer · CEng · DFM / DFA Specialist",
  specializations: [
    "DFM / DFA",
    "Automation & Robotics",
    "FEA / CFD Simulation",
    "Sustainable Engineering",
    "CAD Parametric Design",
  ],

  // ── Hero background image ──
  heroBgImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCxjJRgxrWHfIdh-UFsuoyObiuVUPpInmG-_w03n9MRWaM8bJMm-Uf3By5hCnO_ccltDf-Yjx8plkNlixV-k7dWNsgdD4D1sVRvyqv711WvQiRv_RQCmyaKhcorS8Lu6kz5YjDsCXwGHz6F76YRyiId6gCtCMcJqY-EP9MJgSgkgWLRyHvVMSRg4LUS8SqFeT9JRhXnt9smOvuPbFNG9PVzSVjcmQWLXAqDTu925u8urFGZb2gQhBFllVd24iACAe5BuEbvnoimhSk7",
};
