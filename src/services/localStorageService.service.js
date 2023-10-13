class LocalStorageService {
  "use strict";
  constructor(data, key) {
    this.origModel = data;
    this.key = key;

    // Initialize and sort the data using sortCol and sortDir from the model
    if (!this.retrieve()) {
      // If data is not in local storage, initialize and sort
      this.model = this.cloneObject(data);
      this.sort(this.sortCol, this.sortDir, true); // Apply default sort
    }
  }

  // Getters and setters
  get sortCol() {
    return this.model.app ? this.model.app.sortCol : 'defaultCol';
  }

  set sortCol(col) {
    if (this.model.app) {
      this.model.app.sortCol = col;
    }
  }

  get sortDir() {
    return this.model.app ? this.model.app.sortDir : 'asc';
  }

  set sortDir(dir) {
    if (this.model.app) {
      this.model.app.sortDir = dir;
    }
  }

  get size() {
    return this.model.data.length;
  }

  // CRUD FUNCTIONS
  create(obj) {
    this.model.data.push(obj);
    this.store();
  }

  read(getId) {
    const item = this.model.data.find(item => item.id === getId);
    return item;
  }

  update(obj) {
    const find = this.getItemIndex(obj.id);
    if (find !== -1) {
      this.model.data[find] = obj;
      this.store();
    }
  }

  delete(removeId) {
    const id = this.getItemIndex(removeId);
    if (id !== -1) {
      this.model.data.splice(id, 1);
      this.store();
    }
  }

  // LocalStorage Functions
  reset() {
    this.clear();
    this.model = this.cloneObject(this.origModel);
    this.store();
  }

  clear() {
    localStorage.clear();
  }

  store() {
    // Convert the model data to a JSON string before storing it in local storage
    localStorage.setItem(this.key, JSON.stringify(this.model));
  }

  retrieve() {
    let storedData = localStorage.getItem(this.key);

    if (storedData !== null) {
      try {
        // Parse the stored JSON string back to an object
        this.model = JSON.parse(storedData);
        return true;
      } catch (error) {
        console.error('Error parsing JSON from localStorage:', error);
        return false;
      }
    } else {
      // If the key doesn't exist in local storage, provide a default value
      this.model = {}; // Default value or an empty object.
      return false;
    }
  }

  // Sorting and Filtering Functions
  sort(col, direction, perm = false) {
    
     const sortedData = this.cloneObject(this.model.data)
     sortedData.sort((a,b) =>{
      if(direction === 'asc'){
        return a[col] < b[col] ? 1: -1
     }
     else{
        return a[col] > b[col] ? 1: -1
     }
     });
     if(perm){
        this.model.data = sortedData
        this.sortCol = col
        this.sortDir = direction
        this.store()
     }
     return sortedData
 }

  filter(filterObj) {
    return this.model.data.filter(item => {
      for (const key in filterObj) {
        if (item[key] !== filterObj[key]) {
          return false;
        }
      }
      return true;
    });
  }

  // Utility functions
  getItemIndex(id) {
    const index = this.model.data.findIndex(item => item.id === id);
    return index;
  }

  cloneObject(obj) {
    // Util function for returning a copy of an object
    return JSON.parse(JSON.stringify(obj));
  }
  get filterStr(){

    return this.model.app.filterStr;
 
 }
 
 set fiterStr(filterStr){
 
    this.model.app.fiterStr=filterStr;
 }
 
list() {
       /*KJ: modified list getter to sort and filter based on current options set in 'app'*/
       this.sort(this.sortCol, this.sortDir, true);
       let filterObj={};
      
       if (this.filterStr){
           filterObj[this.sortCol]=this.filterStr;
           return this.filter(filterObj);
       }
       return this.model.data;
     }
}

export default LocalStorageService;
