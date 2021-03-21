import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Picsum } from "../../components/ImageGallery";
import { useParams } from "react-router-dom";
import ImageOptions from "../../components/ImageOptions";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

export interface ProductProps {}

const Product: React.FC<ProductProps> = () => {
  const [picsum, setPicsum] = useState<Picsum>();
  const [showSnackbar, setShowSnackbar] = useState<boolean>(false);
  let { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id === undefined) return;
    fetch(`https://picsum.photos/id/${id}/info`)
      .then((res) => res.json())
      .then((data) => {
        setPicsum(data);
      });
  }, [id]);

  return (
    <Container>
      <Paper elevation={5} style={{ height: "80vh", marginTop: "20px" }}>
        {picsum ? (
          <Grid container style={{ height: "100%", padding: "10px" }}>
            <Grid
              container
              item
              xs={8}
              justify="center"
              style={{ height: "100%" }}
            >
              <img
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                src={picsum?.download_url}
              />
            </Grid>
            <Grid
              item
              xs={4}
              container
              justify="space-around"
              direction="column"
              zeroMinWidth
              style={{ padding: 20 }}
            >
              <Typography variant="h6">
                <strong>Author: </strong>
                {picsum?.author}
              </Typography>
              <ImageOptions
                item={picsum}
                onAddToCart={() => setShowSnackbar(true)}
              />
            </Grid>
          </Grid>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              height: "100%",
              alignItems: "center",
            }}
          >
            <CircularProgress size={100} />
          </div>
        )}
      </Paper>

      <Snackbar
        open={showSnackbar}
        autoHideDuration={3000}
        onClose={() => setShowSnackbar(false)}
      >
        <MuiAlert elevation={6} variant="filled">
          You have added this item to your cart!
        </MuiAlert>
      </Snackbar>
    </Container>
  );
};

export default Product;
