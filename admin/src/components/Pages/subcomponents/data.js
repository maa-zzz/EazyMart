import React from "react";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  pencil,
  trash,
  faCoffee,
  f044
} from "@fortawesome/free-solid-svg-icons";
import "./data.css";
const data = [
  { id: 1, name: "Anom", age: 19, gender: "Male" },
  { id: 2, name: "Megha", age: 19, gender: "Female" },
  { id: 3, name: "Subham", age: 25, gender: "Male" }
];

function Data() {
  return (
    <div class="container">
      <Table size="sm" bordered hover>
        <tr class="head">
          <th class="id">Id</th>
          <th class="name">Name</th>
          <th class="id">Age</th>
          <th class="gender">Gender</th>
          <th class="actions">Actions</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key} class="info">
              <td class="vals">{val.id}</td>
              <td>{val.name}</td>
              <td class="vals">{val.age}</td>
              <td class="vals">{val.gender}</td>
              <td className="opration">
                <button
                  onClick={() => editData(val.id)}
                  class="btn btn-info"
                  type="button"
                >
                  Edit
                  <FontAwesomeIcon icon={f044} />
                  {/* <FontAwesomeIcon icon={faCoffee} /> */}
                </button>
                {/* create edit and delete func */}

                <button
                  onClick={() => removeData(val.id)}
                  class="btn btn-danger"
                  type="button"
                >
                  Delete
                  <FontAwesomeIcon icon={trash} />
                </button>
              </td>
            </tr>
          );
        })}
      </Table>
    </div>
  );
}

export default Data;
