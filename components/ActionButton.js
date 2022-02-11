import { Icon, Button } from "@chakra-ui/react";

const ActionButton = ({ onClick, icon, color, title }) => {
  return (
    <Button
      onClick={onClick}
      leftIcon={<Icon as={icon} w={5} h={5} />}
      colorScheme={color}
      variant="solid"
      justifyContent="flex-start"
    >
      {title}
    </Button>
  );
};

export default ActionButton;
