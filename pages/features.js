import ContentWrapper from "../components/ContentWrapper";
import styles from "../styles/Features.module.css";

import {features} from "../data/features.js"

const Features = () => {
  return (
    <ContentWrapper>
      <h1 className={styles.title}>The features of the CropScore</h1>
      <div className={styles.wrapper}>
{features.map((feature, index)=>{
  return (
    <ContentWrapper title={feature.title} description={feature.description}/>
  )
})}
      </div>
    </ContentWrapper>
  );
};

export default Features;
