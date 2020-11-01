import React, { useContext } from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Link, useHistory } from "react-router-dom";
import { ContextElement } from '../../App';


const ShowEventDetail = (props) => {
     const [nav, setNav, userLoginInfo, setUserLoginInfo, formData, setFormData] = useContext(ContextElement);
    const { title, img, eventDetail } = props.data;
   
  const history = useHistory();

  const redirect = () => {
    setFormData({title:title, imgUrl:img})
    history.push("/volunteerRegister");
  }
  
  
    return (
        <Card className="card" onClick={redirect} >
          <CardMedia>
            <img src={img} alt="EventPicture" style={{ width: "100%" }} />
            <h2>{title}</h2>
            <p>{eventDetail}</p>
          </CardMedia>
        </Card>
    );
};

export default ShowEventDetail;