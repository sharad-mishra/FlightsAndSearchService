# Welcome to Flights Service
# Project Setup
- clone the project on your local
- Execute •npm instal V on the same path as of your root directory of the downloaded project
- Create a . env' file in the root directory and add the following environment variable
    - `PORT 23066`
- Inside the •src/config• folder create a new file `config.json` and then add the following piece of json.

```
{
    "development": {
    "username": "root",
    "password": "YOUR_DB_PASSWORD",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
- Once you've added your db config as listed above , go to the src folder and execute `npx sequelize db:create`

## DB Design
  -Airline Table
  -Flight
  -Airport
  -City