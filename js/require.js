(function($){
	var files = [];
	$.require = function(file, back){
		if(back === true) {
			files.push(file);
			return;
		}
		back = back || function() {};
		var loaded = false;
		for(var a = 0; a < files.length; a++)
			if(files[a] == file) {
				return back();
			}
		$.ajax({
			cache: true,
			type: "GET",
			data: null,
			success: function() {
				files.push(file);
				back();
			},
			dataType: "script",
			url: file
		});
	};
})(jQuery);
