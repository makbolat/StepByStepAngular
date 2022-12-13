// browser console
// email
// db

export interface ILogger {
  Log(): any;
}

export class BaseLogger implements ILogger {
  Log() {}
}

export class ConsoleLogger extends BaseLogger {
  override Log() {
    console.log('Using console logger');
  }
}

export class DBLogger extends BaseLogger {
  override Log() {
    console.log('Using DB logger');
  }
}

export class FileLogger extends BaseLogger {
  override Log() {
    console.log('Using File logger');
  }
}
