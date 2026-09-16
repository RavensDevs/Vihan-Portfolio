import project_1 from '../pictures/projects/project_1.jpg';
export const projectCategories = [
  "ALL",
  "AUTOMATION",
  "DESIGN & ANALYSIS",
  "SIMULATION",
  "PROTOTYPING",
  "MANUFACTURING",
];

export const projectsData = [
  {
    id: "project-1",
    title: "Cobot Integration Alpha",
    period: "Q4 2023 - Present",
    duration: "6 months",
    description:
      "Developing autonomous pathfinding for light-industry assembly tasks.",
    detailDescription:
      "This project involved the design and deployment of specialized end-effectors and vision systems for high-precision assembly in collaborative environments.",
    tags: ["ROBOTICS", "AUTOMATION"],
    category: "AUTOMATION",
    image:project_1,
    techStack: [
      { icon: "developer_board", name: "ROS 2" },
      { icon: "settings_input_component", name: "SolidWorks" },
      { icon: "code", name: "C++ / Python" },
      { icon: "precision_manufacturing", name: "UR10e" },
    ],
    metrics: [
      { label: "EFFICIENCY", value: "+50%", sub: "Production Rate" },
      { label: "ACCURACY", value: "0.05mm", sub: "Tolerance Range" },
      { label: "RELIABILITY", value: "99.9%", sub: "Uptime Metric" },
    ],
    challenges: [
      "Mitigating mechanical vibration during high-speed trajectory changes via custom damping structures.",
      "Implementing real-time collision avoidance that meets ISO 10218-1 safety standards for human-robot proximity.",
      "Optimizing image processing latency for sub-millisecond visual servoing on low-power edge hardware.",
    ],
    active: true,
  },
  {
    id: "project-2",
    title: "Turbine Thermal Analysis",
    period: "Q2 2023",
    duration: "3 months",
    description:
      "Simulation of heat dissipation in Gen-4 propulsion systems.",
    detailDescription:
      "An in-depth thermal-structural coupled analysis of next-generation turbine blades, exploring novel internal cooling channel geometries to maximise thermal efficiency at extreme operating temperatures.",
    tags: ["AEROSPACE", "THERMODYNAMICS"],
    category: "SIMULATION",
    image:project_1,
    techStack: [
      { icon: "developer_board", name: "ANSYS Fluent" },
      { icon: "settings_input_component", name: "SolidWorks" },
      { icon: "code", name: "MATLAB" },
      { icon: "precision_manufacturing", name: "HPC Cluster" },
    ],
    metrics: [
      { label: "TEMP REDUCTION", value: "-18%", sub: "Blade Surface" },
      { label: "ACCURACY", value: "±2.1%", sub: "vs. Experimental" },
      { label: "ITERATIONS", value: "1,200+", sub: "CFD Mesh Cycles" },
    ],
    challenges: [
      "Modelling conjugate heat transfer with turbulent boundary layers at Mach 0.8+ flow conditions.",
      "Validating simulation results against experimental turbine rig data with limited instrumentation access.",
      "Balancing mesh density for accuracy against computational cost on shared HPC resources.",
    ],
    active: false,
  },
  {
    id: "project-3",
    title: "Smart-Grid HVAC System",
    period: "Q1 2023",
    duration: "4 months",
    description:
      "Optimized energy consumption for 200,000 sq ft facilities.",
    detailDescription:
      "Designed an IoT-enabled smart HVAC control system integrating real-time occupancy sensing, weather prediction APIs, and adaptive PID control to minimise energy consumption across large-scale commercial buildings.",
    tags: ["HVAC", "ENERGY"],
    category: "DESIGN & ANALYSIS",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC6FtIqxYfiZh1LngRZ0uQ3CYcdYNnONcPZJRE75YxlKRZ7C0zlCU6LTLTh9gX58IOEdN2aCSDZUg0FOWqjKHHuKAICPSUJLnNjnz3K71zXSa_cvEk3QKmOzNL_aYOeevrt3NXQwirG_T0OyEgMXgfNWOWzTAIQiUjJKBC8i6vucTeHCqK7ZSj1XlVg9gRahhuxnAoM3fGv6tcLsW3zX7RXvSn0j-50L8-y4E7FCcLcDiQ3mIrhTjY6VcJDJJQadS---XkSTYGWd4wH",
    techStack: [
      { icon: "developer_board", name: "PLC / BACnet" },
      { icon: "settings_input_component", name: "AutoCAD MEP" },
      { icon: "code", name: "Python / IoT" },
      { icon: "precision_manufacturing", name: "Trane Units" },
    ],
    metrics: [
      { label: "ENERGY SAVINGS", value: "32%", sub: "Annual Reduction" },
      { label: "COVERAGE", value: "200K", sub: "Sq Ft Facility" },
      { label: "ROI", value: "14 mo", sub: "Payback Period" },
    ],
    challenges: [
      "Integrating legacy BACnet systems with modern IoT edge controllers without downtime.",
      "Balancing thermal comfort targets against aggressive energy reduction mandates.",
      "Handling sensor data noise from 400+ zone controllers in real-time PID loops.",
    ],
    active: false,
  },
  {
    id: "project-4",
    title: "CNC Workflow ",
    period: "FY 2022",
    duration: "12 months",
    description:
      "Reducing tool wear by 30% through adaptive feed control.",
    detailDescription:
      "A comprehensive study of 5-axis CNC machining workflows for aerospace-grade aluminium alloys. Developed adaptive feed-rate algorithms using real-time spindle load monitoring to reduce tool wear, improve surface finish, and minimise scrap rates.",
    tags: ["MANUFACTURING", "PRECISION"],
    category: "MANUFACTURING",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDB2pWAnmNI-16PQVX39AGksTxZseGOVjDodjYzVpHAFx0-onJ5Dg8438oOuenLfwIwsmVJP4szk2jo0rD1gGf4Ibwh855TmrHpjkEK3P8Mu8UxKFBJ5-UwZ4wlXoU4gb6cKnHTxAWyEoviERu8l882i2RpM03_ydVqbG_KNUwoMbAH42KfDuUCM2zu0hgkPsW2caZfZIlrKcSElc7eYAVhdV9WS_Hzr7wF1FYn0rt2reZDY7x9f-8QkVa9APm6fnWLRsfNffYN1K3P",
    techStack: [
      { icon: "developer_board", name: "Fanuc CNC" },
      { icon: "settings_input_component", name: "Mastercam" },
      { icon: "code", name: "Python / G-Code" },
      { icon: "precision_manufacturing", name: "5-Axis DMG" },
    ],
    metrics: [
      { label: "TOOL WEAR", value: "-30%", sub: "Reduction" },
      { label: "SURFACE FINISH", value: "Ra 0.4", sub: "Micron Average" },
      { label: "SCRAP RATE", value: "-45%", sub: "Year-over-Year" },
    ],
    challenges: [
      "Developing real-time adaptive feed algorithms from noisy spindle load sensor data.",
      "Qualifying new toolpaths for AS9100-certified aerospace production without disrupting output.",
      "Correlating tool wear patterns across different aluminium alloy grades and cutter geometries.",
    ],
    active: false,
  },
  {
    id: "project-5",
    title: "test",
    period: "FY 2022",
    duration: "12 months",
    description:
      "Reducing tool wear by 30% through adaptive feed control.",
    detailDescription:
      "A comprehensive study of 5-axis CNC machining workflows for aerospace-grade aluminium alloys. Developed adaptive feed-rate algorithms using real-time spindle load monitoring to reduce tool wear, improve surface finish, and minimise scrap rates.",
    tags: ["MANUFACTURING", "PRECISION"],
    category: "MANUFACTURING",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDB2pWAnmNI-16PQVX39AGksTxZseGOVjDodjYzVpHAFx0-onJ5Dg8438oOuenLfwIwsmVJP4szk2jo0rD1gGf4Ibwh855TmrHpjkEK3P8Mu8UxKFBJ5-UwZ4wlXoU4gb6cKnHTxAWyEoviERu8l882i2RpM03_ydVqbG_KNUwoMbAH42KfDuUCM2zu0hgkPsW2caZfZIlrKcSElc7eYAVhdV9WS_Hzr7wF1FYn0rt2reZDY7x9f-8QkVa9APm6fnWLRsfNffYN1K3P",
    techStack: [
      { icon: "developer_board", name: "Fanuc CNC" },
      { icon: "settings_input_component", name: "Mastercam" },
      { icon: "code", name: "Python / G-Code" },
      { icon: "precision_manufacturing", name: "5-Axis DMG" },
    ],
    metrics: [
      { label: "TOOL WEAR", value: "-30%", sub: "Reduction" },
      { label: "SURFACE FINISH", value: "Ra 0.4", sub: "Micron Average" },
      { label: "SCRAP RATE", value: "-45%", sub: "Year-over-Year" },
    ],
    challenges: [
      "Developing real-time adaptive feed algorithms from noisy spindle load sensor data.",
      "Qualifying new toolpaths for AS9100-certified aerospace production without disrupting output.",
      "Correlating tool wear patterns across different aluminium alloy grades and cutter geometries.",
    ],
    active: false,
  },
];
