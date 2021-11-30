import { apiResponse } from '../api-mock/api';
import { Item } from '../types/entities';
import Storage, { StorageState } from './Storage';

interface IStorageService<T extends Item> {
  // state: StorageState;
  data: Array<T>; // Array of items
  // getAllItems: () => Array<T>; // Returns all items or an empty array
  // flush: (data: Array<T>) => void; // Stores all items to persistent storage
  addItem: (item: T) => T | null; // Returns the added item
  updateItem: (item: T) => T | null; // Returns the updated item
  deleteItem: (item: T) => T | null; // Returns the deleted item
}

class StorageService<T extends Item> implements IStorageService<T> {
  private static instance: StorageService<any>;

  private constructor(storage: Storage<T>) {
    this.storage = storage;
    this.state = storage.state;
    this.data = this.state === StorageState.Fresh
      ? <T[]><unknown> this.getUpdates() // If fresh, get remote data to data field;
      // flush it only when the data is mutated with public methods -- and so state is changed to dirty
      : this.getAllItems(); // If dirty, should have sent own updates to remote first,
    // so not getting updates, just restore data from the storage
  }

  public static init<T extends Item>(storage: Storage<T>) {
    if (!this.instance) this.instance = new this(storage);
    return this.instance;
  }

  private storage;

  private state;

  public data;

  private getAllItems = (): Array<T> => {
    const items = this.storage.getItems();
    if (items && items !== true) return items;
    // eslint-disable-next-line no-alert
    if (!items) alert('Cannot load from disk');
    return [];
  };

  private flush = (data: Array<T>) => {
    const status = this.storage.saveItems(data);
    // eslint-disable-next-line no-alert
    if (!status) alert('Cannot save changes to disk');
  };

  private process = (action: (item: T, index?: number) => T, item: T, noIndexLookup?: boolean) => {
    const items = this.data;
    let index;
    if (!noIndexLookup) {
      index = items.findIndex((el) => el.id === item.id);
      if (index < 0) return null;
    }
    action.call(items, item, index);
    this.flush(items);
    return item;
  };

  public addItem = (item: T) => {
    const items = this.data;
    const currentId = items.length
      ? Math.max( // OR: .reduce((a, b) => Math.max(a, b), 0) OR: Math.max.apply(null, numArray)
      // (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)
        ...items
          .filter((el) => !!el.id || 0)
          .map((el) => el.id),
      )
      : 0; // In case there is no items in the dataset
    const elem = item;
    elem.id = currentId + 1;
    return this.process((el: T) => {
      items.push(el);
      return el;
    }, elem, true);
  };

  public updateItem = (item: T) => this.process(
    (el, index) => {
      (index !== undefined) && (this.data[index] = el);
      return el;
    },
    item,
  );

  public deleteItem = (item: T) => this.process(
    (el, index) => (
      index !== undefined
        ? (this.data.splice(index, 1))[0]
        : el
    ),
    item,
  );

  private loadRemoteData = () => apiResponse;

  private getUpdates = () => {
    const response = this.loadRemoteData();
    return response.status === 'Ok'
      ? response.result
      : [{ title: 'An error occurred when getting data.' }];
  };
}

export default StorageService;
