import React, { useState, useEffect, useContext } from 'react';
import { ContextElement } from '../../App';
import { Button } from '@material-ui/core';

const MyEvents = () => {
const [nav, setNav,userLoginInfo, setUserLoginInfo] = useContext(ContextElement);
  const [event, setEvent] = useState([]);
  
   const loadData = () => {
        fetch("https://intense-beyond-19958.herokuapp.com/getMyEvents?email="+userLoginInfo.email)
        .then(res => res.json())
        .then(data => setEvent(data))
    }
    loadData();

     const deleteItem = (id) => {
       fetch("https://intense-beyond-19958.herokuapp.com/deleteMyEvent/" + id, {
         method: "DELETE",
       })
         .then((res) => res.json())
         .then((data) => loadData());
     };
    return (
      <div className="myEvents">
        <h2>My events</h2>
        <div className="events">
          {event.map((e, i) => (
            <div key={i} className="form">
              <img src={e.imgURL} alt="eventImage" style={{ width: "300px" }} />
              <h3>{e.eventTitle}</h3>
              <p>{new Date(e.date).toDateString("dd/MM/yyyy")}</p>
              <Button
                variant="contained"
                color="primary"
                onClick={() => deleteItem(`${e._id}`)}
              >
                Cancel
              </Button>
            </div>
          ))}
        </div>
      </div>
    );
};

export default MyEvents;