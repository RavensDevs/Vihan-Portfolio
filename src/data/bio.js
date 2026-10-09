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
    "Focused on Design for Manufacturing, Automation, and Sustainable Engineering. Bridging analytical precision with practical implementation to develop efficient, reliable, and purposeful engineering solutions.",

  // ── About / Biography ──
  bioTitle: "Engineering with Purpose",
  bioText: [
    "I bridge the gap between engineering theory and practical implementation, with a focus on mechanical design, automation, and mechatronic systems. My interests span the entire engineering process — from conceptual development and simulation to prototyping, manufacturing, and real-world validation.",
    "I believe effective engineering lies in finding simple, practical solutions to complex problems. My approach combines analytical thinking with hands-on experimentation, prioritizing functionality, manufacturability, cost-effectiveness, and reliability. I aim not just to design systems that work in theory, but to build solutions that deliver value in practice.",
  ],
  competencies: ["DFM / DFA", "FEA / CFD", "Prototyping"],

  // ── Profile photo ──
  profilePhoto:profilePhoto,
  // ── Stats ──
  stats: [
    { value: "2+", label: "Years Experience" },
    { value: "5+", label: "Projects Delivered" },
    { value: "Undergraduate", label: "Mechanical Engineering" }
    //{ value: "3", label: "Awards Won" },
  ],

  // ── Contact info ──
  email: "vihanhett@gmail.com",
  phone: "+94 70 260 7679",
  location: "Colombo, Sri Lanka",

  // ── Social links ──
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/vihan-hettiarachchi-7a27b22b7/",
    //github: "https://github.com",
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
