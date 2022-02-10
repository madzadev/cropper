import styles from "./FeatureCard.module.css";

const FeatureCard = ({title, description})=>{
    return (
<div className={styles.wrapper}>
    <h1>{title}</h1>
    <p>{description}</p>
</div>
    )
}

export default FeatureCard;