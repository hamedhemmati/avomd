import React from "react";
import { DebounceInput } from "react-debounce-input";
import { Icon, InputGroup } from "rsuite";
export default function SearchComponent({}) {
  return (
    <div>
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
    </div>
  );
}
