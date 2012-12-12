( function($) {
	$.fn.activesearch = function(options) {
		var options = $.extend({
			'type' : 'GET',
			'dataType' : 'json',
			'contentType' : 'application/x-www-form-urlencoded;charset=UTF-8',
			'beforeSearch' : function() {
			},
			'afterSearch' : function() {
			},
			'filter' : function(value, event) {
				return value.length > 0;
			},
			'error' : function(xhr, status, error) {
				console.log("Status: " + status);
				console.log("Error: " + error);
				console.log("XHR: ");
				console.log(xhr);
			}
		}, options);

		return this.each(function() {
			var $this = $(this);

			$this.bind("keyup.activesearch", function(event) {
				var value = $this.val();
				if(value && options.filter(value, event)) {
					options.beforeSearch();
					$.ajax({
						url : options.url(value),
						data : options.params(value),
						contentType : options.contentType,
						type : options.type,
						dataType : options.dataType,
						success : options.success,
						error : options.error,
						complete : options.afterSearch,
					});
				}
			});
		});
	}
}(jQuery));
