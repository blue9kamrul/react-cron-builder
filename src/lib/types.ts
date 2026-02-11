// Define the possible frequencies we want to support
export type PeriodType = 'daily' | 'weekly' | 'monthly' | 'custom';

// This is the "State" our UI will modify
export interface CronState {
    period: PeriodType;
    minutes: number;       // 0-59
    hours: number;         // 0-23
    dayOfMonth: number;    // 1-31
    daysOfWeek: number[];  // 0-6 (Sunday is 0)
}

// A default starting state to prevent errors
export const DEFAULT_CRON_STATE: CronState = {
    period: 'daily',
    minutes: 0,
    hours: 9,              // Default to 9 AM
    dayOfMonth: 1,
    daysOfWeek: [1, 2, 3, 4, 5], // Default to Mon-Fri
};