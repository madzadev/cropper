import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>
        Made with 💖 by{" "}
        <a href="https://github.com/madzadev" target="_blank">
          Madza
        </a>
      </p>
      <p className={styles.text}>
        Powered by{" "}
        <a href="https://nextjs.org" target="_blank">
          NextJS
        </a>
        ,{" "}
        <a href="https://npmjs.com/package/react-cropper" target="_blank">
          React-cropper
        </a>{" "}
        and{" "}
        <a href="https://netlify.com" target="_blank">
          Netlify
        </a>
      </p>
    </div>
  );
};

export default Footer;
