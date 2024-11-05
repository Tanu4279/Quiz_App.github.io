import React from 'react';

export default function QuestionList({ question, options, handleClick, currentAnswer }) {
  return (
    <div>
      <h2>{question}</h2>
      <ul>
        {options.map((option, index) => (
          <li 
            key={index} 
            onClick={() => handleClick(option)} 
            className={currentAnswer === option 
              ? (option === question.answer ? 'selected' : 'wrong') 
              : ''}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}
