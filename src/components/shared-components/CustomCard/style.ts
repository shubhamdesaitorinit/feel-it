import { Box, Skeleton, styled } from "@mui/material";

export const StyledRootBox = styled(Box)<{ border: string }>`
  cursor: pointer;
  border: ${({ border }: { border: string }) => border};
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 12px 40px 2px;
`;

export const StyledDetailsBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#ffffff",
  borderRadius: "0 0 8px 8px",
  width: "100%",
}));

export const StyledSkeleton = styled(Skeleton)`
  border-radius: 10px 10px 0 0;
`;

export const StyledImageBox = styled(Box)`
  height: 200px;
  width: 200px;
`;
