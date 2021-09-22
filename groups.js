<p>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
    $.ajax({

        //url: '/d2l/api/lp/1.9/enrollments/orgUnits/{orgUnitId}/users/', //Get all users of an org id

        url: '/d2l/api/lp/1.9/enrollments/myenrollments/{orgUnitId}', //get the groups of the enrollments

	type: 'GET',
        dataType: 'json',

        success: function(data) {
            var obj = data;
			var variable ='';
			var keys = Object.keys(obj);
			for (x=0;x<keys.length;x++)
			{
				variable +=keys[x]+'<br>';

			}
            
            // Append data to div
			$("#title").append("<p><strong>Start Date:</strong> " + "hey you" + "</p>");
            $("#main").append("<p><strong>Start Date:</strong> " + JSON.stringify(obj) + "</p>"+variable);
            
        },
    });
</script>
</p>
<div id="title" style="border-radius: 10px; padding: 5%; background-color: #000; color: #fff; width: 90%;"></div>
<div id="main">oh this is great</div>