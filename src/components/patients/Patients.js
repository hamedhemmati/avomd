import { useEffect, useState, useRef } from "react";
import { Alert } from "rsuite";
import PatientListComponent from "./PatientList";
import SearchComponent from "./search";
const axios = require("axios");
export default function PatientsComponent({}) {
  const [patients, setPatients] = useState([]);
  const [sortDirection, setSortDirection] = useState("asc");
  const [sortBy, setSortBy] = useState(null);
  const [query, setQuery] = useState("");
  const [refresh, setRefresh] = useState(false);
  const hasMore = useRef(true);
  const lastVisible = useRef(1);
  useEffect(() => {
    loadFunc();
    setRefresh(false);
  }, [refresh]);
  useEffect(() => {
    lastVisible.current = 1;
    hasMore.current = true;
    setPatients([]);
    setRefresh(true);
  }, [sortBy, sortDirection, query]);
  const loadFunc = () => {
    const baseUrl = `https://avomd-server.herokuapp.com/patients?q=${query}&_page=${lastVisible.current}&_limit=20`;
    let queryUrl;
    if (sortBy) {
      queryUrl = baseUrl + `&_sort=${sortBy}&_order=${sortDirection}`;
    } else {
      queryUrl = baseUrl;
    }
    const config = {
      method: "get",
      url: queryUrl,
      headers: {}
    };

    axios(config)
      .then(function (response) {
        if (response.data.length < 20) {
          hasMore.current = false;
        }
        lastVisible.current = lastVisible.current + 1;
        setPatients([...patients, ...response.data]);
      })
      .catch(function (error) {
        Alert, error(error);
      });
  };
  return (
    <>
      <SearchComponent
        sortD={(direction) => setSortDirection(direction)}
        sortB={(by) => setSortBy(by)}
        refine={(value) => setQuery(value)}
      />
      <PatientListComponent
        patients={patients}
        loadFunc={loadFunc}
        hasMore={hasMore.current}
      />
    </>
  );
}
