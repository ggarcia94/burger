// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burgerName: $("#bu").val().trim()
      //burgerName: "Chicken Burger"
    };
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".eat-burger").on("click", function(event){
    var id = $(this).data("id");
    console.log("ID:", id);
    var newDevouredState = {
      id: id
    };
    $.ajax("/api/burgers", {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("ate the burger")
        location.reload();
      }
    )
  });
 
});
