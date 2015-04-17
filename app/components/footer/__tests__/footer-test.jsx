'use strict';

jest.dontMock('../footer');

var React = require('react/addons');
var Footer = require('../footer');
var StubRouterContext = require("../../../../config/stubRouterContext");
var TestUtils = React.addons.TestUtils;

describe('Footer', function() {

  it('sets class name', function() {
    var FooterWithRouterContext = new StubRouterContext(Footer);
    var footer = TestUtils.renderIntoDocument(<FooterWithRouterContext />);
    var element = TestUtils.findRenderedDOMComponentWithClass(footer, 'footer');
    expect(element).toBeDefined();
  });

});
