import React from "react";
import "./LessonVideo.css";

import YouTube from "react-youtube";

type Props = {
  videoIdData?: string;
};

const LessonVideo = ({ videoIdData }: Props) => {
  const videoId: string = videoIdData || "S_A_VVSQdpU";

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  const onReady = (event: any) => {
    event.target.playVideo();
  };

  const onEnd = () => {
    console.log("Video ended");
  };
  return (
    <div className="lesson-video">
      <div className="lesson-video-section">
        <YouTube
          videoId={videoId}
          opts={opts}
          onReady={onReady}
          onEnd={onEnd}
        />
      </div>
      <div className="lesson-video-body">
        <div className="lesson-video-content">
          <div className="lesson-video-title">
            <span>Python ile Programlama Temelleri</span>
          </div>
          <div className="lesson-video-information">
            <span className="lesson-video-information-duration">
              Video - 10 dk
            </span>
            <span className="lesson-video-information-account-point">
              100 Puan
            </span>
            <div className="lesson-video-information-status">
              <i className="bi bi-droplet-half lesson-video-information-status-icon"></i>
              <span className="lesson-video-information-status-text">
                Devam ediyor
              </span>
            </div>
          </div>
        </div>
        <div className="lesson-video-detail-button-section">
          <button className="lesson-video-detail-button">
            <span className="lesson-video-detail-button-text">DETAY</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LessonVideo;
