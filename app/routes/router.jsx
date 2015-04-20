var React = require('react');
var Router = require('react-router');
var { Route, RouteHandler, Redirect } = Router;

var BaseLayout = require('../components/layouts/base-layout/base-layout');
var StrippedLayout = require('../components/layouts/stripped-layout/stripped-layout');

var Dashboard = require('../components/dashboard/dashboard');
var About = require('../components/about/about');

var App = React.createClass({
  render() {
    return (
      <RouteHandler/>
    );
  }
});

var routes = (
  <Route handler={App} name='app' path='/'>
    <Redirect from='/' to='/dashboard'/>

    <Route handler={BaseLayout}>
      <Route name="dashboard" path='dashboard' handler={Dashboard}/>
      <Route name="about" path='about' handler={About}/>
    </Route>

    <Route path="stripped" handler={StrippedLayout}>
      <Route name="about-stripped" path="about" handler={About}/>
    </Route>

  </Route>

);

module.exports = routes;
