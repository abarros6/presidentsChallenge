# Presidents Challenge

##TO DO

###PWA
- need pwa related files like manifest.json and a service worker

###pages
- about page should have info on the issue we are aiming to solve
- queue page needs to have a visible queue ticker and a rough time estimate of when to go to the hospital, as well as the name of the hospital you are attending
  - maybe need some sort of location tracking question to facilitate this
    - this may be easier to implement with pwa related features 
- home page clean up and add button to immediatly enter the queue and redirect to   queue page

###backend 
- decide on backend tech (most likely going to use express)
- implement dummy db to facilitate backend api calls in order to change queue information 
- potentially use login info but more likely going to ask for this info when the user tries to enter the queue. Health card number, whats wrong, name, DOB, location check, then capcha to check for robot.