import { Item } from '../types/entities';

export enum StorageType {
  Local = 'localStorage',
  Session = 'sessionStorage',
}

export enum StorageState {
  Fresh, // = 'fresh', // In dirty state the storage has unsaved local changes: don't load data from the API
  Dirty, // = 'dirty', // dirty state is set after add, update, and delete operations
}

interface IStorage<T extends Item> {
  connectionId: string; // UUID to distinguish from other stores from localhost/etc.
  state: StorageState;
  getItems: () => Array<T> | boolean; // Returns all items, boolean is to conform with the wrapper catching exception
  saveItems: (items: T[]) => Array<T> | boolean; // Returns true, array is to conform w/wrapper catching exception
}

class Storage <T extends Item> implements IStorage<T> {
  constructor(storageType: StorageType, connectionId: string) {
    this.connectionId = connectionId;
    this.storage = window[storageType];
    this.state = StorageState.Fresh;
    this.init();
  }

  init(): void {
    if (this.storage.length
      && this.storage.getItem(this.connectionId)) { // Something already stored
      this.state = StorageState.Dirty; // This is just an initial state after page reload
    }
  }

  connectionId;

  storage;

  state;

  getItems = (): Array<T> | boolean => this.process(() => {
    const string = this.storage.getItem(this.connectionId) || '[]';
    return JSON.parse(string);
  });

  saveItems = (items: Array<T>) => this.process(() => {
    const string = JSON.stringify(items);
    this.storage.setItem(this.connectionId, string);
    return true;
  });

  process = (callback: () => Array<T> | boolean) => {
    try {
      return callback();
    } catch (e) {
      return e instanceof DOMException && (
        // everything except Firefox
        e.code === 22
        // Firefox
        || e.code === 1014
        // test name field too, because code might not be present
        // everything except Firefox
        || e.name === 'QuotaExceededError'
        // Firefox
        || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
        // acknowledge QuotaExceededError only if there's something already stored
        && (this.storage && this.storage.length !== 0);
    }
  };
}

export default Storage;
