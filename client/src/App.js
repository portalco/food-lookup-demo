import React, { Component } from "react";
import SelectedFoods from "./SelectedFoods";
import FoodSearch from "./FoodSearch";

class App extends Component {
  state = {
    selectedFoods: [],
    replacementOptions: {
    "replacementOptions": {
        "Model": [
            "010"
        ],
        "Brand": "Fatbat",
        "Name": [
            "Garmin Black"
        ],
        "Condition": [
            "New"
        ],
        "Price": [
            9.99
        ],
        "ScreenSize": "50",
        "Resolution": null,
        "RefreshRate": null,
        "Type": null,
        "ImageMedium": [ 
            "https://img.bbystatic.com/BestBuy_US/images/products/5240/5240800_sa.jpg"
        ],
        "HDMI": null,
        "SmartTV": null,
        "SKU": [
            2
        ]
    }
},
    isLoading: false,
    error: null
  };

  removeFoodItem = itemIndex => {
    const filteredFoods = this.state.selectedFoods.filter(
      (item, idx) => itemIndex !== idx
    );
    this.setState({ selectedFoods: filteredFoods });
  };

  addFood = food => {
    const newFoods = this.state.selectedFoods.concat(food);
    this.setState({ selectedFoods: newFoods });
  };

   componentDidMount() {
    fetch('http://gnetworkinc-test.apigee.net/supplierservice?&format=json&pageSize=10&show=quantityLimit,width,shortDescription,color,manufacturer,sku,name,modelNumber,condition,image,salePrice,customerTopRated&sort=bestSellingRank')
      .then(response => response.json())
      .then(
        data => this.setState({ replacementOptions: data.replacementOptions })
        );
  }


  

  render() {
    const { selectedFoods } = this.state;
    const { replacementOptions } = this.state;

    

    return (
       
      <div className="App">
        <div className="ui text container">
          <SelectedFoods
            foods={selectedFoods}
            onFoodClick={this.removeFoodItem}
          />
          <FoodSearch onFoodClick={this.addFood} />
        </div>
         
         
          <a href={replacementOptions.Brand}>{replacementOptions.Brand}</a>
          <a href={replacementOptions.Price}>{replacementOptions.Price}</a>
   
      </div>
    );
  }
}

export default App;
