class HashMap {
  constructor(size = 50) {
    this.buckets = new Array(size);
    this.size = size;
  }
  hash(key) {
    let hashCode = 0;
    let i = 0;

    const primeNumber = 31;
    while (i < key.length) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.size;
      i++;
    }
    return hashCode;
  }

  set(key, value) {
    let index = this.hash(key);

    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }

    this.buckets[index].push([key, value]);
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

  has(key) {
    let index = this.hash(key);

    if (!this.buckets[index]) {
      return false;
    }

    for (let bucket of this.buckets[index]) {
      if (bucket[0] === key) {
        return true;
      }
    }
    return false;
  }
}
