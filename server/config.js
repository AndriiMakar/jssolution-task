if (Meteor.is_server) {
  Meteor.startup(function () {


    Accounts.loginServiceConfiguration.remove({
        service: "google"
    });

    Accounts.loginServiceConfiguration.insert({
        service: "google",
        clientId: "439215731556-6bs5ulicrtanmn5eo3b3n00v08fd6qsj.apps.googleusercontent.com",
        secret: "I4fF6DiAX45E32F-sgt6qtAc"
    });

  });
}
