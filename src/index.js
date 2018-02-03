const express = require('express');
const UserService = require('../src/services/user');
const TicketService = require('../src/services/ticket');
const OrgService = require('../src/services/organization');

const app = express();

// user search routes
app.get('/users', (req, res) => {
    res.json(UserService.search(req.query));
});

// tickets search routes
app.get('/tickets', (req, res) => {
    res.json(TicketService.search(req.query));
});

// tickets search routes
app.get('/orgs', (req, res) => {
    res.json(OrgService.search(req.query));
});

// start the server at port 3000.
app.listen(3000, () => console.log('Search app started on port 3000'));
