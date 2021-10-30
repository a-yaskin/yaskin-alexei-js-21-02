import * as React from 'react';
import './ProductTile.css';

export class ProductTile extends React.Component<any, any> {
  render() {
    return (
      <article className="product-tile product-tile_theme_light">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkmAcAAKQAoJgx3+MAAAAASUVORK5CYII="
          alt="Fish" width="60" height="60" />
        <div className="product-tile__buttons">
          <a className="a_theme_light" href="/product.html">{this.props.name}</a>
          <button className="product-tile__button product-tile__button_theme_light">Купить</button>
        </div>
      </article>
    )
  }
}
