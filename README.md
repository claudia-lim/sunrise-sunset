# Sunrise/Sunset Calculator

##The Challenge
**Language/Framework**: Any language, frameworks allowed but not necessary  
**Length**: Spend no more than 8 hours on this  
**Submission**: Host on github pages or iO dev server

For this tech test, you will build a page that tells the user the sunrise and sunset time for a given city. 
The page will contain a single input box for users to type in a city name, it will then display the sunrise 
and sunset times for that city.

- Use one the the below geocode APIS to get the location of a city name
  - https://geocode.xyz/api
  - https://developer.mapquest.com/documentation/open/geocoding-api/address/get/
- Pass that location into the below sunrise API
  - https://sunrise-sunset.org/api
- Display the Sunrise and Sunset times for that city
- Include a button next to the city input for using the users current location
- When clicked grab their current location, fill out the city input and display the sunrise an sunset times
- Based on the sunrise/sunset times, change the displayed background to day or night depending on if the sun has risen or not
