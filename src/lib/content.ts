/* =============================================================================
 *  SITE CONTENT — edit everything about the portfolio here.
 *
 *  This is the single source of truth consumed by every section. It's plain
 *  data (no framework knowledge needed). Search for "TODO" to find the few
 *  links you should confirm point to your real profiles/repos.
 * ============================================================================= */

/* ------------------------------------------------------------------ profile */
export const profile = {
  name: "Akash Pandey",
  firstName: "Akash",
  role: "Machine Learning Engineer",
  // The first thing visitors read. Punchy, and covers ML + data + analytics.
  tagline:
    "I build production-grade generative AI systems, end-to-end ML pipelines, and BI/analytics solutions — taking ideas from research through to deployed, tested products.",
  location: "New Delhi, India",
  email: "akashpandey98717@gmail.com",
  phone: "+91 83687 06164",
  // Resume PDF lives at public/resume.pdf. Set to "" to hide the button.
  resumeUrl: "/resume.pdf",
  // Shows an availability pill in the hero. Set to false to hide.
  availableForWork: true,
  availabilityText: "Final-year B.Tech (AI) · open to ML / Data roles & internships",
} as const;

/* ------------------------------------------------------------------- social */
// TODO: confirm these point to YOUR real profiles. Set any url to "" to hide it.
export const socials = [
  { key: "github", label: "GitHub", url: "https://github.com/akash-pandey7" },
  { key: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/akash-pandey-ml/" },
  { key: "kaggle", label: "Kaggle", url: "https://www.kaggle.com/akashp7" },
] as const;

/* ---------------------------------------------------------------- site meta */
// Used for SEO tags and the generated social-share (OG) image.
export const site = {
  // TODO: your deployed URL, no trailing slash (used for absolute OG/meta URLs).
  url: "https://akash-pandey.vercel.app",
  title: `${profile.name} — ${profile.role}`,
  description:
    "Akash Pandey — final-year CS (AI) student building production-grade generative AI, ML pipelines, and BI/analytics. CTGAN synthetic data, SQL + Power BI, and cloud AI.",
  keywords: [
    "Akash Pandey",
    "Machine Learning Engineer",
    "Data Scientist",
    "Data Analyst",
    "Generative AI",
    "CTGAN",
    "Synthetic Data",
    "Python",
    "Power BI",
    "PostgreSQL",
  ],
} as const;

/* --------------------------------------------------------------------- nav */
export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
] as const;

/* -------------------------------------------------------------------- about */
export const about = {
  // Each string is a paragraph. Keep it to 2–3.
  paragraphs: [
    "I'm Akash — a final-year B.Tech Computer Science (AI) student with a bias toward shipping. I independently built Tensor Veil, a CTGAN-based synthetic data engine, from research all the way to a deployed, tested full-stack app with CI/CD.",
    "My work spans generative AI, production ML pipelines, and BI/analytics. I care about the parts that make ML trustworthy — data quality, validation you can audit, and reproducible pipelines — and I like backing decisions with data, whether that's KS-test validation of synthetic distributions or a Power BI dashboard over ~99K orders.",
  ],
  // Small stat tiles shown beside the bio. Keep to 3–4.
  facts: [
    { value: "2027", label: "B.Tech CS (AI), expected" },
    { value: "3", label: "End-to-end projects shipped" },
    { value: "6", label: "Certifications & achievements" },
    { value: "#67", label: "AI-Deate case comp, IIT Delhi" },
  ],
} as const;

/* ------------------------------------------------------------------- skills */
// Grouped so the section reads like a capability map, not a keyword dump.
export const skillGroups = [
  {
    title: "Languages & Core CS",
    items: ["Python", "C++", "Java", "Data Structures & Algorithms"],
  },
  {
    title: "ML & Deep Learning",
    items: [
      "Scikit-Learn",
      "TensorFlow",
      "CTGAN",
      "Neural Networks",
      "Supervised & Unsupervised Learning",
      "Model Evaluation",
    ],
  },
  {
    title: "Generative AI",
    items: ["Synthetic Data Generation", "Prompt Engineering", "Claude Code"],
  },
  {
    title: "Data & Analytics",
    items: ["NumPy", "Pandas", "Data Cleaning", "EDA", "Feature Engineering", "Statistical Modeling"],
  },
  {
    title: "Databases & BI",
    items: ["PostgreSQL", "Supabase", "Power BI (DAX)", "Streamlit"],
  },
  {
    title: "Cloud & DevOps",
    items: ["Google Cloud Platform", "Git / GitHub", "GitHub Actions"],
  },
] as const;

