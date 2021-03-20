import { useEffect } from "react";
import PatientListComponent from "./PatientList";
import SearchComponent from "./search";

export default function PatientsComponent({}) {
  useEffect(() => {}, []);
  return (
    <>
      <SearchComponent />
      <PatientListComponent />
    </>
  );
}
