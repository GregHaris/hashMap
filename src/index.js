class HashMap {
  constructor(size = 50) {
    this.buckets = new Array(size);
    this.size = 0;
  }

  // hash function
  hash(key) {
    let hashCode = 0;
    let i = 0;

    const primeNumber = 31;
    while (i < key.length) {
      hashCode =
        (primeNumber * hashCode + key.charCodeAt(i)) % this.buckets.length;
      i++;
    }
    return hashCode;
  }

  // add key values to buckets
  set(key, value) {
    let index = this.hash(key);
    let i = 0;

    //  if hashed bucket index doesn't exit, create it
    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }

    // check if there is collission. If true, replace the old with new
    while (i < this.buckets[index].length) {
      if (this.buckets[index][i][0] === key) {
        this.buckets[index][i][1] = value;
        return;
      }
      i++;
    }

    // if false, add to the map
    this.buckets[index].push([key, value]);
    this.size++;
  }

  get(key) {
    let index = this.hash(key);

    if (!this.buckets[index]) {
      return null;
    }

    for (let bucket of this.buckets[index]) {
      if (bucket[0] === key) {
        return bucket[1];
      }
    }
    return null;
  }

  // check if key exists in the map
  has(key) {
    let index = this.hash(key);

    if (!this.buckets[index]) {
      return false;
    }

    // if it does, then return true
    for (let bucket of this.buckets[index]) {
      if (bucket[0] === key) {
        return true;
      }
    }
    return false;
  }

  //  delete a hash element
  remove(key) {
    let index = this.hash(key);
    let i = 0;

    if (!this.buckets[index]) {
      return `Key '${key}' not found`;
    }

    // if it does, delete then return true
    while (i < this.buckets[index].length) {
      if (this.buckets[index][i][0] === key) {
        this.buckets[index].splice(i, 1);

        this.size--;

        return `key '${key}' and its hashes has been successfully deleted`;
      }
      i++;
    }

    return `Key '${key}' not found`;
  }
}

const map = new HashMap(50);

map.set('bk001', 'The Count of Monte Cristo');
map.set('bk002', 'The Vampire Diaries');

console.log(map.remove('bk002'));
