import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(public storage: Storage) {

  }

  async getAllItems() : Promise<Array<any>> {
    let result_list = Array<any>();
    this.storage.forEach((value, key, iterationNumber) => {
      result_list.push(value);
    });
    return result_list;
  }

  async addItem(key: string, data: any): Promise<any> {
    try {
      const result = await this.storage.set(key, data);
      console.log('set string in storage: ' + result);
      return true;
    } catch (reason) {
      console.log(reason);
      return false;
      }
  }

  async getItem(key: string): Promise<any> {
      try {
      const result = await this.storage.get(key);
      if (result != null) {
        console.log(result);
        return result;
      }
        return null;
      } catch (reason) {
        console.log(reason);
        return null;
      }
  }

  async deleteItem(key: string): Promise<any> {
    console.log(this.getItem(key))
    if(this.getItem(key) != null) {
      const result = await this.storage.remove(key);
      console.log(result);
      return result;
    }
    return null;
  }

  length() {
    return this.storage.length();
  }

}