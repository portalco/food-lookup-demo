import React from "react";

export default function SelectedProducts(props) {
  const { products } = props;

  const productRows = products.map((product, idx) => (
    <tr key={idx} onClick={() => props.onProductClick(idx)}>
      <td>{product.name}</td>
      <td className="right aligned">{product.brand}</td>
      <td className="right aligned">{product.condition}</td>
      <td className="right aligned">{product.sku}</td>
      <td className="right aligned">{product.price}</td>
    </tr>
  ));

  return (
    <table className="ui selectable structured large table">
      <thead>
        <tr>
          <th colSpan="5">
            <h3>Selected products</h3>
          </th>
        </tr>
        <tr>
          <th className="eight wide">Name</th>
          <th>Brand</th>
          <th>Condition (g)</th>
          <th>sku (g)</th>
          <th>price (g)</th>
        </tr>
      </thead>
      <tbody>
        {productRows}
      </tbody>
     
    </table>
  );
}

