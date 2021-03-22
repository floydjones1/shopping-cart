import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

export interface ProductGridProps {
  id: number;
  title: string;
  imgUrl: string;
}

function getImageWithDimensions(
  imgUrl: string,
  id: number,
  width: number,
  height: number
) {
  const url = new URL(imgUrl);
  return `${url.origin}/id/${id}/${width}/${height}`;
}

const ImageGrid: React.FC<ProductGridProps> = (props) => {
  const { title, imgUrl, id } = props;

  return (
    <Card style={{ width: 240 }}>
      <CardMedia
        component="img"
        style={{ backgroundColor: "#D3D3D3" }}
        image={getImageWithDimensions(imgUrl, id, 1280, 720)}
        height="140"
        width="240"
      />
      <CardContent>
        <Typography variant="h5" component="h3" noWrap>
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          <Link to={`/product/${id}`}>View</Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default ImageGrid;
