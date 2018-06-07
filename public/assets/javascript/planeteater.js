// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

    $(".devour").on("click", function(event) {

      var id = $(this).data("id");

      var devouredObj = {
        devoured: false
      };
  
      // Send the PUT request.
      $.ajax("/api/planets/" + id, {
        type: "PUT",
        data: devouredObj
      }).then(
        function() {
          console.log("devoured planet!");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".target-planet").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();

  
      var newPlanet = {
        name: $("#newPlanet").val().trim(),
      };

      // console.log(newPlanet);
  
      // Send the POST request.
      $.ajax("/api/planets", {
        type: "POST",
        data: newPlanet
      }).then(
        function() {
          console.log("targeted new planet");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  