( function($) {
	$.fn.activesearch = function(options) {
		var options = $.extend({
			'type' : 'GET',
			'dataType' : 'json',
			'error' : function(d, e, x) {
				console.log("E: " + e);
				console.log("X: " + x);
				console.log("D: " + d);
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
