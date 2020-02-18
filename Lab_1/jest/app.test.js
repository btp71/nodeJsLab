require('app.js');


test('Must be Hello Test', () => {
    expect(process.env.HELLO).toBe('Hello Test');
});