import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DataDisplay = () => {
  document.body.classList.add("darkblue-bg");

  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isVideoEnded, setIsVideoEnded] = useState(false);

  useEffect(() => {
    console.log("Fetch started");
    axios
      .get(`https://poker-tv-qa.alphabetabox.com/api/videos/${id}`)
      .then((response) => {
        console.log("Fetch response received:", response);
        setData(response.data);
        setLoading(false);
      });
  }, [id]);

  const isDevice = {
    Android: () => navigator.userAgent.includes("Android"),
    iOS: () => /iPhone|iPad|iPod/.test(navigator.userAgent),
  };

  const appDownload = () => {
    // Check if it's a mobile device or desktop
    const isMobile = /android|iphone|ipod|ipad/i.test(navigator.userAgent);

    // Android and iOS download links
    if (isMobile) {
      const url = isDevice.Android()
        ? "https://mobile.pokerbaazi.com/sources/PokerBaazi.apk"
        : "https://apps.apple.com/in/app/pokerbaazi-online-poker/id1369524104";
      window.open(url, "_self");
    } else {
      // Desktop download links for MacOS and Windows
      const isMacOS = navigator.platform.indexOf("Mac") !== -1;
      const url = isMacOS
        ? "https://desktop.pokerbaazi.com/sources/PokerBaazi.dmg"
        : "https://desktop.pokerbaazi.com/sources/PokerBaazi-release.exe";
      window.open(url, "_self");
    }
  };

  if (loading)
    return (
      <div className="black-screen">
        <section>
          <div className="loading loading03">
            <span>L</span>
            <span>O</span>
            <span>A</span>
            <span>D</span>
            <span>I</span>
            <span>N</span>
            <span>G</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
        </section>
      </div>
    );

  return (
    <>
      <div className="mob-show">
        <div className="mainbox">
          <div className="cus-flexbox">
            <img
              src={require("./images/left-line.png")}
              width={40}
              alt="left line"
            />
            <div className="maintxt">My Highlights</div>
            <img
              src={require("./images/right-line.png")}
              width={40}
              alt="right line"
            />
          </div>
          <p className="subtxt">
            Check out this winning hand played by your friend.
          </p>
          <div className="video-box">
            <div className="video-container">
              {/* Video element */}
              {!isVideoEnded ? (
                <video
                  id="myVideo"
                  className="v-prop video v-abs"
                  autoPlay
                  controls
                  muted
                  onEnded={() => setIsVideoEnded(true)}
                >
                  <source src={data.url_en} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : null}

              {/* Thumbnail Image */}
              <img
                className="v-prop thumbnail"
                src={data.thumbnail_en.url}
                alt="Video Thumbnail"
              />

              {/* Play Button */}
              {isVideoEnded && (
                <button
                  onClick={() => setIsVideoEnded(false)}
                  className="replay-btn"
                >
                  <img
                    width={90}
                    src={require("./images/play-btn.png")}
                    alt="play button"
                  />
                </button>
              )}
            </div>
          </div>

          <div className="download-btn-box">
            <button className="blue-btn" onClick={appDownload}>
              Download The App Now
            </button>
          </div>
        </div>
      </div>
      <div className="mob-hide">
        <div className="parent">
          <div className="child child-40">
            <div className="cus-flexbox">
              <img
                src={require("./images/left-line.png")}
                width={40}
                alt="left line"
              />

              <div className="maintxt">My Highlights</div>
              <img
                src={require("./images/right-line.png")}
                width={40}
                alt="right line"
              />
            </div>
            <p className="subtxt" style={{ paddingBottom: "15px" }}>
              Check out this winning hand played by your friend.
            </p>
          </div>
          <div className="child child-60">
            <div className="video-box">
              <div className="video-container">
                {/* Video element */}
                {!isVideoEnded ? (
                  <video
                    id="myVideo"
                    className="v-prop video v-abs"
                    autoPlay
                    controls
                    muted
                    onEnded={() => setIsVideoEnded(true)}
                  >
                    <source src={data.url_en} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : null}

                {/* Thumbnail Image */}
                <img
                  className="v-prop thumbnail"
                  src={data.thumbnail_en.url}
                  alt="Video Thumbnail"
                />

                {/* Play Button */}
                {isVideoEnded && (
                  <button
                    onClick={() => setIsVideoEnded(false)}
                    className="replay-btn"
                  >
                    <img
                      width={90}
                      src={require("./images/play-btn.png")}
                      alt="play button"
                    />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="foot-ctr">
          <p
            className="subtxt"
            style={{ display: "inline-block", paddingRight: "15px" }}
          >
            Download the Pokerbaazi Desktop App
          </p>

          <button
            onClick={appDownload}
            type="button"
            className="btn btn-danger"
            style={{
              borderRadius: "20px",
              fontSize: "12px",
              display: "inline-block",
            }}
          >
            DOWNLOAD NOW
          </button>
        </div>
      </div>
    </>
  );
};

export default DataDisplay;
