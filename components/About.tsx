import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.left}>
            <span className={styles.eyebrow}>Who I Am</span>
            <h2 className={styles.heading}>
              About Me <em>(she/her)</em>
            </h2>
            <p className={styles.bio}>
              I am a Data Scientist / Data Analyst passionate about
              transforming raw data into strategic business decisions. My expertise
              spans machine learning, statistical analysis, and data engineering,
              utilizing tools like Python, SQL, Scikit-Learn, and Agentic AI.
            </p>
          </div>
          <div className={styles.right}>
            {/* Added a structural wrapper to allow layer depth and frame effects */}
            <div className={styles.imageWrapper}>
              <img
                src="portrait.jpg" // Replace with your actual image path
                alt="Srishti Rajput"
                className={styles.portrait}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
