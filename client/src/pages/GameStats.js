import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

const GameStats = () => {
  const backgroundContainer = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: backgroundContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/img/lott/vid.json"),
    });
  }, []);

  return (
    <div>
      <video autoplay muted loop id="myVideo">
        <source src="../assets/videos/video.mp4" type="video/mp4" />
      </video>
      <div class="insideContent">
        <h1>Game Stats</h1>
        <div class="flex place-items-center space-between flex-wrap">
          <div class="card w-96 glass flex-shrink ml-6 mr-6 mt-6">
            <figure>
              <img
                src="https://api.lorem.space/image/car?w=400&h=225"
                alt="car!"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Life hack</h2>
              <p>How to park your car at your garage?</p>

              <div class="card-actions justify-end">
                <button class="btn btn-primary">Learn now!</button>
              </div>
              <div class="card-actions justify-start">
                <div class="badge badge-outline">Fashion</div>
                <div class="badge badge-outline">Products</div>
              </div>
            </div>
          </div>

          <div class="card w-96 glass flex-shrink ml-6 mr-6 mt-6">
            <figure>
              <img
                src="https://api.lorem.space/image/car?w=400&h=225"
                alt="car!"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Life hack</h2>
              <p>How to park your car at your garage?</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Learn now!</button>
              </div>
              <div class="card-actions justify-start">
                <div class="badge badge-outline">Fashion</div>
                <div class="badge badge-outline">Products</div>
              </div>
            </div>
          </div>

          <div class="card w-96 glass flex-shrink ml-6 mr-6 mt-6">
            <figure>
              <img
                src="https://api.lorem.space/image/car?w=400&h=225"
                alt="car!"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Life hack</h2>
              <p>How to park your car at your garage?</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Learn now!</button>
              </div>
              <div class="card-actions justify-start">
                <div class="badge badge-outline">Fashion</div>
                <div class="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
          <div class="card w-96 glass flex-shrink ml-6 mr-6 mt-6">
            <figure>
              <img
                src="https://api.lorem.space/image/car?w=400&h=225"
                alt="car!"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Life hack</h2>
              <p>How to park your car at your garage?</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Learn now!</button>
              </div>
              <div class="card-actions justify-start">
                <div class="badge badge-outline">Fashion</div>
                <div class="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
          <div class="card w-96 glass flex-shrink ml-6 mr-6 mt-6">
            <figure>
              <img
                src="https://api.lorem.space/image/car?w=400&h=225"
                alt="car!"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Life hack</h2>
              <p>How to park your car at your garage?</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Learn now!</button>
              </div>
              <div class="card-actions justify-start">
                <div class="badge badge-outline">Fashion</div>
                <div class="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameStats;
