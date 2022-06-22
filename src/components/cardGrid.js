import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import {
  Button,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
} from "@material-ui/core";
import { axiosInstance } from "../config";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function ImgMediaCard() {
  const [listings, setListings] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const fetchNftListings = async () => {
      const { data } = axiosInstance.get("/nft/listings").then((res) => {
        setListings(res.data);
      });
    };

    fetchNftListings();
  }, []);

  return (
    <Grid container className={classes.root} spacing={2}>
      {listings.map((listing) => (
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={listing.extra.img}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Meekolony #
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Price: {listing.price}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Details
            </Button>
          </CardActions>
        </Card>
      ))}
    </Grid>
  );
}
