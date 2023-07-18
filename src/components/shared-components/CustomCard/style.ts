import { Box, Skeleton, styled } from "@mui/material";

export const StyledRootBox = styled(Box)<{ border: string }>`
  border: ${({ border }: { border: string }) => border} !important;
  border-radius: 10px;
`;

export const StyledDetailsBox = styled(Box)`
  background-color: #0e7490;
  border-radius: 0 0 8px 8px;
`;

export const StyledSkeleton = styled(Skeleton)`
  border-radius: 10px 10px 0 0;
`;
