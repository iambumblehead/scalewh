// Filename: zagtree.spec.js  
// Timestamp: 2017.07.08-00:41:57 (last modified)
// Author(s): Bumblehead (www.bumblehead.com)  

const scalewh = require('../');

describe("scaledwh.max", () => {
  [[[400,250], [640,400], [400,400]],
   [[800,500], [640,400], [800,800]],
   [[400,250], [-640,-400], [400,400]],
   [[800,500], [-640,-400], [800,800]]].map(d => {
    it(`should return ${d[0]}, ${d[1]}, ${d[2]}`, () => 
       expect( scalewh.max(d[1], d[2]).join() ).toBe( d[0].join() ));
  });
});

describe("scaledwh.min", () => {
  [[[640,400], [640,400], [400,400]],
   [[1280,800], [640,400], [800,800]],
   [[640,400], [-640,-400], [400,400]],
   [[1280,800], [-640,-400], [800,800]]].map(d => {
    it(`should return ${d[0]}, ${d[1]}, ${d[2]}`, () => 
       expect( scalewh.min(d[1], d[2]).join() ).toBe( d[0].join() ));
  });
});
