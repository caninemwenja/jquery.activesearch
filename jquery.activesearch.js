( function($) {
	$.fn.activesearch = function(options) {
		var options = $.extend({
			'type' : 'GET',
			'dataType' : 'json',
			'error' : function(d, e, x) {
				alert(d + " - " + e + " - " + x);
			}
		}, options);

		return this.each(function() {
			var $this = $(this);

			$this.bind("keyup.activesearch", function(event) {
				var value = $this.val();
				if(value && value.length > 0) {
					$.ajax({
						url : options.url,
						data : options.param + "=" + value,
						type : options.type,
						dataType : options.dataType,
						success : function(data, xhr, status) {
							options.success(data, xhr, status);
						},
						error : function(d, e, x) {
							options.error(d, e, x);
						}
					});
				}
			});
		});
	}
}(jQuery));

$(document).ready(function() {
	/*$("#keyword_field").keyup(function(event) {
	 value = $(this).val();
	 results_div = $("#results");
	 results_div.html("");
	 $.ajax({
	 url : 'search.php',
	 data : 'keyword=' + value,
	 type : 'GET',
	 dataType : 'json',
	 success : function(data, xhr, status) {
	 for( i = 0; i < data.length; i++) {
	 results_div.append("<li>" + data[i] + "</li>");
	 }
	 },
	 error : function(d, e, x) {
	 alert(d + ":" + e + ":" + x);
	 }
	 });
	 });*/

	$("#keyword_field").activesearch({
		'url' : 'search.php',
		'param' : 'keyword',
		'success' : function(data, xhr, status) {
			var results_div = $("#results");
			results_div.html("");
			for( i = 0; i < data.length; i++) {
				results_div.append("<li>" + data[i] + "</li>");
			}
		},
		'error' : function(d, e, x) {
			console.log("E: " + e);
			console.log("X: " + x);
			console.log("D: " + d);
		}
	});
});
