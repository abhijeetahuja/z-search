const _ = require('lodash');
const users = require('../../inputs/users.json');
const tickets = require('../../inputs/tickets.json');
const organizations = require('../../inputs/organizations.json');

class Organization {
    constructor() {
        this.users = users;
        this.tickets = tickets;
        this.organizations = organizations;
    }

    getAttributes() {
        return Object.keys(this.organizations[0]);
    }

    prepareResponse(filteredOrgs) {
        return filteredOrgs.map(org => Object.assign(
            {}, org,
            { users: _.filter(this.users, { organization_id: org._id }).map(user => user.name) },
            { tickets: _.filter(this.tickets, { organization_id: org._id }).map(ticket => ticket.subject) },
        ));
    }

    search(filterObj) {
        // normalize input strings
        const normalizedFilterObj = Object.assign(
            {}, filterObj,
            filterObj.shared_tickets && { shared_tickets: filterObj.shared_tickets === 'true' },
            filterObj._id && { _id: parseInt(filterObj._id, 10) },
        );

        if (normalizedFilterObj.tags) {
            const normalizedTags = [].concat(normalizedFilterObj.tags);
            return this.prepareResponse(_.filter(this.organizations, org => !normalizedTags.some(val => org.tags.indexOf(val) === -1)));
        }

        if (normalizedFilterObj.domain_names) {
            const normalizedDomainNames = [].concat(normalizedFilterObj.domain_names);
            return this.prepareResponse(_.filter(this.organizations, org => !normalizedDomainNames.some(val => org.domain_names.indexOf(val) === -1)));
        }

        return this.prepareResponse(_.filter(this.organizations, normalizedFilterObj));
    }
}


// export as singleton instance
module.exports = new Organization();
