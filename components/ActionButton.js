import { Icon, Button } from "@chakra-ui/react";

const ActionButton = ({ onClick, icon, color, title }) => {
  return (
    <Button
      onClick={onClick}
      leftIcon={<Icon as={icon} />}
      colorScheme={color}
      variant="solid"
    >
      {title}
    </Button>
  );
};

export default ActionButton;
