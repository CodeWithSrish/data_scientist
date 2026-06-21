import styles from './Certificates.module.css';

type Certificate = {
  name: string;
  issuer: string;
  date?: string;
  href: string;
  /** Direct image to render (local or external static image). */
  image: string;
};

const certificates: Certificate[] = [
  {
    name: '5-Day AI Agents Intensive Course',
    issuer: 'Kaggle × Google',
    date: 'Dec 2025',
    href: '/certificates/google-kaggle-ai-agents.png',
    image: '/certificates/google-kaggle-ai-agents.png',
  },
  {
    name: 'SQL (Basic)',
    issuer: 'HackerRank',
    date: 'Mar 2026',
    href: 'https://www.hackerrank.com/certificates/iframe/3480aee95837',
    image: '/certificates/hackerrank-sql-basic.png',
  },
  {
    name: 'SQL (Intermediate)',
    issuer: 'HackerRank',
    date: 'Mar 2026',
    href: 'https://www.hackerrank.com/certificates/iframe/9c2037cdcf79',
    image: '/certificates/hackerrank-sql-intermediate.png',
  },
  {
    name: 'Microsoft Power BI (PL-300)',
    issuer: 'Udemy',
    href: 'https://udemy-certificate.s3.amazonaws.com/image/UC-92a6095b-dbff-4a20-9af8-1a87685b0c28.jpg',
    image:
      'https://udemy-certificate.s3.amazonaws.com/image/UC-92a6095b-dbff-4a20-9af8-1a87685b0c28.jpg',
  },
  {
    name: 'Agile Project Management',
    issuer: 'Udemy',
    href: 'https://udemy-certificate.s3.amazonaws.com/image/UC-a48f5b23-74c0-49b3-aac2-e2afbae09b47.jpg',
    image:
      'https://udemy-certificate.s3.amazonaws.com/image/UC-a48f5b23-74c0-49b3-aac2-e2afbae09b47.jpg',
  },
  {
    name: 'Data Analysis | SQL, Tableau, Power BI & Excel',
    issuer: 'Udemy',
    href: 'https://udemy-certificate.s3.amazonaws.com/image/UC-b91a1755-2765-4d2e-bb74-fd0f6aef2f45.jpg',
    image:
      'https://udemy-certificate.s3.amazonaws.com/image/UC-b91a1755-2765-4d2e-bb74-fd0f6aef2f45.jpg',
  },
  {
    name: 'Prompt Engineering',
    issuer: 'Udemy',
    href: 'https://udemy-certificate.s3.amazonaws.com/image/UC-324bf9d3-da3d-46a1-83cd-1728feba6996.jpg',
    image:
      'https://udemy-certificate.s3.amazonaws.com/image/UC-324bf9d3-da3d-46a1-83cd-1728feba6996.jpg',
  },
];

export default function Certificates() {
  return (
    <section className={styles.section} id="certificates">
      <div className={styles.header}>
        <span className={styles.eyebrow}>Credentials</span>
        <h2 className={styles.heading}>Proof in writing.</h2>
        <p className={styles.intro}>
          Certifications backing the work above — from data querying
          fundamentals to applied AI agents and analytics tooling.
        </p>
      </div>

      <div className={styles.grid}>
        {certificates.map((c) => (
          <a
            className={styles.card}
            key={c.name}
            href={c.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${c.name} certificate`}
          >
            <div className={styles.thumb}>
              <div className={styles.polaroid}>
                <img src={c.image} alt={`${c.name} certificate`} loading="lazy" />
              </div>
            </div>

            <div className={styles.meta}>
              <div className={styles.metaText}>
                <h3 className={styles.cardTitle}>{c.name}</h3>
                <p className={styles.cardIssuer}>
                  {c.issuer}
                  {c.date ? ` · ${c.date}` : ''}
                </p>
              </div>
              <span className={styles.cardLink} aria-hidden="true">
                <ArrowIcon />
              </span>
            </div>
          </a>
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
