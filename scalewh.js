// Filename: scalewh.js  
// Timestamp: 2017.07.08-00:26:31 (last modified)
// Author(s): bumblehead <chris@bumblehead.com>  

module.exports = (o => {

  const ceil = Math.ceil,
        floor = Math.floor;

  o.max = ([w,h],[maxw,maxh]) => {
    const scaledh = ceil(h * (maxw / w));
    
    return scaledh > maxh
      ? [ceil(w * (maxh / h)), maxh]
      : [maxw, scaledh];
  };

  o.min = ([w,h],[minw,minh]) => {
    const scaledh = floor(h * (minw / w));

    return scaledh < minh
      ? [floor(w * (minh / h)), minh]
      : [minw, scaledh];
  };

  return o;
  
})({});
