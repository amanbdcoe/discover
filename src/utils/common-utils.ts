export class CommonUtils {

  static iterateEnum<T>(enumRef: any): T[] {
    return Object.keys(enumRef).map(key => enumRef[key]);
  }

}
