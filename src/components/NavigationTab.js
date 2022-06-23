import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LayersIcon from '@material-ui/icons/Layers';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CardGrid from "../components/CardGrid";
import ActivityTable from "../components/ActivityTable";
import AddressChecker from "../components/AddressChecker";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    "aria-controls": `scrollable-prevent-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonPrevent() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="off"
          indicatorColor="secondary"
          textColor="secondary"
          centered
        >
          <Tab
            icon={<LayersIcon />}
            aria-label="phone"
            {...a11yProps(0)}
            label="Items"
          />
          <Tab
            icon={<FavoriteIcon />}
            aria-label="favorite"
            {...a11yProps(1)}
            label="Sales"
          />
          <Tab
            icon={<AccountBalanceWalletIcon />}
            aria-label="favorite"
            {...a11yProps(1)}
            label="Wallet Checker"
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} style={{ marginTop: "30px" }}>
        <CardGrid />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ActivityTable />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AddressChecker />
      </TabPanel>
    </div>
  );
}
