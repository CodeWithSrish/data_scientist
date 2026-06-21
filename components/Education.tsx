import styles from './Education.module.css';

type Degree = {
  year: string;
  degree: string;
  institution: string;
};

const degrees: Degree[] = [
  {
    year: '2026',
    degree: 'Diploma in Data Science and Artificial Intelligence',
    institution: 'Boston Institute of Analytics',
  },
  {
    year: '2026',
    degree: 'Bachelor of Technology (B.Tech)',
    institution: 'Electronics and Communication Engineering',
  },
];

export default function Education() {
  return (
    <section className={styles.section} id="education">
      <div className={styles.header}>
        <span className={styles.eyebrow}>Education</span>
        <h2 className={styles.heading}>The foundation.</h2>
      </div>

      <div className={styles.list}>
        {degrees.map((d, i) => (
          <div key={i} className={styles.row}>
            <span className={styles.year}>{d.year}</span>
            <div className={styles.body}>
              <p className={styles.degree}>{d.degree}</p>
              <p className={styles.institution}>{d.institution}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
