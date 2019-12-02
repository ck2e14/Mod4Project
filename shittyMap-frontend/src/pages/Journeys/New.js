import React, { useState } from "react";
import API from "../../adapters/API";

import { useHistory } from "react-router-dom";

const NewJourney = props => {
  const [title, setStartpoint] = useState("");
  const [content, setEndpoint] = useState("");
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    API.postJourney({ title, content }).then(journey => {
      history.push(`/journey/${journey.id}`);
    });
    setStartpoint("");
    setEndpoint("");
  };
  return (
    <div>Wooooooooooooooo</div>
  );
};

export default NewJourney;
