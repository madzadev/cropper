import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <p style={{ fontWeight: "bold" }}>Made with 💖 by Madza</p>
      <p style={{ fontWeight: "bold" }}>Icons taken from Flaticon and React-icons</p>
      <p style={{ fontWeight: "bold" }}>Powered by NextJS, React-cropper, ChakraUI, GitHub and Netlify</p>
    </div>
  );
};

export default Footer;
