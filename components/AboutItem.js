import styles from "./AboutItem.module.css";

const AboutItem = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>This is my question</h1>
      <p>This is my answer</p>
    </div>
  );
};

export default AboutItem;
