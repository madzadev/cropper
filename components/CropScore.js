import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

const CropScore = ({ value, color, score }) => {
  return (
    <CircularProgress
      value={value}
      color={`${score <= 50 ? "red" : score <= 75 ? "yellow" : "green"}.400`}
      thickness={10}
      size="70px"
    >
      <CircularProgressLabel fontSize="20" fontWeight="bold">
        {score}
      </CircularProgressLabel>
    </CircularProgress>
  );
};

export default CropScore;
