import React, { useState } from "react";

import { addContact } from "../redux/actions";
import { useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";

//to assign a random id to created contact object
import shortid from "shortid";

const AddContact = () => {
  const [name, setName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [email, setEmail] = useState("");

  //to disptach an action using hooks
  const dispatch = useDispatch();

  //to redirect to home page
  let history = useHistory();

  const createContact = (e) => {
    e.preventDefault();
    const new_contact = {
      id: shortid.generate(),
      name: name,
      phone: contactNo,
      email: email,
    };
    dispatch(addContact(new_contact));
    history.push("/");
  };

  return (
    <div className="card border-0 shadow ">
      <div className="card-header bg-dark text-white">Add Contact</div>
      <div className="card-body bg-dark">
        <form onSubmit={(e) => createContact(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your Contact No."
              value={contactNo}
              onChange={(e) => setContactNo(e.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <button className="btn btn-primary" type="submit">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
