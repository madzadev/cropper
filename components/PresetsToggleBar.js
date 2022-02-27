import styles from "./PresetsToggleBar.module.css";
import { Icon, Button } from "@chakra-ui/react";

const PresetsToggleBar = ({
  onClick,
  active,
  openIcon,
  closeIcon,
  isTablet,
}) => {
  return (
    <Button
      onClick={onClick}
      rightIcon={<Icon as={!active ? openIcon : closeIcon} w={5} h={5} />}
      className={styles.wrapper}
      variant="solid"
      justifyContent="flex-start"
      isFullWidth={true}
      style={{
        whiteSpace: "normal",
        wordWrap: "break-word",
        display: `${isTablet ? "block" : "none"}`,
        backgroundColor: "#e5eafe",
      }}
    >
      {!active ? "Open Presets List" : "Close Presets List"}
    </Button>
  );
};

export default PresetsToggleBar;
