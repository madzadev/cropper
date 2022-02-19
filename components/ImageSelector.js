import styles from "./ImageSelector.module.css";
import { Button, Icon } from "@chakra-ui/react";
import { MdUpload } from "react-icons/md";

const ImageSelector = ({ onChange }) => {
  return (
    <form>
      <div className={styles.wrapper}>
        <img
          className={styles.selectLogo}
          src="/graphics/layers.png"
          alt="select"
        />
        <Button
          className={styles.button}
          rightIcon={<Icon as={MdUpload} w={8} h={8} />}
          size="lg"
          colorScheme="teal"
        >
          Select Image
        </Button>
        <p>Supported formats: .jpg, .png</p>

        <input
          type="file"
          className={styles.fileUpload}
          onChange={onChange}
          accept=".jpg, .png"
        />
      </div>
    </form>
  );
};

export default ImageSelector;
