import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import millenium from "../../img/mile.jpeg"

const Login = () => {
  let initialState = {
    email: "",
    password: "",
  };


  const { actions } = useContext(Context);
  const [userLogin, setUserLogin] = useState(initialState);

  let navigate = useNavigate();

  const handleChange = ({ target }) => {
    setUserLogin({
      ...userLogin,
      [target.name]: target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (userLogin.email.trim() != "" && userLogin.password.trim() != "") {
      let response = await actions.login(userLogin);
      if (response) {
        navigate("/access");
      } else {
        alert("Verified your entry");
      }
    } else {
      alert("Fill all");
    }
  };

  return (
    <div className="row justify-content-center d-flex">
      <div className="col-6 col-md-6 d-flex">
        <Link className="navbar-brand" to="/login"><img className="logo-form" src={millenium} /></Link>
        <div className="col-6">
          <h1 className="text-center">Star Wars Guide</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="label-color">Email:</label>
              <input
                type="text"
                name="email"
                className="form-control"
                onChange={handleChange}
                value={userLogin.email}
              />
            </div>
            <div className="form-group">
              <label className="label-color">Password:</label>
              <input
                type="password"
                name="password"
                className="form-control"
                onChange={handleChange}
                value={userLogin.password}
              />
            </div>
            <button className="btn btn-secondary w-100 my-3">Ingresar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
