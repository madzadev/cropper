import styles from "./FeatureCard.module.css";

const FeatureCard = ({title, description})=>{
    return (
<div className={styles.wrapper}>
    <h1 className={styles.title}>{title}</h1>
    <p className={styles.description}>{description}</p>
</div>
    )
}

export default FeatureCard;