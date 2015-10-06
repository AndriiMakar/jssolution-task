(function(){Template.query.helpers({
queries: Queries.find()
});

var deleteQuery = function(query) {
     	Queries.remove(query._id);

};

Template.query.events({
'click #trash': function(event) {
        deleteQuery(this);
        event.preventDefault();
}

});

})();