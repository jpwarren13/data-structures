var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
  storage[Object.keys(storage).length] = value; 
  };

  someInstance.dequeue = function() {
  var firstElement = storage["0"]; 
  delete storage["0"];
  for (var key in storage){
     var tempKey = key - 1;
     storage[tempKey] = storage[key]; 
    }
  
  delete storage[Object.keys(storage).length-1];

  return firstElement; 
  };

  someInstance.size = function() {
  return Object.keys(storage).length;
  };

  return someInstance;
};


