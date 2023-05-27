import React, { useState } from 'react';
import './App.css';

function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }
  return randomString;
}

function cutLink(originalLink) {
  const randomString = generateRandomString(9);
  return `cut.now/${randomString}`;
}

const commonLink = 'https://moontrip-linkcutter.vercel.app/'; // Specify your common link here

const App = () => {
  const [originalLink, setOriginalLink] = useState('');
  const [cutLink, setCutLink] = useState('');

  const handleCutLink = () => {
    const cut = cutLink(originalLink);
    setCutLink(commonLink + cut);
  };

  return (
    <section>
      <h1>Link Cutter</h1>
      <main>
        <div className='form'>
          <input
            type="url"
            name="linkcutter"
            id="linkcutter"
            placeholder="Enter link"
            value={originalLink}
            onChange={(e) => setOriginalLink(e.target.value)}
          />
          <button onClick={handleCutLink}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M6 7m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M6 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M8.6 8.6l10.4 10.4" />
              <path d="M8.6 15.4l10.4 -10.4" />
            </svg>
          </button>
        </div>
        {cutLink && (
          <div className='output'>
            <p>
              Cut Link: <a href={cutLink} target="_blank" rel="noopener noreferrer">{cutLink}</a>
            </p>
          </div>
        )}
      </main>
    </section>
  );
};

export default App;
