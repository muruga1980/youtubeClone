import React from "react";

import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos }) => {
  return (
    <>
      {videos.map((item, index) => (
        <div className="col" key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </div>
      ))}
    </>
  );
};

export default Videos;
