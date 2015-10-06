Router.configure({
    layoutTemplate: 'layout'
});

Router.route('map', {
    path: '/',
    template: 'map',
    waitOn: function () {
        GoogleMaps.load({ v: '3'});
    },
    yieldTemplates: {
        'Header':{'to': 'header'},
        'Venues':{'to': 'footer'}
    }
});