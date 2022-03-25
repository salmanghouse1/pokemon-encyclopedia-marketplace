import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import VideoBg from "reactjs-videobg";
import mp4 from "./../assets/videos/video.mp4";

const GameStats = () => {
  return (
    <div>
      <VideoBg>
        <VideoBg.Source src={mp4} type="video/mp4" />
      </VideoBg>
      ;<h1>Game Stats</h1>
      <div class="flex place-items-center space-between flex-wrap">
        <div class="card w-96 glass flex-shrink ml-6 mr-6 mt-6">
          <figure>
            <img
              src="https://api.lorem.space/image/car?w=400&h=225"
              alt="car!"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-white">Life hack</h2>
            <p class="text-secondary">How to park your car at your garage?</p>

            <div class="card-actions justify-end">
              <button class="btn btn-primary">Learn now!</button>
            </div>
            <div class="card-actions justify-start text-secondary">
              <div class="badge badge-outline-primary">Fashion</div>
              <div class="badge badge-outline-primary">Products</div>
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
            <h2 class="card-title text-white">Life hack</h2>
            <p class="text-secondary">How to park your car at your garage?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Learn now!</button>
            </div>
            <div class="card-actions justify-start">
              <div class="badge badge-outline-primary">Fashion</div>
              <div class="badge badge-outline-primary">Products</div>
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
            <h2 class="card-title text-white">Life hack</h2>
            <p class="text-secondary">How to park your car at your garage?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Learn now!</button>
            </div>
            <div class="card-actions justify-start">
              <div class="badge badge-outline-primary">Fashion</div>
              <div class="badge badge-outline-primary">Products</div>
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
            <h2 class="card-title text-white">Life hack</h2>
            <p class="text-secondary">How to park your car at your garage?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Learn now!</button>
            </div>
            <div class="card-actions justify-start">
              <div class="badge badge-outline-primary">Fashion</div>
              <div class="badge badge-outline-primary">Products</div>
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
            <h2 class="card-title text-white">Life hack</h2>
            <p class="text-secondary">How to park your car at your garage?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Learn now!</button>
            </div>
            <div class="card-actions justify-start">
              <div class="badge badge-outline-primary">Fashion</div>
              <div class="badge badge-outline-primary">Products</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameStats;
