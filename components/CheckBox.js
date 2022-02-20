import { Checkbox } from "@chakra-ui/react";

const CheckBox = ({ index, title, isChecked, onChange }) => {
  return (
    <Checkbox
      isChecked={isChecked}
      onChange={onChange}
      defaultIsChecked={index == 1}
    >
      {title}
    </Checkbox>
  );
};

export default CheckBox;
