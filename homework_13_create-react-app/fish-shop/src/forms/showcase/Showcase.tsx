import * as React from 'react';
import {Categories} from "../../components/categories/Categories";
import {Products} from "../../components/products/Products";

export class Showcase extends React.Component<any, any> {
  render() {
    return (
      <main className="page-layout__main page-layout__main_theme_light">
        <Categories/>
        <Products/>
      </main>
    );
  }
}
