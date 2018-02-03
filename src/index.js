const express = require('express');
const winston = require('winston');
const UserService = require('../src/services/user');
const TicketService = require('../src/services/ticket');
const OrgService = require('../src/services/organization');
const config = require('./env');

const app = express();

// user search routes
app.get('/users', (req, res) => {
    winston.debug('request received for /users');
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

// default error handler
app.use((err, req, res, next) => {
    winston.error(err.stack);
    res.status(500).send('Please try again later');
});

// start the server at port 3000.
app.listen(config.port, () => {
    winston.info(`Server started at port ${config.port}`);
});
