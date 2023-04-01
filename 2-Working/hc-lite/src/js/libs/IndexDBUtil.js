class IndexDBUtil {
    constructor(databaseName, storeName, keyPath, indexes) {
        this.databaseName = databaseName;
        this.storeName = storeName;
        this.keyPath = keyPath;
        this.indexes = indexes;
        this.db = null;
        this.openDatabase();
    }

    openDatabase() {
        const request = window.indexedDB.open(this.databaseName);

        request.onerror = (event) => {
            console.log("Error opening database.");
        };

        request.onsuccess = (event) => {
            this.db = event.target.result;
            console.log("Database opened successfully.");
        };

        request.onupgradeneeded = (event) => {
            this.db = event.target.result;
            const objectStore = this.db.createObjectStore(this.storeName, {
                keyPath: this.keyPath
            });

            this.indexes.forEach(index => {
                objectStore.createIndex(index.name, index.keyPath, index.options);
            });

            console.log("Database upgraded successfully.");
        };
    }

    add(record) {
        const transaction = this.db.transaction([this.storeName], "readwrite");
        const objectStore = transaction.objectStore(this.storeName);

        const request = objectStore.put(record);

        request.onerror = (event) => {
            console.log("Error adding record.");
        };

        request.onsuccess = (event) => {
            //console.log("Record added successfully.");
        };
    }

    update(record) {
        const transaction = this.db.transaction([this.storeName], "readwrite");
        const objectStore = transaction.objectStore(this.storeName);

        const request = objectStore.put(record);

        request.onerror = (event) => {
            console.log("Error updating record.");
        };

        request.onsuccess = (event) => {
            //console.log("Record updated successfully.");
        };
    }

    delete(key) {
        const transaction = this.db.transaction([this.storeName], "readwrite");
        const objectStore = transaction.objectStore(this.storeName);

        const request = objectStore.delete(key);

        request.onerror = (event) => {
            console.log("Error deleting record.");
        };

        request.onsuccess = (event) => {
            console.log("Record deleted successfully.");
        };
    }

    getByKey(key, callback) {
        const transaction = this.db.transaction([this.storeName], "readonly");
        const objectStore = transaction.objectStore(this.storeName);

        const request = objectStore.get(key);

        request.onerror = (event) => {
            console.log("Error getting record.");
        };

        request.onsuccess = (event) => {
            callback(request.result);
        };
    }

    search(indexName, searchValue, callback) {
        const transaction = this.db.transaction([this.storeName], "readonly");
        const objectStore = transaction.objectStore(this.storeName);
        const index = objectStore.index(indexName);

        const request = index.openCursor(IDBKeyRange.only(searchValue));

        const results = [];

        request.onerror = (event) => {
            console.log("Error searching records.");
        };

        request.onsuccess = (event) => {
            const cursor = event.target.result;
            if (cursor) {
                results.push(cursor.value);
                cursor.continue();
            } else {
                callback(results);
            }
        };
    }

    // getAll(callback) {
    //     const transaction = this.db.transaction([this.storeName], "readonly");
    //     const objectStore = transaction.objectStore(this.storeName);

    //     const request = objectStore.getAll();

    //     request.onerror = (event) => {
    //         console.log("Error get all records.");
    //     };

    //     request.onsuccess = (event) => {
    //         callback(event.target.result);
    //     };
    // }
}