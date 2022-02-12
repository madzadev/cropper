import {
  Alert,
  AlertIcon,
  //   AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";

const AlertMessage = ({ message }) => {
  return (
    <Alert status="error">
      <AlertIcon />
      {/* <AlertTitle mr={2}>Your browser is outdated!</AlertTitle> */}
      <AlertDescription>{message}</AlertDescription>
      {/* <CloseButton position="absolute" right="8px" top="8px" /> */}
    </Alert>
  );
};

export default AlertMessage;
