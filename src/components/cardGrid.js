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
import NftDialog from "./NftDialog";

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
  const [startIndex, setStartIndex] = React.useState(0);
  const [isLoading, setLoading] = React.useState(false);
  const [openNftInfo, setOpenNftInfo] = useState(false);
  const [nftDetails, setNftDetails] = useState({});
  const classes = useStyles();

  const handleFetchListings = async () => {
    setStartIndex((prev) => prev + 20);
  };

  const handleOpenDialog = (nft) => {
    setOpenNftInfo(true);
    axiosInstance
      .get("/nft/getData", {
        params: {
          mintAddress: nft.tokenMint,
        },
      })
      .then((res) => {
        setNftDetails(res.data);
      })
      .catch((err) => {
        console.log(err, " error");
      });
  };
  const handleCloseNftInfo = () => {
    setOpenNftInfo(false);
    setNftDetails({});
  };

  useEffect(() => {
    const fetchNftListings = async () => {
      setLoading(true);
      const { data } = axiosInstance
        .get("/nft/listings", {
          params: {
            startIndex,
          },
        })
        .then((res) => {
          setListings((prev) => [...prev, ...res.data]);
          setLoading(false);
        });
    };
    setInterval(fetchNftListings(), 60000)
    
  }, [startIndex]);

  return (
    <>
      <Grid container className={classes.root} spacing={2}>
        {listings.map((listing) => (
          <Card className={classes.root} style={{margin:"50px"}}>
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
                  Rank: {listing.rarity.moonrank.rank}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Price: {listing.price}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => handleOpenDialog(listing)}
              >
                Details
              </Button>
            </CardActions>
          </Card>
        ))}
      </Grid>
      <Button
        onClick={handleFetchListings}
        style={{ backgroundColor: "gray", marginTop: "30px" }}
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "Load More"}
      </Button>

      <NftDialog
        handleOpen={openNftInfo}
        handleClose={handleCloseNftInfo}
        nftDetails={nftDetails}
        loading={isLoading}
      />
    </>
  );
}
