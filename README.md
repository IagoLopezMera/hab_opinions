# Opinion Portal
This is an API for an opinion portal. Hope you enjoy it!

## How to run the code

Change directory to API folder
`cd api`

Then run the node server
`nodemon index.js`

## Example env file 
* MYSQL_HOST = Type here hostname
* MYSQL_USER = Type here db user
* MYSQL_PASSWORD = Type here db password
* MYSQL_DATABASE = Type here db name
* SECRET = Type JWT secret here



# Endpoints                                         

https://en.wikipedia.org/wiki/Representational_state_transfer#Architectural_constraints

## Topic:
* /api/topics GET (get all topics)
* /api/topics/id GET (get a specific topic)
* /api/topics/id PUT (update a specific topic)
* /api/topics POST (create a new topic)
 
## Opinion:
* /api/opinions GET (get all opinions)
* /api/opinions POST (creates a new opinion)
* /api/opinions/id GET (get an opinion)
* /api/opinions/id PATCH (partially updates an opinion)
 
## Rating:
* /api/opinions/idOpinion/ratings GET (get all ratings)
* /api/opinions/idOpinion/ratings POST (creates new ratings)
* /api/opinions/idOpinion/rating/idRating GET (get a rating)
* /api/opinions/idOpinion/rating/idRating PATCH (partially updates a rating)

## Users:
* /api/users GET (get all users)
* /api/users/id GET (get a specific user)
* /api/users/id PATCH (update a specific user)
* /api/users POST (create a new user)
