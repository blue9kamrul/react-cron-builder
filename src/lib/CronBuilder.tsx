import React, { useState, useEffect } from 'react';
import { DEFAULT_CRON_STATE } from './types';
import type { CronState, PeriodType } from './types';
import { generateCronString, generateHumanDescription } from './cron-logic';

const CronBuilder = () => {
    const [state, setState] = useState<CronState>(DEFAULT_CRON_STATE);
    const [cronString, setCronString] = useState('');
    const [humanText, setHumanText] = useState('');

    // Whenever state changes, update the output strings
    useEffect(() => {
        setCronString(generateCronString(state));
        setHumanText(generateHumanDescription(state));
    }, [state]);

    const handlePeriodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setState({ ...state, period: e.target.value as PeriodType });
    };

    return (
        <div style={{ fontFamily: 'sans-serif', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '500px' }}>
            <h3>Cron Builder Logic Test</h3>

            {/* 1. The Controls */}
            <div style={{ marginBottom: '20px' }}>
                <label><strong>Frequency: </strong></label>
                <select value={state.period} onChange={handlePeriodChange}>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                </select>
            </div>

            {/* 2. The Outputs */}
            <div style={{ background: '#f4f4f4', padding: '15px', borderRadius: '5px' }}>
                <p><strong>Cron String:</strong> <code style={{ color: '#d63384', fontSize: '1.2em' }}>{cronString}</code></p>
                <p><strong>Human Readable:</strong> {humanText}</p>
            </div>
        </div>
    );
};

export default CronBuilder;