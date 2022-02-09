import { Checkbox } from "@chakra-ui/react";

const CheckBox = ({ index, title, isChecked, onChange }) => {
  // return (
  //   <input type="checkbox" onChange={onChange} defaultChecked={index == 1} />
  // );
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
