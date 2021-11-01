import * as React from 'react';
import {ProductTileButtons} from "./__buttons/ProductTileButtons";

export class ProductTile extends React.Component<any, any> {
  render() {
    return (
      <article className="product-tile product-tile_theme_light">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkmAcAAKQAoJgx3+MAAAAASUVORK5CYII="
          alt="Fish" width="60" height="60" />
        <ProductTileButtons name={this.props.name}/>
      </article>
    );
  }
}
