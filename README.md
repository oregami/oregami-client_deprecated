oregami-client
==============
for http://www.oregami.org

open source game database (work in progess)

This is the web client written in JavaScript and HTML.
It uses AngularJS (http://angularjs.org/).

Open "index.html" in the folder "app" via a local webserver.
The client tries to access our running test-server at http://test.server.oregami.org:6080 . 
If you changed the server config (host, port) then change the client configuration in "app/scripts/app.js" (search for "constant('mySettings'...") or directly in the web frontend.
