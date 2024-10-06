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
}
