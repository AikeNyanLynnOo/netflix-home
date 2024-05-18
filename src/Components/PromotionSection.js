import { Typography, Grid } from "@mui/material";
import React from "react";

function PromoSection({ isTextFirst, title, subTitle, src, isVideo }) {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        mx: "auto",
        px: 20,
        py: 18,
      }}
    >
      {isTextFirst && (
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            width: "50%",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 600,
              mb: 3,
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              mb: 3,
            }}
          >
            {subTitle}
          </Typography>
        </Grid>
      )}
      {src && (
        <Grid item xs={12} md={4}>
          {(isVideo && (
            <video
              style={{
                width: "100%",
              }}
              autoplay
              playsinline
              muted
              loop
            >
              <source src={src} type="video/mp4" />
            </video>
          )) || (
            <img
              src={src}
              alt={`alt-${src}`}
              style={{
                width: "100%",
                objectFit: "cover",
              }}
            />
          )}
        </Grid>
      )}
      {!isTextFirst && (
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            width: "50%",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 600,
              mb: 3,
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              mb: 3,
            }}
          >
            {subTitle}
          </Typography>
        </Grid>
      )}
    </Grid>
  );
}

export default PromoSection;
