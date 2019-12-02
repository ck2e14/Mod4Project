const API_ENDPOINT = "http://localhost:3000/api/v1/";
const LOGIN_URL = `${API_ENDPOINT}login`;
const VALIDATE_URL = `${API_ENDPOINT}validate`;
const SIGNUP_URL = `${API_ENDPOINT}users`;
const JOURNEYS_URL = `${API_ENDPOINT}journeys`;
const JOURNEY_URL = journey => `${API_ENDPOINT}journeys/${journey.id}`;

const jsonify = res => {
  // if (!res.ok) throw res;
  return res.json().then(data => {
    if (data.errors) throw data.errors;
    else return data;
  });
};

// const authHeader = () => {
//     Authorisation: localStorage.token
// }


// ************************************TO BE SORTED OUT (CWK)****************************
const signup = userDetails =>
  fetch(SIGNUP_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({ user: userDetails })
  })
    .then(jsonify)
    .then(data => {
      localStorage.setItem("token", data.token);
      return data.user  
    });
// **************************************************************************************

const login = userDetails =>
  fetch(LOGIN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({ user: userDetails })
  })
    .then(jsonify)
    .then(data => {
      localStorage.setItem("token", data.token);
      return data.user;
    });

const validate = () =>
  fetch(VALIDATE_URL, {
    method: 'GET',
    headers: {
      'Authorization': localStorage.getItem("token")
    }
  })
    .then(jsonify)
    .then(data => {
      localStorage.setItem("token", data.token);
      return data.user;
    });

const postJourney = journey =>
  fetch(JOURNEYS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorisation: localStorage.getItem("token")
    },
    body: JSON.stringify({ journey })
  }).then(jsonify);

const logout = () => {
  localStorage.removeItem("token");
};

export default {
  login,
  signup,
  validate,
  postJourney,
  logout
};
