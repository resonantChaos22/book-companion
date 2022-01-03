import React from "react";
import { makeStyles } from "@material-ui/core";
import { WelcomePage, AddPeoplePage } from "./pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import api from "./config/axios";

const App = () => {
  const classes = useStyles();
  api.get("/users/all").then((res) => console.log(res));
  return (
    <div className={classes.root}>
      <Router>
        <Routes>
          <Route exact path="/" element={WelcomePage()} />
          <Route path="/add/people" element={AddPeoplePage()} />
        </Routes>
      </Router>
    </div>
  );
};

const useStyles = makeStyles({
  root: {
    textAlign: "center",
  },
});

export default App;
