import * as React from 'react';
import './Header.css';
import { RefObject } from 'react';

interface Props {
}

class Header extends React.Component {
  constructor(props: Props) {
    super(props);
    window.addEventListener('scroll', this.scrollHandler);
    this.element = React.createRef(); // Ref creation
    this.headerElement = React.createRef(); // Ref creation
  }

  element: RefObject<HTMLHeadingElement>;

  headerElement: RefObject<HTMLHeadingElement>;

  scrollHandler = () => {
    if (!this.element.current) return;
    const distanceToPageTop = window.scrollY + this.element.current!.getBoundingClientRect().top;
    const elementHeight = this.element.current!.offsetHeight;
    const { scrollTop } = document.documentElement;
    let opacity = 1;
    if (scrollTop > distanceToPageTop) {
      opacity = 1 - (scrollTop - distanceToPageTop) / ((distanceToPageTop + elementHeight) / 2);
    }
    if (opacity >= 0) {
      this.headerElement.current!.style.opacity = String(opacity);
    }
    if (scrollTop > (distanceToPageTop + elementHeight / 2) * 2 - 64) {
      window.scrollTo(0, window.innerHeight);
      // if (!this.headerElement.current!.classList.contains('header')) {
      //  this.headerElement.current!.classList.remove('header-intro');
      //  window.scrollTo(0, window.innerHeight / 2);
      //  this.headerElement.current!.classList.add('header');
      //  console.log(scrollTop, distanceToPageTop, opacity, (distanceToPageTop + elementHeight / 2) * 2);
      // }
    }
  };

  render() {
    return (
      <header
        id="intro"
        className="header-intro"
        ref={this.headerElement /* ref assignment */}
      >
        <h1
          ref={this.element /* ref assignment */}
        >
          To-do List React App
        </h1>
        <a href="#app" onClick={() => window.scrollBy({ top: window.innerHeight, left: 0, behavior: 'smooth' })}>
          <span />
          Scroll
        </a>
      </header>
    );
  }
}

export default Header;
