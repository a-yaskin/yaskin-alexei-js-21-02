import * as React from 'react';

export class CategoriesItem extends React.Component<any, any> {
  render() {
    return (
      <article className="categories__item categories__item_theme_light ">
        <a className="a_theme_light" href="/">{this.props.name}</a>
        <p>{this.props.description}</p>
      </article>
    );
  }
}
