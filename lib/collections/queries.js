Queries = new Mongo.Collection('queries');
Queries.allow({
 insert: function() {
		return true;
	},
remove: function() {
		return true;
	}
   
});