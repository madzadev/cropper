// import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
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
                router.reload(window.location.pathname);
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
