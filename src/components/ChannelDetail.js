import React from "react";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchAPI } from "../utils/fetchAPI";
import { Videos, ChannelCard } from "./";

const ChannelDetail = () => {

  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState({});
  const [videos, setVideos] = useState({});

  useEffect(() => {
    fetchAPI(`channels?part=snippet&id=${id}`).then(
      (data) => setChannelDetail(data.items[0])
      //console.log(data.items[0])
    );

    fetchAPI(`search?channelId=$id${id}&part=snippet&order=date`).then((data) =>
      setVideos(data.items)
    );
  }, [id]);

  return (
    <div>
      <p>channel id</p>

      <div className="container">
        <div className="bg-primary" style={{ height: "250px" }}>
          {JSON.stringify(channelDetail)}
          {/* {JSON.stringify(channelDetail.items)} */}
          {channelDetail && channelDetail.items && (
            <ChannelCard channelDetail={channelDetail} />
          )}
        </div>

        {videos && videos.items && <Videos videos={videos} />}
      </div>
    </div>
  );
};

export default ChannelDetail;
