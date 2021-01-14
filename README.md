## Prerequisite:

- node/npm
- git
- Mongo DB

## Preferred IDE:

Visual Studio Code.

## Steps to run:

1) clone it to your project repo directory

Once you are added to team, you will be able to see "ecokrypt-dpinters-nodeserver" repository

2) cd to ecokrypt-dpinters-nodeserver/

3) Execute below commands from mongo shell  
   
   mongo> use ecokrypt-dpinterns
   
   mongo>db.createCollection('healthchecks');
   
   mongo>db.healthchecks.insert({"message":"healthcheck.ok.db"});

4) Install required packages

   ecokrypt-dpinters-nodeserver$ npm install

5) To run locally  

   ecokrypt-dpinters-nodeserver$ node server.js

6) Node server will be running on http://localhost:3000

   healthcheck server api http://localhost:3000/api/healthcheck
