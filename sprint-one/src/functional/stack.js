var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
  for (var i = someInstance.size(); i > -1; i--) {
    storage[i] = storage[i-1];
    }
  storage["0"] = value;
  };

  someInstance.pop = function() {
  var poppedElement = storage["0"]; 
  for (var key in storage) {
    storage[key] = storage[key+1];
  }
  delete storage[someInstance.size()-1];   
  };

  someInstance.size = function() {
  return Object.keys(storage).length;
  };

  return someInstance;
};
