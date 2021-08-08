import { Paper, Typography, Button } from "@material-ui/core";
import React from "react";
import { deletePost } from "../../Redux/Data/actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const LectureList = ({ lectures }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deletePost(id));
  };

  const handleShow = (lecture) => {
    localStorage.setItem("lectDetails", JSON.stringify(lecture.students));
    console.log(lecture.students);
    history.push(`/lecture/${lecture._id}`);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 15,
        // padding: 20,
        // alignItems: "center",
        // justifyContent: "center",
        // border: "1px solid black",
      }}
    >
      {/* <h2> Todays Lectures </h2> */}
      {lectures?.map((lecture, id) => (
        <Paper
          key={id}
          style={{ width: "70%", justifyContent: "center", padding: "10px" }}
          elevation={4}
        >
          <Typography component="h2" variant="h4">
            {lecture.name}
          </Typography>
          <Typography variant="h5" gutterBottom>
            {`Start:${lecture.start_time} - End:${lecture.end_time}`}
          </Typography>
          <Button
            variant="contained"
            // className={classes.logout}
            color="secondary"
            onClick={() => handleShow(lecture)}
          >
            SEE DETAILS
          </Button>
          <Button
            variant="contained"
            // className={classes.logout}
            style={{ marginLeft: 20 }}
            color="secondary"
            onClick={() => handleDelete(lecture._id)}
          >
            DELETE
          </Button>
        </Paper>
      ))}
    </div>
  );
};

export default LectureList;
