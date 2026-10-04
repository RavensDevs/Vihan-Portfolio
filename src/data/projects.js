import project_1 from '../pictures/projects/project_1.jpg';

export const projectCategories = [
  "ALL",
  "AUTOMATION",
  "DESIGN & ANALYSIS",
  "CONTROLS & IOT",
  "MANUFACTURING",
  "R&D",
];

export const projectsData = [
  {
    id: "pneumatic-press-system",
    title: "Pneumatic Assembly Press",
    period: "Completed",
    duration: "—",
    description:
      "Designed and implemented a pneumatic press system for high-rate plastic component assembly.",
    detailDescription:
      "Developed a pneumatic pressing system and custom end-effector to replace a manual rubber-mallet assembly process. The system was designed around controllable pressing force, factory air availability, reduced operator fatigue, and reliable alignment of injection-moulded plastic components.",
    tags: ["PNEUMATICS", "AUTOMATION", "MECHANICAL DESIGN"],
    category: "AUTOMATION",
    image: project_1,
    techStack: [
      { icon: "precision_manufacturing", name: "Pneumatics" },
      { icon: "settings_input_component", name: "Custom End-Effector" },
      { icon: "engineering", name: "Mechanical Design" },
      { icon: "factory", name: "Production Automation" },
    ],
    metrics: [
      { label: "PRODUCTION RATE", value: "40–45", sub: "Parts / Minute" },
      { label: "PREVIOUS RATE", value: "20", sub: "Parts / Minute" },
      { label: "DAMAGE RATE", value: "3/1000", sub: "Factory Report" },
    ],
    challenges: [
      "Designing an end-effector that minimized misalignment and prevented cracking or rupture of the plastic components.",
      "Selecting an actuation method that allowed pressing force to be controlled rather than relying solely on mechanical stroke.",
      "Increasing production throughput while substantially reducing operator fatigue.",
    ],
    active: false,
  },

  {
    id: "iot-power-monitor-enclosure",
    title: "IoT Power Monitor Enclosure",
    period: "Completed",
    duration: "—",
    description:
      "Designed and 3D-printed a panel-mount enclosure for a prototype industrial IoT power logger.",
    detailDescription:
      "Designed an enclosure to match the dimensional envelope of an MCCB assembly so the prototype could integrate into an electrical panel and DIN-rail environment. The design considered accessibility, mechanical loading, electronic assembly, troubleshooting access, and additive-manufacturing constraints.",
    tags: ["CAD", "ADDITIVE MANUFACTURING", "PRODUCT DESIGN"],
    category: "DESIGN & ANALYSIS",
    image: project_1,
    techStack: [
      { icon: "view_in_ar", name: "3D CAD" },
      { icon: "print", name: "3D Printing" },
      { icon: "electrical_services", name: "Panel Integration" },
      { icon: "design_services", name: "Design for Assembly" },
    ],
    metrics: [
      { label: "FORM FACTOR", value: "MCCB", sub: "Matched Envelope" },
      { label: "MOUNTING", value: "DIN", sub: "Rail Compatible" },
      { label: "DEVELOPMENT", value: "Iterative", sub: "Design Process" },
    ],
    challenges: [
      "Packaging the electronics inside a constrained MCCB-sized form factor.",
      "Maintaining access for assembly and troubleshooting without completely dismantling the unit.",
      "Adapting the design to practical additive-manufacturing constraints.",
    ],
    active: false,
  },

  {
    id: "centroid-cnc-retrofit",
    title: "Centroid CNC Retrofit System",
    period: "Completed",
    duration: "—",
    description:
      "Built and commissioned a Centroid-based CNC control cabinet for machine retrofits and controller replacement.",
    detailDescription:
      "Developed a CNC control cabinet around a Centroid Ajax MPU11, GPIO4D I/O board and Advanced Motion Controls servo drives. The project involved electrical integration, controller configuration, software installation, I/O troubleshooting, servo commissioning and systematic fault diagnosis.",
    tags: ["CNC", "CONTROLS", "RETROFIT", "TROUBLESHOOTING"],
    category: "AUTOMATION",
    image: project_1,
    techStack: [
      { icon: "memory", name: "Centroid MPU11" },
      { icon: "developer_board", name: "GPIO4D" },
      { icon: "settings_input_component", name: "AMC 30A8 Servo Drives" },
      { icon: "precision_manufacturing", name: "Centroid CNC" },
    ],
    metrics: [
      { label: "CONTROL AXES", value: "3", sub: "X / Y / Z" },
      { label: "SOFTWARE", value: "v306→316", sub: "Centroid CNC" },
      { label: "APPLICATION", value: "Retrofit", sub: "Mills & Lathes" },
    ],
    challenges: [
      "Diagnosing unstable power supplies, grounding/common issues and inconsistent controller initialization.",
      "Resolving configuration faults involving MPG, spindle and machine parameters.",
      "Tracing uncontrolled axis motion to swapped X/Y motor encoder connections.",
    ],
    active: false,
  },

  {
    id: "humidity-manifold",
    title: "Humidity Distribution Manifold",
    period: "Completed",
    duration: "—",
    description:
      "Designed a vapour distribution manifold for conversion of an existing cabinet into a humidity-controlled chamber.",
    detailDescription:
      "Designed and analysed a manifold intended to distribute ultrasonic mist throughout an existing cabinet with no purpose-built airflow paths. The objective was to achieve high humidity throughout each tray while eliminating blind spots and reducing unnecessary mist-generator operation.",
    tags: ["FLUID FLOW", "DESIGN", "HUMIDITY CONTROL"],
    category: "DESIGN & ANALYSIS",
    image: project_1,
    techStack: [
      { icon: "air", name: "Flow Distribution" },
      { icon: "water_drop", name: "Ultrasonic Humidification" },
      { icon: "view_in_ar", name: "Mechanical Design" },
      { icon: "science", name: "Design Analysis" },
    ],
    metrics: [
      { label: "TARGET", value: "100%", sub: "Relative Humidity" },
      { label: "DISTRIBUTION", value: "Full", sub: "Cabinet Volume" },
      { label: "OBJECTIVE", value: "Reduced", sub: "Mist-Maker Duty" },
    ],
    challenges: [
      "Distributing vapour inside a cabinet that was never designed for humidity control.",
      "Avoiding stagnant regions and humidity blind spots across multiple trays.",
      "Reducing mist-generator duty while maintaining cabinet saturation.",
    ],
    active: false,
  },

  {
    id: "fluid-filling-system",
    title: "Compact Fluid Filling System",
    period: "Completed",
    duration: "—",
    description:
      "Designed, fabricated and programmed a compact filling machine around cleanability, portability and maintainability.",
    detailDescription:
      "Developed a fluid filling system for requirements substantially different from conventional high-speed filling equipment. The machine prioritized minimum footprint, manual relocation, sub-three-foot height, simple field repair and rapid daily disassembly for cleaning. A physical HMI was used instead of a touchscreen because of the wet, humid operating environment.",
    tags: ["AUTOMATION", "FABRICATION", "MACHINE DESIGN"],
    category: "AUTOMATION",
    image: project_1,
    techStack: [
      { icon: "precision_manufacturing", name: "Machine Design" },
      { icon: "developer_board", name: "Control Logic" },
      { icon: "construction", name: "Fabrication" },
      { icon: "toggle_on", name: "Mechanical HMI" },
    ],
    metrics: [
      { label: "HEIGHT", value: "<3 ft", sub: "Design Constraint" },
      { label: "CLEANING", value: "Daily", sub: "Disassembly Requirement" },
      { label: "MOBILITY", value: "Manual", sub: "Relocatable" },
    ],
    challenges: [
      "Minimizing the machine footprint while preserving accessibility.",
      "Designing the system for complete daily cleaning and straightforward disassembly.",
      "Creating a reliable operator interface for wet hands and a humid industrial environment.",
    ],
    active: false,
  },

  {
    id: "groundwater-management",
    title: "Distributed Water Management System",
    period: "Completed",
    duration: "—",
    description:
      "Developed a distributed ESP32/MQTT monitoring and control architecture for a dual-source water system.",
    detailDescription:
      "Built a low-cost SCADA-like prototype using three distributed ESP32-C3 data-acquisition nodes and a central ESP32 controller. The system monitored a groundwater well, municipal supply and storage tank while controlling pumps and valves. MQTT telemetry was captured through Telegraf, stored in InfluxDB and visualized using Grafana.",
    tags: ["IOT", "ESP32", "MQTT", "SCADA"],
    category: "CONTROLS & IOT",
    image: project_1,
    techStack: [
      { icon: "developer_board", name: "ESP32" },
      { icon: "hub", name: "MQTT" },
      { icon: "database", name: "InfluxDB / Telegraf" },
      { icon: "monitoring", name: "Grafana" },
    ],
    metrics: [
      { label: "DAQ NODES", value: "3", sub: "Distributed Nodes" },
      { label: "SOURCES", value: "2", sub: "Water Supplies" },
      { label: "ARCHITECTURE", value: "Local", sub: "SCADA-like System" },
    ],
    challenges: [
      "Integrating distributed pressure, flow, level, current and fail-safe measurements into one architecture.",
      "Developing control logic capable of operating pumps and valves from distributed sensor data.",
      "Creating an inexpensive and replaceable alternative to proprietary PLC/SCADA infrastructure.",
    ],
    active: false,
  },

  {
    id: "paneer-storage-rd",
    title: "Paneer Storage R&D",
    period: "Completed",
    duration: "—",
    description:
      "Investigated and eliminated storage-related surface crust formation responsible for significant product waste.",
    detailDescription:
      "Investigated crust formation on refrigerated paneer through iterative experiments. After wrapping and immersion approaches proved unsuitable, moisture loss was identified as the likely mechanism. A humidity-saturated proof-of-concept eliminated crust formation, leading to development of a stainless-steel humidity-controlled storage cabinet.",
    tags: ["R&D", "PROTOTYPING", "FOOD PROCESSING"],
    category: "R&D",
    image: project_1,
    techStack: [
      { icon: "science", name: "Experimental Testing" },
      { icon: "water_drop", name: "Humidity Control" },
      { icon: "print", name: "3D Printed Prototype" },
      { icon: "kitchen", name: "Storage Engineering" },
    ],
    metrics: [
      { label: "WASTE SAVED", value: "20%", sub: "Production" },
      { label: "PROTOTYPE", value: "2 W", sub: "Mist Maker" },
      { label: "CRUST", value: "0", sub: "Observed in Test" },
    ],
    challenges: [
      "Determining the mechanism responsible for crust formation rather than treating only the symptom.",
      "Rejecting immersion after it prevented crust but produced an unacceptable slimy surface.",
      "Developing a low-power proof-of-concept before committing to a full cabinet system.",
    ],
    active: false,
  },

  {
    id: "oil-cooler-rebuild",
    title: "Industrial Oil Cooler Rebuild",
    period: "Completed",
    duration: "—",
    description:
      "Rebuilt and pressure-tested an industrial oil cooler using replacement copper tube assemblies.",
    detailDescription:
      "Participated in rebuilding an OFWF oil cooler by removing the original copper tubing, opening the steel sheath, installing replacement tubes, expanding and sealing the tube ends, reassembling the cooler and performing hydrostatic leak testing.",
    tags: ["MAINTENANCE", "FABRICATION", "REPAIR"],
    category: "MANUFACTURING",
    image: project_1,
    techStack: [
      { icon: "plumbing", name: "Copper Tubing" },
      { icon: "construction", name: "Tube Expansion" },
      { icon: "build", name: "Industrial Repair" },
      { icon: "speed", name: "Pressure Testing" },
    ],
    metrics: [
      { label: "TEST PRESSURE", value: "6 bar", sub: "Hydrostatic" },
      { label: "TEST TIME", value: "30 min", sub: "Leak Test" },
      { label: "TUBING", value: "Replaced", sub: "Copper Assembly" },
    ],
    challenges: [
      "Installing replacement tubing through inaccessible internal support structures.",
      "Accounting for tube shortening during expansion to prevent unusable tube lengths.",
      "Restoring the assembly and verifying sealing through hydrostatic testing.",
    ],
    active: false,
  },

  {
    id: "soap-packer-machine",
    title: "Soap Packer Machine Development",
    period: "Completed",
    duration: "3 Months",
    description:
      "Supported end-to-end fabrication and assembly of an automated soap packing machine containing 92 custom parts.",
    detailDescription:
      "Handled engineering drawings and DXFs, fabrication coordination, dimensional inspection, tolerance verification, assembly planning, frame fabrication oversight and hardware planning for a machine designed to pack wrapped soap bars into corrugated boxes.",
    tags: ["MACHINE DESIGN", "FABRICATION", "MANUFACTURING"],
    category: "MANUFACTURING",
    image: project_1,
    techStack: [
      { icon: "design_services", name: "Engineering Drawings / DXF" },
      { icon: "precision_manufacturing", name: "Sheet Metal Fabrication" },
      { icon: "straighten", name: "Tolerance Verification" },
      { icon: "construction", name: "Machine Assembly" },
    ],
    metrics: [
      { label: "CUSTOM PARTS", value: "92", sub: "Drawings / DXFs" },
      { label: "DURATION", value: "3 mo", sub: "Project" },
      { label: "WORKFLOW", value: "End-to-End", sub: "Fabrication → Assembly" },
    ],
    challenges: [
      "Maintaining dimensional accuracy and tolerance compatibility across a large number of fabricated parts.",
      "Coordinating laser cutting, bending, tapping, welding and finishing workflows.",
      "Planning subassemblies, dummy fits and fastener requirements before final surface finishing.",
    ],
    active: false,
  },

  {
    id: "szgh-650-commissioning",
    title: "SZGH 650 VMC Commissioning",
    period: "Completed",
    duration: "—",
    description:
      "Diagnosed and corrected startup, axis-limit, homing and automatic tool-changer faults on a CNC VMC.",
    detailDescription:
      "Troubleshot a new SZGH-controlled vertical machining centre with multiple commissioning faults. Work included tracing a dead 1080 MiC interface to disconnected supply wiring, establishing Z-axis soft limits, investigating lost positional reference and recalibrating the automatic tool magazine.",
    tags: ["CNC", "COMMISSIONING", "TROUBLESHOOTING"],
    category: "AUTOMATION",
    image: project_1,
    techStack: [
      { icon: "precision_manufacturing", name: "SZGH VMC" },
      { icon: "memory", name: "1080 MiC" },
      { icon: "electrical_services", name: "Electrical Diagnostics" },
      { icon: "tune", name: "CNC Parameters" },
    ],
    metrics: [
      { label: "TOOL POSITIONS", value: "10", sub: "Magazine" },
      { label: "AXIS", value: "Z", sub: "Soft-Limit Recovery" },
      { label: "PARAMETER", value: "#105", sub: "Tool Position Recovery" },
    ],
    challenges: [
      "Tracing an apparently powered machine to disconnected interface supply wiring.",
      "Recovering safe Z-axis operation without physical limit switches or the original machine manual.",
      "Recovering and calibrating the tool changer after an emergency stop left its position register invalid.",
    ],
    active: false,
  },

  {
    id: "szgh-990tdb-servo",
    title: "Custom CNC Servo Fault Diagnosis",
    period: "Completed",
    duration: "—",
    description:
      "Diagnosed recurring X/Z servo error-accumulation faults on a custom SZGH 990TDB-controlled machine.",
    detailDescription:
      "Investigated an intermittent servo fault that locked the X and Z axes after traversal. Mechanical friction, lubrication, timing transmission, servo hardware and controller parameters were systematically investigated before testing revealed a relationship between commanded traversal speed and error accumulation.",
    tags: ["CNC", "SERVO", "DIAGNOSTICS"],
    category: "AUTOMATION",
    image: project_1,
    techStack: [
      { icon: "precision_manufacturing", name: "SZGH 990TDB" },
      { icon: "settings", name: "Servo Systems" },
      { icon: "tune", name: "Motion Parameters" },
      { icon: "troubleshoot", name: "Fault Diagnosis" },
    ],
    metrics: [
      { label: "AFFECTED AXES", value: "2", sub: "X / Z" },
      { label: "FAULT", value: "Servo", sub: "Error Accumulation" },
      { label: "OUTCOME", value: "Stable", sub: "Reduced-Speed Operation" },
    ],
    challenges: [
      "Troubleshooting a custom machine without a standard machine-specific diagnostic procedure.",
      "Separating possible mechanical, transmission, servo-drive and controller causes.",
      "Establishing experimentally that reducing traversal speed increased the distance achievable before error accumulation.",
    ],
    active: false,
  },
];
