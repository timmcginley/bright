<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.min.js"></script>
<script>
    $.ajax({
        url: '/d2l/api/lp/1.9/courses/{OrgUnitId}', //Grab course offering details
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            var obj = data;
            //Define dates from Course Offering as moments (if a date exists)
            if (obj.StartDate != null) {
                var startDate = moment(obj.StartDate).format('dddd, MMMM Do YYYY, h:mm a');
            } else {
                var startDate = "None";
            }
            if (obj.EndDate != null) {
                var endDate = moment(obj.EndDate).format('dddd, MMMM Do YYYY, h:mm a');               
            } else {
                var endDate = "None";
            }
            //Append dates to div
            $("#course-dates").append("<p><strong>Start Date:</strong> " + startDate + "</p>"+obj.Name);
            $("#course-dates").append("<p><strong>End Date:</strong> " + endDate + "</p>");
        },
    });
</script>
<div id="course-dates"></div>