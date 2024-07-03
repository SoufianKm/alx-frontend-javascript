export default function cleanSet(set, startString) {
  let res = '';
  if (!startString || !startString.length) return res;
  set.forEach((idx) => {
    if (idx.startsWith(startString)) {
      res += `${idx.slice(startString.length)}-`;
    }
  });
  return res.slice(0, res.length - 1);
}
