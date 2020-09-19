import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Contact from "./Contact";

import {
  selectAllContact,
  deleteAllContact,
  emptyallContact,
} from "../redux/actions";

const Contacts = () => {
  const [selectAll, setSelectAll] = useState(false);
  const contacts = useSelector((state) => state.contactReducer.contacts);
  const selectedContacts = useSelector(
    (state) => state.contactReducer.selectedContacts
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (selectAll) {
      dispatch(selectAllContact(contacts.map((contact) => contact.id)));
    } else {
      dispatch(deleteAllContact());
    }
  }, [selectAll]);

  return (
    <div>
      {selectedContacts.length > 0 ? (
        <button
          className="btn btn-danger mb-3"
          onClick={() => dispatch(emptyallContact())}
        >
          Delete All
        </button>
      ) : null}
      <table className="table table-dark shadow">
        <thead>
          <tr>
            <th>
              <div className="custom-control custom-checkbox">
                <input
                  id="selectAll"
                  style={{ color: "white" }}
                  type="checkbox"
                  className="custom-control-input"
                  onClick={() => setSelectAll(!selectAll)}
                ></input>
                <label
                  htmlFor="selectAll"
                  className="custom-control-label"
                ></label>
              </div>
            </th>
            <th>Name</th>
            <th>Contact No.</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <Contact
              contact={contact}
              key={contact.id}
              selectAll={selectAll}
            ></Contact>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
