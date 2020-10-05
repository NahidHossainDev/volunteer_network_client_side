import React, { useState, useEffect } from "react";
import ShowEventDetail from "./ShowEventDetail";

const ShowEvents = () => {
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    fetch("https://intense-beyond-19958.herokuapp.com/showEvent")
      .then((res) => res.json())
      .then((data) => setEventData(data));
  }, []);

  return (
    <div className="cardDiv">
      {eventData.length > 0 &&
        eventData.map((d, i ) => <ShowEventDetail data = {d} key ={i}></ShowEventDetail>)}
    </div>
  );
};

export default ShowEvents;
