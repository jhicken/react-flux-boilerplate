var React = require('react/addons');

function ToObject(val) {
	if (val == null) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

var objectAssign = Object.assign || function (target, source) {
	var from;
	var keys;
	var to = ToObject(target);

	for (var s = 1; s < arguments.length; s++) {
		from = arguments[s];
		keys = Object.keys(Object(from));

		for (var i = 0; i < keys.length; i++) {
			to[keys[i]] = from[keys[i]];
		}
	}

	return to;
};

var stubRouterContext = (Component, props, stubs) => {
  function RouterStub() { }

  objectAssign(RouterStub, {
    makePath () {},
    makeHref () {},
    transitionTo () {},
    replaceWith () {},
    goBack () {},
    getCurrentPath () {},
    getCurrentRoutes () {},
    getCurrentPathname () {},
    getCurrentParams () {},
    getCurrentQuery () {},
    isActive () {},
  }, stubs)

  return React.createClass({
    childContextTypes: {
      router: React.PropTypes.func
    },

    getChildContext () {
      return {
        router: RouterStub
      };
    },

    render () {
      return <Component {...props} />
    }
  });
};

export default stubRouterContext;
