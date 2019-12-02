import React, { useState } from "react";
import API from "../../adapters/API";
import Map from './Map.js'
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
      <Map />
    </div>
  );
};

export default NewPost;
