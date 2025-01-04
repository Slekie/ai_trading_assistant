import React, { useState } from 'react';
import '../../App.css';

function Services() {
  const [selectedAsset, setSelectedAsset] = useState('');
  const [selectedTimeframe, setSelectedTimeframe] = useState('');

  const assets = [
    { value: 'EU', label: 'EUR/USD' },
    { value: 'GU', label: 'GBP/USD' },
    { value: 'UC', label: 'USD/CAD' },
    { value: 'AC', label: 'AUD/CAD' },
    { value: 'UH', label: 'USD/CHF' },
    { value: 'CJ', label: 'CHF/JPY' },
    { value: 'GC', label: 'GBP/CAD' },
    { value: 'NC', label: 'NZD/CAD' },
    { value: 'GC', label: 'GBP/CHF' },
    { value: 'CC', label: 'CAD/CHF' },
    // ...
  ];

  const timeframes = [
    { value: 'm5', label: ' 5 mins' },
    { value: 'm15', label: '15 mins' },
    { value: 'm30', label: '30 mins' },
    { value: 'h1', label: '1 hour' },
    { value: 'h4', label: '4 hours' },
    // ...
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedAsset || !selectedTimeframe) {
      console.error('Please select an asset and timeframe');
      return;
    }
    console.log('Form submitted:', { selectedAsset, selectedTimeframe });
    // Add your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Choose asset:
        <select
          value={selectedAsset}
          onChange={(e) => setSelectedAsset(e.target.value)}
        >
          <option value="">Select an asset</option>
          {assets.map((asset) => (
            <option key={asset.value} value={asset.value}>
              {asset.label}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Timeframe:
        <select
          value={selectedTimeframe}
          onChange={(e) => setSelectedTimeframe(e.target.value)}
        >
          <option value="">Select a timeframe</option>
          {timeframes.map((timeframe) => (
            <option key={timeframe.value} value={timeframe.value}>
              {timeframe.label}
            </option>
          ))}
        </select>
      </label>
      <br />
      <button type="submit">Analyze</button>
    </form>
  );
}

export default Services;