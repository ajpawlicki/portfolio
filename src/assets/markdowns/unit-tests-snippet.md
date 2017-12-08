---
title: Unit-Tests
order: 7
github: https://github.com/ajpawlicki/fillinator/blob/master/bitMap.test.js
description: Unit-tested a matrix-traversing algorithm and its helper functions with Jest.
---

```js
const { fillBitMap, colorsAreEqual, getColor } = require('./bitMap');

describe('Testing fill of bit map', () => {

  describe('fillBitMap', () => {
    it('Fills one pixel', () => {
      const matrix = [
        [[0,0,0]]
      ];
  
      const expected = [
        [[255, 255, 255]]
      ];
  
      fillBitMap(matrix, {row: 0, col: 0}, [255, 255, 255], [0, 0, 0]);

      expect(matrix).toEqual(expected);
    });

    it('Checks 50 by 50 matrix', () => {
      const matrix = [];
      const expected = [];

      for (let i = 0; i < 50; i++) {
        matrix[i] = [];
        expected[i] = [];
        
        for (let j = 0; j < 50; j++) {
          matrix[i][j] = [0, 0, 0];
          expected[i][j] = [255, 255, 255];
        }
      }

      fillBitMap(matrix, {row: 25, col: 25}, [255, 255, 255], [0, 0, 0]);

      expect(matrix).toEqual(expected);
    });
  });

  describe('colorsAreEqual', () => {
    it('Detects if two colors are equal', () => {
      const color1 = [0, 0, 0];
      const color2 = [0, 0, 0];
      
      expect(colorsAreEqual(color1, color2)).toBe(true);
    });

    it('Detects if two colors are not equal', () => {
      const color1 = [0, 0, 0];
      const color2 = [255, 255, 255];
      
      expect(colorsAreEqual(color1, color2)).toBe(false);
    });
  });

  describe('getColor', () => {
    it('Returns color if within matrix boundaries', () => {
      const matrix = [
        [[0,0,0]]
      ];
      const coordinate = {
        row: 0,
        col: 0
      };

      const expected = [0, 0, 0];

      expect(getColor(matrix, coordinate)).toEqual(expected);
    });

    it('Returns null if outside of matrix row', () => {
      const matrix = [
        [[0,0,0]]
      ];
      const coordinate = {
        row: 1,
        col: 0
      };

      expect(getColor(matrix, coordinate)).toBeNull();
    });

    it('Returns null if outside of matrix col', () => {
      const matrix = [
        [[0,0,0]]
      ];
      const coordinate = {
        row: 0,
        col: 1
      };

      expect(getColor(matrix, coordinate)).toBeNull();
    });
  });
});
```
