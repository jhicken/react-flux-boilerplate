'use strict';
jest.dontMock('../dashboard.jsx');
jest.dontMock('baconjs');
jest.dontMock('../../../actions/githubActions.js');
jest.dontMock('../../../stores/githubStore.js');

var React = require('react/addons');
var Dashboard = require('../dashboard.jsx');
var StubRouterContext = require("../../../../config/stubRouterContext.jsx");
var TestUtils = React.addons.TestUtils;


describe('Dashboard', function() {

  it('sets class name', function() {

    var DashboardWithRouterContext = StubRouterContext(Dashboard)
    var dashboard = TestUtils.renderIntoDocument(<DashboardWithRouterContext />);
    var element = TestUtils.findRenderedDOMComponentWithClass(dashboard, 'dashboard');
    expect(element).toBeDefined();

  });

});
