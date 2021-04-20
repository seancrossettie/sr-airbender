import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Button, Popover, PopoverHeader, PopoverBody
} from 'reactstrap';
import getQuestions from '../helpers/data/avatarData';
import './App.scss';

function App() {
  const [allQuestions, setAllQuestions] = useState([]);
  const [singleQuestion, setSingleQuestion] = useState({});
  const [showAnswer, setShowAnswer] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const toggle = () => setPopoverOpen(!popoverOpen);

  const handleClick = () => {
    if (showAnswer === true) {
      setShowAnswer(false);
      setSingleQuestion(allQuestions[Math.floor(Math.random() * allQuestions.length)]);
    } else {
      setShowAnswer(true);
    }
  };

  useEffect(() => {
    getQuestions()
      .then((questions) => {
        setAllQuestions(questions);
        setSingleQuestion(questions[Math.floor(Math.random() * allQuestions.length)]);
      });
  }, []);

  return (
    <div className='App'>
      {singleQuestion.question}
      <br />
      <p>{showAnswer ? singleQuestion.correctAnswer : ''}</p>
      <div>
      <Button id="Popover1" type="button">
        Launch Popover
      </Button>
      <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle} onClick={handleClick}>
        <PopoverHeader>Possible Answers</PopoverHeader>
        <PopoverBody>
          <ul>
            {singleQuestion.possibleAnsers?.map((pa, i) => <li key={i}>{pa}</li>)}
          </ul>
        </PopoverBody>
      </Popover>
      </div>
      <Button color="info" onClick={handleClick}>
        {showAnswer ? 'Get Another Question' : 'Get Answer'}
      </Button>
    </div>
  );
}

export default App;
