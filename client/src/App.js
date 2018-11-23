import React, { Component } from "react";
import SelectedFoods from "./SelectedFoods";
import SelectedProducts from "./SelectedProducts";
import FoodSearch from "./FoodSearch";
import ProductSearch from "./ProductSearch";

class App extends Component {
  state = {
    selectedFoods: [],
    selectedProducts: []

  };

  removeFoodItem = itemIndex => {
    const filteredFoods = this.state.selectedFoods.filter(
      (item, idx) => itemIndex !== idx
    );
    this.setState({ selectedFoods: filteredFoods });
  };

  removeProductItem = itemIndex => {
    const filteredProducts = this.state.selectedProducts.filter(
      (item, idx) => itemIndex !== idx
    );
    this.setState({ selectedProducts: filteredProducts });
  };

  addFood = food => {
    const newFoods = this.state.selectedFoods.concat(food);
    this.setState({ selectedFoods: newFoods });
  };

  addProduct = product => {
    const newProducts = this.state.selectedProducts.concat(product);
    this.setState({ selectedProducts: newProducts });
  };


   componentDidMount() {
    fetch('http://gnetworkinc-test.apigee.net/supplierservice?&format=json&pageSize=10&show=quantityLimit,width,shortDescription,color,manufacturer,sku,name,modelNumber,condition,image,salePrice,customerTopRated&sort=bestSellingRank')
      .then(response => response.json())
      .then(
        data => this.setState({ products: data.products })
        );
  }


  

  render() {
    const { selectedFoods } = this.state;
    const { selectedProducts } = this.state;

    

    return (
       
      <div className="App">
      Product
       <div className="ui text container">
          <SelectedProducts
            products={selectedProducts}
            onFoodClick={this.removeProductItem}
          />
          <ProductSearch onProductClick={this.addProduct} />
        </div>
         
        <div className="ui text container">
          <SelectedFoods
            foods={selectedFoods}
            onFoodClick={this.removeFoodItem}
          />
          <FoodSearch onFoodClick={this.addFood} />
        </div>
        
   
      </div>
    );
  }
}

export default App;
