import React from "react";
import dayjs from "dayjs";
export default function PatientDataComponent({ data }) {
  return (
    <div className="patient-data-container">
      <div className="patient-data">
        <span className="patient-data-label">ID: </span>
        {data.id}
      </div>
      <div className="patient-data">
        <span className="patient-data-label">Email: </span>
        {data.email}
      </div>
      <div className="patient-data">
        <span className="patient-data-label">Gender: </span>
        {data.gender}
      </div>
      <div className="patient-data">
        <span className="patient-data-label">Ethnicity: </span>
        {data.ethnicity}
      </div>
      <div className="patient-data">
        <span className="patient-data-label">DOB: </span>
        {dayjs(data.birthdate).format("MMMM D, YYYY")}
      </div>
      <div className="patient-data">
        <span className="patient-data-label">SSN: </span>
        {data.ssn}
      </div>
      <div className="patient-data">
        <span className="patient-data-label">Insured: </span>
        {data.insured ? "Yes" : "No"}
      </div>
      <div className="patient-data">
        <span className="patient-data-label">Deceased: </span>
        {data.deceased ? "Yes" : "No"}
      </div>
      <span className="patient-data-label">Previous Diagnosis: </span>
      {data.diagnosis ? (
        data.diagnosis.desc ? (
          <ul>
            {data.diagnosis.desc.map((diag, index) => (
              <li key={index}>{diag}</li>
            ))}
          </ul>
        ) : null
      ) : null}
      {data.pcp ? (
        <>
          <div className="patient-data">
            <span className="patient-data-label">PCP Name: </span>
            {data.pcp.fname ? data.pcp.fname : null}{" "}
            {data.pcp.lname ? data.pcp.lname : null}
          </div>

          <div className="patient-data">
            <span className="patient-data-label">Clinic Location: </span>
            {data.pcp.clinic_location ? data.pcp.clinic_location : null}
          </div>
        </>
      ) : null}
    </div>
  );
}
