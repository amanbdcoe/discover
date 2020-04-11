export class RootStore {
  private static _instance: RootStore;

  constructor() {

  }

  static getInstance(): RootStore {
    if (!this._instance) {
      this._instance = new RootStore();
    }

    return this._instance;
  }
}
