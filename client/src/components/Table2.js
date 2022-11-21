import React from "react";

const Table2 = ({ nextday }) => {
  return (
    <div className="table_container">
      <table>
        <thead>
          <tr className="table_head_row">
            <th>Date</th>
            <th>Thinks to do</th>
          </tr>
        </thead>
        <tbody>
          {nextday.tasks &&
            nextday.tasks.map((task, index) => {
              return (
                <tr key={index} className="table_body_row">
                  <td>{nextday.date}</td>
                  <td>{task.name}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table2;
