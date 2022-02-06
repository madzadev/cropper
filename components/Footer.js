import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <p style={{ fontWeight: "bold" }}>Made with 💖 by Madza</p>
      <p style={{ fontWeight: "bold" }}>Hosted on Netlify</p>
    </div>
  );
};

export default Footer;
