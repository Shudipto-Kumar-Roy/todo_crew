import React from "react";

const Table1 = ({ today }) => {
  return (
    <div className="table_container">
      <table>
        <thead>
          <tr className="table_head_row">
            <th>Current Job List</th>
            <th>Status</th>
            <th>Reason(Not Done)</th>
          </tr>
        </thead>
        <tbody>
          {today &&
            today.map((task, index) => {
              return (
                <tr key={index} className="table_body_row">
                  <td>{task.name}</td>
                  <td>{task.status}</td>
                  <td>{task.reason}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table1;
