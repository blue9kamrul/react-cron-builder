import React, { useState, useEffect } from 'react';
import { DEFAULT_CRON_STATE } from './types';
import type { CronState, PeriodType } from './types';
import { generateCronString, generateHumanDescription } from './cron-logic';
import './CronBuilder.css'; // Import the CSS we just made

const CronBuilder = () => {
    const [state, setState] = useState<CronState>(DEFAULT_CRON_STATE);
    const [cronString, setCronString] = useState('');
    const [humanText, setHumanText] = useState('');

    // Update outputs when state changes
    useEffect(() => {
        setCronString(generateCronString(state));
        setHumanText(generateHumanDescription(state));
    }, [state]);

    // --- Handlers ---

    const handlePeriodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setState({ ...state, period: e.target.value as PeriodType });
    };

    const handleTimeChange = (type: 'hours' | 'minutes', val: number) => {
        setState({ ...state, [type]: val });
    };

    const toggleDay = (dayIndex: number) => {
        const currentDays = state.daysOfWeek;
        const newDays = currentDays.includes(dayIndex)
            ? currentDays.filter(d => d !== dayIndex) // Remove
            : [...currentDays, dayIndex]; // Add
        setState({ ...state, daysOfWeek: newDays });
    };

    // --- Render Helpers ---

    const renderTimePicker = () => (
        <div className="cron-row">
            <span className="cron-label">At Time:</span>
            <select
                className="cron-select"
                value={state.hours}
                onChange={(e) => handleTimeChange('hours', Number(e.target.value))}
            >
                {Array.from({ length: 24 }).map((_, i) => (
                    <option key={i} value={i}>{i.toString().padStart(2, '0')}</option>
                ))}
            </select>
            <span>:</span>
            <select
                className="cron-select"
                value={state.minutes}
                onChange={(e) => handleTimeChange('minutes', Number(e.target.value))}
            >
                {Array.from({ length: 60 }).map((_, i) => (
                    <option key={i} value={i}>{i.toString().padStart(2, '0')}</option>
                ))}
            </select>
        </div>
    );

    const renderWeekSelector = () => {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        return (
            <div className="cron-row">
                <span className="cron-label">On Days:</span>
                <div className="cron-btn-group">
                    {days.map((day, index) => (
                        <button
                            type="button"
                            key={day}
                            className={`cron-btn ${state.daysOfWeek.includes(index) ? 'active' : ''}`}
                            onClick={() => toggleDay(index)}
                        >
                            {day}
                        </button>
                    ))}
                </div>
            </div>
        );
    };

    const renderMonthDaySelector = () => (
        <div className="cron-row">
            <span className="cron-label">On Day:</span>
            <select
                className="cron-select"
                value={state.dayOfMonth}
                onChange={(e) => setState({ ...state, dayOfMonth: Number(e.target.value) })}
            >
                {Array.from({ length: 31 }).map((_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
            </select>
            <span>of the month</span>
        </div>
    );

    return (
        <div className="cron-builder">
            {/* 1. Frequency Selector */}
            <div className="cron-row">
                <span className="cron-label">Frequency:</span>
                <select className="cron-select" value={state.period} onChange={handlePeriodChange}>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                </select>
            </div>

            {/* 2. Dynamic Controls */}
            {state.period === 'weekly' && renderWeekSelector()}
            {state.period === 'monthly' && renderMonthDaySelector()}

            {/* Time is always shown */}
            {renderTimePicker()}

            {/* 3. Output Preview */}
            <div className="cron-preview">
                <div><strong>Cron:</strong> {cronString}</div>
                <div style={{ marginTop: '4px', color: '#666' }}>{humanText}</div>
            </div>
        </div>
    );
};

export default CronBuilder;