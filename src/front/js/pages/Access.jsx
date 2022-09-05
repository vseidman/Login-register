import React from "react";
import skywalker from "../../img/luke.jpg"

const Access = () => {

  return (
    <>
      <>
        <div className="">
          <div className="card my-3 card-css">
            <img src={skywalker} className="card-img-top logo-luke" />
            <div className="card-body">
              <h5 className="card-title ">Luke Skywalker</h5>
              <div className="card-footer">
                <ul>
                  <li>Eye color: Blue</li>
                  <li>Hair color: Blonde</li>
                  <li>Lightsaber: Green</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Access;
