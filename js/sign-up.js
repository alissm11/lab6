//signup.js 
// add your JavaScript code to this file

//doc ready function 
//document is now ready for manipulation
$(function(){
	var stateSelect = $('.us-states[name="state"]');
	var option; 
	var idx;
	var state;
	for (idx = 0; idx < usStates.length; ++idx) {
	    state = usStates[idx];
	    option = $(document.createElement('option'));
        option.attr('value', state.abbreviation);
        option.html(state.name);
        stateSelect.append(option);
	}

	$('.signup-form').submit(function(){
	    //code to execute when the sign-up form is submitted
	    //this is the raw DOM form element
	    //wrap it in a jQuery object so we can use jQuery methods on it
	    var signupForm = $(this);

	    //select a descendant input element with the name "addr-1"
	    var addr1Input = signupForm.find('input[name="addr-1"]');
	    var addr1Value = addr1Input.val();
	    
	    //code to check if address was added
	    //if address was added, then needs to also add a zip
	    //will alert user if zip was not added
	    if (addr1Value && addr1Value.trim().length > 0) {
	    	var zipInput = signupForm.find('input[name="zip"]');
	    	var zipValue = zipInput.val(); 
	    	if (zipValue && zipValue.trim().length > 0) 
	    		return true;
	    	else {
	    		alert("Please enter your zip code!"); 
	    		return false; 
	    	} 
	    }
	});

	$('.cancel-signup').click(function(){
    	//code to run when user clicks "No Thanks!" button
    	//show the modal confirmation dialog
    	//and don't reset window.location until the user clicks
    	//the "Yes, Get Me Out of Here!" button
    	$('.cancel-signup-modal').modal();
	}); //cancel-signup click

	//add this at the end of your document ready function
	$('.btn-abandon').click(function(){
	    window.location = 'http://www.google.com';
	});
});