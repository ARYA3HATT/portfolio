export const meta = {
  name: "Priyanshu Bajpai",
  title: "AI & ML Engineer",
  description:
    "Final year CSE student specializing in Cybersecurity & Digital Forensics at DIT Dehradun. Deep passion for AI & ML. Open to internships and full-time roles.",
  email: "priyanshubajpai101@gmail.com",
  github: "https://github.com/ARYA3HATT",
  linkedin: "https://www.linkedin.com/in/priyanshu-bajpai",
  roles: ["AI / ML Engineer.", "Data Scientist.", "Cybersecurity Enthusiast.", "Problem Solver."],
};

export const about = {
  bio: [
    "I'm a final year student at Dehradun Institute of Technology, pursuing B.Tech CSE with specialization in Cybersecurity & Digital Forensics — with a deep self-driven passion for Artificial Intelligence and Machine Learning.",
    "My work spans ensemble models detecting industrial anomalies, AI-driven adaptive testing systems, full-stack LLM-powered platforms, network security tooling, and real-time API infrastructure.",
    "Actively seeking internship and full-time opportunities in AI/ML — ready to contribute from day one.",
  ],
  cards: [
    { label: "Status",         value: "Open to Opportunities" },
    { label: "University",     value: "DIT Dehradun" },
    { label: "Specialization", value: "Cybersecurity & Digital Forensics" },
    { label: "Deep Interest",  value: "AI / ML & Data Science" },
    { label: "Location",       value: "India" },
  ],
  approach: "Build first, optimise relentlessly — ship things that actually work in the real world",
  learning: ["Transformers", "Reinforcement Learning", "MLOps", "LLM Fine-tuning"],
};

export const openTo = [
  {
    icon: "🤖",
    title: "Full-time AI/ML Roles",
    desc: "ML Engineer, Data Scientist, or AI Developer positions where I can build and ship intelligent systems that solve real problems.",
  },
  {
    icon: "🔬",
    title: "Research Internships",
    desc: "Applied ML research in industry or academia. Interested in NLP, anomaly detection, computer vision, and LLM applications.",
  },
  {
    icon: "🔧",
    title: "Open Source Collabs",
    desc: "Meaningful open source projects in AI/ML or security where I can contribute and grow alongside a community.",
  },
];

export type SkillTab = { id: string; label: string; desc: string; chips: string[] };
export const skills: SkillTab[] = [
  {
    id: "ml", label: "AI & ML", desc: "Predictive models, LLM pipelines, adaptive testing, intelligent applications.",
    chips: ["scikit-learn","XGBoost","LightGBM","LangChain","ChromaDB","RAG","Pandas","NumPy","Ensemble Methods","Feature Engineering","Ollama","IRT / CAT","MongoDB"],
  },
  {
    id: "cyber", label: "Cybersecurity", desc: "Network recon, vulnerability analysis, cryptography, and penetration testing.",
    chips: ["Network Scanning","Port Analysis","Cryptography","Nmap","Penetration Testing","Asymmetric Keys","Symmetric Keys","Vulnerability Assessment"],
  },
  {
    id: "web", label: "Web & Backend", desc: "Real-time WebSocket APIs to production React dashboards.",
    chips: ["FastAPI","React","Celery","Redis","PostgreSQL","WebSockets","Docker","REST APIs"],
  },
  {
    id: "data", label: "Data & Analysis", desc: "EDA, statistical testing, and visualizations that surface real insights.",
    chips: ["EDA","Statistical Testing","Matplotlib","Seaborn","SciPy","Plotly","Jupyter","Time Series"],
  },
  {
    id: "infra", label: "Languages & Infra", desc: "Core languages and cloud-ready tooling to ship end to end.",
    chips: ["Python","JavaScript","TypeScript","SQL","Bash","Docker Compose","Git","Vercel","Railway"],
  },
];

export type Project = {
  id: string; num: string; cat: "ml"|"cyber"|"fs"|"data";
  name: string; tagline: string; desc: string;
  stack: string[]; repo: string; featured?: boolean;
  color: string; // dominant accent colour for the card vis
};

