import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core';
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { useForm } from 'react-hook-form';
import { ContextElement } from '../../App';

const VolunteerRegister = () => {
  const [
    nav,
    setNav,
    userLoginInfo,
    setUserLoginInfo,
    formData,
    setFormData,
  ] = useContext(ContextElement);
  
  const history = useHistory();
  const redirect = () => {
    history.push("/myEvents");
  }

    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
  
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const allData = { ...data, date: selectedDate , imgURL: formData.imgUrl}
        console.log(allData)
         fetch("https://intense-beyond-19958.herokuapp.com/addRegisteredData", {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify(allData),
         })
           .then((res) => res.json())
           .then((data) => {
             if (data) {
               redirect();
             }
           });
    };

    return (
      <div className="registrationForm">
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <TextField
            placeholder="Full Name"
            name="fullName"
            className="inputField"
            defaultValue={userLoginInfo.name}
            inputRef={register}
          ></TextField>
          <br />
          <br />
          <TextField
            placeholder="Email"
            name="email"
            className="inputField"
            defaultValue={userLoginInfo.email}
            inputRef={register}
          ></TextField>
          <br />
          <br />
          <MuiPickersUtilsProvider utils={DateFnsUtils} className="inputField">
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Event Date"
              value={selectedDate}
              inputRef={register}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
          <br />
          <br />
          <TextField
            placeholder="Description"
            name="description"
            className="inputField"
            inputRef={register}
          ></TextField>
          <br />
          <br />
          <TextField
            placeholder="Event Title"
            name="eventTitle"
            defaultValue={formData.title}
            className="inputField"
            inputRef={register}
          ></TextField>
          <br />
          <br />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="inputField"
          >
            Register
          </Button>
        </form>
      </div>
    );
};

export default VolunteerRegister;