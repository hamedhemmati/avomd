import { useEffect } from "react";
import PatientListComponent from "./PatientList";
import SearchComponent from "./search";
const axios = require("axios");
export default function PatientsComponent({}) {
  useEffect(() => {}, []);
  return (
    <>
      <SearchComponent />
      <PatientListComponent />
    </>
  );
}
