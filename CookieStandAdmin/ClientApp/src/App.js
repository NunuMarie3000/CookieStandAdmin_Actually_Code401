import React from 'react';
//import './custom.css';
//import './site.css';
import Header from './newcomponents/Header';
import Main from './newcomponents/Main';
import Footer from './newcomponents/Footer';

export default function App() {
  return (
    <div>
      <Header />
      <div style={{ backgroundColor: "#ECFDF5", padding: "4rem 10rem" }}>
        <Main />
      </div>
      <Footer />
    </div>
    )
}

//import React, { Component } from 'react';
//import { Route, Routes } from 'react-router-dom';
//import AppRoutes from './AppRoutes';
//import { Layout } from './components/Layout';
//import './custom.css';

//export default class App extends Component {
//  static displayName = App.name;

//  render() {
//    return (
//      <Layout>
//        <Routes>
//          {AppRoutes.map((route, index) => {
//            const { element, ...rest } = route;
//            return <Route key={index} {...rest} element={element} />;
//          })}
//        </Routes>
//      </Layout>
//    );
//  }
//}
