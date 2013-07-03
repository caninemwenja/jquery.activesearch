# Jquery.ActiveSearch

This is a jquery plugin for converting any input field (or *typeable* field for that matter) 
into an **active search field** *ala* Google Search.

## Author

Kennedy Mwenja (mwenja07@gmail.com)

## What it's about

It makes requests to a specified url using **ajax** each time some text is typed into the input field. 

It's highly **configurable**. You can choose 
* what url to send to
* what type of request that will be sent (GET, POST)
* how the data will be processed if the search was successful
* what type of data type will be returned
* what you want to happen if there was an error
* whether to start searching after a certain condition is reached
* and some other neat stuff.

You can look under the hood (source code) to see how this is made possible. 

You can also **fork** and make any changes you want. :D

## How to Use

Jquery.ActiveSearch is a **function** that requires a **javascript object** that has 
* a **url** property (the search url to send the search request to)
* a **params** property (the parameters for the search url if any)
* a **success** property (a function that will handle the results of the search request)

Here's an example of active search in action:

The **webpage**, say ```index.html```

	<input type="text" name="search" id="search"/>
	
	<h1>Results</h1>
	<div id="results">
	</div>

	<script type="text/javascript">
		// activating active search on a field
		$("#search").activesearch({ // the json object
			url: 'search.php',
			params : function(value) {
				return "keyword="+value;
			},
			success: function(data){
				var results = $("#results");
				results.html("");
				
				$(data.results).each(function(index, result){
					results.append(result+"<br/>");
				})
			}
		});
	</script>

The **search handler**, say ```search.php``` 
*this is just an example, you can write it your own search code in another language*

	<?php
	
	// this is just some dummy data, you can write your own search code any way you like
	header("Content-Type: application/json");
	echo "{ \"results\" : [ \"example data 1\", \"example data 2\", \"example data 3\" ] }";
	?>

Put both of the files in a webserver and open the ```index.html``` page in a browser, then try and input some stuff in the textfield.

### What the code does

When you enter (or remove) some text in the input field, the javascript code makes an AJAX request to the 
dummy search handler, ```search.php``` which returns a simple json object. This object has an array which is 
processed by the javascript code and added to the results section in the page.
