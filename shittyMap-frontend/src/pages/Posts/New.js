import React, { useState } from "react";
import API from "../../adapters/API";

import { useHistory } from "react-router-dom";

const NewPost = props => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    API.postPost({ title, content }).then(post => {
      history.push(`/posts/${post.id}`);
    });
    setTitle("");
    setContent("");
  };
  return (
    <div>Wooooooooooooooo</div>
  );
};

export default NewPost;
