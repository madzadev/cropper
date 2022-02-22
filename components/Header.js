import Router from "next/router";
import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Link href="/">
        <a>
          <img
            className={styles.logo}
            src="/logo.svg"
            alt="logo"
            onClick={() => {
              window.location.pathname === "/" &&
                Router.reload(window.location.pathname);
            }}
          />
          <img
            className={styles.logoText}
            src="/logoText.svg"
            alt="logo-text"
            onClick={() => {
              window.location.pathname === "/" &&
                Router.reload(window.location.pathname);
            }}
          />
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
