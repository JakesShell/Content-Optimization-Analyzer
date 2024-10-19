// client/src/components/Analyzer.js
import React, { useState } from 'react';
import './Analyzer.css';

const Analyzer = () => {
    const [content, setContent] = useState('');
    const [results, setResults] = useState(null);

    const handleAnalyze = async () => {
        const response = await fetch('http://localhost:5000/api/analyze', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content }),
        });
        const data = await response.json();
        setResults(data);
    };

    return (
        <div className="analyzer-container">
            <h1>Content Optimization Analyzer</h1>
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Paste your content here..."
            />
            <button onClick={handleAnalyze}>Analyze</button>

            {results && (
                <div className="results">
                    <h2>Analysis Results</h2>
                    <p><strong>Keyword Density:</strong> {results.keywordDensity}%</p>
                    <p><strong>Readability Score:</strong> {results.readabilityScore}</p>
                    <h3>Suggestions:</h3>
                    <ul>
                        {results.suggestions.map((suggestion, index) => (
                            <li key={index}>{suggestion}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Analyzer;
