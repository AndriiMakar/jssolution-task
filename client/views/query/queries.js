Template.queries.helpers({

queries: Queries.find({creatorId: Meteor.userId()}, {limit: 5, sort: {date: -1}})
});

