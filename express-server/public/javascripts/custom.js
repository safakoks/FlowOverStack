// this is the id of the form
$(".search").submit(function(e) {
    e.preventDefault();
    var url = "/getAnswer"; // the script where you handle the form input.
    var mydata =  $(".search").serialize();
    $.ajax({
           type: "POST",
           url: url,
           data:mydata, // serializes the form's elements.
           success: function(data)
           {
              $(".my-title").html(data.title);
              $(".my-question").html(data.question);
              $(".my-answer").html(data.answer);
              $(".prettyprint").css("background-color","grey");
           }
         });

    e.preventDefault(); // avoid to execute the actual submit of the form.
});
