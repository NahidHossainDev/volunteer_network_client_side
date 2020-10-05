import React, { useContext, useState, useEffect } from 'react';
import { ContextElement } from '../../App';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";

const Volunteer = () => {
     const [nav, setNav] = useContext(ContextElement);
     setNav(false);

    const [regisPerson, setRegisPerson] = useState([]);

   const loadData = () => {
      fetch("https://intense-beyond-19958.herokuapp.com/showPersonRegistered")
        .then((res) => res.json())
        .then((data) => setRegisPerson(data));
    };

    loadData();

    const deleteItem = (id, ) => {
        fetch("https://intense-beyond-19958.herokuapp.com/deletePerson/" + id, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => loadData());
    }
    
    return (
      <div className="volunteerPage">
        <h2>Volunteer register list</h2>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Reg. Date</TableCell>
              <TableCell>Program</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {regisPerson.map((d) => (
              <TableRow>
                <TableCell>{d.fullName}</TableCell>
                <TableCell>{d.email}</TableCell>
                <TableCell>
                  {new Date(d.date).toDateString("dd/MM/yyyy")}
                </TableCell>
                <TableCell>{d.eventTitle}</TableCell>
                <TableCell>
                  <DeleteForeverOutlinedIcon
                    className="deleteIcon"
                    onClick={() => deleteItem(`${d._id}`)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
};

export default Volunteer;