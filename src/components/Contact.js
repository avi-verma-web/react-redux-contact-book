import React from "react";
import { Link } from "react-router-dom";

import Avatar from "react-avatar";

import { deleteContact } from "../redux/actions";
import { useDispatch } from "react-redux";

const Contact = ({ contact, selectAll }) => {
  const dispatch = useDispatch();
  return (
    <tr>
      <td>
        <div className="custom-control custom-checkbox">
          <input
            checked={selectAll}
            style={{ color: "white" }}
            type="checkbox"
            className="custom-control-input"
          ></input>
          <label className="custom-control-label"></label>
        </div>
      </td>
      <td>
        <Avatar
          className="mr-2"
          name={contact.name}
          round={true}
          size="45"
        ></Avatar>
        {contact.name}
      </td>
      <td>{contact.phone}</td>
      <td>{contact.email}</td>
      <td className="actions">
        <Link to={`/contacts/edit/${contact.id}`}>
          <span className="material-icons mr-2 pt-2">edit</span>
        </Link>

        <span
          style={{ cursor: "pointer" }}
          onClick={() => dispatch(deleteContact(contact.id))}
          className="material-icons text-danger"
        >
          remove_circle
        </span>
      </td>
    </tr>
  );
};

export default Contact;
