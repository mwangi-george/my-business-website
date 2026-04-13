import {
  Activity,
  ArrowRight,
  BarChart3,
  BrainCircuit,
  CalendarCheck2,
  Database,
  GitBranch,
  Layers3,
  LineChart,
  MessageSquareText,
  Settings2,
  ShieldCheck,
  Workflow,
} from "lucide-react";

export const navigationItems = [
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Examples", href: "#examples" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const services = [
  {
    icon: BarChart3,
    title: "Dashboards & decision support",
    description:
      "Interactive dashboards, KPI tracking, and executive reporting that turn scattered data into clear, actionable views.",
    bullets: ["Highcharts / BI-style visuals", "Role-based views", "Export-ready summaries"],
  },
  {
    icon: Workflow,
    title: "Backend APIs & workflow automation",
    description:
      "Fast, maintainable backend systems that automate approvals, integrations, notifications, and repetitive operations.",
    bullets: ["FastAPI services", "Async integrations", "Business-rule automation"],
  },
  {
    icon: Database,
    title: "Data engineering & transformation",
    description:
      "Reliable pipelines to clean, join, validate, and structure operational data from spreadsheets, forms, and business systems.",
    bullets: ["Data validation", "ETL workflows", "Spreadsheet-to-system migration"],
  },
  {
    icon: LineChart,
    title: "Forecasting & predictive modeling",
    description:
      "Time series forecasting, anomaly detection, and predictive analytics that support planning, budgeting, and smarter operations.",
    bullets: ["ARIMA / Prophet / XGBoost", "Scenario planning", "Demand forecasting"],
  },
  {
    icon: BrainCircuit,
    title: "Gen AI apps & agents",
    description:
        "Custom AI-powered applications and agents that automate workflows, answer questions, and turn complex data into actionable insights.",
    bullets: [
      "AI chatbots & knowledge assistants",
      "Document Q&A and summarization",
      "Workflow automation agents",
    ],
  },
  {
    icon: MessageSquareText,
    title: "Training & technical upskilling",
    description:
        "Hands-on training and mentorship to help your team adopt modern data tools, build confidence, and maintain systems independently.",
    bullets: [
      "R, Python & SQL for data analysis",
      "Dashboarding (Shiny, React, BI tools)",
      "API development & data workflows",
    ],
  },
] as const;

export const approachSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "Map the current spreadsheets, pain points, workflows, and decision-making needs before building anything.",
    icon: Layers3,
  },
  {
    number: "02",
    title: "Design",
    description:
      "Define the data model, key automations, system architecture, user flows, and reporting outputs for the right-fit solution.",
    icon: GitBranch,
  },
  {
    number: "03",
    title: "Build & validate",
    description:
      "Develop modular components, test with realistic data, and refine the workflow until it saves time and reduces friction.",
    icon: Settings2,
  },
  {
    number: "04",
    title: "Deploy & support",
    description:
      "Launch the solution, train users, gather feedback, and iterate so the system remains useful beyond the first release.",
    icon: ShieldCheck,
  },
] as const;

export const exampleProjects = [
  {
    title: "Airports & Cities Finder using AirLabs Nearby API",
    summary:
        "Designed and built an application powered by the AirLabs Nearby API to help users quickly locate the nearest departure airport or discover airports within a defined radius.",
    tags: ["APIs", "R", "Shiny", "Geospatial"],
    impact: "Simplified travel planning by enabling fast, location-based airport discovery through an intuitive interface.",
  },
  {
    title: "Meeting registration & reimbursement workflow system",
    summary:
      "Built a digital registration and reimbursement workflow that replaced manual, paper-based coordination and reduced duplicate participant data.",
    tags: ["Workflow", "Internal tools", "FastAPI"],
    impact: "Faster coordination and finance turnaround with less manual work.",
  },
  {
    title: "Family planning commodity forecasting tool",
    summary:
      "Created a machine-learning-enabled demand forecasting tool integrated with DHIS2 to extract data, manage outliers, and generate planning outputs in minutes.",
    tags: ["Machine learning", "DHIS2", "Forecasting"],
    impact: "Improved accuracy over Excel-based methods while shrinking turnaround time.",
  },
  {
    title: "Sales Analytics dashboard",
    summary:
      "Developed an interactive analytics dashboard used to compare performance across multiple locations and operational indicators.",
    tags: ["Dashboards", "Visualization", "Analytics", "Business Intelligence"],
    impact: "Improved visibility into regional performance trends.",
  },
  {
    title: "Time series forecasting workbench",
    summary:
      "Built an application that lets users upload datasets, define forecast horizons, and generate predictive insights with multiple forecasting methods.",
    tags: ["Time series", "Self-service analytics", "Planning"],
    impact: "Made forecasting workflows more accessible for non-technical users.",
  },
  {
    title: "Constitution of Kenya AI assistant",
    summary:
        "Built a Gen AI assistant that enables users to query the Constitution of Kenya (2010) and receive precise, context-grounded answers with verifiable citations through a modern chat interface.",
    tags: ["Pydantic AI", "RAG", "FastAPI", "React"],
    impact: "Made legal reference faster and more accessible with citation-backed answers and real-time interaction.",
  },
] as const;

export const aboutHighlights = [
  "Backend engineering with FastAPI, PostgreSQL, and scalable APIs",
  "Data wrangling, analysis, visualization, and reporting",
  "Forecasting, predictive modeling, and decision-support workflows",
  "Modern, maintainable tools for NGOs, SMEs, and operational teams",
] as const;

export const socialLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
] as const;

export const ctaLinks = {
  primary: { label: "Book a consultation", href: "#contact", icon: CalendarCheck2 },
  secondary: { label: "Explore services", href: "#services", icon: ArrowRight },
  tertiary: { label: "See project examples", href: "#examples", icon: Activity },
};
