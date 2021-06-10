function getRandomInt(min, max) {
  if (min < 0 || max < 0 || max < min || Math.ceil(max) < Math.floor(min)) {
    return NaN;
  }
  return Math.floor(min + Math.random() * (max + 1 - min));
}

function checkStrLenfth(incomeString, maxStrLength) {
  return incomeString.length <= maxStrLength;
}

function getRandomListValue(srcList) {
  return srcList[getRandomInt(0, srcList.length - 1)];
}

export { getRandomInt };
export { checkStrLenfth };
export { getRandomListValue };
