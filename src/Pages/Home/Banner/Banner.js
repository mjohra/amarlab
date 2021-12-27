import React from "react";
import me from '../../../images/mou.png';
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <div className="container-fluid content">
        <div className="row">
        <div className="col-lg-4 col-md-4 col-12 self ms-lg-5">
            <img className="myself ms-lg-5 mb-lg-5" src={me} alt="" />
          </div>
          <div className="col-lg-5 col-md-6 col-12 banner ms-lg-5 me-lg-5">
            <div className="mt-lg-2 ">
              <h1 className="heading-style">
                Myself <span>Mehjabin Johra</span>
              </h1>
              <h5>Junior Web Developer || Programmer</h5>
              <h4>A self-motivated and enthusiastic web developer with a deep interest in JavaScript. I think I am fully efficient, dedicated, dynamic, quick responder, and also very friendly. I believe hard work beats talent when talent doesn't work hard.</h4>
            </div>           
          </div>
         
         
        </div>
      </div>
    </>
  );
};

export default Banner;