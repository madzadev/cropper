import styles from "./DescriptionCard.module.css";

const DescriptionCard = ({ image, description }) => {
  return (
    <div className={styles.wrapper}>
      <img src={image} alt="img" className={styles.image} />
      <h3 className={styles.description}>{description}</h3>
    </div>
  );
};

export default DescriptionCard;
