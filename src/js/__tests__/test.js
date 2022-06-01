import getHealth from '../app';

test.each([
  ['Эльф', 30, 'wonded'],
  ['Дендроид', 10, 'critical'],
  ['Маг', 90, 'healthy'],
])('get condition for %i health level', (name, health, exp) => {
  const character = {
    name,
    health,
  };
  expect(getHealth(character)).toBe(exp);
});
