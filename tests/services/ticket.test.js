const TicketService = require('../../src/services/ticket');

test('Should give all the tickets if no filter param is applied', () => {
    expect(TicketService.search({}).length).toBe(200);
});

test('Should return only single ticket by _id', () => {
    expect(TicketService.search({ _id: '05291c66-f705-45a9-834d-4f594b236ff6' }).length).toBe(1);
});

test('Ticket should have submitter_name entity', () => {
    expect(TicketService.search({ _id: '05291c66-f705-45a9-834d-4f594b236ff6' })[0].submitter_name).toBe('Gallegos Armstrong');
});

test('Ticket should have assignee_name entity, only if one found', () => {
    expect(TicketService.search({ subject: 'A Drama in Saint Vincent and The Grenadines' })[0].assignee_name).toBe('Daniel Agüilar');
});

test('Ticket should have organization_name entity, only if one found', () => {
    expect(TicketService.search({ _id: '05291c66-f705-45a9-834d-4f594b236ff6' })[0].organization_name).toBe('Koffee');
});

test('Should be able to search by boolean attribute', () => {
    expect(TicketService.search({ has_incidents: false }).length).toBe(101);
});

test('Should be able to search by a single tag attribute - no matches', () => {
    expect(TicketService.search({ tags: 'Stewartville' }).length).toBe(0);
});

test('Should be able to search by multiple tags attribute, in any order', () => {
    expect(TicketService.search({ tags: ['Utah', 'Maryland'] }).length).toBe(7);
});

test('Should be able to search by submitter_id', () => {
    expect(TicketService.search({ submitter_id: 12 }).length).toBe(3);
});

test('Should be able to search by assignee_id', () => {
    expect(TicketService.search({ assignee_id: 12 }).length).toBe(3);
});

test('Should be able to search by organization_id', () => {
    expect(TicketService.search({ organization_id: 123 }).length).toBe(12);
});

