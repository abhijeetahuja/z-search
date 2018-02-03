const OrgService = require('../../src/services/organization');

test('Should give all the orgs if no filter param is applied', () => {
    expect(OrgService.search({}).length).toBe(25);
});

test('Should return only single org by _id', () => {
    expect(OrgService.search({ _id: 125 }).length).toBe(1);
});

test('Should ignore unknown props and return empty resultset', () => {
    expect(OrgService.search({ dummy: '05291c66-f705-45a9-834d-4f594b236ff6' }).length).toBe(0);
});

test('Should be able to search by boolean attribute', () => {
    expect(OrgService.search({ shared_tickets: false }).length).toBe(15);
});

test('Should be able to search by a single tag attribute - no matches', () => {
    expect(OrgService.search({ tags: 'Stewartville' }).length).toBe(0);
});

test('Should be able to search by multiple tags attribute, in any order', () => {
    expect(OrgService.search({ tags: ['Vance', 'Frank'] }).length).toBe(1);
});

test('Should be able to search by multiple tags attribute, in any order - no match', () => {
    expect(OrgService.search({ tags: ['Vance', 'Frank', 'Underwooe0'] }).length).toBe(0);
});

test('Should be able to search by multiple domain_names attribute, in any order', () => {
    expect(OrgService.search({ domain_names: ['techtrix.com', 'flotonic.com'] }).length).toBe(1);
});

test('Should have tickets and users linked', () => {
    const result = OrgService.search({ name: 'Strezzö' });
    expect(result.length).toBe(1);
    expect(result[0].users).toEqual([
        'Lolita Herring',
        'Green Buckley',
    ]);
    expect(result[0].tickets).toEqual([
        'A Problem in Cyprus',
        'A Drama in Viet Nam',
        'A Nuisance in Poland',
        'A Nuisance in Honduras',
        'A Problem in Ukraine',
        'A Nuisance in Namibia',
    ]);
});

