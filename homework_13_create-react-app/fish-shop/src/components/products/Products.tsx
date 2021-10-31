import * as React from 'react';
import {ProductsTiles} from "./__tiles/ProductsTiles";

export class Products extends React.Component<any, any> {
  render() {
    return (
      <section className="products">
        <h3 className="products__title">Популярные</h3>
        <ProductsTiles/>
      </section>
    );
  }
}
