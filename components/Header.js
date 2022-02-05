// import Image from "next/image";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.logo} src="/logo.svg" alt="logo" />
      <div className="navItem">
        <p>Features</p>
      </div>
      <div className="navItem">
        <p>About</p>
      </div>
    </div>
  );
};

export default Header;
