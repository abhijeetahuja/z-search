const express = require('express');
const UserService = require('../src/services/user');
const TicketService = require('../src/services/ticket');
const OrgService = require('../src/services/organization');

const app = express();

// user search routes
app.get('/users', (req, res) => {
    res.json(UserService.search(req.query));
});

app.get('/users/attributes', (req, res) => {
    res.json(UserService.getAttributes());
});

// tickets search routes
app.get('/tickets', (req, res) => {
    res.json(TicketService.search(req.query));
});

app.get('/tickets/attributes', (req, res) => {
    res.json(TicketService.getAttributes());
});

// org search routes
app.get('/orgs', (req, res) => {
    res.json(OrgService.search(req.query));
});

app.get('/orgs/attributes', (req, res) => {
    res.json(OrgService.getAttributes());
});

// serve static files.
app.use(express.static('dist'));

// start the server at port 3000.
app.listen(3000, () => console.log('Search app started on port 3000'));
