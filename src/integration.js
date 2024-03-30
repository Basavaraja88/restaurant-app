import React from "react";

function Crud() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      console.log("response", response.data); // Logging the response data
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
  return <div></div>;
}

export default Crud;
