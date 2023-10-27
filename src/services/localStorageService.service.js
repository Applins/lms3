class LocalStorageService {
  "use strict";
  constructor(model, key) {
    this.model = model
    this.origModel = model;
    this.key = key;
    this.increment = 100000

    // Initialize and sort the data using sortCol and sortDir from the model
    if (!this.retrieve()) {
      // If data is not in local storage, initialize and sort
      this.model.data = this.cloneObject(model.data);
      this.sort(this.sortCol, this.sortDir, true); // Apply default sort
    }
  }

  // Getters and setters
  get sortCol(){
    return this.origModel.options.sortCol;
 }
 set sortCol(col){
    this.origModel.options.sortCol=col;
 }
  get sortDir() {
    return this.origModel.options.sortDir;
  }
  set sortDir(dir) {
    this.origModel.options.sortDir = dir;
  }
  

  get size() {
    return this.model.data.length;
  }

  // CRUD FUNCTIONS
  async create(obj) {
    this.model.data.push(obj);
    this.store();
  }

  async read(getId) {
    const item = this.model.data.find(item => item.id === getId);
    return item;
}

  async update(obj) {
    const find = this.getItemIndex(obj.id);
    if (find !== -1) {
      this.model.data[find] = obj;
      this.store();
    }
  }

  async delete(removeId) {
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
    const sortedData = this.cloneObject(this.model.data);
    sortedData.sort((a, b) => {
      console.log("Comparing", a[col], b[col]);
      if (direction === 'desc') {
        if (a[col] < b[col]) {
          return 1;
        } else if (a[col] > b[col]) {
          return -1;
        }
        return 0;
      } else {
        if (a[col] < b[col]) {
          return -1;
        } else if (a[col] > b[col]) {
          return 1;
        }
        return 0;
      }
    });
    if (perm) {
      this.model.data = sortedData;
      this.sortCol = col;
      this.sortDir = direction;
      this.store();
    }
    return sortedData;
  }
  
  

 filter(filterObj) {
  function filterFunc(team) {
    for (let key in filterObj) {
      if (team[key]) {
        let val1 = team[key].toString().toLowerCase();
        let val2 = filterObj[key].toString().toLowerCase();
        if (!val1.includes(val2)) {
          return false;
        }
      } else {
        return false;
      }
    }
    return true;
  }
  let result = this.model.data.filter(filterFunc);
  return this.cloneObject(result);
}

  async getLookup(lookupName){
    return this.origModel.lookups[lookupName]
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
    return this.origModel.entities;
 }
 set filterStr(filterStr){
    this.origModel.entities=filterStr;
 }
 
 async list() {
  /* KJ: modified list getter to sort and filter based on current options set in 'app' */
  this.sort(this.sortCol, this.sortDir, true);
  if (this.filterStr) {
    let filterObj = { name: this.filterStr }; // Assuming the filter is based on the 'name' property
    return this.filter(filterObj);
  }
  return this.model.data;   
}


}

export default LocalStorageService;