export const projects: Project[] = [
  {
    id: "api-visualizer", num: "01", cat: "fs", featured: true,
    name: "API Rate Limit Visualizer",
    tagline: "Full-Stack · DevTools",
    desc: "Stress tests any public API and streams live metrics via WebSockets. Up to 1000 concurrent requests with real-time p50/p95/p99 percentiles.",
    stack: ["FastAPI","Celery","Redis","React","WebSockets"],
    repo: "https://github.com/ARYA3HATT/api-rate-limit-visualizer",
    color: "#4466ff",
  },
  {
    id: "adaptive-engine", num: "02", cat: "ml", featured: true,
    name: "Adaptive Diagnostic Engine",
    tagline: "Machine Learning · EdTech · AI",
    desc: "AI-driven Computerized Adaptive Testing using 3PL Item Response Theory — the same framework as the real GRE. Maximum Fisher Information question selection, Newton-Raphson MLE ability updates, personalised study plans via Grok (xAI).",
    stack: ["FastAPI","MongoDB","IRT / 3PL","xAI / Grok","CAT"],
    repo: "https://github.com/ARYA3HATT/adaptive-diagnostic-engine",
    color: "#9955ff",
  },
  {
    id: "anomaly-detection", num: "03", cat: "ml", featured: true,
    name: "Energy Plant Anomaly Detection",
    tagline: "Machine Learning · Competition",
    desc: "Ana-Verse 2.0. XGBoost + LightGBM ensemble on 0.86% anomaly dataset with temporal feature engineering. Pushed F1 from 0.69 → 0.8113.",
    stack: ["XGBoost","LightGBM","scikit-learn","Feature Engineering"],
    repo: "https://github.com/ARYA3HATT/Energy_Plant_Anamoly_Detection",
    color: "#ff6600",
  },
  {
    id: "trader-sentiment", num: "04", cat: "data",
    name: "Trader Sentiment Analysis",
    tagline: "Data Science · Finance",
    desc: "Correlates Bitcoin's Fear/Greed Index with Hyperliquid trader performance. Full EDA, statistical testing, and ML pipeline for actionable trading signals.",
    stack: ["Pandas","scikit-learn","SciPy","Seaborn"],
    repo: "https://github.com/ARYA3HATT/trader-sentiment-analysis",
    color: "#00cc88",
  },
  {
    id: "voice-recognition", num: "05", cat: "ml",
    name: "Voice Recognition",
    tagline: "Machine Learning · Audio",
    desc: "Binary voice classification system using advanced ML. Optimized for real-time audio processing and scalable across large, diverse sample sets.",
    stack: ["Python","Audio ML","Jupyter"],
    repo: "https://github.com/ARYA3HATT/voice-recognition",
    color: "#00cc66",
  },
  {
    id: "crypto-visualizer", num: "06", cat: "cyber",
    name: "Cryptography Key Visualizer",
    tagline: "Cybersecurity · Cryptography",
    desc: "Generates and visualizes symmetric (AES) and asymmetric (RSA) cryptographic keys interactively. Makes abstract encryption mechanics tangible.",
    stack: ["Python","RSA","AES","Cryptography"],
    repo: "https://github.com/ARYA3HATT/mwns-proj",
    color: "#9933ff",
  },
  {
    id: "network-scanner", num: "07", cat: "cyber",
    name: "Python Network Scanner",
    tagline: "Cybersecurity · Networking",
    desc: "Lightweight Python tool for rapid network and port scanning. Enumerates open ports and active hosts — foundational utility for security auditing.",
    stack: ["Python","TCP/IP","Port Scanning","Nmap"],
    repo: "https://github.com/ARYA3HATT/python_network_scanner",
    color: "#00ff88",
  },
  {
    id: "trip-it", num: "08", cat: "fs",
    name: "Trip-It",
    tagline: "Full-Stack · Travel",
    desc: "Smart trip itinerary planner. Plan, organize, and manage travel schedules with an intuitive interface built for travelers who want clarity on the go.",
    stack: ["Web","Itinerary","Planning"],
    repo: "https://github.com/ARYA3HATT/trip-it",
    color: "#4499ff",
  },
];

export const marqueeItems = [
  "Python","scikit-learn","XGBoost","LangChain","FastAPI","React","Docker",
  "PostgreSQL","ChromaDB","RAG","LightGBM","Pandas","NumPy","WebSockets",
  "Nmap","Cryptography","Redis","Celery","Feature Engineering","Jupyter",
  "IRT / CAT","MongoDB","xAI / Grok","TypeScript","Next.js",
];
