import { Icon, IconButton, Button, useMediaQuery } from "@chakra-ui/react";

const ActionButton = ({ onClick, icon, color, title }) => {
  const [isMobile] = useMediaQuery("(min-width: 1500px)");
  return isMobile ? (
    <Button
      onClick={onClick}
      leftIcon={<Icon as={icon} w={5} h={5} />}
      colorScheme={color}
      variant="solid"
      justifyContent="flex-start"
      style={{
        whiteSpace: "normal",
        wordWrap: "break-word",
      }}
    >
      {title}
    </Button>
  ) : (
    <IconButton
      onClick={onClick}
      aria-label="icon"
      colorScheme={color}
      variant="solid"
      icon={<Icon as={icon} />}
      style={{ width: "100%", height: "40px", padding: "8px 0" }}
      fontSize="22px"
      size="sm"
    />
  );
};

export default ActionButton;
