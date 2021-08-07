import React from "react";
import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchposts } from "../../Redux/Data/actions";
import LectureList from "../LectureList/LectureList";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const { lectures } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  console.log(lectures);

  React.useEffect(() => {
    dispatch(fetchposts());
  }, [dispatch]);
  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
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
      <div>
        <LectureList lectures={lectures} />
      </div>
    </div>
  );
};

export default Dashboard;
