class IndexDBUltil_bak {
  constructor(databaseName, version, objectStoreName) {
    this.databaseName = databaseName;
    this.version = version;
    this.objectStoreName = objectStoreName;
  }

  /**
   * Hàm kiểm tra DB có tồn tại không
   * @param {*} dbName 
   * @returns True: Có; False: Không
   */
  static async checkDBExits(dbName) {
    //return (await window.indexedDB.databases()).map(db => db.name).includes(dbName);

    var dbExists = true;
    var request = window.indexedDB.open(dbName);
    request.onupgradeneeded = function (e) {
      e.target.transaction.abort();
      dbExists = false;
    }
    return dbExists;
  }

  static async checkObject(dbName, objName) {
    var request = indexedDB.open(dbName);
    return db.objectStoreNames.contains(objName);
  }





  // openDatabase() {
  //   return new Promise((resolve, reject) => {
  //     const request = window.indexedDB.open(this.databaseName, this.version);
  //     request.onerror = event => reject(event.target.error);
  //     request.onsuccess = event => resolve(event.target.result);
  //     request.onupgradeneeded = event => {
  //       const db = event.target.result;
  //       if (!db.objectStoreNames.contains(this.objectStoreName)) {
  //         db.createObjectStore(this.objectStoreName, { keyPath: "id" });
  //       }
  //     };
  //   });
  // }

  // getObjectStore(db, mode) {
  //   const transaction = db.transaction([this.objectStoreName], mode);
  //   return transaction.objectStore(this.objectStoreName);
  // }

  // add(item) {
  //   return this.openDatabase().then(db => {
  //     const objectStore = this.getObjectStore(db, "readwrite");
  //     const request = objectStore.add(item);
  //     return new Promise((resolve, reject) => {
  //       request.onerror = event => reject(event.target.error);
  //       request.onsuccess = event => resolve(event.target.result);
  //     });
  //   });
  // }

  // update(item) {
  //   return this.openDatabase().then(db => {
  //     const objectStore = this.getObjectStore(db, "readwrite");
  //     const request = objectStore.put(item);
  //     return new Promise((resolve, reject) => {
  //       request.onerror = event => reject(event.target.error);
  //       request.onsuccess = event => resolve(event.target.result);
  //     });
  //   });
  // }

  // remove(id) {
  //   return this.openDatabase().then(db => {
  //     const objectStore = this.getObjectStore(db, "readwrite");
  //     const request = objectStore.delete(id);
  //     return new Promise((resolve, reject) => {
  //       request.onerror = event => reject(event.target.error);
  //       request.onsuccess = event => resolve(event.target.result);
  //     });
  //   });
  // }

  // getById(id) {
  //   return this.openDatabase().then(db => {
  //     const objectStore = this.getObjectStore(db, "readonly");
  //     const request = objectStore.get(id);
  //     return new Promise((resolve, reject) => {
  //       request.onerror = event => reject(event.target.error);
  //       request.onsuccess = event => resolve(event.target.result);
  //     });
  //   });
  // }

  // getAll() {
  //   return this.openDatabase().then(db => {
  //     const objectStore = this.getObjectStore(db, "readonly");
  //     const request = objectStore.getAll();
  //     return new Promise((resolve, reject) => {
  //       request.onerror = event => reject(event.target.error);
  //       request.onsuccess = event => resolve(event.target.result);
  //     });
  //   });
  // }
}