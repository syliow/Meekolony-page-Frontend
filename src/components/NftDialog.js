import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { CardMedia } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function NftDialog(props) {
  const { handleOpen, handleClose, nftDetails, isLoading } = props;
  const classes = useStyles();

  return (
    <Dialog
      fullScreen
      open={handleOpen}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {nftDetails?.metadataTask?.result?.name}
          </Typography>
        </Toolbar>
      </AppBar>

      {isLoading ? (
        <Box>
          <Typography>Please Wait...</Typography>
          <LinearProgress />
        </Box>
      ) : (
        <>
          <CardMedia
            image={nftDetails?.metadataTask?.result?.image}
            style={{ width: 500, height: 500 }}
          />
          <List>
            <ListItem button>
              <Typography>
                {nftDetails?.metadataTask?.result?.attributes[0]?.trait_type}{" "}
                {": "}
                {nftDetails?.metadataTask?.result?.attributes[0]?.value}
              </Typography>
            </ListItem>
            <Divider />
            <ListItem button>
              <Typography>
                {nftDetails?.metadataTask?.result?.attributes[1]?.trait_type}{" "}
                {": "}
                {nftDetails?.metadataTask?.result?.attributes[1]?.value}
              </Typography>
            </ListItem>
            <Divider />
            <ListItem button>
              <Typography>
                {nftDetails?.metadataTask?.result?.attributes[2]?.trait_type}{" "}
                {": "}
                {nftDetails?.metadataTask?.result?.attributes[2]?.value}
              </Typography>
            </ListItem>
            <Divider />
            <ListItem button>
              <Typography>
                {nftDetails?.metadataTask?.result?.attributes[3]?.trait_type}{" "}
                {": "}
                {nftDetails?.metadataTask?.result?.attributes[3]?.value}
              </Typography>
            </ListItem>
            <Divider />
            <ListItem button>
              <Typography>
                {nftDetails?.metadataTask?.result?.attributes[4]?.trait_type}{" "}
                {": "}
                {nftDetails?.metadataTask?.result?.attributes[4]?.value}
              </Typography>
            </ListItem>
            <Divider />
            <ListItem button>
              <Typography>
                {nftDetails?.metadataTask?.result?.attributes[5]?.trait_type}{" "}
                {": "}
                {nftDetails?.metadataTask?.result?.attributes[5]?.value}
              </Typography>
            </ListItem>
            <Divider />
            <ListItem button>
              <Typography>
                {nftDetails?.metadataTask?.result?.attributes[6]?.trait_type}{" "}
                {": "}
                {nftDetails?.metadataTask?.result?.attributes[6]?.value}
              </Typography>
            </ListItem>
            <Divider />
            <ListItem button>
              <Typography>
                {nftDetails?.metadataTask?.result?.attributes[7]?.trait_type}{" "}
                {": "}
                {nftDetails?.metadataTask?.result?.attributes[7]?.value}
              </Typography>
            </ListItem>

            <Divider />
            <ListItem button>
              <Typography>
                {nftDetails?.metadataTask?.result?.attributes[8]?.trait_type}{" "}
                {": "}
                {nftDetails?.metadataTask?.result?.attributes[8]?.value}
              </Typography>
            </ListItem>
            <Divider />
            <ListItem button>
              <Typography>
                {nftDetails?.metadataTask?.result?.attributes[9]?.trait_type}{" "}
                {": "}
                {nftDetails?.metadataTask?.result?.attributes[9]?.value}
              </Typography>
            </ListItem>
            <Divider />
            <ListItem button>
              <Typography>
                {nftDetails?.metadataTask?.result?.attributes[10]?.trait_type}{" "}
                {": "}
                {nftDetails?.metadataTask?.result?.attributes[10]?.value}
              </Typography>
            </ListItem>
            <Divider />
            <ListItem button>
              <Typography>
                {nftDetails?.metadataTask?.result?.attributes[11]?.trait_type}{" "}
                {": "}
                {nftDetails?.metadataTask?.result?.attributes[11]?.value}
              </Typography>
            </ListItem>
          </List>
        </>
      )}
    </Dialog>
  );
}
