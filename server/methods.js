Meteor.methods({
    'foursquareRequest': function (query) {
  var furl = "https://api.foursquare.com/v2/venues/search?";
  var clientId = "client_id=OFPTFG3H4KWORPCNAFRS0J5AYIPNIVIMGITB4EAJTUVXCYRS";
  var clientSecret= "&client_secret=1QOVRGYVCADKCXZAENIMCUYPZXANW0YZJM4J4JOALOMMQUMO";
  var ver ="&v=20151005";
  var ll="&ll="+query.latitude+","+query.longitude;
  var q="&query="+query.query;
  var radius = "&radius=" + query.radius;
  var url = furl+clientId+clientSecret+ver+ll+radius+q;
  
  var venues = Meteor.http.get(url, {timeout:30000});
  return venues.data.response.venues;
    }

});