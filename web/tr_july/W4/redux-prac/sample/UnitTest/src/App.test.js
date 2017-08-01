import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});


it('Sum should return sum', () => {
  var app = new App();
  var sum = app.sum(1,2);
 expect(sum).toBe(3);
});
