// ────────────────────────────────────────────
//  bio.js — Edit ALL your personal info here
// ────────────────────────────────────────────
import profilePhoto from "../pictures/profile/profile.jpg";

const firstName = "Vihan S";
const secondName = "Hettiarachchi";

export const bio = {
  // ── Identity ──
  firstName,
  secondName,
  fullName: `${firstName} ${secondName}`,
  brandName: "Vihan",           // shown in navbar & footer
  brandHighlight: "Hetti",           // the part that gets the accent color
  headline: "DESIGN ENTHUSIAST",
  tagline: "Mechanical Engineering",

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
    { value: "2+", label: "Years Experience" },
    { value: "5+", label: "Projects Delivered" },
    { value: "2nd Year Undergraduate", label: "Mechanical Engineering" }
    //{ value: "3", label: "Awards Won" },
  ],

  // ── Contact info ──
  email: "vihanhett@gmail.com",
  phone: "+94 70 260 7679",
  location: "Colombo, Sri Lanka",

  // ── Social links ──
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/vihan-hettiarachchi-7a27b22b7/",
    github: "https://github.com",
    resume: "/cv.pdf",   // path to downloadable CV file
  },

  // ── Footer ──
  copyrightName: "Vihan S Hettiarachchi",
  footerTagline: "Mechanical Engineer · DFMA ",
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
