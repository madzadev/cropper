import styles from "./InputFileSelect.module.css";

const InputFileSelect = ({ onChange }) => {
  return (
    <form>
      <div className={styles.wrapper}>
        Open
        <input type="file" className={styles.fileUpload} onChange={onChange} />
      </div>
    </form>
  );
};

export default InputFileSelect;
