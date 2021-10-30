import * as React from 'react';

export class Header extends React.Component<any, any> {
  render() {
    return (
      <header className="page-layout__header page-layout__header_theme_light">
        <h1>Интернет-магазин "Не только красивое"</h1>
        <nav className="page-layout__navigation">
          <ul className="page-layout__nav-items">
            <li className="page-layout__nav-item">
              <input className="page-layout__filter-switch" type="checkbox" defaultChecked id="filter-switch" />
                <label className="page-layout__filter-switch" htmlFor="filter-switch">Фильтр рыбов</label>
            </li>
            <li className="page-layout__nav-item">
              <input className="page-layout__theme-switch" type="checkbox" id="theme-switch" />
                <label htmlFor="theme-switch">Только темное</label>
            </li>
          </ul>
        </nav>
        <div id="loader">
          <svg width="32" height="32" viewBox="0 0 16 16" fill="none" className="anim-rotate">
            <circle cx="8" cy="8" r="7" stroke="currentColor" strokeOpacity="0.25" strokeWidth="2"
                  vectorEffect="non-scaling-stroke"/>
            <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"/>
          </svg>
        </div>
      </header>
  );
  }
}
