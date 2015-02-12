Design Doc - group 6

Trail Buddies google maps implementation

Elliot Cobb, Caroline Ramani, Sam Weiser, Taylor Maykranz, Adam Brooks


—— Project title

	Trail Buddies

—— Problem statement (i.e., what is the problem?)

	It is challenging for people who like to hike to find other people who also like to hike, and then to schedule hikes that are open to the public. Online forums exist, but it’s hard to filter data on who wants to hike when, where, and for how long. 

—— How do you solve the problem?

	Our website displays a Google map where hikes that are going on in your area are represented by markers. Clicking on the marker displays a description of the hike along with the scheduled date, time, length, and group members. Users can join any hike by clicking on the pin and selecting “join”. It’s also easy to filter results by hike length, date, and group size using drop down menus. 

—— List of all the features that your team will implement (including which of the "Pick 5" items were chosen by the team). Your team will be held accountable for the features you list!

	geolocation: A map is displayed to you based upon your location

	server-side data storage: data containing all information about existing hikes and users

	scraping for current weather forecasts: Several days before a scheduled hike is to occur, the weather forecast will be collected and provided with the other data about that particular hike that is scheduled to take place. 

	email push notifications: When the date of a hike is approaching, the users who have “joined” that hike will be reminded about their hike

	front end framework (Bootstrap)

	Additional Features:

	view the nearby hikes: a user can see a map indicating the locations of different hikes that are scheduled to take place near by. The user can then choose to view more information about a particular hike, such as: the description of the hike, the date and time of the hike, the estimated length of the hike, and a unique identification number used to distinguish this particular scheduled hike from the rest. 
 
	filter results: A user can specify different criteria which will be used to filter the hikes that are displayed to him/her. The user can specify the distance from his/her location, and/or the user can specify the date which the hike is scheduled to take place. 

	add a hike: A user can schedule a new hike. Once this event has been created, all users searching for hikes within the area can then view and join this hike. The user must enter in his/her name, email address, the location of the hike, the date and time of the hike, the estimated length of the hike, and a description of the hike. The information about the actual hike will be publicly viewable to the other users of the system.

	join a hike: Once a user has found the hike that he/she has decided to attend, this user can add himself/herself to the list of attendees by clicking on the pin associated with the particular hike. The user must specify the user’s name, email address, the unique identifier which has been assigned to that particular hike, and any notes or concerns that the user would like to include.

	hikes to be removed from map: Once the scheduled date of the hike has passed, the hike will no longer be displayed to the users on the map.

—— What data will your prototype be using and collecting

	Hike info: 

	When a user schedules a hike to take place, the following data will be collected: hike description, location, length, date, time, name and email address of the user who created the hike.

		Several days before the hike is scheduled to take place, weather forecast information will be collected via scraping. The information collected that pertains to the hike will be displayed publicly to users.

	User info:
 
	email and name of user who created the hiking event will be collected. This will be displayed to the public under the “hike info” when a user clicks on a hike pin. 

	The username and email of each hiker who chooses to join a hike will be collected. This will be used to send push notifications to the attendees of a particular hike, and this information will also be displayed under the “hike info” when a user clicks on each hike pin. The geolocation of the user will be used to generate the map displayed to the user.
	
—— Any algorithms or special techniques that will be necessary

	search hike database: (Information about all hikes that have been created will already be stored.) When a search is to be performed, search criteria must be collected.

	Criteria with default values: Radius of search location region

	Criteria that will be automatically collected:  User’s geolocation, today’s date

	Criteria that user may specify: Radius to perform search, date for hike to occur
 
	Calculate the location range from geolocation, given the search radius. Collect hikes within this range AND with a date no earlier than today. In the case that user specified a date for the hike to occur, collect only the hikes that also match the date.
 
	Display hike info on google maps possibly using AJAX; We will need to figure out how to display all needed information in goggle maps or in a div to the side using AJAX.

—— Electronic mockups of what your team will be developing using wireframes

	wireframes included in wireframes.pdf
	
# Comments by Ming
* Very good list of data that you will be collecting
* Very good breaking down important and additional features
* What other APIs will you be using?
