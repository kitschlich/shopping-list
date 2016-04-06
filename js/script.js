$(document).ready(function() {
	$('#addButton').on('click', function(e){
		console.log('button clicked');
		var newItem = $('#addItem').val();
		console.log(newItem);
		$('#checklist').append(
			$('<li>').addClass('checkbox').append(
				$('<label><input type="checkbox">' + newItem + 
					'</label><button class="remove">x</button>')
		));
	});
	$('ul').on('click', 'input', function(e){
		$(this).parent().toggleClass('crossed');
	});
	$('ul').on('click', '.remove', function(e){
		$(this).parent().remove();
	});
});