class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  set(key,value){
    //create a new address 
    const address = this._hash(key)
    //if the address is empty add to it
    if(!this.data[address]){
      this.data[address]=[];  
      this.data[address].push([key,value]) 
    }
    //else is this address contains data, expand this address by adding another array
    return this.data

  }

  get(key){
     
    for (let i =0; i < this.data.length; i++){
      if(this.data[i][0]=key){
        return this.data[i][1]
      }
    }


  }

  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
// myHashTable.get('grapes')
myHashTable.set('apples', 9)
// myHashTable.get('apples')