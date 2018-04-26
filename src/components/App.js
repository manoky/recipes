import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Home from './Home';
import Favorites from './Favorites';
import Header from './Header';
import NotFound from './NotFound';
import Recipe from './Recipe';
import RootModal from './RootModal';
import { loadRecipes } from '../actions/recipes';

class App extends Component {
  componentDidMount() {
    this.props.loadRecipes();
  }

  render() {
    return (
      <BrowserRouter>
        <main>
          <Header />
          <RootModal />
          <Switch>
            <Redirect from="/home" to="/" />
            <Route exact path="/" component={Home} />
            <Route path="/favorites" component={Favorites} />
            <Route path="/recipe/:id" component={Recipe} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  loadRecipes: PropTypes.func.isRequired,
};

export default connect(null, { loadRecipes })(App);
