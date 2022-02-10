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
      {/* <p>Image upload UI</p>
      <p>Adjust the crop region</p>
      <p>Move image in canvas (X and Y axis)</p>
      <p>Rotate image (+/- 45 degree step)</p>
      <p>Zoom image in or out (+/- 0.1 step)</p>
      <p>Crop templates to fit popular platforms</p>
      <p>Aspect ratio presets</p>
      <p>Crop overview data</p>
      <p>Image preview</p>
      <p>Download as .png and .jpg formats</p> */}
    </ContentWrapper>
  );
};

export default Features;
