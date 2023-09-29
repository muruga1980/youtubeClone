import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { fetchAPI } from "../utils/fetchAPI";
import Videos from "./Videos";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
    //console.log(videos.snippets.description)
    //console.log(videos)
  }, [selectedCategory]);

  return (
    <div className="row">
      <div className="col-md-2 bg-body-tertiary border-end offcanvas-start">
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </div>
      <div className="col-md-10" style={{ height: "650px", overflow: "auto" }}>
        <div>
          <h1 className="pt-3"> {selectedCategory} Videos</h1>
          <div className="row row-cols-2 row-cols-md-4 g-4 pt-2">
            <Videos videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
