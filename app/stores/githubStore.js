var request = require('superagent');
var actions = require('../actions/githubActions');

module.exports = {
  user: actions.userLoaded.toProperty()
};
