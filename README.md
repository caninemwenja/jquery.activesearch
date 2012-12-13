Jquery.ActiveSearch
===================

This is a jquery plugin for converting any input field into an active search field ala Google Search

It makes requests each time some text is typed into the input field.

Example
--------

	$("css selector").activesearch({ 
		url: 'search.php',
		params : function(value) {
			return "keyword="+value;
		},
		success: function(data){
			alert(data);
		}
	});

*This will make requests to `/search.php?keyword=<value in input field>` everytime you enter/remove data from the input field*