import React from "react";
import "./tables.css";
import {
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBCardImage,
  MDBBtn
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function Table() {
  return (
    <div class="Grids">
      <MDBRow className="row-cols-1 row-cols-md-3 g-4 h-20">
        <MDBCol class="colummn">
          <MDBCard className="h-100" alignment="center">
            <MDBCardBody>
              <MDBCardImage
                src="https://img.icons8.com/nolan/512/1A6DFF/C822FF/conference-call.png"
                width="60%"
                height="auto"
                alt="..."
                loading="lazy"
              />
              <Link to="/UserControl">
                <MDBBtn className="d-grid gap-2 d-md-block btn-block">
                  User Control
                </MDBBtn>
              </Link>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol class="colummn">
          <MDBCard className="h-100" alignment="center">
            <MDBCardBody>
              <MDBCardImage
                src="https://img.icons8.com/nolan/512/1A6DFF/C822FF/admin-settings-male.png"
                width="60%"
                height="auto"
                alt="..."
                loading="lazy"
              />
              <Link to="/ManagerControl">
                <MDBBtn className="d-grid gap-2 d-md-block btn-block">
                  Manager Control
                </MDBBtn>
              </Link>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol class="colummn">
          <MDBCard className="h-100" alignment="center">
            <MDBCardBody>
              <MDBCardImage
                src="https://img.icons8.com/nolan/512/services.png"
                width="60%"
                height="auto"
                alt="..."
                loading="lazy"
              />
              <MDBBtn className="d-grid gap-2 d-md-block btn-block">
                Generate Report
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
}
