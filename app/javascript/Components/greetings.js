import React from "react";
import { useSelector } from "react-redux";

const Greeting = () => {
  const refreshPage = () => {
    window.location.reload();
    console.log(message);
  };

  const message = useSelector((state) => state.messages.message);
 
  return (
    <div className="message">
        <h1>{message}</h1>
      <button onClick={refreshPage}>another Greeting</button>
    </div>
  );
};

export default Greeting;