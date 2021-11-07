// https://learn.javascript.ru/error-handling


class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
process.stderr.write('OOPS :( ERR: ' + message) // убрать
    process.exit(123) // как это работает? // убрать
  }
}


// такой должен быть класс
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}