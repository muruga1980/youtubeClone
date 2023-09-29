import React from "react";
import { demoProfilePicture } from "../utils/constants";
import { Link } from "react-router-dom";

const ChannelCard = ({ channelDetail }) => {
  return (
    <>
      <Link to={`/channel/${channelDetail.id.channelId}`}>
        <div className="card shadow rounded  text-center p-3">
          <img
            src={channelDetail.snippet.thumbnails.high.url || demoProfilePicture}
            alt={channelDetail.snippet.title}
            className="img-fluid card-img-top"
          />
          <p>{channelDetail.snippet.title}</p>
          <p>demo</p>
        </div>
      </Link>
    </>
  );
};

export default ChannelCard;
