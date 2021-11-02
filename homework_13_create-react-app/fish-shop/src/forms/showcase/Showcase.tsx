import * as React from 'react';
import {Categories} from "../../components/categories/Categories";
import {Products} from "../../components/products/Products";

export class Showcase extends React.Component<any, any> {
  render() {
    return (
      <main className="page-layout__main">
        <Categories/>
        <Products/>
      </main>
    );
  }
}
