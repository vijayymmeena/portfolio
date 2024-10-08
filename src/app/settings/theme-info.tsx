"use client";

import Image from "next/image";

import styles from "./theme-info.module.css";

interface Props {
  description: string;
  icon: string;
  name: string;
  publisher: string;
  theme: string;
}

const ThemeInfo: React.FC<Props> = ({ icon, name, publisher, theme }) => {
  const setTheme = (theme: string) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <div className={styles.container}>
      <Image src={icon} alt={name} height={100} width={100} />
      <div className={styles.info}>
        <div>
          <h3>{name}</h3>
          <h5>{publisher}</h5>
        </div>
        <button
          onClick={() => {
            setTheme(theme);
          }}
        >
          Set Color Theme
        </button>
      </div>
    </div>
  );
};

export default ThemeInfo;
