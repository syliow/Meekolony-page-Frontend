import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await axiosInstance.get("/nft/checkAddress", {
      params: {
        userAddress: address,
      },
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
    </form>
  );
}
