/* eslint-disable no-undef */
function  search(query, cb) {
    return fetch('http://gnetworkinc-test.apigee.net/supplierservice?&format=json&pageSize=10&show=quantityLimit,width,shortDescription,color,manufacturer,sku,name,modelNumber,condition,image,salePrice,customerTopRated&sort=bestSellingRank')
     .then(checkStatus)
    .then(parseJSON)
    .then(cb);
  }
 
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error); // eslint-disable-line no-console
  throw error;
}

function parseJSON(response) {
  return response.json();
}

const ApiClient = { search };
export default ApiClient;
