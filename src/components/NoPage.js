import React from "react";
import { Link } from "react-router-dom";
import pageNotFound from "../assets/img/pageNotFound.png";
const NoPage = () => {
  return (
    <div className="row">
      <div className="col-md-12 " style={{ backgroundColor: "#c6fded" }}>
        <div className="row pb-5 text-center">
          <div className="pt-5">
            <img src={pageNotFound} alt="" title="" className="img-fluid" />
          </div>
          <div className="py-3 text-center">
            <Link to="/" className="btn btn-success">
              Go to Home page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoPage;
