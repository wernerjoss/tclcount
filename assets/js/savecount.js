function getcount() 
{
	$.ajax({
		type: "GET", //we are using GET method to get all record from the server
		url: '../../ajax/getcount.php', // get the route value
		async: false,
		success: function (response) {//once the request successfully process to the server side it will return result here
			//	alert(response);
		}
	});
}
function addcount() 
{
	$.ajax({
		type: "GET", //we are using GET method to get all record from the server
		url: '../../ajax/savecount.php?p=add', // get the route value
		async: false,
		success: function (response) {//once the request successfully process to the server side it will return result here
		}
	});
}

function subcount() 
{
	$.ajax({
		type: "GET", //we are using GET method to get all record from the server
		url: '../../ajax/savecount.php?p=sub', // get the route value
		async: false,
		success: function (response) {//once the request successfully process to the server side it will return result here
		}
	});
}

function resetcount() 
{
	$.ajax({
		type: "GET", //we are using GET method to get all record from the server
		url: '../../ajax/savecount.php?p=reset', // get the route value
		async: false,
		success: function (response) {//once the request successfully process to the server side it will return result here
		}
	});
}

function setNum(count) 
{
	$.ajax({
		type: "POST", //we are using GET method to get all record from the server
		url: '../../ajax/setcount.php?c='+count, // get the route value
		async: false,
		success: function (response) {//once the request successfully process to the server side it will return result here
			response = JSON.parse(response);
			alert(response);
		}
	});
}

function submitForm() 
{
	$("#btnSubmit").on("click", function() {
		var $this 		    = $("#btnSubmit"); //submit button selector using ID
        var $caption        = $this.html();// We store the html content of the submit button
        var form 			= "#form"; //defined the #form ID
        var formData        = $(form).serializeArray(); //serialize the form into array
        var route 			= $(form).attr('action'); //get the route using attribute action
		
	   	// Ajax config
    	$.ajax({
	        type: "POST", //we are using POST method to submit the data to the server side
	        url: route, // get the route value
	        data: formData, // our serialized array data for server side
	        beforeSend: function () {//We add this before send to disable the button once we submit it so that we prevent the multiple click
	            $this.attr('disabled', true).html("Processing...");
	        },
			success: function (response) {//once the request successfully process to the server side it will return result here
	            $this.attr('disabled', false).html($caption);

	            // alert(formData[0].value);
	            setNum(formData[0].value);	// numeric Input

	            // Reload lists of Counts
	            getcount();	// was: all();
				// We will display the result using alert
	            // alert(response);

	            // Reset form
	            resetForm();
	        },
	        error: function (XMLHttpRequest, textStatus, errorThrown) {
	        	// You can put something here if there is an error from submitted request
				alert("Button Submit !");
	        }
	    });
	});
}

function submitPlus() 
{
	$("#btnPlus").on("click", function() {
		var $this 		    = $("#btnPlus"); //submit button selector using ID
        var $caption        = $this.html();// We store the html content of the submit button
        var form 			= "#form"; //defined the #form ID
        var formData        = $(form).serializeArray(); //serialize the form into array
        var route 			= $(form).attr('action'); //get the route using attribute action
		console.log("Formdata:", formData);
        // Ajax config
    	$.ajax({
	        type: "GET", //we are using POST method to submit the data to the server side
	        url: route, // get the route value
	        data: formData, // our serialized array data for server side
	        beforeSend: function () {//We add this before send to disable the button once we submit it so that we prevent the multiple click
	            $this.attr('disabled', true).html("Processing...");
	        },
	        success: function (response) {//once the request successfully process to the server side it will return result here
	            $this.attr('disabled', false).html($caption);
				
				addcount();	// increase count by 1
	            
	            // Reload lists of Counts
	            getcount();	// was: all();

	            // We will display the result using alert
	            // alert(response);

	            // Reset form
	            resetForm();
	        },
	        error: function (XMLHttpRequest, textStatus, errorThrown) {
	        	// You can put something here if there is an error from submitted request
	        }
	    });
	});
}

function submitMinus() 
{
	$("#btnMinus").on("click", function() {
		var $this 		    = $("#btnMinus"); //submit button selector using ID
        var $caption        = $this.html();// We store the html content of the submit button
        var form 			= "#form"; //defined the #form ID
        var formData        = $(form).serializeArray(); //serialize the form into array
        var route 			= $(form).attr('action'); //get the route using attribute action
		console.log("Formdata:", formData);
        // Ajax config
    	$.ajax({
	        type: "GET", //we are using POST method to submit the data to the server side
	        url: route, // get the route value
	        data: formData, // our serialized array data for server side
	        beforeSend: function () {//We add this before send to disable the button once we submit it so that we prevent the multiple click
	            $this.attr('disabled', true).html("Processing...");
	        },
	        success: function (response) {//once the request successfully process to the server side it will return result here
	            $this.attr('disabled', false).html($caption);
				
				subcount();	// increase count by 1
	            
	            // Reload lists of Counts
	            getcount();	// was: all();

	            // We will display the result using alert
	            // alert(response);

	            // Reset form
	            resetForm();
	        },
	        error: function (XMLHttpRequest, textStatus, errorThrown) {
	        	// You can put something here if there is an error from submitted request
	        }
	    });
	});
}

function submitReset() 
{
	$("#btnReset").on("click", function() {
		var $this 		    = $("#btnReset"); //submit button selector using ID
        var $caption        = $this.html();// We store the html content of the submit button
        var form 			= "#form"; //defined the #form ID
        var formData        = $(form).serializeArray(); //serialize the form into array
        var route 			= $(form).attr('action'); //get the route using attribute action
		console.log("Formdata:", formData);
        // Ajax config
    	$.ajax({
	        type: "GET", //we are using POST method to submit the data to the server side
	        url: route, // get the route value
	        data: formData, // our serialized array data for server side
	        beforeSend: function () {//We add this before send to disable the button once we submit it so that we prevent the multiple click
	            $this.attr('disabled', true).html("Processing...");
	        },
	        success: function (response) {//once the request successfully process to the server side it will return result here
	            $this.attr('disabled', false).html($caption);
				
				resetcount();	// Reset count
	            
	            // Reload lists of Counts
	            getcount();	// was: all();

	            // We will display the result using alert
	            // alert(response);

	            // Reset form
	            resetForm();
	        },
	        error: function (XMLHttpRequest, textStatus, errorThrown) {
	        	// You can put something here if there is an error from submitted request
	        }
	    });
	});
}

function resetForm() 
{
	$('#form')[0].reset();
	location.reload();
}


$(document).ready(function() {

	// Get all Count records
	getcount();

	// Submit form using AJAX
	submitPlus();
	submitMinus();
	submitReset();
	submitForm();
});