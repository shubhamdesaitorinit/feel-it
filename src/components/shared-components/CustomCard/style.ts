import { Box, Skeleton, styled } from "@mui/material";

export const StyledRootBox = styled(Box)`
  cursor: pointer;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
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
  width: 100%;
`;
