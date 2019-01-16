import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Top from './Top';

ReactDOM.render(
  <Top />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
