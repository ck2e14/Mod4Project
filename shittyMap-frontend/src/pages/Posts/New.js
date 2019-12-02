import React, { useState } from "react";
import API from "../../adapters/API";
import MapContainer from './MapContainer.js'
import { useHistory } from "react-router-dom";

const NewPost = props => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const history = useHistory();

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   API.postPost({ title, content }).then(post => {
  //     history.push(`/posts/${post.id}`);
  //   });
  //   setTitle("");
  //   setContent("");
  // };
  return (
    <div className='map-div'>
      <MapContainer />
    </div>
  );
};

export default NewPost;
