import React from "react";
import { Paper, Typography } from "@material-ui/core";

const Details = () => {
  var students = localStorage.getItem("lectDetails");
  students = JSON.parse(students);
  console.log(students);
  return (
    <div
      style={{
        width: "40%",
        display: "flex",
        flexDirection: "column",
        gap: 15,
        margin: "20px auto",
        // padding: 20,
        alignItems: "center",
        justifyContent: "center",
        // border: "1px solid black",
      }}
    >
      <h1> Students List </h1>
      {students?.map((std, id) => (
        <Paper
          key={id}
          style={{ width: "70%", justifyContent: "center", padding: "10px" }}
          elevation={4}
        >
          <Typography component="h2" variant="h4">
            {std}
          </Typography>
        </Paper>
      ))}
    </div>
  );
};

export default Details;
