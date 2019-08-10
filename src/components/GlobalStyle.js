import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  /* I'm specifying it twice to avoid flashing when there is no custom background */
  background: #282c34;
  background: ${({ customBg, gay }) => {
    if (customBg) return customBg;
    if (gay)
      return `linear-gradient(90deg, #f00000, #f00000 16.67%, #ff8000 16.67%, #ff8000 33.33%, #ffff00 33.33%, #ffff00 50%, #007940 50%, #007940 66.67%, #4040ff 66.67%, #4040ff 83.33%, #a000c0 83.33%, #a000c0) fixed;`;
    return '#282c34';
  }}
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

a {
  color: #34abab;
}

.App {
  text-align: center;
}

.message-container {
  /* padding: 100px; */
  /* background: ${({ gay, customBg }) => {
    if (gay || customBg) return 'rgba(0, 0, 0, .5)';
    return 'none';
  }} */
}

.App-logo {
  animation: App-logo-spin infinite 1s linear;
  height: 40vmin;
  pointer-events: none;
}

.App-header {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(20px + 2vmin);
  color: white;
  background: ${({ gay, customBg }) => {
    if (gay || customBg) {
      return 'rgba(0, 0, 0, 0.5)';
    }
    return 'none';
  }};
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

`;
