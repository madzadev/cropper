import { Alert, AlertIcon, AlertDescription } from "@chakra-ui/react";

const AlertMessage = ({ message }) => {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};

export default AlertMessage;
