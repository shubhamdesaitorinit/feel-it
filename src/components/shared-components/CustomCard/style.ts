import { Box, Skeleton, styled } from "@mui/material";

export const StyledRootBox = styled(Box)<{ border: string }>`
  cursor: pointer;
  border: ${({ border }: { border: string }) => border} !important;
  border-radius: 10px;
  @media (max-width: 850px) {
    display: flex;
    width: 100%;
  }
`;

export const StyledDetailsBox = styled(Box)`
  background-color: #c7d2fe;
  border-radius: 0 0 8px 8px;
  width: 100%;
  @media (max-width: 850px) {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`;

export const StyledSkeleton = styled(Skeleton)`
  border-radius: 10px 10px 0 0;
`;

export const StyledImageBox = styled(Box)`
  height: 300px;
  width: 300px;
  @media (max-width: 850px) {
    height: 100px;
    width: 100px;
  }
`;
