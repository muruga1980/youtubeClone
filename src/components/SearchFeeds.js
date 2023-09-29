import React, { useEffect, useState } from "react";

import { fetchAPI } from "../utils/fetchAPI";
import Videos from "./Videos";

import { useParams } from "react-router-dom";

const SearchFeeds = () => {
  const [videos, setVideos] = useState([]);

  const { searchTerm } = useParams();

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
    //console.log(videos.snippets.description)
    //console.log(videos)
  }, [searchTerm]);

  return (
    <>
      <h1 className=" text-center py-5">
        <span className="bi bi-search"></span>Search Results for:{" "}
        <span className="text-danger"> {searchTerm} </span>Videos{" "}
      </h1>
      <div className="row row-cols-2 row-cols-md-4 g-4 pt-2">
        <Videos videos={videos} />
      </div>
    </>
  );
};

export default SearchFeeds;
