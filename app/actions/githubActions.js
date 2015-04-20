var Bacon = require('baconjs');
var request = require('superagent');
var API = require('../constants/Api').githubUserSearchApi.fullUrl();
var UserSearchUrl = API + '/search/users?';

var loadUser = new Bacon.Bus();
var userLoaded = new Bacon.Bus();
var getUserRepos = new Bacon.Bus();
var searchUser = new Bacon.Bus();

var User = {
  get: (name) => {
    request
      .get(UserSearchUrl)
      .query({q: name})
      .end((res) => {
        User._loadAndAppendRepos(res.body.items[0]); // Handle no matching user.
      });
  },
  _loadAndAppendRepos: (user) => {
    request
      .get(user.repos_url)
      .end((res) => {
        user.repos = res.body;
        userLoaded.push(user);
      });
  }
};

loadUser.onValue(User.get);

module.exports = {
  loadUser,
  userLoaded,
  getUserRepos,
  searchUser
};
