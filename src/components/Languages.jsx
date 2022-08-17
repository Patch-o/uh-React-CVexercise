import React from 'react';
import { CV } from '../CV/CV';
const {languages}=CV;

const Languages = () => {
  return (
    <div className="languages">
    <h3>Languages</h3>
    {languages.map((item) => {
      return (
        <div key={JSON.stringify(item)}>
          <p>LEVEL:{item.language}</p>
          <p>WRITTEN:{item.wrlevel}</p>
          <p>SPEAKING:{item.splevel}</p>
        </div>
      );
    })}
  </div>
  )
}

export default Languages
