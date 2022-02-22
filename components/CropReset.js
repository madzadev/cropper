import { Button, Icon } from "@chakra-ui/react";
import { RiDeleteBinLine } from "react-icons/ri";

const CropReset = ({ onClick }) => {
  return (
    <Button
      leftIcon={<Icon as={RiDeleteBinLine} w={5} h={5} />}
      width="160px"
      colorScheme="red"
      onClick={onClick}
    >
      Reset Crop
    </Button>
  );
};

export default CropReset;
