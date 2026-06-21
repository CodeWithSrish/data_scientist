import styles from './Experience.module.css';

type Job = {
  company: string;
  role: string;
  bullets: string[];
};

const jobs: Job[] = [
  {
    company: 'Spinnaker Analytics',
    role: 'Data Science Intern',
    bullets: [
      'Implemented clustering algorithms on real-world datasets (solar energy zones, product sales) to identify patterns, with outputs directly informing client business decisions.',
      'Ensured data integrity via ETL pipeline documentation, cleaning, and preprocessing protocols.',
      'Conducted EDA on diverse datasets to surface actionable business insights for cross-functional stakeholders, reducing manual reporting time through automated Power BI dashboards.',
    ],
  },
  {
    company: 'Rockwell Automation',
    role: 'Junior Engineer',
    bullets: [
      'Managed and optimised complex operational systems, developing rigorous data-handling habits and precision standards now applied to ML pipeline design.',
      'Cross-functional collaboration on deployment planning, performance monitoring, and system optimisation (Reliance, IFFCO, PepsiCo, Indian Oil etc.) — skills directly transferable to model deployment and stakeholder reporting.',
    ],
  },
];

export default function Experience() {
  return (
    <section className={styles.section} id="experience">
      <div className={styles.header}>
        <span className={styles.eyebrow}>Experience</span>
        <h2 className={styles.heading}>Where I've built.</h2>
      </div>

      <div className={styles.list}>
        {jobs.map((job, i) => (
          <div key={i} className={styles.job}>
            <div className={styles.jobMeta}>
              <h3 className={styles.company}>{job.company}</h3>
              <span className={styles.role}>{job.role}</span>
            </div>
            <ul className={styles.bullets}>
              {job.bullets.map((b, j) => (
                <li key={j} className={styles.bullet}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
