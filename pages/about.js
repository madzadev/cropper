import styles from "../styles/About.module.css";
import ContentWrapper from "../components/ContentWrapper";
import AboutItem from "../components/AboutItem";

import { about } from "../data/about.js";

const About = () => {
  return (
    <ContentWrapper>
      <h1 className={styles.title}>CropScore FAQ</h1>
      <div className={styles.wrapper}>
        <div className={styles.imageArea}>
          <img src="/graphics/map.png" alt="" className={styles.image} />
        </div>
        <div className={styles.textArea}>
          {about.map((item, index) => {
            return (
              <AboutItem
                key={index}
                order={index}
                question={item.question}
                answers={item.answers}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    </ContentWrapper>
  );
};

export default About;
