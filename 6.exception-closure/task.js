function parseCount(parseValue) {
  let result = Number.parseFloat(parseValue);
  if (isNaN(result)) {
    throw new Error("Невалидное значение");
  } else {
    return result;
  }
}

function validateCount(parseValue) {
  try {
    return parseCount(parseValue);
  } catch (error) {
    return error;
  }
}
