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
    //else is this address contains data,to avoid collision and over writing this.address 
    //will expand this address by adding another array inside the address
    //[['data1',1000]['data2',53]]
    this.data[address].push([key,value]) 
    return this.data

  }

  get(key){
    //get the exact array
     const address = this._hash(key)
     //incase there're more the one data inside the address we to loop thro the subArray
     const bucket = this.data[address]
    for (let i =0; i < bucket.length; i++){
      if(this.data[i][0]===key){
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
