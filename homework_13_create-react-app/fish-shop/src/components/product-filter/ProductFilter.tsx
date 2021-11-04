import * as React from 'react';
import './ProductFilter.css';

export class ProductFilter extends React.Component<any, any> {
  render() {
    return (
      <form className="product-filter product-filter_theme_light">
        <fieldset className="product-filter__type-block">
          <legend className="product-filter__block-title">Морская рыба</legend>
          <p>
            <input type="checkbox" id="kind1" />
            <label htmlFor="kind1">Акула</label>
          </p>
          <p>
            <input type="checkbox" id="kind2" />
            <label htmlFor="kind2">Окунь</label>
          </p>
          <p>
            <input type="checkbox" id="kind3" />
            <label htmlFor="kind3">Палтус</label>
          </p>
          <p>
            <input type="checkbox" id="kind4" />
            <label htmlFor="kind4">Треска</label>
          </p>
        </fieldset>
        <fieldset className="product-filter__type-block">
          <legend className="product-filter__block-title">Пресноводная рыба</legend>
          <p>
            <input type="checkbox" id="kind5" />
            <label htmlFor="kind5">Белоглазка</label>
          </p>
          <p>
            <input type="checkbox" id="kind6" />
            <label htmlFor="kind6">Осётр</label>
          </p>
          <p>
            <input type="checkbox" id="kind7" />
            <label htmlFor="kind7">Речной угорь</label>
          </p>
          <p>
            <input type="checkbox" id="kind8" />
            <label htmlFor="kind8">Налим</label>
          </p>
        </fieldset>
      </form>
    );
  }
}
