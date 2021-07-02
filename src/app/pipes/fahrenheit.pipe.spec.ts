import { FahrenheitPipe } from './fahrenheit.pipe';
import { pipe } from 'rxjs';

describe('FahrenheitPipe', () => {
  it('create an instance', () => {
    const pipe = new FahrenheitPipe();
    expect(pipe).toBeTruthy();
  });

  it('converting correctly from celcius to farehiet',() => {
    const pipe = new FahrenheitPipe();
    expect(pipe.transform(1)).toBe("33.80")
  })

});