/* ----------------------------------------------------------------- projects */
export type ProjectLink = { label: string; href: string };
export type Project = {
  title: string;
  blurb: string;
  // Optional date range, shown as a small mono label on the card.
  period?: string;
  // Headline outcome — shown prominently.
  metric?: string;
  tags: string[];
  links: ProjectLink[];
  featured?: boolean;
};

// TODO: point the project links at your real repos / live app / dataset.
export const projects: Project[] = [
  {
    title: "TensorVeil — Synthetic Data Engine",
    period: "Jan 2026 – Present",
    blurb:
      "A CTGAN-based generative AI system that synthesizes privacy-safe training data while preserving the source's full statistical fidelity. Production-grade pipeline for ingestion, automated cleaning, imputation, and hyperparameter optimization, with an auditable validation layer — KS test, Total Variation Distance, and ML efficacy via train-synthetic-test-real. Shipped as a full-stack Streamlit app backed by Supabase (row-level security), with CI/CD via GitHub Actions and unit tests.",
    metric: "Privacy-safe synthetic data · full statistical fidelity",
    tags: ["CTGAN", "Python", "Streamlit", "Supabase", "GitHub Actions", "CI/CD"],
    links: [
      { label: "Live demo", href: "https://tensorveil.streamlit.app/" },
      { label: "Code", href: "https://github.com/akash-pandey7/TensorVeil" },
    ],
    featured: true,
  },
  {
    title: "Olist E-Commerce Sales & Delivery Analysis",
    blurb:
      "End-to-end analytics on ~99,000 orders from the Olist Brazilian e-commerce dataset. Modeled 7 relational tables into a star schema (plus a custom Date dimension) in PostgreSQL, then answered core questions on sales, retention, delivery, and payments across a 4-page interactive Power BI dashboard. Surfaced insights like late deliveries dropping average review score from 4.3 → 2.57, and only ~3% of customers making a repeat purchase.",
    metric: "~99K orders · 7-table star schema · 4-page BI dashboard",
    tags: ["PostgreSQL", "SQL", "Power BI", "DAX", "Data Modeling"],
    links: [{ label: "Code", href: "https://github.com/akash-pandey7/olist-sql-powerbi-dashboard" }],
    featured: true,
  },
  {
    title: "Top-Rated TMDB Movies — Cleaned Dataset",
    blurb:
      "Exploratory data analysis on raw TMDB movie data to surface quality issues, inconsistencies, and missing patterns — then cleaned, deduplicated, and standardized the dataset and published it publicly on Kaggle for other practitioners to build on.",
    metric: "Cleaned & published on Kaggle",
    tags: ["Python", "Pandas", "EDA", "Data Cleaning"],
    links: [{ label: "View on Kaggle", href: "https://www.kaggle.com/datasets/akashp7/top-rated-tmdb-movies-cleaned" }],
  },
];

/* ------------------------------------------------- certifications & awards */
export type Credential = {
  title: string;
  issuer: string;
  year?: string;
  detail?: string;
  link?: string;
};

export const certifications: Credential[] = [
  {
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI · Andrew Ng (Coursera)",
    detail:
      "Supervised & unsupervised learning, advanced algorithms, and neural networks.",
  },
  {
    title: "OCI AI Foundations Associate",
    issuer: "Oracle",
    year: "2025",
    detail: "Oracle Cloud Infrastructure AI certification — scored 85%.",
  },
  {
    title: "Data Analytics with Python",
    issuer: "NPTEL",
    detail: "Elite + Silver medal · scored 79%.",
  },
  {
    title: "Google Cloud AI",
    issuer: "Google Cloud",
    detail: "Cloud AI / ML foundations.",
  },
  {
    title: "AI-Deate — AI Case Competition",
    issuer: "Business Club, IIT Delhi",
    detail: "Ranked #67 among participating teams.",
  },
  {
    title: "Introduction to Programming Using Python",
    issuer: "HackerRank",
    detail: "Certificate of Achievement.",
  },
];

/* ---------------------------------------------------------------- education */
export type Education = {
  degree: string;
  school: string;
  period: string;
  location?: string;
  detail?: string;
};

export const education: Education[] = [
  {
    degree: "B.Tech. in Computer Science (Artificial Intelligence)",
    school: "KCC Institute of Technology and Management",
    period: "Sept 2023 – 2027",
    location: "New Delhi, India",
    detail:
      "CGPA: 7.1 / 10. Coursework across machine learning, deep learning, statistics, and data structures & algorithms.",
  },
];
