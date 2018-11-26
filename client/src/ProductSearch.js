import React from "react";
import ApiClient from "./ApiClient";

const MATCHING_ITEM_LIMIT = 25;

class ProductSearch extends React.Component {
  state = {
    products: [],
    showRemoveIcon: false,
    searchValue: "FB"
  };

 
  handleSearchChange = e => {
    const value = e.target.value;

    this.setState({
      searchValue: value
    });

    if (value === "") {
      this.setState({
        products: [],
        showRemoveIcon: false
      });
    } else {
      this.setState({
        showRemoveIcon: true
      });

     ApiClient.search(value, products => {
        this.setState({
          products: products
        });
      });
    }
  };

 

  render() {
    const { showRemoveIcon, products } = this.state;
    const removeIconStyle = showRemoveIcon ? {} : { visibility: "hidden" };
   // const foodRows = foods.map((food, idx) => (
   let newproduct = products.map(product => ({name: product.name, price: product.price}));

     
    const productRows = products.map((product, idx) => (
      <tr key={idx} onClick={() => this.props.onProductClick(product)}>
        <td>{product.Name}</td>
        <td className="right aligned">{product.Condition}</td>
        <td className="right aligned">{product.Price}</td>
        <td className="right aligned">{product.Image}</td>
        <td className="right aligned">{product.Sku}</td>
      </tr>
    ));

    return (
      <div id="product-search">
        <table className="ui selectable structured large table">
          <thead>
            <tr>
              <th colSpan="5">
                <div className="ui fluid search">
                  <div className="ui icon input">
                    <input
                      className="prompt"
                      type="text"
                      placeholder="Search Products..."
                      value={this.state.searchValue}
                      onChange={this.handleSearchChange}
                    />
                    <i className="search icon" />
                  </div>
                  <i
                    className="remove icon"
                    onClick={this.handleSearchCancel}
                    style={removeIconStyle}
                  />
                </div>
              </th>
            </tr>
            <tr>
              <th className="eight wide">Name</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Condition</th>
              <th>Sku</th>
            </tr>
          </thead>
          <tbody>
            {productRows}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductSearch;
