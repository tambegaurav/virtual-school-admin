import React from "react";
import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";

const Dashboard = () => {
  return (
    <div
      style={{
        display: "grid",
        margin: "30px",
        gridTemplateColumns: "4fr 10fr",
        gap: "20px",
      }}
    >
      <div
        style={{
          border: "1px solid black",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Button
          component={Link}
          to="/createLecture"
          variant="contained"
          color="primary"
          style={{
            maxWidth: "80%",
            minWidth: "80%",
            margin: 10,
          }}
        >
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/17/17132.svg"
            alt="Create"
            width="20px"
            height="20px"
          />
          <span style={{ marginLeft: 20 }}> Create Lectures </span>
        </Button>

        <Button
          component={Link}
          to="/createStudent"
          variant="contained"
          color="primary"
          style={{
            maxWidth: "80%",
            minWidth: "80%",
            margin: 10,
          }}
        >
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/17/17132.svg"
            alt="Create"
            width="20px"
            height="20px"
          />
          <span style={{ marginLeft: 20 }}> Create Students </span>
        </Button>
      </div>
      <div style={{ border: "1px solid black" }}>Right</div>
    </div>
  );
};

export default Dashboard;
