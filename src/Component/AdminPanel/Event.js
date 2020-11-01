import React, { useContext } from 'react';
import { ContextElement } from '../../App';
import { Button } from '@material-ui/core';
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";


const Event = () => {
     const [nav, setNav] = useContext(ContextElement);
    setNav(false);

     const [selectedDate, setSelectedDate] = React.useState(
       new Date()
     );

     const handleDateChange = (date) => {
       setSelectedDate(date);
      };
  
    return (
      <div className="eventPage">
        <form
          action="https://intense-beyond-19958.herokuapp.com/addEvent"
          method="post"
          className="form"
        >
          <label htmlFor="title">Event Title</label>
          <br />
          <input type="text" name="title" id="" />
          <br />
          <br />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Event Date"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
          <br />
          <br />
          <label htmlFor="img">Upload image</label>
          <br />
          <input type="file" name="img" id="" />
          <br />
          <br />
          <label htmlFor="eventDetail">Description</label>
          <br />
          <textarea name="eventDetail" id="" cols="30" rows="6"></textarea>
          <br />
          <br />
          <Button type="submit" color="primary" variant="contained">
            Submit
          </Button>
        </form>
      </div>
    );
};

export default Event;