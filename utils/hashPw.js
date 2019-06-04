module.exports = rawPw => {
  const hashedPw =
    rawPw
      .split('')
      .reverse()
      .join('') + 'hash';
  return hashedPw;
};
