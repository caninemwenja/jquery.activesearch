( function($) {
	$.fn.activesearch = function(options) {
		var options = $.extend({
			'type' : 'GET',
			'dataType' : 'json',
			'contentType':'application/x-www-form-urlencoded;charset=UTF-8',
			'beforeSearch': function(){},
			'afterSearch': function(){},
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
				if(value && value.length > 0) { // TODO: cater for additional filters eg if val > 3 chars
					options.beforeSearch();
					$.ajax({
						url : options.url, // TODO: cater for pretty urls
						data : options.params(value),
						contentType: options.contentType,
						type : options.type,
						dataType : options.dataType,
						success : function(data, status, xhr) {
							options.success(data, status, xhr);
						},
						error : function(xhr, status, error) {
							options.error(xhr, status, error);
						},
						complete: options.afterSearch,
					});
				}
			});
		});
	}
}(jQuery));
