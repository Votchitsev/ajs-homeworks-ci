import getHealth from "../app";

// test('character health 90 equal <healthy>', () => {
    
//     const character = { name: 'Маг', health: 90 };

//     expect(getHealth(character)).toBe('healthy');
// });

test.each([
    ['Эльф', 30, 'wonded'],
    ['Дендроид', 10, 'critical'],
    ['Маг', 90, 'healthy']
])('get condition for %i health level', (name, health, expected) => {
    const character = { name: name, health: health };
    expect(getHealth(character)).toBe(expected);
});
