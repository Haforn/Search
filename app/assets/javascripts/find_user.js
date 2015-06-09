var ready;
var searchFormVal;

ready = function() {

	$('.jsSearchForm').on('keyup', function() {
		setTimeout(function() {
			searchFormVal = $('.jsSearchForm').val();
			if(searchFormVal.length > 1) {
				$('.jsSearchForm').submit();
			}
		}, 200);
	});

	$('.jsFindUser').on('ajax:success', function(evt, post, status) {
		$('.jsFoundUsers').html('');
		searchFormVal = $('.jsSearchForm').val();
		console.log(searchFormVal);
		console.log(evt, post, status);
		if(post.length) {
			console.log('Found some users');
			for(i = 0; i < post.length; i++) {
				console.log(post[i]);
				if(i < 10) {
					$('.jsFoundUsers').append('<p>Naam: ' + post[i].name + '</p>');
				} else {
					return false;
				}
			}
		} else {
			console.log('no users found');
			$('.jsFoundUsers').append('<p>Er zijn geen gebruikers gevonden met de naam: '+ searchFormVal +'</p>')
		}
	});

}

$(document).ready(ready);
$(document).on('page:load', ready);