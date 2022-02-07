import { Checkbox } from "@chakra-ui/react";

const CheckBox = ({ index, title, onChange }) => {
  return (
    <Checkbox onChange={onChange} defaultIsChecked={index == 1} checked={false}>
      {title}
    </Checkbox>
  );
};

export default CheckBox;
