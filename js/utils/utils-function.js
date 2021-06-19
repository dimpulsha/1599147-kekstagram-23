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

function randomIdIntervalGenerator (min, max) {
  const randomList = [];

  const getUnicRandomValue = () => {
    if (randomList.length >= (max - min + 1)) {
      //console.log('Достигнута предельная длина массива');
      return NaN;
    }
    let randomValue = getRandomInt(min, max);
    while (randomList.includes(randomValue)) {
      randomValue = getRandomInt(min, max);
    }
    randomList.push(randomValue);
    //console.log(randomList);
    return randomValue;
  };
  //!!! возвращаем саму функцию!!!
  return getUnicRandomValue;
}
export { getRandomInt, checkStrLenfth, getRandomListValue, randomIdIntervalGenerator };
