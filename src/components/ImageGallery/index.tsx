import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import ImageGrid from "../ImageGrid";
import Typography from "@material-ui/core/Typography";
import Pagination from "@material-ui/lab/Pagination";
import linkParser from "parse-link-header";
import Backdrop from "@material-ui/core/Backdrop";

export interface ImageGalleryProps {
  imagesPerPage: number;
}

export interface Picsum {
  id: number;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = (props) => {
  const { imagesPerPage } = props;
  const [data, setData] = useState<Array<Picsum>>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);

  useEffect(() => {
    setIsFetching(true);
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=${imagesPerPage}`)
      .then((res) => {
        const links = linkParser(res.headers.get("link")!);
        links?.next ? setHasNextPage(true) : setHasNextPage(false);
        console.log({ links });
        return res;
      })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsFetching(false);
      });
  }, [page]);

  const handlePageChange = (nextPage: number) => {
    setPage(nextPage);
  };

  return (
    <div>
      <Backdrop open={isFetching} style={{ zIndex: 10, color: "#fff" }}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography gutterBottom variant="h3" component="h2">
            Pick from the following!
          </Typography>
        </Grid>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          {data.map((picsum) => (
            <div style={{ flexBasis: "18%" }} key={picsum.id}>
              <ImageGrid
                id={picsum.id}
                title={picsum.author}
                imgUrl={picsum.download_url}
              />
            </div>
          ))}
        </div>

        {/* I know the api has 40 pages but this should stop showing more if there is no next */}
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <Pagination
            count={hasNextPage ? 40 : page}
            color="primary"
            page={page}
            onChange={(e, page) => handlePageChange(page)}
          />
        </div>
      </Grid>
    </div>
  );
};

export default ImageGallery;
