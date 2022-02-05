// import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Link href="/">
        <a>
          <img className={styles.logo} src="/logo.svg" alt="logo" />
        </a>
      </Link>
      <div className={styles.navItem}>
        <Link href="/features">
          <a>
            <p className={styles.navText}>Features</p>
          </a>
        </Link>
      </div>
      <div className={styles.navItem}>
        <Link href="/about">
          <a>
            <p className={styles.navText}>About</p>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
