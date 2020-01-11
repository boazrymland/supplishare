import React from "react";
import "./App.scss";
import { makeStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const App: React.FC = () => {
  return (
    <div className="app-wrapper">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" color="inherit">
            React & Material-UI Sample Application
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="app-content-wrapper">Content will be here</div>
    </div>
  );
};

export default App;
