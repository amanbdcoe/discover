import { PopularStore } from "./PopularStore";
import { observable } from "mobx";

export class RootStore {
  private static _instance: RootStore;

  @observable popularStore: PopularStore;

  constructor() {
    this.popularStore = PopularStore.getInstance();
  }

  static getInstance(): RootStore {
    if (!this._instance) {
      this._instance = new RootStore();
    }

    return this._instance;
  }
}
