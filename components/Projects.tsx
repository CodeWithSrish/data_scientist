import styles from './Projects.module.css';

type Project = {
  name: string;
  tagline: string;
  tech: string[];
  points: string[];
  href?: string;
};

const projects: Project[] = [
  {
    name: 'FinRisk',
    tagline: 'ML Financial Risk & Credit Default Prediction System',
    tech: ['Python', 'LightGBM', 'CatBoost', 'SHAP', 'Docker'],
    points: [
      'Enhanced loan default risk assessment with a 1.8× predictive lift and ROC-AUC of 0.647 using an ensemble of LightGBM and CatBoost.',
      'Integrated SHAP explainability for applicant-level feature importance and risk insight.',
      'Dockerized the full pipeline for reproducible, production-ready deployment.',
    ],
  },
  {
    name: 'FraudHawk',
    tagline: 'Financial Fraud Detection & Explainable AI Platform',
    tech: ['Python', 'XGBoost', 'SHAP', 'SMOTE'],
    points: [
      'Built an end-to-end pipeline analyzing 11,000+ transactions to flag high-risk fraudulent activity.',
      'Handled class imbalance with SMOTE and benchmarked ensemble algorithms via cross-validation.',
      'Delivered SHAP-based attribution for transparent, actionable fraud investigation.',
    ],
    href: 'https://github.com/CodeWithSrish/FrauHawk.git',
  },
  {
    name: 'Predictive Maintenance System',
    tagline: 'ML-driven equipment failure prediction',
    tech: ['Python', 'XGBoost', 'Scikit-learn'],
    points: [
      'Predicted equipment failure from industrial sensor and operational data.',
      'Engineered features and ensembled models for stronger failure detection.',
      'Surfaced failure patterns that enabled proactive maintenance scheduling.',
    ],
    href: 'https://github.com/CodeWithSrish/Predictive-Maintenance',
  },
  {
    name: 'Revenue Radar',
    tagline: 'End-to-End Revenue Intelligence Platform',
    tech: ['GCP', 'BigQuery', 'SQL', 'Looker Studio'],
    points: [
      'Analyzed R$15.8M in revenue across 99,441 orders on a cloud-native analytics stack.',
      'Automated SQL pipelines, customer segmentation, and executive KPI dashboards.',
      'Surfaced geographic revenue concentration and delivery-risk hotspots.',
    ],
    href: 'https://github.com/CodeWithSrish/Revenue-Radar-E-Commerce-Analytics-on-GCP',
  },
  {
    name: 'Credit Risk Intelligence Engine',
    tagline: 'Fair, explainable credit scoring',
    tech: ['XGBoost', 'SHAP', 'LIME', 'AIF360', 'Streamlit'],
    points: [
      'Built an XGBoost credit scoring model with custom financial feature engineering.',
      'Audited fairness with AIF360 alongside SHAP/LIME explainability.',
      'Shipped a real-time Streamlit app for applicant-level risk interpretation.',
    ],
    href: 'https://github.com/CodeWithSrish/credit-risk-intelligence-engine',
  },
  {
    name: 'Multi-Agent Customer Service Assistant',
    tagline: 'Coordinated agents for support automation',
    tech: ['Python', 'OOP', 'Rule-Based NLP'],
    points: [
      'Designed a multi-agent system coordinating intent recognition, memory, and response generation.',
      'Enabled contextual, personalized handling of billing, refund, and cancellation requests.',
    ],
  },
  {
    name: 'TruthGuard AI',
    tagline: 'Explainable Misinformation Detection Platform',
    tech: ['Python', 'NLP', 'Scikit-learn', 'LIME'],
    points: [
      'Classified deceptive content across 72K+ news articles via linguistic and semantic signals.',
      'Added LIME explanations and bias auditing for transparent, trustworthy decisions.',
    ],
    href: 'https://github.com/CodeWithSrish/TruthGuard_AI.git',
  },
  {
    name: 'CineMatch',
    tagline: 'Recommendation System using Collaborative Filtering',
    tech: ['Python', 'Surprise', 'SVD', 'KNN'],
    points: [
      'Personalized recommendations across 1M+ user-item interactions with SVD and KNN.',
      'Reached RMSE 0.8729 after evaluation and hyperparameter tuning at scale.',
    ],
    href: 'https://github.com/CodeWithSrish/CineMatch.git',
  },
  {
    name: 'Product Navigator AI',
    tagline: 'Conversational Product Intelligence Platform',
    tech: ['Google ADK', 'Gemini AI', 'Agentic AI'],
    points: [
      'Built an AI support agent for natural-language product search and category discovery.',
      'Orchestrated Gemini AI, intent recognition, and product knowledge retrieval for scalable support.',
    ],
  },
];

export default function Projects() {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.header}>
        <span className={styles.eyebrow}>Selected work</span>
        <h2 className={styles.heading}>Systems that explain themselves.</h2>
        <p className={styles.intro}>
          A working set of machine learning systems spanning credit risk,
          fraud, recommendation, and conversational AI — built for accuracy
          and built to be trusted.
        </p>
      </div>

      <div className={styles.grid}>
        {projects.map((p, i) => (
          <article className={styles.card} key={p.name}>
            <div className={styles.cardTop}>
              <span className={styles.cardIndex}>{String(i + 1).padStart(2, '0')}</span>
              {p.href && (
                <a
                  className={styles.cardLink}
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${p.name} on GitHub`}
                >
                  <ArrowIcon />
                </a>
              )}
            </div>

            <h3 className={styles.cardTitle}>{p.name}</h3>
            <p className={styles.cardTagline}>{p.tagline}</p>

            <ul className={styles.cardPoints}>
              {p.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>

            <div className={styles.tech}>
              {p.tech.map((t) => (
                <span className={styles.techPill} key={t}>
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M3 11L11 3M11 3H4.5M11 3V9.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
