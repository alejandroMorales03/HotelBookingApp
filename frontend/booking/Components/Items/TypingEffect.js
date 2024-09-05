import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';

const TypingEffect = ({ text, style, speed = 100 }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayText((prev) => prev + text[index]);
      index += 1;
      if (index >= text.length) {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return <Text style={style}>{displayText}</Text>;
};

export default TypingEffect;
