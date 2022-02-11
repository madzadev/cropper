import styles from "./ImageReset.module.css";
import { Button, Icon } from "@chakra-ui/react";
import { MdUpload } from "react-icons/md";

const ImageSelector = ({ onChange }) => {
  return (
    <div className={styles.wrapper}>
      <Button
        rightIcon={<Icon as={MdUpload} w={4} h={4} />}
        width="150px"
        colorScheme="teal"
      >
        Select Image
      </Button>

      <input type="file" className={styles.fileUpload} onChange={onChange} />
    </div>
  );
};

export default ImageSelector;
