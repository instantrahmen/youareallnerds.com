import React, { useState, useLayoutEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import logo from './logo.svg';

import GlobalStyle from './components/GlobalStyle';
import { useUrlParams } from './hooks/useUrlParams';

const App = () => {
  const [name, customMessage, gay, customBg] = useUrlParams([
    'name',
    'customMessage',
    'gay',
    'customBg',
  ]);
  const [message, setMessage] = useState(null);

  useLayoutEffect(() => {
    if (customMessage) {
      setMessage(customMessage);
    } else if (name) {
      setMessage(`${name} is a nerd!`);
    } else {
      setMessage('You are a nerd!');
    }
  }, [name, customMessage]);

  useLayoutEffect(() => {
    if (customMessage) {
      setMessage(customMessage);
    }
  }, [customBg, customMessage, gay]);

  return (
    <>
      <GlobalStyle gay={gay} customBg={customBg} />
      <div className="App">
        <header className="App-header">
          <div className="message-container">
            <img
              src="https://cdn.discordapp.com/emojis/584873667440279560.png?v=1"
              className="App-logo"
              alt="logo"
            />
            <p>{message}</p>
          </div>
        </header>
        <footer
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            color: 'white',
            width: '100vw',
            textAlign: 'center',
          }}
        >
          💚 💚 💚 💚 💚 💚 Please follow/subscribe to Tsukimoon on{' '}
          <a href="https://twitch.tv/tsukimoonvr">Twitch</a> and{' '}
          <a href="http://twitter.com/tsukimoonVR">Twitter</a>. Seriously. Do
          it. Tsuki is great! 💚 💚 💚 💚 💚 💚
          <br />
          💙Created by <a href="http://twitter.com/myrahmen">
            instantRahmen
          </a>{' '}
          (I'm sorry)💙
          <br />
          💙Credit to the amazing{' '}
          <a href="https://twitter.com/TragicVr">Tragic</a> for the cute
          artwork! (commissioned for Tsuki, used with Tsuki's permission) Follow
          her, too! She's super adorable and nice!💙
        </footer>
      </div>
    </>
  );
};

export default App;
