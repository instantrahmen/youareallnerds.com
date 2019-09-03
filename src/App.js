import React, { useState, useLayoutEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import logo from './logo.svg';

import GlobalStyle from './components/GlobalStyle';
import Footer from './components/Footer';

import { useUrlParams } from './hooks/useUrlParams';

const App = () => {
  const [
    name,
    customMessage,
    gay,
    customBg,
    hideFooter,
    customSpeed,
  ] = useUrlParams([
    'name',
    'customMessage',
    'gay',
    'customBg',
    'hideFooter',
    'customSpeed',
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
            <AppLogo
              src="https://cdn.discordapp.com/emojis/584873667440279560.png?v=1"
              alt="Spinning TsukiDab emote"
              speed={customSpeed || '1s'}
            />
            <p>{message}</p>
          </div>
        </header>
        {!hideFooter && <Footer />}
      </div>
    </>
  );
};

export default App;

const AppLogo = styled.img`
  animation: ${({ speed = '1s' }) => `App-logo-spin infinite ${speed} linear`};
  height: 40vmin;
  pointer-events: none;
`;
