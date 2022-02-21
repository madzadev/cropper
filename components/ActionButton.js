import { Icon, Button, useMediaQuery } from "@chakra-ui/react";

const ActionButton = ({ onClick, icon, color, title }) => {
  const [isMobile] = useMediaQuery("(min-width: 1300px)");
  return (
    <Button
      onClick={onClick}
      leftIcon={isMobile && <Icon as={icon} w={5} h={5} />}
      colorScheme={color}
      variant="solid"
      justifyContent="flex-start"
      // height={[`${text.length > 30 ? "60px" : "40px"}`, "40px"]}
      style={{
        whiteSpace: "normal",
        wordWrap: "break-word",
      }}
    >
      {title}
    </Button>
  );
};

export default ActionButton;
