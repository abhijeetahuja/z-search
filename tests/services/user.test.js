const UserService = require('../../src/services/user');

test('Should give all the users if no filter param is applied', () => {
    expect(UserService.search({}).length).toBe(75);
});

test('Should return only single user by _id', () => {
    expect(UserService.search({ _id: 1 }).length).toBe(1);
});

test('User should have tickets entity if found', () => {
    expect(UserService.search({ _id: 1 })[0].tickets).toEqual(['A Nuisance in Kiribati', 'A Nuisance in Saint Lucia']);
});

test('User should have empty tickets if no ticket is associated', () => {
    expect(UserService.search({ _id: 2 })[0].tickets.length).toBe(0);
});

test('User should have organization name populated', () => {
    expect(UserService.search({ _id: 1 })[0].organization_name).toBe('Multron');
});

test('Should be able to search by boolean attribute', () => {
    expect(UserService.search({ active: false }).length).toBe(36);
});

test('Should be able to search by a single tag attribute', () => {
    expect(UserService.search({ tags: 'Stewartville' }).length).toBe(1);
});

test('Should be able to search by multiple tags attribute, in any order', () => {
    expect(UserService.search({ tags: ['Stewartville', 'Kidder'] }).length).toBe(1);
});
