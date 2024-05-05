import React, { useState } from 'react';
import './TextAnalysis.css';
import axios from 'axios';

const TextAnalysisComponent = () => {
  const [text, setText] = useState('');
  const [sentimentResult, setSentimentResult] = useState('');

  const handleAnalyse = async() => {
    axios.post('http://localhost:5000/getSentiment', { data: text })
      .then(response => {
        console.log(response.data.message);
        setSentimentResult(response.data.message);
      })
      .catch(error => {
        console.error('Error:', error);
      });
      setText('');
  };

  return (
    <>
    <div className="container">
      <textarea
        className="textarea"
        placeholder="Enter the tweet..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="button" onClick={handleAnalyse}>Analyse</button>
    </div>
    <>
    {sentimentResult && 
      <div className={`result ${sentimentResult.toLowerCase()}`}>
        Sentiment: {sentimentResult}
      </div>}
    </>
    </>
  );
};

export default TextAnalysisComponent;
