oregami-client
==============
for http://www.oregami.org

open source game database (work in progess)

This is the web client written in JavaScript and HTML.
It uses AngularJS (http://angularjs.org/).

Do a "bower install & npm install" the first time you cloned the repository.

For development run the command "gulp serve", this automatically opens your web browser at http://localhost:3000/ with automatic refresh (BrowserSync) after each file change!

If you changed the server config (host, port) then change the client configuration in "app/scripts/app.js" (search for "RestangularProvider.setBaseUrl(..." and enter the URL for your local REST server.
