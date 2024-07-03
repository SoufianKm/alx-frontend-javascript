const cleanSet = (set, startString) => {
  let res = '';
  if (!startString || !startString.length) return res;
  set.forEach((idx) => {
    if (typeof idx === 'string' && idx.startsWith(startString)) {
      res += `${idx.slice(startString.length)}-`;
    }
  });
  return res.slice(0, res.length - 1);
};
export default cleanSet;
