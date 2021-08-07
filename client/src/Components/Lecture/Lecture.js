import React from "react";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
import { TextField, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { createLecture } from "../../Redux/Data/actions";

const Lecture = () => {
  const [classes, setClasses] = useState(0);
  const history = useHistory();
  const [classData, setClassData] = useState([]);
  const dispatch = useDispatch();

  const handleCancel = () => {
    history.push("/dashboard");
  };

  const handleAdd = (obj) => {
    setClassData([...classData, obj]);
    alert("Lecture Added!");
  };

  const handleSubmit = () => {
    let obj = {
      classes: [...classData],
    };
    console.log(obj.classes);
    dispatch(createLecture(obj.classes));
    history.push("/dashboard");
  };

  const addClasses = () => {
    let getClasses = [];
    for (let i = 0; i < classes; i++) {
      getClasses.push(
        <div key={i}>
          <Classes onSubmit={handleAdd} />
        </div>
      );
    }
    return getClasses;
  };
  return (
    <div>
      <h2>Add Lecture Here</h2>

      <h3>Lectures</h3>
      <Classes onSubmit={handleAdd} />
      {addClasses()}
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setClasses(classes + 1)}
          style={{
            margin: 10,
          }}
        >
          Add More Lectures
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          style={{
            margin: 10,
          }}
        >
          Save Lectures
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleCancel}
          style={{
            margin: 10,
          }}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default Lecture;

function Classes({ onSubmit, key }) {
  const [name, setName] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [zoom, setZoom] = useState("");
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const handleAdd = () => {
    let obj = {
      name,
      start_time: start,
      end_time: end,
      zoom_link: zoom,
      teacher_id: user?._id,
    };
    console.log(obj);
    onSubmit(obj);
  };

  return (
    <div
      key={key}
      style={{ display: "flex", justifyContent: "center", gap: 20, margin: 20 }}
    >
      <TextField
        name={name}
        onChange={(e) => setName(e.target.value)}
        variant="outlined"
        required
        label={"Name"}
        autoFocus={true}
        type={"text"}
      />
      <TextField
        name={start}
        onChange={(e) => setStart(e.target.value)}
        variant="outlined"
        required
        label={"Start Time"}
        type={"time"}
        InputLabelProps={{
          shrink: true,
        }}
      />

      <TextField
        name={end}
        onChange={(e) => setEnd(e.target.value)}
        variant="outlined"
        required
        label={"End Time"}
        type={"time"}
        InputLabelProps={{
          shrink: true,
        }}
      />

      <TextField
        name={zoom}
        onChange={(e) => setZoom(e.target.value)}
        variant="outlined"
        required
        label={"Meeting Link "}
        type={"text"}
      />

      <Button variant="contained" color="secondary" onClick={handleAdd}>
        Add
      </Button>
    </div>
  );
}
