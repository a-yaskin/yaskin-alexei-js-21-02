import * as React from 'react';
import {ProductTile} from "../../product-tile/ProductTile";
import {apiResponse} from "../../../api-mock/api";

export class ProductsTiles extends React.Component<any, any> {
  render() {
    return (
      <div className="products__tiles">
        {apiResponse.status === 'Ok'
          ? apiResponse.result.products.map((elem, index) =>
            <ProductTile name={elem.name} key={index} />)
          : 'An error occurred when getting data.'}
      </div>
    );
  }
}
