import axios from "axios";
import React, { useEffect, useState } from "react";

import Popup from "reactjs-popup";

function Details(props) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/auth/get")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
    setFilteredData(data);
  }, []);

  const onHandleSearch = () => {
    const tempData = data.filter(
      (eachData) =>
        eachData.username.toLowerCase() === searchValue.toLowerCase()
    );
    setFilteredData(tempData);
  };
  // const onHandleReport = () => {};
  // console.log(filteredData);
  return (
    <div className="home-container">
      <h1 style={{ color: "rgba(57, 149, 240, 0.963)", fontFamily: "serif" }}>
        List of all users
      </h1>
      <p style={{ color: "rgba(57, 149, 240, 0.963)", fontFamily: "serif" }}>
        Search here by username
      </p>
      <div>
        <input
          placeholder="enter username"
          className="button"
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className="button" onClick={onHandleSearch}>
          Search
        </button>
      </div>

      <table>
        <thead>
          <tr
            style={{ color: "rgba(57, 149, 240, 0.963)", fontFamily: "serif" }}
          >
            <th
              style={{
                padding: "10px",
                fontSize: "20px",
              }}
            >
              ID
            </th>
            <th style={{ padding: "10px", fontSize: "20px" }}>Username</th>
            <th style={{ padding: "10px", fontSize: "20px" }}>Email</th>
            <th style={{ padding: "10px", fontSize: "20px" }}>Phone Number</th>
            <th style={{ padding: "10px", fontSize: "20px" }}>created date</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length ? (
            filteredData.map((eachData) => {
              return (
                <tr key={eachData.id}>
                  <td
                    style={{
                      padding: "10px",
                      color: "#6b6161",
                      fontWeight: "500",
                    }}
                  >
                    {eachData.id}
                  </td>
                  <td
                    style={{
                      padding: "10px",
                      color: "#6b6161",
                      fontWeight: "500",
                    }}
                  >
                    {eachData.username}
                  </td>
                  <td
                    style={{
                      padding: "10px",
                      color: "#6b6161",
                      fontWeight: "500",
                    }}
                  >
                    {eachData.email}
                  </td>
                  <td
                    style={{
                      padding: "10px",
                      color: "#6b6161",
                      fontWeight: "500",
                    }}
                  >
                    {eachData.phone}
                  </td>
                  <td
                    style={{
                      padding: "10px",
                      color: "#6b6161",
                      fontWeight: "500",
                    }}
                  >
                    {eachData.date}
                  </td>
                  <Popup
                    trigger={<button className="button"> Report</button>}
                    modal
                    nested
                  >
                    {(close) => (
                      <div className="popup">
                        <p>Click to generate report</p>
                        <div>
                          <button className="button">Generate</button>
                        </div>
                      </div>
                    )}
                  </Popup>
                </tr>
              );
            })
          ) : (
            <h1
              style={{
                color: "rgba(57, 149, 240, 0.963)",
                fontFamily: "serif",
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                alignContent: "center",
              }}
            >
              No data found
            </h1>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Details;
