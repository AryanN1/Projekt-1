var movies = ["The Matrix", "The Notebook", "Mr. Nobody", "The Lion King"];

      // displayMovieInfo function re-renders the HTML to display the appropriate content
      function displayMovieInfo() {

        var movie = $(this).attr("data-name");
  		var queryURL = "https://api.themoviedb.org/3/movie/550?api_key=c851eec6c9c2ba8782875cf67bf47e5a";
        // var queryURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&r=json";

        // Creating an AJAX call for the specific movie button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {

          // Creating a div to hold the movie
          var movieDiv = $("<div class='movie'>");

          // Storing the rating data
          var rating = response.Rated;

          // Creating an element to have the rating displayed
          var pOne = $("<p>").text("Rating: " + rating);

          // Displaying the rating
          movieDiv.append(pOne);

          // Storing the release year
          var released = response.Released;

          // Creating an element to hold the release year
          var pTwo = $("<p>").text("Released: " + released);

          // Displaying the release year
          movieDiv.append(pTwo);

          // Storing the plot
          var plot = response.Plot;

          // Creating an element to hold the plot
          var pThree = $("<p>").text("Plot: " + plot);

          // Appending the plot
          movieDiv.append(pThree);

          // Retrieving the URL for the image
          var imgURL = response.Poster;

          // Creating an element to hold the image
          var image = $("<img>").attr("src", imgURL);

          // Appending the image
          movieDiv.append(image);

          // Putting the entire movie above the previous movies
          $("#movie").prepend(movieDiv);
        });

      }

       $(document).on("click", ".movie", displayMovieInfo);