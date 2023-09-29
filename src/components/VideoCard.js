import React from "react";
import { Link } from "react-router-dom";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <>
   
      <div className="card shadow rounded ">
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <img
            src={snippet.thumbnails.high.url}
            alt={snippet.title}
            className="img-fluid card-img-top "
          />
        </Link>
        <div className="card-body" style={{height:'120px'}}>
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} className="text-decoration-none">
            <h6 className="card-text  text-black ">{snippet.title.slice(0, 40) || demoVideoTitle.slice(0,40)}</h6>
          </Link>

          <Link to={snippet.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl} className="text-decoration-none">
            <p className="mt-3"><small className="card-text  text-black ">{snippet.channelTitle || demoChannelTitle}</small> </p>
          </Link>


        </div>
      </div>
    </>
  );
};

export default VideoCard;
