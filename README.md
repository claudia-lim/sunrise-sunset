# Sunrise/Sunset Calculator

<h2>The Challenge</h2>
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

<h2>My Process</h2>
<h3>Stack</h3>
- React
- Javascript
<h3>Development Diary</h3>
<h4>Day One</h4>
Things seemed to be going well but the main problems I encountered were some CORS errors when using the sunrise/sunset API - turns out it was an easy fix by removing incorrect options in my fetch request and adding in the correct origin header. Another issue I noted was that I was needing to double click on my submit button before the correct data was displaying - on investigation it was an issue with my useEffect processes.
<h4>Day Two</h4>
I was noticing that my components and useEffect functions were re-rendering or triggering off multiple times when I wasn't expecting them to. I realised that I didn't have the best grasp of using useEffect properly and this article in the React documentation was really useful in making me realise that I was over-using useEffect and useState (https://react.dev/learn/you-might-not-need-an-effect). Removing unnecessary useEffects and useStates made the code look much cleaner and possibly a bit faster as things weren't rendering over and over again unnecessarily.
I managed to get this all working and then learnt how to use the geolocation property of the Navigator web API. Then added some styling including changing the display theme based on the sunrise and sunset times and was pretty happy that I'd met the requirements set out by the challenge!

I'd like to try and get create the option of displaying the sunrise sunset times in the local time of the selected location as an added challenge.

<h3>What I learned</h3>
I am feeling more confident in understanding how the React components render and when - specifically how this works with useState and useEffect and knowing when you do or don't need to use them. I learned about the Navigator geolocation web API.
