import React, { useState } from 'react';
import './App.css';
import pic from './images/pic.jpg'
import { questions }  from './Questions';
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

function App() {

  const [faqs, setFaqs] = useState(questions);

  const [icon, setIcon] = useState(true);

  const handleClick = () => {
    setIcon(!icon);
  }

  return (
    <div className='main'>
      <div className="center">
        <div className="left">
          <figure>
            <img src={pic} alt='pic' />
          </figure>
        </div>
        <div className="right">
          <h1>FAQ</h1>
          {
            faqs.map((faq) => {
              const { question, answer, id } = faq;
              return (
                <div className='inner_right' key={id}>
                  <div className='questions' onClick={handleClick}>
                    <h3>{question}</h3>
                    <span>{icon ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}</span>
                  </div>
                  {icon && <div className='answers'><p>{answer}</p></div>}
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
