import React from 'react';

const Footer = () => {
  return (
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
      <p>
        💚 Please follow/subscribe to Tsukimoon on{' '}
        <a href="https://twitch.tv/tsukimoonvr">Twitch</a> and{' '}
        <a href="http://twitter.com/tsukimoonVR">Twitter</a>. Seriously. Do it.
        Tsuki is great! 💚
      </p>
      <p>
        💙 Credit to the amazing{' '}
        <a href="https://twitter.com/TragicVr">Tragic</a> for the cute artwork!
        (commissioned by Tsuki) Follow her, too! She's super adorable and nice!
        💙
      </p>
      <p>
        Created by <a href="http://twitter.com/myrahmen">instantRahmen</a> (I'm
        sorry). The{' '}
        <a href="https://github.com/instantrahmen/youareallnerds.com">
          source code
        </a>{' '}
        is licensed under MIT and can be used freely. The artwork is{' '}
        <u>
          <b>not</b>
        </u>{' '}
        and is used here with the explicit permission of{' '}
        <a href="http://twitter.com/tsukimoonVR">Tsukimoon</a>.
      </p>
    </footer>
  );
};

export default Footer;
