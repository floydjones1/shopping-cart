import * as React from "react";
import { Container, Typography } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import DeleteIcon from "@material-ui/icons/Delete";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import IconButton from "@material-ui/core/IconButton";
import { useCart, Item } from "../../context/cart";

const SIZE_PRICE = {
  small: 10,
  medium: 20,
  large: 35,
  "x-large": 50,
};

function getTotal(items: Item[]): number {
  let total = 0;
  for (const item of items) {
    const sizeCost = SIZE_PRICE[item.size];
    const cost = sizeCost * item.quantity;
    total += cost;
  }
  return total;
}

const Cart: React.FC = () => {
  const { items, incrementItem, removeItem, decrementItem } = useCart();
  return (
    <Container style={{ marginTop: 40 }}>
      <Typography variant="h3" component="h1">
        Your Cart
      </Typography>

      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>Size</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Price</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((row) => (
              <TableRow key={row.id + row.size}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.author}</TableCell>
                <TableCell>{row.size}</TableCell>
                <TableCell>{row.quantity}</TableCell>
                <TableCell>{SIZE_PRICE[row.size]}</TableCell>
                <TableCell align="center">
                  <ButtonGroup
                    variant="text"
                    color="primary"
                    aria-label="text primary button group"
                  >
                    <IconButton
                      aria-label="delete"
                      onClick={() => incrementItem(row.id, row.size)}
                    >
                      <AddIcon />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      onClick={() => decrementItem(row.id, row.size)}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      onClick={() => removeItem(row.id, row.size)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Grid container direction="row-reverse" style={{ marginTop: 10 }}>
        <Grid item xs={2}>
          {items.length > 0 && (
            <Paper style={{ padding: 10 }}>
              <Typography variant="h6" component="p" align="center">
                <strong>Total:</strong> ${getTotal(items)}
              </Typography>
            </Paper>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cart;
