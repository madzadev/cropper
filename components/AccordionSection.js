import {
  Stack,
  Box,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const AccordionSection = ({ title, children }) => {
  return (
    <AccordionItem borderRadius={5}>
      <h2>
        <AccordionButton
          _expanded={{ borderRadius: "5" }}
          style={{ backgroundColor: "#E5EAFE" }}
        >
          <Box flex="1" textAlign="left" fontSize="18" fontWeight="600">
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <Stack>{children}</Stack>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default AccordionSection;
