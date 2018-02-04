const _ = require('lodash');
const users = require('../../inputs/users.json');
const tickets = require('../../inputs/tickets.json');
const organizations = require('../../inputs/organizations.json');

class User {
    constructor() {
        this.users = users;
        this.tickets = tickets;
        this.organizations = organizations;
    }

    getAttributes() {
        // need to iterate all the objects to find all possible search keys
        return this.users.reduce((s, o) => [...new Set([...s, ...Object.keys(o)])], []);
    }

    prepareResponse(filteredUsers) {
        return filteredUsers.map((user) => {
            const org = this.organizations.find(organization => organization._id === user.organization_id);
            return Object.assign(
                {}, user,
                { organization_name: org ? org.name : '' },
                { tickets: _.filter(this.tickets, { submitter_id: user._id }).map(ticket => ticket.subject) },
            );
        });
    }

    search(filterObj) {
        // normalize input strings as query params are always string
        const normalizedFilterObj = Object.assign(
            {}, filterObj,
            filterObj.active && { active: filterObj.active === 'true' },
            filterObj.verified && { verified: filterObj.verified === 'true' },
            filterObj.shared && { shared: filterObj.shared === 'true' },
            filterObj.suspended && { suspended: filterObj.suspended === 'true' },
            filterObj.active && { active: filterObj.active === 'true' },
            filterObj._id && { _id: parseInt(filterObj._id, 10) },
            filterObj.organization_id && { organization_id: parseInt(filterObj.organization_id, 10) },
        );

        if (normalizedFilterObj.tags) {
            // handle search for array properties
            const normalizedTags = [].concat(normalizedFilterObj.tags);
            return this.prepareResponse(_.filter(this.users, user => !normalizedTags.some(val => user.tags.indexOf(val) === -1)));
        }

        return this.prepareResponse(_.filter(this.users, normalizedFilterObj));
    }
}

// export as singleton instance
module.exports = new User();
