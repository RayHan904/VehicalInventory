import React, { useState } from "react";
import { AiFillEye, AiFillEdit } from "react-icons/ai";
import { RiDeleteBin6Fill } from "react-icons/ri";

import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const VehicalTable = ({ tableData, handleDelete }) => {
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(tableData);

  const handleSearch = () => {
    const filtered = tableData.filter((item) => {
      const searchableFields = [item.no, item.make, item.model, item.year]
        .join(" ")
        .toLowerCase();
      return searchableFields.includes(searchText.toLowerCase());
    });

    setFilteredData(filtered);
  };
  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        className="search-bar"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <Button
        onClick={handleSearch}
        type="submit"
        variant="primary"
        className="p-2 mx-2"
      >
        Search
      </Button>
      <Table striped bordered hover className="my-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Price</th>
            <th>Status</th>
            <th> Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.make}</td>
              <td>{data.model}</td>
              <td>{data.year}</td>
              <td>{data.price}</td>
              <td>{data.isSold ? "Sold" : "Live"}</td>
              <td className="actionBtns">
                <Link to={`/view/${data._id}`}>
                  <Button>
                    <AiFillEdit /> / <AiFillEye />
                  </Button>
                </Link>
                <Button variant="danger" onClick={() => handleDelete(data._id)}>
                  <RiDeleteBin6Fill />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default VehicalTable;
