import React from "react";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
import { TextField, Button } from "@material-ui/core";

const Student = () => {
  const [classes, setClasses] = useState(0);
  const history = useHistory();
  const [classData, setClassData] = useState([]);

  const handleCancel = () => {
    history.push("/dashboard");
  };

  const handleAdd = (obj) => {
    setClassData([...classData, obj]);
    alert("Student Added!");
  };

  const handleSubmit = () => {
    let obj = {
      classes: [...classData],
    };
    console.log(obj.classes);
    axios
      .post("https://educationgt.herokuapp.com/student/create", obj.classes)
      .then((res) => {
        console.log(res);
        alert("Student Added");
        history.push("/dashboard");
      })
      .catch((err) => console.log(err));
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
      <h2>Add Students Here</h2>

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
          Add More Students
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          style={{
            margin: 10,
          }}
        >
          Save Students
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

export default Student;

function Classes({ onSubmit, key }) {
  const [name, setName] = useState("");
  const [standard, setStandard] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [img, setImg] = useState("");

  const handleAdd = () => {
    let obj = {
      name,
      standard,
      username,
      password,
      img,
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
        name={standard}
        onChange={(e) => setStandard(e.target.value)}
        variant="outlined"
        required
        label={"Standard"}
        type={"text"}
      />
      <TextField
        name={username}
        onChange={(e) => setUsername(e.target.value)}
        variant="outlined"
        required
        label={"Username"}
        type={"text"}
      />
      <TextField
        name={password}
        onChange={(e) => setPassword(e.target.value)}
        variant="outlined"
        required
        label={"Password"}
        type={"password"}
      />
      <TextField
        name={img}
        onChange={(e) => setImg(e.target.value)}
        variant="outlined"
        required
        label={"Image"}
        type={"text"}
      />

      <Button variant="contained" color="secondary" onClick={handleAdd}>
        Add
      </Button>
    </div>
  );
}
