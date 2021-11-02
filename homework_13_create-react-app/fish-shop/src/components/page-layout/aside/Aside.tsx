import * as React from 'react';
import {ProductFilter} from "../../product-filter/ProductFilter";

export class Aside extends React.Component<any, any> {
  render() {
    return (
      <aside className="page-layout__aside">
        <ProductFilter/>
      </aside>
    );
  }
}
