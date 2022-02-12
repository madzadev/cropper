import styles from "./AboutItem.module.css";

const AboutItem = ({ question, answers, image, order }) => {
  return (
    <div>
      {order % 2 === 0 ? (
        <div className={styles.leftWrapper}>
          <div className={styles.text} style={{ textAlign: "left" }}>
            <h1 className={styles.title}>{question}</h1>
            {answers.map((answer, index) => {
              return <p key={index}>{answer}</p>;
            })}
          </div>
          <div className={styles.imageBox}>
            <img className={styles.image} src={image} alt="image" />
          </div>
        </div>
      ) : (
        <div className={styles.rightWrapper}>
          <div className={styles.imageBox}>
            <img className={styles.image} src={image} alt="image" />
          </div>
          <div className={styles.text} style={{ textAlign: "right" }}>
            <h1 className={styles.title}>{question}</h1>
            {answers.map((answer, index) => {
              return <p key={index}>{answer}</p>;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutItem;
