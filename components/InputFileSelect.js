import styles from "./InputFileSelect.module.css";
import { Button, Icon } from "@chakra-ui/react";
import { MdUpload } from "react-icons/md";

const InputFileSelect = ({ onChange }) => {
  return (
    <form>
      <div className={styles.wrapper}>
        <Button
          rightIcon={<Icon as={MdUpload} w={8} h={8} />}
          size="lg"
          width="280px"
          height="60px"
          colorScheme="teal"
          mt="50"
          mb="2"
        >
          Select Image
        </Button>
        <p>Supported formats: .jpg, .png</p>

        <input type="file" className={styles.fileUpload} onChange={onChange} />
      </div>
    </form>
  );
};

export default InputFileSelect;
