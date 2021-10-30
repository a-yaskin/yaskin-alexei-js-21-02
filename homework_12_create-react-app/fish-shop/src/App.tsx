import * as React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Products} from "./forms/products/Products";
import {Aside} from "./components/aside/Aside";
import {Footer} from "./components/footer/Footer";

class App extends React.Component<any, any> {
  render() {
    return (
      <div className="page-layout page-layout_theme_light">
        <Header/>
        <Products/>
        <Aside/>
        <div className="page-layout__trailing"/>
        <Footer/>
      </div>
    );
  }
}

export default App;
