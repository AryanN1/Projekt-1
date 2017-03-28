# Projekt-1 (German for Project)
Basis of this project is that it is a Dinner and Movie generator based on location and movies that are out or soon to be released. We will be using three different kinds of APIs, those APIs are; Google Maps, Google Places, and OMDB. Google Maps API is used to determine to where to have dinner based on their location, Google places will show all restaurants within their location and OMDB API is used to generate a movie to watch.
__________________________________________________________________________________________________________________________________________

Project Title: DinnerMovie Dash

Team Members: Chris Ward, Aryan Naimi, Drew Tevrizian

Project Description:

DinnerMovieDash will provide users with recommendations for dinner, and a movie
Users will enter the landing page and be instructed to enter and submit their name and location (zip code) via input fields. Once users click the submit button, the landing page will then show a location for dinner using their location that they have submitted, and then they have the option to click for a movie once they have put their name and location.  The information they have used to enter their username and zip code will be stored in a firebase.

After they give their name and location (zip code), a button will appear that allows them to be able to click button to show a list of movies and they have the option to choose the movie as they please. The movies they are chosen via OMDB API are movies that are either out or soon to be released. When the user reaches the end of the list, the list will loop again. The map of their location will pop up as well. If the user does not enter their information, then the button to select a movie will not be available and neither will the map show
Once they submit their information in the modal, the rest of the layout of the will show their location of dinner (based on their zip code) on one side and on the other side would be their choice of the movie. 

APIs to be Used:
-	GoogleMaps
-	Omdb
-	Google Places
