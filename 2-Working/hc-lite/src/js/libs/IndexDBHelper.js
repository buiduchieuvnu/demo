class IndexedDBHelper {
    constructor(dbName, storeName) {
        this.dbName = dbName;
        this.storeName = storeName;
        this.db = null;
    }

    connect() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbName);

            request.onerror = () => {
                reject(Error('Failed to connect to IndexedDB'));
            };

            request.onsuccess = () => {
                this.db = request.result;
                resolve();
            };
        });
    }

    add(item) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([this.storeName], 'readwrite');
            const objectStore = transaction.objectStore(this.storeName);
            const request = objectStore.add(item);

            transaction.oncomplete = () => {
                resolve(request.result);
            };

            transaction.onerror = () => {
                reject(Error('Failed to add item to IndexedDB'));
            };
        });
    }

    update(id, item) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([this.storeName], 'readwrite');
            const objectStore = transaction.objectStore(this.storeName);
            const request = objectStore.put(item, id);

            transaction.oncomplete = () => {
                resolve(request.result);
            };

            transaction.onerror = () => {
                reject(Error('Failed to update item in IndexedDB'));
            };
        });
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([this.storeName], 'readwrite');
            const objectStore = transaction.objectStore(this.storeName);
            const request = objectStore.delete(id);

            transaction.oncomplete = () => {
                resolve(request.result);
            };

            transaction.onerror = () => {
                reject(Error('Failed to delete item from IndexedDB'));
            };
        });
    }

    getById(id) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([this.storeName], 'readonly');
            const objectStore = transaction.objectStore(this.storeName);
            const request = objectStore.get(id);

            transaction.oncomplete = () => {
                resolve(request.result);
            };

            transaction.onerror = () => {
                reject(Error('Failed to get item from IndexedDB'));
            };
        });
    }

    search(query) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([this.storeName], 'readonly');
            const objectStore = transaction.objectStore(this.storeName);
            const index = objectStore.index('searchIndex');
            const request = index.getAll(query);

            transaction.oncomplete = () => {
                resolve(request.result);
            };

            transaction.onerror = () => {
                reject(Error('Failed to search IndexedDB'));
            };
        });
    }

    getAll() {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([this.storeName], 'readonly');
            const objectStore = transaction.objectStore(this.storeName);
            const request = objectStore.getAll();

            transaction.oncomplete = () => {
                resolve(request.result);
            };

            transaction.onerror = () => {
                reject(Error('Failed to get all items from IndexedDB'));
            };
        });
    }
}