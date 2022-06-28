import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import { axiosInstance } from "../config";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function AddressChecker() {
  const classes = useStyles();

  const [address, setAddress] = React.useState("");
  const [isLoading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState();

  const handleClearUserInput = () => {
    setAddress("");
    setResult();
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await axiosInstance
      .get("/nft/checkAddress", {
        params: {
          userAddress: address,
        },
      })
      .then((res) => {
        if (res) {
          setResult(res.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err, " error");
      });
  };

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        label="User Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <Button
        variant="contained"
        type="submit"
        color="primary"
        style={{ marginTop: "20px" }}
        onClick={handleSubmit}
      >
        Submit
      </Button>
      <Button
        variant="outlined"
        color="primary"
        style={{ marginTop: "20px" }}
        onClick={handleClearUserInput}
      >
        Clear
      </Button>

      {/* {isLoading ? (
        <Typography variant="h6" style={{ marginTop: "20px" }}>
          Loading...
        </Typography>
      ) : (
        <Typography>Please enter your address.</Typography>
      )} */}
      <Typography>
        Total Meekolony NFT: {result ? result.length : "No Result"}
      </Typography>
      {result && result.map((nft) => <Typography>- {nft.name}</Typography>)}
    </form>
  );
}
