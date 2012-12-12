( function($) {
	$.fn.activesearch = function(options) {
		var options = $.extend({
			'type' : 'GET',
			'dataType' : 'json',
			'error' : function(xhr, status, error) {
				console.log("Status: " + status);
				console.log("Error: " + error);
				console.log("XHR: " + xhr);
			}
		}, options);

		return this.each(function() {
			var $this = $(this);

			$this.bind("keyup.activesearch", function(event) {
				var value = $this.val();
				if(value && value.length > 0) {
					$.ajax({ // TODO: cater for progressive loading
						url : options.url,
						data : options.params(value),
						type : options.type,
						dataType : options.dataType,
						success : function(data, xhr, status) {
							options.success(data, xhr, status);
						},
						error : function(xhr, status, error) {
							options.error(xhr, status, error);
						}
					});
				}
			});
		});
	}
}(jQuery));
