export class PopularStore {
  private static _instance: PopularStore;

  static getInstance(): PopularStore {
    if (!this._instance) {
      this._instance = new PopularStore();
    }

    return this._instance;
  }

}
