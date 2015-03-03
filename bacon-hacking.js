// Router
var idHashPropBus = new Bacon.Bus();
var idHashProp = idHashPropBus.toProperty(null);

// Action
var idToLoadBus = new Bacon.Bus();

// Store
var loadedUserBus = new Bacon.Bus();
var loadedUser = loadedUserBus.toProperty(null);

var xyz = Bacon.combineWith(function(id, user) {
    if (id && (!user || id !== user.id)) {
      return id;
    }
  }, idHashProp, loadedUser)
  .filter(function(id) {
    return id;
  });

idToLoadBus.plug(xyz);

loadedUser
  .filter((user) => { return user })
  .onValue((user) => {
    console.log('user loaded!', user.id);
  });

// Mock
idToLoadBus.onValue((id) => {
  loadedUserBus.push({ id, name: 'John' + id });
});

idHashPropBus.push('123');

setTimeout(function() {
  idHashPropBus.push('456');
}, 5000);
