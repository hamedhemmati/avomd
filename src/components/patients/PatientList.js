import React, { useState } from "react";
import { Modal, Button } from "rsuite";
import PatientDataComponent from "./PatientData";
import InfiniteScroll from "react-infinite-scroll-component";
export default function PatientListComponent({ patients, loadFunc, hasMore }) {
  const [modal, setModal] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const showMore = (id) => () => {
    setModal(true);
    const patient = patients.find((el) => el.id === id);
    setSelectedPatient(patient);
  };
  return (
    <div>
      <div className="row-header">
        <span className="row-header-column">ID</span>
        <span className="row-header-column">Name</span>
        <span className="row-header-column">SSN</span>
        <span className="row-header-column">DOB</span>
      </div>
      <InfiniteScroll
        dataLength={patients.length}
        next={loadFunc}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>End of the list</b>
          </p>
        }
      >
        {patients.map((patient) => (
          <div
            className="row-data"
            onClick={showMore(patient.id)}
            key={patient.id}
            style={
              selectedPatient
                ? selectedPatient.id === patient.id
                  ? styles.activeRow
                  : null
                : null
            }
          >
            <span className="row-data-column">{patient.id}</span>
            <span className="row-data-column">
              {patient.first_name} {patient.last_name}
            </span>
            <span className="row-data-column">{patient.ssn}</span>
            <span className="row-data-column">{patient.birthdate}</span>
          </div>
        ))}
      </InfiniteScroll>

      <Modal show={modal} onHide={() => setModal(false)}>
        <Modal.Header>
          <Modal.Title>
            {selectedPatient
              ? selectedPatient.first_name + " " + selectedPatient.last_name
              : null}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PatientDataComponent data={selectedPatient} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setModal(false)} appearance="primary">
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
const styles = {
  activeRow: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgb(48, 181, 104, 1)"
  }
};
