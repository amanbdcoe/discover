export enum TimeWindow {
  DAY = "day",
  WEEK = "week"
}

export class TimeWindowEnumUtils {
  static getTimeWindowTitle(timeWindow: TimeWindow): string {
    const tWindow = timeWindow.toString();
    return tWindow.charAt(0).toUpperCase() + tWindow.slice(1)
  }
}

