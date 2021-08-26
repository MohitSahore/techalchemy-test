import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor(
    private _location: Location
  ) { }

  setLocalData(key: string, data: any, json?: boolean) {
    localStorage.setItem(key, json ? JSON.stringify(data) : data);
  }

  getLocalData(key: string, json?: boolean) {
    let _data: any = null;
    try {
      _data = json
        ? JSON.parse(localStorage.getItem(key))
        : localStorage.getItem(key);
      return _data;
    } catch (error) {
      if (error instanceof SyntaxError) this.clearLocalData(key);
      return null;
    }
  }

  clearAllLocalData() {
    localStorage.clear();
  }

  clearLocalData(key: string) {
    localStorage.removeItem(key);
  }
  // localstorage setvalue, clear and get value end

  goBack() {
    this._location.back();
  }

}
