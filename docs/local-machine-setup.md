To set up repo locally run next command:
- npm install
It will pull all listed in package.json packages.

Next run 'npm run test'. Build will succeed and tests will pass, you see code coverage reported in the console.

Two modes have been implemented: 'DEV' - development mode and 'START' - application run mode.
For DEV mode request logging and restart on save are implemented additionally. To kick it run 'nodemon run dev'.
You will see 'App running on port: 3000'. If you send request to the root '/' in console you will see the following log:
'GET / 200 2.493 ms - 52'
To start app run 'npm start' - once done you will see 'App running on port: 3000'

More info is in guidelines-from-template.md