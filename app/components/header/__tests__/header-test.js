'use strict';

jest.dontMock('../header.jsx');


var React = require('react/addons');
var Header = require('../header.jsx');
var StubRouterContext = require("../../../../config/stubRouterContext.jsx");
var TestUtils = React.addons.TestUtils;


describe('Header', function() {

  it('sets class name', function() {

    var HeaderWithRouterContext = StubRouterContext(Header)
    var header = TestUtils.renderIntoDocument(<HeaderWithRouterContext />);
    renderedItems = TestUtils.scryRenderedDOMComponentsWithTag(header, 'a'),
    itemCount = renderedItems.length;

    expect(itemCount).toBe(2);

    expect(React.findDOMNode(renderedItems[0]).textContent).toEqual('Dashboard');
    expect(React.findDOMNode(renderedItems[1]).textContent).toEqual('About');

  });

});
