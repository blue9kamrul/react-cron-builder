import type { CronState } from './types';

// Helper to sort numbers (for days of week)
const sort = (arr: number[]) => [...arr].sort((a, b) => a - b);

export const generateCronString = (state: CronState): string => {
    const { period, minutes, hours, dayOfMonth, daysOfWeek } = state;

    // Cron format: [minute] [hour] [day-of-month] [month] [day-of-week]

    if (period === 'daily') {
        // Run every day at specific time
        return `${minutes} ${hours} * * *`;
    }

    if (period === 'weekly') {
        // Run on specific days at specific time
        // If no days selected, default to * (every day) to avoid errors
        const days = daysOfWeek.length > 0 ? sort(daysOfWeek).join(',') : '*';
        return `${minutes} ${hours} * * ${days}`;
    }

    if (period === 'monthly') {
        // Run on specific date at specific time
        return `${minutes} ${hours} ${dayOfMonth} * *`;
    }

    // Fallback
    return '* * * * *';
};

// Helper to generate a human-readable description
export const generateHumanDescription = (state: CronState): string => {
    const time = `${state.hours.toString().padStart(2, '0')}:${state.minutes.toString().padStart(2, '0')}`;

    switch (state.period) {
        case 'daily':
            return `Runs every day at ${time}`;
        case 'weekly':
            return `Runs every week on selected days at ${time}`;
        case 'monthly':
            return `Runs on the ${state.dayOfMonth}${getOrdinal(state.dayOfMonth)} of every month at ${time}`;
        default:
            return 'Custom schedule';
    }
};

// Helper for "1st", "2nd", "3rd"
const getOrdinal = (n: number) => {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
};