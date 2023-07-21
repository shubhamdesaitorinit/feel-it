import { CardMedia } from "@mui/material";
import { useEffect, useState } from "react";

const LazyImage = ({ url, lowUrl }: { url: string; lowUrl?: string }) => {
  const [imageData, setImageData] = useState(url);

  useEffect(() => {
    if (lowUrl) {
      setImageData(lowUrl);
      const image = new Image();
      image.src = url;

      image.onload = () => {
        setImageData(url);
      };
    }
  }, [url, lowUrl]);

  return (
    <CardMedia
      component={"img"}
      src={imageData}
      alt="S"
      loading="lazy"
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: "8px",
      }}
    />
  );
};

export default LazyImage;
