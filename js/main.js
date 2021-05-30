function getRandomPositiveInt(min, max) {
  if (min < 0 || max < 0 || max < min || (max - min > 0 && max - min < 1) || (min === max && !Number.isInteger(max))) {
    return NaN;
    // считаем, что функция не взаимодействует с обычным пользователем и является служебной
    // тогда логично при некорректных параметрах просто вернуть null, NaN, undefined, или что-то подобное,
    // и задокументировать это поведение.
    // Чтобы другой разработчик задумался - что же он делает не так
    // Если начало и конец диапазона целочисленные и совпадают - ничего страшного. вернем это же число
  }
  return Math.floor(min + Math.random() * (max + 1 - min));
}

function checkStrLenfth(incomeString, maxStrLength) {
  return incomeString.length < maxStrLength;
}

const testString = 'pasjigfksv  oowhivkjcnkl wqwpehfqp wohgohgoi';
//console.log(testString.length)
//console.log(checkStrLenfth(testString, 50));
checkStrLenfth(testString, 20);
getRandomPositiveInt(1, 100);
