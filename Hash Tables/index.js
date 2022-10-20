class HashTable{
  constructor(size=53){
    this.keyMap = new Array(size);

    // console.log(this.keyMap.length);
  }


  _hash(key){
    let total = 0;
    let WEIRD_PRIME = 31;

    const min = Math.min(key.length,100);

    // console.log(min , "min");

    for(let k = 0;k < min;k++){
      const char = key[k].toLowerCase();
      // console.log(char , `char at ${k}`)
      const  codeValue = char.charCodeAt(0) - 96;

      // console.log(codeValue , `char code value of ${char} at ${k}`);

      total = (total * WEIRD_PRIME + codeValue ) % this.keyMap.length;

      // console.log(total , `total at char code value ${codeValue} of ${char} at ${k}`);

    }

    return total;

  }

  set(key,value){
    const index = this._hash(key);
    console.log(index , "hash index")
    if(!this.keyMap[index] || this.keyMap[index] === undefined){
      this.keyMap[index] = [];
    }

    for(let i = 0; i < this.keyMap[index].length ;i++){
      const keyHash = this.keyMap[index][i][0];
      if(keyHash === key) return;
    }
    this.keyMap[index].push([key,value]);
  }


  get(key){
    const hashIndex = this._hash(key);

    if(this.keyMap[hashIndex]){
      for(let i = 0; i < this.keyMap[hashIndex].length;i++){
        if(this.keyMap[hashIndex][i][0] === key){
          return this.keyMap[hashIndex][i][1];
        }
      }
    }
    return undefined;
  }

  keys(){
    let results = [];

    for(let j = 0; j < this.keyMap.length ; j++){
      const item = this.keyMap[j]
      if(item){
        for(let v = 0;v < item.length;v++){
          const listItem = item[v][0];
          if(!results.includes(listItem)){
            results.push(item[v][0]);
          }
        }
      }
    }

    return results;
  }
  values(){
    const results = [];

    for(let j = 0; j < this.keyMap.length ; j++){
      const item = this.keyMap[j]
      if(item){
        for(let v = 0;v < item.length;v++){
          const listItem = item[v][1];
          if(!results.includes(listItem)){
            results.push(item[v][1]);
          }
        }
      }
    }

    return results;
  }
}




const hash = new HashTable();

// hash.set("cyan".toCa(),"cyana");
hash.set("b".toLocaleUpperCase()+"lue","blueer");
// hash.set("red".toUpperCase(),"redblueer");
hash.set("cyan".toUpperCase(),"cyana");
hash.set("blue".toUpperCase(),"blueer");
hash.set("red".toUpperCase(),"redblueer");
hash.set("cyan","cyana");
hash.set("blue","blueer");
hash.set("red","redblueer");
// hash.set("maroon","#800000")
// hash.set("yellow","#FFFF00")
// hash.set("olive","#808000")
// hash.set("salmon","#FA8072")
// hash.set("lighashcoral","#F08080")
// hash.set("mediumvioletred","#C71585")
// hash.set("plum","#DDA0DD")
console.log(hash.keyMap,"hash")
console.log(hash.keys(),"hash keys")
console.log(hash.values(),"hash values")