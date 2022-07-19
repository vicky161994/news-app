import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

function News(props) {
  const { news } = props;
  return (
    <a href={news.webUrl} target="_blank">
      <Card sx={{ maxWidth: "100%" }}>
        <CardMedia
          component="img"
          height="140"
          image="https://www.rabrotech.com/upload/default/image-not-found.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ height: "39px" }}
          >
            {news.webTitle}
          </Typography>
        </CardContent>
      </Card>
    </a>
  );
}

export default News;
