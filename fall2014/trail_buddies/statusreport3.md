Taylor:
- I modified main.js so that when it is checking that all fields have been populated, it also checks that
  the date that was input is of a proper date format. If it is, it converts that date into a new date object
  (which we can store into the database in this format). In the case that it is not in the proper date format
  (DD/MM/YYYY) then it will print an error message saying "Please specif a date in the following format: DD/MM/YYYY".
  If there are other fields that have still been left blank, then this error will display in addition to the
  "One or more fields are blank" error message that displays on the screen.
- Next Steps: In the future, this will be useful for website scraping. Weather websites usually are capable
  of showing a ten-day forecase. So, Using this date format, we can check if the date is within 10 days from now,
  and in the case that it is, we can automatically use website scraping to find and store the weather data for that 
  hike.


Sam + Lila:

Set up the POST and GET request in map.js and main.js so that it gets the data from a server 
when the map loads, And POSTs data to the server when a user adds a hike.

Created a temporary server and pushed it to heroku. 

Created a gitignore file and got rid of all the stupid files that we don't need.


Elliot:

Worked more on integrating the bootstrap framework into our codebase. Added an in-page add a hike form. and streamlined the nav bar

Comments by Ming
1. How is the server side stuff coming along?  That's going to be the critical piece.  What's the Heroku URL?

