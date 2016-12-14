
// Use $.ready() to execute code once page is fully loaded
$(document).ready(function(){

	// Execute following conditional statements once the 
	//"Update" button is clicked
	$("#submit-btn").click(function(){

		// Change the background image of New York City if 
		//input is 1 of 3 possible choices
		if ($("#city-type").val() === 'NYC'
			|| $("#city-type").val() === "New York" 
			|| $("#city-type").val() === "New York City")
		{
		  $("body").attr('class','nyc');
		} 

		// Change the background image of San Francisco if
		// input is 1 of 3 possible choices
		else if ($("#city-type").val() === 'San Francisco'
			|| $("#city-type").val() === "SF" 
			|| $("#city-type").val() === "Bay Area")
		{
		  $("body").attr('class','sf');
		}

		// Change the background image of Los Angeles if 
		// input is 1 of 3 possible choices
		else if ($("#city-type").val() === 'Los Angeles'
			|| $("#city-type").val() === "LA" 
			|| $("#city-type").val() === "LAX")
		{
		  $("body").attr('class','la');
		}

		// Change the background image of Austin if input
		// is 1 of 2 possible choices
		else if ($("#city-type").val() === 'Austin'
			|| $("#city-type").val() === "ATX")
		{
		  $("body").attr('class','austin');
		}

		// Change the background image of Sydney if input
		// is 1 of 2 possible choices
		else if ($("#city-type").val() === 'Sydney'
			|| $("#city-type").val() === "SYD")
		{
		  $("body").attr('class','sydney');
		}

		// Use event.preventDefault() to prevent default 
		// settings from reloading when "Update" button is clicked
		event.preventDefault();
	});

});
