import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import VideoBg from "reactjs-videobg";
import mp4 from "./../assets/videos/video.mp4";

const CardPrices = () => {
  if (Auth.loggedIn()) {
    return (
      <div>
        <h1>Card Prices</h1>
        <div className="flex place-items-center space-between flex-wrap">
          <div className="card w-96 glass flex-shrink ml-6 mr-6 mt-6">
            <figure>
              <img
                src="https://api.lorem.space/image/car?w=400&h=225"
                alt="car!"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white">Life hack</h2>
              <p className="text-secondary">
                How to park your car at your garage?
              </p>

              <div className="card-actions justify-end">
                <button className="btn btn-primary">Learn now!</button>
              </div>
              <div className="card-actions justify-start text-secondary">
                <div className="badge badge-outline-primary">Fashion</div>
                <div className="badge badge-outline-primary">Products</div>
              </div>
            </div>
          </div>

          <div className="card w-96 glass flex-shrink ml-6 mr-6 mt-6">
            <figure>
              <img
                src="https://api.lorem.space/image/car?w=400&h=225"
                alt="car!"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white">Life hack</h2>
              <p className="text-secondary">
                How to park your car at your garage?
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Learn now!</button>
              </div>
              <div className="card-actions justify-start">
                <div className="badge badge-outline-primary">Fashion</div>
                <div className="badge badge-outline-primary">Products</div>
              </div>
            </div>
          </div>

          <div className="card w-96 glass flex-shrink ml-6 mr-6 mt-6">
            <figure>
              <img
                src="https://api.lorem.space/image/car?w=400&h=225"
                alt="car!"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white">Life hack</h2>
              <p className="text-secondary">
                How to park your car at your garage?
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Learn now!</button>
              </div>
              <div className="card-actions justify-start">
                <div className="badge badge-outline-primary">Fashion</div>
                <div className="badge badge-outline-primary">Products</div>
              </div>
            </div>
          </div>
          <div className="card w-96 glass flex-shrink ml-6 mr-6 mt-6">
            <figure>
              <img
                src="https://api.lorem.space/image/car?w=400&h=225"
                alt="car!"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white">Life hack</h2>
              <p className="text-secondary">
                How to park your car at your garage?
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Learn now!</button>
              </div>
              <div className="card-actions justify-start">
                <div className="badge badge-outline-primary">Fashion</div>
                <div className="badge badge-outline-primary">Products</div>
              </div>
            </div>
          </div>
          <div className="card w-96 glass flex-shrink ml-6 mr-6 mt-6">
            <figure>
              <img
                src="https://api.lorem.space/image/car?w=400&h=225"
                alt="car!"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white">Life hack</h2>
              <p className="text-secondary">
                How to park your car at your garage?
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Learn now!</button>
              </div>
              <div className="card-actions justify-start">
                <div className="badge badge-outline-primary">Fashion</div>
                <div className="badge badge-outline-primary">Products</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    <div>
      <p>
        Please <Link to="/login">Login</Link>
      </p>
    </div>;
  }
};

export default CardPrices;
