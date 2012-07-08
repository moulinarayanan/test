function route(pathname, handle, response, request) {
	console.log("About to route a request for " + pathname);
	if (typeof handle[pathname] === 'function') {
		handle[pathname](response, request);
	} else {
		console.log("No reuqest handler found for " + pathname);
		response.writeHead(404, {"Content-type": "text/text"});
		response.write("404 not found");
		response.end();
	}
}

exports.route = route;
