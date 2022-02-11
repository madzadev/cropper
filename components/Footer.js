import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>Made with 💖 by Madza</p>
      <p className={styles.text}>
        Powered by NextJS, React-cropper and Netlify
      </p>
    </div>
  );
};

export default Footer;
