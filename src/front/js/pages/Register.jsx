import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import death from "../../img/death.jpg"
import { Link } from "react-router-dom";

const Register = () => {
  let initialState = {
    email: "",
    password: "",
  };

  const { actions } = useContext(Context);
  const [userRegister, setUserRegister] = useState(initialState);

  const handleChange = ({ target }) => {
    setUserRegister({
      ...userRegister,
      [target.name]: target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (userRegister.email.trim() != "" && userRegister.password.trim() != "") {
      let response = await actions.userRegister(userRegister);
      if (response) {
        setUserRegister({ initialState });
        alert("Success");
      } else {
        alert("You have to check");
      }
    } else {
      console.log("All fields are required");
    }
  };

  return (
    <div className="row justify-content-center d-flex">
      <div className="col-6 col-md-6 d-flex">
        <Link className="navbar-brand" to="/login"><img className="logo-star" src={death} /></Link>
        <div className="col-6">
          <h1 className="text-center">Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="label-color">Email:</label>
              <input
                type="text"
                name="email"
                className="form-control"
                onChange={handleChange}
                value={userRegister.email}
              />
            </div>
            <div className="form-group">
              <label className="label-color">Password:</label>
              <input
                type="password"
                name="password"
                className="form-control"
                onChange={handleChange}
                value={userRegister.password}
              />
            </div>
            <button className="btn btn-secondary w-100 my-3">Registrar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
