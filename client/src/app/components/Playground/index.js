'use client';

import { useState } from 'react';

import { styles } from './styles';

const Playground = ({ sentence }) => {
  const [words, setWords] =
    useState(sentence.split(' ')
      .map((word, index, array) => {
        if (index === array.length - 1) {
          return word;
        }

        return word + ' ';
      }));

  return (
    <div className={styles.playground}>
      <div className={styles.sentence}>
        <span>
          {words.map((word, index) => {
            return (
              <span className='word' key={index}>
                {word.split('').map((letter, index) => {
                  return <span className='letter' key={index}>{letter}</span>
                })}
              </span>
            );
          })}
        </span>
      </div>
      <input className={styles.input} type="text" />
    </div>
  );
}

export default Playground;