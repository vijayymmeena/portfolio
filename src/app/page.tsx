import Link from "next/link";

import Illustration from "@/icons/Illustration";

import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>I BUILD</h1>
          <h1>SOFTWARES</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>
              Vijay Meena <span className="opacity-20">(Samar)</span>
            </h1>
            <h6 className={styles.bio}>
              Full Stack Developer & Cloud Administrator
            </h6>
            <Link href="/projects">
              <button className={styles.button}>View Work</button>
            </Link>
            <Link href="/contact">
              <button className={styles.outlined}>Contact Me</button>
            </Link>
          </div>
          <Illustration className={styles.illustration} />
        </div>
      </div>
    </>
  );
}
