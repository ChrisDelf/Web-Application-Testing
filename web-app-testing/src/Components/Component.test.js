
import React from 'react';
import Display, {handleStriker} from "./Display.js"
import ReactDOM from 'react-dom';



describe('Display.js', () => {

  describe('handleStriker', () => {
    it("should increase the strike count by one when clicked", () => {
      expect(handleStriker()).toBe(0);
    })



  })
})
