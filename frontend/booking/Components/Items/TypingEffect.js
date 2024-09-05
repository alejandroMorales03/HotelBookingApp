
import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';

const TypingEffect = ({ text, style, speed = 100 }) => {
  // State to hold the text that has been "typed" so far
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    // Initialize index to keep track of the current position in the text
    let index = 0;

    // Set up an interval to update the displayText state at regular intervals
    const intervalId = setInterval(() => {
      // Update the displayText by adding the next character from the text
      setDisplayText((prev) => prev + text[index]);
      
      // Move to the next character
      index += 1;

      // If we have reached the end of the text, stop the interval
      if (index >= text.length) {
        clearInterval(intervalId);
      }
    }, speed);

    // Clean up the interval when the component unmounts or dependencies change
    return () => clearInterval(intervalId);
  }, [text, speed]); // Re-run the effect if text or speed changes

  // Render the Text component with the animated displayText
  return <Text style={style}>{displayText}</Text>;
};

export default TypingEffect;