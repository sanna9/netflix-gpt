import React from "react";
import Button from "./Button";

const SearchBar = ({
  placeholder,
  btnLabel,
  onClick,
  searchText,
  onSearchTextChange,
}) => {
  return (
    <div className="pt-40 relative w-full">
      <form
        className="flex p-4 w-6/12 bg-black m-auto"
        onSubmit={(e) => e.preventDefault()} // Prevent form submission default behavior
      >
        <input
          type="text"
          placeholder={placeholder}
          className="rounded p-2 border w-full"
          value={searchText} // Controlled input
          onChange={(e) => onSearchTextChange(e.target.value)} // Update parent state
        />
        <Button
          label={btnLabel}
          buttonClassName="bg-red-700"
          labelClassName="text-white"
          onClick={onClick}
        />
      </form>
    </div>
  );
};

export default SearchBar;
