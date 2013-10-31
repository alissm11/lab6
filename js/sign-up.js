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
	    var addr1Value = addrInput.val();
	    

	    if (addr1Value && addr1Value.trim().length > 0) {
	    	var zipInput = signupForm.find('input[name="zip"]');
	    	var zipValue = zipInput.val(); 
	    	if (zipValue && zipValue.trim().length > 0) {
	    		return true;
	    	} 
	    	else {
	    		alert("Please enter your zip code!"); 
	    		return false; 
	    	}
    	}
	});
});