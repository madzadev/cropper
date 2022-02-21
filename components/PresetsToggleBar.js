import styles from "./PresetsToggleBar.module.css";

const PresetsToggleBar = ({ onClick, active }) => {
  return (
    <div className={styles.wrapper} onClick={onClick}>
      <h1>
        {!active
          ? "Open the available presets list"
          : "Pick a present and the bar will close"}
      </h1>
    </div>
  );
};

export default PresetsToggleBar;
