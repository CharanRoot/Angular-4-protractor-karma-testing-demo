import { Hero } from './hero';

describe('Hero module', () => {
  it('should create an instance', () => {
    let hero = new Hero();
    expect(hero).toBeTruthy();
  });
});
