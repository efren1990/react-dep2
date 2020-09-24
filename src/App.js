import React, { Fragment } from 'react';

// ESTILOS COMPONENTE
import './App.css';

// ENRUTADOR BROWSER ROUTER =========================>
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// COMPONENTE HEADER =========================>
import Header from './components/header/Header';

// COMPONENTE FOOTER =========================>
import Footer from './components/footer/Footer';

// COMPONENTE DINAMICOS =================================>
import Pricing from './components/contents/pricing/Pricing';
import Feature from './components/contents/features/Feature';
import Support from './components/contents/support/Support';
import Enterprise from './components/contents/enterprise/Enterprise';
import Login from './components/contents/login/Login';
import Error404 from './components/contents/error/Error404';

function App() {
  return (
    <Fragment>
      <Header />
        <BrowserRouter>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Enterprise} />
              <Route exact path="/enterprise" component={Enterprise} />
              <Route exact path="/feature" component={Feature} />
              <Route exact path="/support" component={Support} />
              <Route exact path="/pricing" component={Pricing} />
              <Route exact path="/login" component={Login} />
              <Route component={Error404}/>
            </Switch>
          </div>
        </BrowserRouter>
      <Footer />
    </Fragment>
  );
}

export default App;
