
// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between the
// numbers 0 and `max`

/*
 * Complexity: What is the time complexity of the above functions?
 */

var HashTable = function () {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function (k, v) {
  var hash = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v];
  const hashValue = this._storage.get(hash);
  if (hashValue === undefined){
    this._storage.set(hash, [tuple]);
  } else {
    for( var i = 0; i < hashValue.length; i++){
      if(hashValue[i][0] === tuple[0]){
        hashValue[i][1] = v;
      } else if (hashValue[hashValue.length-1][0] !== tuple[0]){
        var tempArray = hashValue;
        tempArray.push(tuple);
        this._storage.set(hash, tempArray);
      }   
   }
 }
};

HashTable.prototype.retrieve = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage.get(index) !== undefined){
    for (var i = 0; i < this._storage.get(index).length; i++){
      if (this._storage.get(index)[i][0] === k){
        return this._storage.get(index)[i][1];
      }
    }
  }

};

HashTable.prototype.remove = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};
var hashTable = new HashTable;
hashTable.insert('Steven', 'Tyler');
//hashTable.remove('Steven');
console.log(hashTable.retrieve('Steven'));
