const Mage = require('./character');

let character;

console.log(Mage)

beforeAll(() => {
  character = new Mage(100, 100);
});

afterEach(() => {
  character.reset();
});

test('character mana on spell custing', () => {
  character.castFrostBolt();
  character.castFireBall();
  character.castFrostNova(3);

  expect(character.mana).toBeGreaterThan(30);
});

test('character resistance', () => {
  character.getHarassed(80);
  character.getHarassed(30);

  expect(character.status).toBe('dead');
});
