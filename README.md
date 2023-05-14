# Zepz-client activity assessment steps to run localy

# Prerequisite (Have the following installed locally before running)
Node
npm
Typescript
Mongo

# run the following on your cli
`npm install` - install all of the necessary packages 
`npm start` - traspiles the TS into dist directory and runs the js files in there. 

**Note: The server will start on port 4008**

# APIs
`http://localhost:4008/activity/list` (GET - list all of the activities.)
`http://localhost:4008/activity/list` (GET - list all of the activities.)
`http://localhost:4008/activity` (POST - create a new list of random activities.)
`http://localhost:4008/activity?type=education` (GET - Get list of activities by type.)
`http://localhost:4008/activity` ( Delete - Delete all of the activities in the DB.)
