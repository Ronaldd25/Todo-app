import styles from "./header.module.css";
import { RocketIcon } from "../RockedIcon";

export const Header = () => {
  return (
    <header className={styles.header}>
      <RocketIcon />
      <span>to</span>
      <span>do</span>
    </header>
  );
};
