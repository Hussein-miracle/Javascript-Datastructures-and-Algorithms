class HashTable {
  constructor(size = 53) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;

    for (let i = 0; i < Math.min(100, key.length); i++) {
      const item = key[i];

      const code = item.charCodeAt(0);

      hash = (hash + code * i) % this.data.length;
    }

    return hash;
  }

  set(key, value) {
    key = key.toLowerCase();
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }

    this.data[address].push([key, value]);

    return this.data;
  }

  get(key) {
    const address = this._hash(key);

    const items = this.data[address];

    if (items) {
      for (let i = 0; i < items.length; i++) {
        const k = items[i][0];

        if (k === key) {
          return items[i][1];
        }
      }
    }

    return undefined;
  }

  keys(index = 0) {
    const buckets = this.data;
    const result = [];
    for (let i = 0; i < buckets.length; i++) {
      const currentBucket = buckets[i];
      if (currentBucket) {
        for (let j = 0; j < currentBucket.length; j++) {
          const currentItem = currentBucket[j];
          result.push(currentItem[index]);
        }
      }
    }

    return result;
  }

  values() {
    const result = this.keys(1);
    return result;
  }
}

const hash = new HashTable(3);

// console.log(hash.set("cor", "files"));
// console.log(hash.set("cor", "new files"));
// console.log(hash.set("cora", "fis"));
// console.log(hash.set("coraa", "les"));

// console.log(hash.keys());
// console.log(hash.values());

const firstRecurringCharacter = (arr) => {
  const hash = {};

  for (const item of arr) {
    if (!hash[item]) {
      hash[item] = 1;
    } else {
      return item;
    }
  }

  return undefined;
};

//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
console.log(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]));
//It should return 1

//Given an array = [2,3,4,5]:
console.log(firstRecurringCharacter([2, 3, 4, 5]));
//It should return undefined
