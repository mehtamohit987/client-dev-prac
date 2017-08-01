import React from 'react';
import {shallow} from 'enzyme';
import CheckboxWithLabel from './CheckboxWithLabel';

beforeEach(() => {
  //Perform before each test run
});

afterEach(() => {
   //Perform after each test run
});

beforeAll(() => {
  //Perform one time ar start up
});

afterAll(() => {
  //Perform one time at end
});
test('CheckboxWithLabel changes the text after click', () => {
  
    beforeEach(() => {
  //Perform every time this test run
});
    // Render a checkbox with label in the document
  const checkbox = shallow(
    <CheckboxWithLabel labelOn="On" labelOff="Off" />
  );

  expect(checkbox.text()).toEqual('Off');

  checkbox.find('input').simulate('change');

  expect(checkbox.text()).toEqual('On');
});