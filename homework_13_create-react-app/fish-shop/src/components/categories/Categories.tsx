import * as React from 'react';
import {CategoriesItems} from "./__items/CategoriesItems";

export class Categories extends React.Component<any, any> {
  render() {
    return (
      <section className="categories">
        <h2 className="categories__title">Рыбы на любой вкус</h2>
        <p className="categories__tagline">Мы продаём рыбов, а не только показываем!</p>
        <CategoriesItems/>
      </section>
    );
  }
}
