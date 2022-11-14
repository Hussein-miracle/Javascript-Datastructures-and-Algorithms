class LRUCache{
  constructor(capacity){
    this.capacity = capacity;
    this.cache = new Map();
  }


  set(key,value){

    // if we"re at capacity we need to delete the least recently used item
    if(this.cache.size >= this.capacity){
      //invoke keys iterator to get  the least recently used item
      const keyToDelete = this.cache.keys().next().value;
      this.cache.delete(keyToDelete);
    }

    this.cache.delete(key);
    this.cache.set(key,value);
  }

  get(key){
    if(this.cache.has(key)){
      const value = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key,value);
      return value;
    }
  }


  get getCache(){
    return this.cache;
  }

  get size(){
    return this.cache.size;
  }
}

const cache = new LRUCache(5);


console.log(cache.set("a",5));
console.log(cache.set("d",5));
console.log(cache.set("g",5));
console.log(cache.set("ac",5));
console.log(cache.set("cc",5));
console.log(cache.set("a",8));
console.log(cache.set("c",5));
console.log(cache.size,"size of cache")
console.log(cache.getCache,"size of cache")
