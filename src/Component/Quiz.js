import React, {useState} from 'react'
import QuestionList from './QuestionList'
import quizCSS from './Quiz.css'

export default function Quiz() {
    const questions =[
        {
          question:"What is React?",
          options: ['CSS Framework', "React Library", "React Framework", "testing tool"],
          answer: "React Library"
        },
        {
            question: "What is 2 + 2?",
            options: ['3', '4', '5', '6'],
            answer: '4'
        },
        {
            question: "Which of the following colors contain equal amounts of RBG?",
            options: ['White', 'Gray', 'Black', 'All of the above'],
            answer: 'All of the above'
        },
        {
            question: "Which of the following is the correct name of React.js?",
            options: ['React', 'React.js', 'ReactJS', 'All of the above'],
            answer: 'All of the above'
        },
        {
            question: "What is 2*8+10?",
            options:['16', '36', '26', '14'],
            answer: '26'
        },
        {
            question: "What is the effect of the <b> tag?",
            options: ['It converts the text within it to bold font', 'It is used to write black-colored font', 'It is used to change the font size', 'None of the above'],
            answer: 'It converts the text within it to bold font'
        },
        {
            question: "What of the following is used in React.js to increase performance?",
            options: ['Original DOM', 'Virtual DOM', 'Both A and B', 'None of the above'],
            answer: 'Virtual DOM'
        }
    ];
    // 0, 1, 2
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentAnswer, setCurrentAnswer] = useState(null);
    const [score, setScore] = useState(0);
    const [feedback, setFeedback] = useState(null);
    const [isQuizStopped, setIsQuizStopped] = useState(false);
  
    const handleClick = (option) => {
      setCurrentAnswer(option);
      if (option === questions[currentQuestionIndex].answer) {
        setScore(score + 1);
        setFeedback("Correct!");
      } else {
        setFeedback(`Wrong! The correct answer is "${questions[currentQuestionIndex].answer}".`);
      }
    };
  
    const handleNextQuestion = () => {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentAnswer(null);
      setFeedback(null);
    };
  
    const quitQuiz = () => {
      setIsQuizStopped(true);
    };
  
    const restartQuiz = () => {
      setCurrentQuestionIndex(0);
      setScore(0);
      setCurrentAnswer(null);
      setFeedback(null);
      setIsQuizStopped(false);
    };
  
    return (
      <div>
        {!isQuizStopped && currentQuestionIndex < questions.length ? (
          <div>
            <QuestionList 
              question={questions[currentQuestionIndex].question}
              options={questions[currentQuestionIndex].options} 
              handleClick={handleClick} 
              currentAnswer={currentAnswer} 
              feedback={feedback}
            />
            {feedback && <div className="alert">{feedback}</div>}
            <button 
              disabled={currentAnswer === null} 
              className={currentAnswer === null ? 'button-disable' : 'button'} 
              onClick={handleNextQuestion}
            >
              Next Question
            </button>
            <button className="quit-button" onClick={quitQuiz}>Quit Quiz</button>
          </div>
        ) : (
          <div className="final-score">
            {isQuizStopped ? "Quiz Stopped" : "🎉 Congratulations! 🎉"} <br />
            Your Score : {score} / {questions.length}
            <button className="restart-button" onClick={restartQuiz}>
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    );
  }