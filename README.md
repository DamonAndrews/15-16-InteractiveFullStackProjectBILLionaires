# Project2
Project 2 for Full Stack Web Dev Course

Project Title:
BILLionaires

Project Description:
Billing system for contractors. 

USER STORY/ACCEPTANCE CRITERIA::
As the owner of a new company, I want an easy way to bill my clients.
WHEN I log into the app,
THEN I want to be presented with options to Create a new client, Update an existing client and Generate invoice for existing clients.
WHEN I select Create new client, THEN I am prompted to enter client profile info to be stored in the database.
WHEN I select Update existing client, then I am presented with fields to update for the client.
WHEN I select Generate invioce, THEN I am presented with both pre-populated and input forms to generate a complete ticket.

ERD, Route Table, & Wireframe:

HTML	"/"	    Method: GET	        Body: NO	URL (a, typing)	HTML	         (GET all customers)
	    "/:id"	Method: GET	        Body: NO	URL (a, typing)	HTML	         (GET a customer by ID)
        "/api/customer"     Method: POST        Body: YES   URL (a, typing)	HTML             (POST/CREATE a new customer)
	    "/api/customers/:id"	Method: PUT	        Body: YES	URL (a, typing)	HTML	         (PUT/UPDATE a customer by ID)
	    "/api/profile"	    Method: PUT	        Body: YES	URL (a, typing)	HTML	         (PUT/UPDATE developer)
        "/api/:company_id/rate_of_pay"   Body: YES   URL (a, typing)	HTML             (PUT/UPDATE rate of pay for company)
//redirect user after success interaction */


Kanban Board:



Rough Breakdown of Tasks:
Stephen Heinen - Implement a new technology, once new tech is determined we will figure out appropriate next step
    (Canvas to PDF (new npm package), other PDF converter app)
Devon- View, Handlebars
Corey- Schema, Seeds
Damon - Routes

Add'l: Contract Rate,
Auth Review Unit
