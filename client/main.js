	
	Meteor.subscribe('queries');
 
	
	Query = function() {
    map = GoogleMaps.get('map').instance;
    var id="",
    newQuery = {
    	
        creatorId: Meteor.userId(),
        query: document.getElementById('find1').value,
        latitude: map.getCenter().lat().toFixed(10),
        longitude: map.getCenter().lng().toFixed(10),
        radius: (getRadius() *1000).toFixed(),
        date: formatDate(Date.now())
    };
    
    id = Queries.insert(newQuery);
    Session.set('query_id', id);
    return Queries.findOne({_id: id});
};



function formatDate(milliseconds) {
    var formatter = new Intl.DateTimeFormat("en-US", {
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false
    });

    return formatter.format(milliseconds);
};

function getRadius(){
var map = GoogleMaps.get('map').instance;
var bounds = map.getBounds();

var center = bounds.getCenter();
var ne = bounds.getNorthEast();

var r = 3963.0;  


var lat1 = center.lat() / 57.2958; 
var lon1 = center.lng() / 57.2958;
var lat2 = ne.lat() / 57.2958;
var lon2 = ne.lng() / 57.2958;

var radius = r * Math.acos(Math.sin(lat1) * Math.sin(lat2) + 
  Math.cos(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1));
if(radius > 10)
            return 10;
	return radius;
};