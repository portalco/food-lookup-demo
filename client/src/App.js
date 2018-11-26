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


  
  

  render() {
    const { selectedFoods } = this.state;
    const { selectedProducts } = this.state;

    

    return (
       
      <div className="App">
       
       <div className="ui text container">
          <SelectedProducts
            products={selectedProducts}
            onProductClick={this.removeProductItem}
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
