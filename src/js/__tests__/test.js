import getHealth from "../app";

test('character health 90 equal <healthy>', () => {
    
    const character = { name: 'Маг', health: 90 };

    expect(getHealth(character)).toBe('healthy');
});
