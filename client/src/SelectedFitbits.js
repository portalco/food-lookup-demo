import React from "react";

export default function SelectedFitbits(props) {
  const { fitbits } = props;

  const fitbitRows = fitbit.map((fitbit, idx) => (
    <tr key={idx} onClick={() => props.onFitbitClick(idx)}>
      <td>{food.description}</td>
      <td className="right aligned">{fitbit.name}</td>
      <td className="right aligned">{fitbit.model}</td>
      <td className="right aligned">{fitbit.condition}</td>
      <td className="right aligned">{fitbit.price}</td>
    </tr>
  ));

  return (
    <table className="ui selectable structured large table">
      <thead>
        <tr>
          <th colSpan="5">
            <h3>Selected fitbits</h3>
          </th>
        </tr>
        <tr>
          <th className="eight wide">Description</th>
          <th>Model</th>
          <th>Model</th>
          <th>Condition</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {fitbitRows}
      </tbody>
      
    </table>
  );
}

