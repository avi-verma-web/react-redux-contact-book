import React, { useState, useEffect } from "react";

import { getContact, updateContact } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

import { useHistory, useParams } from "react-router-dom";

//to assign a random id to created contact object
import shortid from "shortid";

const EditContact = () => {
  const [name, setName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [email, setEmail] = useState("");

  //To get value from params
  let { id } = useParams();

  //to disptach an action using hooks
  const dispatch = useDispatch();

  const contact = useSelector((state) => state.contactReducer.contact);

  useEffect(() => {
    if (contact != null) {
      setName(contact.name);
      setContactNo(contact.phone);
      setEmail(contact.email);
    }
    dispatch(getContact(id));
  }, [contact]);

  //to redirect to home page
  let history = useHistory();

  const onUpdateContact = (e) => {
    e.preventDefault();
    const update_contact = Object.assign(contact, {
      name: name,
      phone: contactNo,
      email: email,
    });
    dispatch(updateContact(update_contact));
    history.push('/')
  };

  return (
    <div className="card border-0 shadow ">
      <div className="card-header bg-dark text-white">Edit Contact</div>
      <div className="card-body bg-dark">
        <form onSubmit={(e) => onUpdateContact(e)}>
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
          <button className="btn btn-warning" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditContact;
