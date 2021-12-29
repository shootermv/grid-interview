import React from "react";

const Grid = ({ config, data }) => (
  <table>
    <thead>
      <tr>
        {config.map(({title}) => (
          <th key={title}>{title}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row) => (
        <tr key={row[config[0].field]}>
          {config.map(({field, component: C }) => (
            <td key={field}>{C  ? <C data={row[field]}/> : row[field]}</td> 
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default Grid;
