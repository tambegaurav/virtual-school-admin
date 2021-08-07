import { Paper, Typography } from "@material-ui/core";
import React from "react";

const LectureList = ({ lectures }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 15,
        // alignItems: "center",
        // justifyContent: "center",
        // border: "1px solid black",
      }}
    >
      {/* <h2> Todays Lectures </h2> */}
      {lectures?.map((lecture, id) => (
        <Paper
          key={id}
          style={{ width: "70%", justifyContent: "center" }}
          elevation={4}
        >
          <Typography component="h2" variant="h4">
            {lecture.name}
          </Typography>
          <Typography variant="h5" gutterBottom>
            {`Start:${lecture.start_time} - End:${lecture.end_time}`}
          </Typography>
        </Paper>
      ))}
    </div>
  );
};

export default LectureList;
