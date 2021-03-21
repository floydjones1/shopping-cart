import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ImageGallery from "../components/ImageGallery";

const useStyles = makeStyles({
  root: {
    height: "100%",
  },
  section1: {
    height: "35vh",
    background: "#FFFFFF",
    padding: "2.5rem 0rem",
  },
  section2: {
    background: "#F4F7FC",
    padding: "2.5rem 0rem",
    minHeight: "100%",
  },
});

const Home = () => {
  const [data, setData] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    fetch("")
      .then((res) => res.json())
      .then((data) => {});
  }, []);

  return (
    <>
      <div className={classes.section1}>
        <Container maxWidth="lg" className={classes.root}>
          <Typography align="center" variant="h1">
            Welcome to Image Gallery Studio
          </Typography>
        </Container>
      </div>
      <div className={classes.section2}>
        <Container maxWidth="lg" className={classes.root}>
          <ImageGallery imagesPerPage={25} />
        </Container>
      </div>
    </>
  );
};

export default Home;
