import * as React from 'react';

export class ProductTileButtons extends React.Component<any, any> {
  render() {
    return (
      <div className="product-tile__buttons">
        <a className="a_theme_light" href="/">{this.props.name}</a>
        <button className="product-tile__button product-tile__button_theme_light">Купить</button>
      </div>
    );
  }
}
