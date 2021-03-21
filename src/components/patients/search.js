import React, { useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { Icon, InputGroup, Button, ButtonGroup, IconButton } from "rsuite";
export default function SearchComponent({ sortD, sortB, refine }) {
  const [sortDirection, setSortDirection] = useState("asc");
  const [sortBy, setSortBy] = useState(null);
  const changeSortDirection = () => {
    if (sortDirection === "asc") {
      setSortDirection("desc");
      sortD("desc");
    } else {
      setSortDirection("asc");
      sortD("asc");
    }
  };
  const changeSortBy = (type) => () => {
    setSortBy(type);
    sortB(type);
  };
  return (
    <>
      <div style={styles.toolbar}>
        <InputGroup inside>
          <InputGroup.Addon>
            <Icon icon="search" />
          </InputGroup.Addon>
          <DebounceInput
            className="rs-input"
            placeholder="Search here..."
            onChange={(e) => refine(e.target.value)}
            minLength={3}
            debounceTimeout={300}
          />
        </InputGroup>
        <ButtonGroup style={styles.buttonGroup}>
          <Button
            active={sortBy === "id" ? true : false}
            onClick={changeSortBy("id")}
          >
            ID
          </Button>
          <Button
            active={sortBy === "first_name" ? true : false}
            onClick={changeSortBy("first_name")}
          >
            First Name
          </Button>
          <Button
            active={sortBy === "last_name" ? true : false}
            onClick={changeSortBy("last_name")}
          >
            Last Name
          </Button>
          <Button
            active={sortBy === "birthdate" ? true : false}
            onClick={changeSortBy("birthdate")}
          >
            DOB
          </Button>
        </ButtonGroup>
        <IconButton
          icon={
            <Icon
              icon={
                sortDirection === "asc" ? "sort-amount-asc" : "sort-amount-desc"
              }
            />
          }
          onClick={changeSortDirection}
        />
      </div>
      <div className="active-sort">
        {sortBy ? (
          <>
            <span>Sorting by {sortBy}</span>
          </>
        ) : null}
      </div>
    </>
  );
}
const styles = {
  toolbar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  }
};
