import * as React from 'react';
import {apiResponse} from "../../../api-mock/api";
import {CategoriesItem} from "../__item/CategoriesItem";

export class CategoriesItems extends React.Component<any, any> {
  render() {
    return (
      <div className="categories__items">
        {apiResponse.status === 'Ok'
          ? apiResponse.result.categories.map((elem, index) =>
            <CategoriesItem name={elem.name} description={elem.description} key={index} />)
          : 'An error occurred when getting data.'}
      </div>
    );
  }
}
