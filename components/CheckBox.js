import { Checkbox } from "@chakra-ui/react";

const CheckBox = ({ cropper, index, title, width, height }) => {
  return (
    <Checkbox
      onChange={() => {
        if (isNaN(cropper.options.aspectRatio)) {
          cropper.setAspectRatio(width / height);
        } else {
          cropper.setAspectRatio(NaN);
        }
      }}
      defaultIsChecked={!index}
    >
      {title}
    </Checkbox>
  );
};

export default CheckBox;
