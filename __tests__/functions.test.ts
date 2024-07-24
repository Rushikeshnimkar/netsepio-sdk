import { sayHello } from '../src/functions';

describe('sayHello function', () => {
  let consoleLogSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  it('should log correct output with all parameters', () => {
    sayHello({ firstName: 'John', lastName: 'Doe', age: 30 });
    expect(consoleLogSpy).toHaveBeenCalledTimes(4);
    expect(consoleLogSpy).toHaveBeenNthCalledWith(1, 'Hello');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(2, 'Your first name is John');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(3, 'Your last name is Doe');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(4, 'Your age is 30');
  });

  it('should log correct output without optional parameters', () => {
    sayHello({ firstName: 'Jane' });
    expect(consoleLogSpy).toHaveBeenCalledTimes(2);
    expect(consoleLogSpy).toHaveBeenNthCalledWith(1, 'Hello');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(2, 'Your first name is Jane');
  });
});