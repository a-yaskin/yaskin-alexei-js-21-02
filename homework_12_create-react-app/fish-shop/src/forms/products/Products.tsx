import * as React from 'react';
import {ProductTile} from "../../components/product-tile/ProductTile";
import {apiResponse} from "../../api-mock/api";

export class Products extends React.Component<any, any> {
  render() {
    return (
      <main className="page-layout__main page-layout__main_theme_light">
        <section className="categories">
          <h2 className="categories__title">Рыбы на любой вкус</h2>
          <p className="categories__tagline">Мы продаём рыбов, а не только показываем!</p>
          <div className="categories__items">
            <article className="categories__item categories__item_theme_light ">
              <a className="a_theme_light" href="/category.html">Замороженные рыбы</a>
              <p>Мы заморозили рыбов для вас</p>
            </article>
            <article className="categories__item categories__item_theme_light">
              <a className="a_theme_light" href="/category.html">Живые рыбы</a>
              <p>На кухню или на разведение</p>
            </article>
          </div>
        </section>
        <section className="products">
          <h3 className="products__title">Популярные</h3>
          <div className="products__tiles">
            {apiResponse.status === 'Ok'
              ? apiResponse.result.map((elem, index) => <ProductTile name={elem.name} key={index} />)
              : 'Error when getting data.'}
          </div>
        </section>
      </main>
  );
  }
}
