import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import { useCart } from "../../context/cart";
import { Picsum, Size } from "../../types/Picsum";

export interface ImageOptionsProps {
  item: Picsum;
  onAddToCart: () => void;
}

const ImageOptions: React.FC<ImageOptionsProps> = (props) => {
  const { item, onAddToCart } = props;
  const [size, setSize] = useState<Size | string>("");
  const { addToCart } = useCart();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSize(event.target.value as Size);
  };

  const handleAddToCart = () => {
    if (!size) return;
    addToCart({ ...item, size: size as Size, quantity: 1 });
    onAddToCart();
  };

  return (
    <Grid container direction="column" justify="center">
      <Typography variant="h6" component="p" gutterBottom>
        In Stock
      </Typography>
      <InputLabel id="demo-simple-select-outlined-label">Size</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={size}
        onChange={handleChange}
        label="Size"
      >
        <MenuItem value={"small"}>Small $10</MenuItem>
        <MenuItem value={"medium"}>Medium $20</MenuItem>
        <MenuItem value={"large"}>Large $35</MenuItem>
        <MenuItem value={"x-large"}>X-Large $50</MenuItem>
      </Select>

      <Button
        style={{ marginTop: "20px" }}
        variant="contained"
        color="primary"
        onClick={handleAddToCart}
        disabled={!size}
      >
        Add to Cart
      </Button>
    </Grid>
  );
};

export default ImageOptions;
