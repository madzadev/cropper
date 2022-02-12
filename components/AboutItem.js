import styles from "./AboutItem.module.css";

const AboutItem = ({ question, answers }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{question}</h1>
      {answers.map((answer, index) => {
        return <p key={index}>{answer}</p>;
      })}
    </div>
  );
};

export default AboutItem;
