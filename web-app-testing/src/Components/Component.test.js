import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Display from '../Components/Display.js';
import {handleStriker} from './utility.js'
import { render, fireEvent } from '@testing-library/react';
import "@testing-library/react/cleanup-after-each";// allows us unmount components after each test.
import Dashboard from './Dashboard.js';


describe('Display.js', () => {
  it('renders without crashing', () => {
    render(<Display />);
  });
  // it("increase the state by one", () => {
  //
  //   expect(handleStriker()).toBe(1);
  //
  // })

});


describe('Dashboard.js', () => {
  it('renders without crashing', () => {
    render(<Dashboard />);
  });


  });
