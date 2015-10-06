Template.venues.helpers({
	
venueRes: function () {
		 var venues = Session.get('venues');
				
		if(venues!==null) {
			var venuesArr = [];
			venuescount = venues.length;
			for (var i = 0;  i <venues.length; i++) {
				var name = venues[i].name;
				var address = venues[i].location.address;
				var city = venues[i].location.city;
				var lat = venues[i].location.lat;
				var lng = venues[i].location.lng;
				venuesArr.push({name: name, address: address, city: city,
					lat: lat, lng: lng
				});			
			};
			console.log(venuesArr);
			return venuesArr;
		}
		return false;
	},


		venuescount: function() {
        	//return Queries.find({_id: Session.get('query_id')}).count();
         	var venC = Session.get('venues');
         	Session.set('length', venC.length);
         	return venC.length;
         }
     });



Template.venues.events({
	'click #csv': function (e, tmpl) {
        var venues = Session.get('venues');
        csv = 'Name; City; Address; Lat; Lng%0A';
        
        for( i=0; i < Session.get('length'); i++)
          csv += venues[i].name +"; " + venues[i].location.city + "; " + venues[i].location.address + "; " + venues[i].location.lat + "; " + venues[i].location.lng + "%0A";

        var a = document.createElement('a');
        a.href = "data:text/csv;charset=utf-8,\uFEFF" + csv;
        a.target = '_blank';
        a.download = 'Data.csv';
        document.body.appendChild(a);
        a.click();
    }
});

