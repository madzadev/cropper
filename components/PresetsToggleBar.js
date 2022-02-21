import styles from "./PresetsToggleBar.module.css";

const PresetsToggleBar = ({ onClick, active }) => {
  return (
    <div className={styles.wrapper} onClick={onClick}>
      <h1>{!active ? "Pick a Preset" : "IDK"}</h1>
    </div>
  );
};

export default PresetsToggleBar;
