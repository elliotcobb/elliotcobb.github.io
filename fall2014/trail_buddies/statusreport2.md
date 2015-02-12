Status report 2

Elliot:
	This week I experimented with some bootsrap front end frameworks on the homepage of the site. 
	It looks pretty good if I do say so myself with that fancy nav bar and dropdowns.
	Good to know we can formulate nice-looking designs on the fly.

	Next week, we should start integrating the functionality/styles from the original site into the
	experimental bootstrap version. 

Caroline:
	I added some javascript functions to the addhtml page: basically it checks that none of the fields are empty when submitting the add hike form. If all the fields are filled out, it displays a 
	confirmation message. I also reformatted some more of our html and updated one of the bootstrap
	versions of our files.

	Next week, we should add to that javascript function that I began writing so it stores the 
	information from the fields in a mongo database.

Sam: 
	I realized that before we have a Heroku database set up, I couldn't do what I was hoping to do (put markers on our map). Once we have the data, we will do some json.parse and then have markers with infowindows that tell you the information about the hike.
	So, what I ended up doing was just adding an infowindow for our current marker
	and then looked at the bootstrap file and tried to give the names of the things
	we are hoping to put on the dropdown menu.
	There are two challenges we are going to face. First, we weren't planning on
	having a list of our hikes, but I can't find a way to put a link (to our joinHike 
	page) into the title of our googleMaps marker. Second, with regards to the same
	situation, filtering is going to be tricky, as it will need an extra menu (because
	filtering for only radius, for example, wouldn't change what the map looks like).
	
	Next week, we should have a database up and running, and I think a lot of my 
	javascript code can get written.


Taylor:
     I created a joinHike.css file which has the new formatting that was created by Lila in the addHike file.
     This file is linked to by the index.html page.
     I combined all of the files (the changes that Elliot made within his bootstrap folder and the changes
     that lila made within the main directory) so that all of the changes are together with a mix of both.
     So now that Elliot's changes have been copied from the bootstrap folder into the default directory,
     the newest version can be seen by just looking at the default index.html file.

     Next Week:Plan to modify the js	file for joining a hike	so that	the proper messages are	displayed
               rather than just	 the ones that are displayed for   adding a hike. Start doing the database material
	       so that we can actually store and access data!!