const _ = require('lodash');
const users = require('../../inputs/users.json');
const tickets = require('../../inputs/tickets.json');
const organizations = require('../../inputs/organizations.json');

class Ticket {
    constructor() {
        this.users = users;
        this.tickets = tickets;
        this.organizations = organizations;
    }

    getAttributes() {
        return Object.keys(this.tickets[0]);
    }

    prepareResponse(filteredTickets) {
        return filteredTickets.map((ticket) => {
            const assignee = this.users.find(user => ticket.assignee_id === user._id);
            const submitter = this.users.find(user => ticket.submitter_id === user._id);
            const org = this.organizations.find(organization => organization._id === ticket.organization_id);
            return Object.assign(
                {}, ticket,
                { assignee_name: assignee ? assignee.name : '' },
                { submitter_name: submitter ? submitter.name : '' },
                { organization_name: org ? org.name : '' },
            );
        });
    }

    search(filterObj) {
        // normalize input strings
        const normalizedFilterObj = Object.assign(
            {}, filterObj,
            filterObj.has_incidents && { has_incidents: filterObj.has_incidents === 'true' },
            filterObj.submitter_id && { submitter_id: parseInt(filterObj.submitter_id, 10) },
            filterObj.assignee_id && { assignee_id: parseInt(filterObj.assignee_id, 10) },
            filterObj.organization_id && { organization_id: parseInt(filterObj.organization_id, 10) },
        );

        if (normalizedFilterObj.tags) {
            const normalizedTags = [].concat(normalizedFilterObj.tags);
            return this.prepareResponse(_.filter(this.tickets, ticket => !normalizedTags.some(val => ticket.tags.indexOf(val) === -1)));
        }

        return this.prepareResponse(_.filter(this.tickets, normalizedFilterObj));
    }
}

// export as singleton instance
module.exports = new Ticket();
