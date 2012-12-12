$(document).ready(function() {
	$("#keyword_field").keyup(function(event) {
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
	});
});
