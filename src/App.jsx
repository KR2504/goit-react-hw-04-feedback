import { useState } from "react";
import Statistics from "./components/Statistics";
import Section from "./components/Section";
import FeedbackOptions from "./components/FeedbackOptions";
import Notification from "./components/Notification";

export default function App(){
  const [good, setGood] = useState(0);
  const [neutral, setBad] = useState(0);
  const [bad, setNeutral] = useState(0);
  
  const handleIncrement = (options) => {

    if (options === 'good') {
      setGood(prevState => prevState + 1);
    }
    if (options === 'neutral') {
      setNeutral(prevState => prevState + 1);
    }
    if (options === 'bad') {
      setBad(prevState => prevState + 1);
    }
  };
  
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  
  const countPositiveFeedbackPercentage = () => {
    return Math.floor((good / countTotalFeedback()) * 100);
  };
  
 
  return (
    <div
      style={{
        fontSize: 40,
        color: '#010101',
        backgroundColor: 'rgb(173, 242, 242)'
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleIncrement}
        ></FeedbackOptions>
      </Section>
                
      <Section title="Statistics">
        {!countTotalFeedback() ? <Notification message="No feedback given" /> :
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            percent={countPositiveFeedbackPercentage()} />}
      </Section>
    </div>
  );
};
