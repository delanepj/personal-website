/* 
	Configuration for requireJS.
*/
requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'javascripts/lib',
	
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: '../app',
		jquery: '//code.jquery.com/jquery-3.0.0-alpha1',
		bootstrap: '//maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/js/bootstrap.min'
    }
	
});

// Start the main app logic.
requirejs(['app/main']);

