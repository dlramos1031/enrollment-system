# How to set up project on your PC


Before we start, open the repository in VS Code.

### Setting up Environment

1. At the root of your project (sa pinaka gawas sa project), create a file called `.env`
2. Paste these following inside the `.env` file:
  ```
  DB_HOST=localhost
  DB_USER=root
  DB_PASSWORD=
  DB_NAME=enrollment_db
  SESSION_SECRET=hello
  ```
3. Save and exit.

### XAMPP Server

1. Open XAMPP control panel and create a new database called `enrollment_db`
2. At the top, go to Import, then choose the sql file in the ./backend folder of the project.
3. Refresh to make sure that the database was imported successfully.

### Express Server

1. Go to the terminal tab at the top of VS Code, then choose New Terminal.
2. To run the Express server type this command:
	``` 
	node --watch backend/server.js 
	```
3. The terminal should say: `Server is running on http://localhost:5000`

### React + Vite

1. Open another terminal by clicking the + sign at the upper right of the express server terminal.
2. Type this command to install project dependencies:
	``` 
	npm install 
	```
3. Then type this command to run the react server:
	```
	npm run dev
	```

### Other things

If nigana tanan, naa ra sa database ang mga user accounts. Mostly tanan kay 1 ang password. Try username: `admin_staff`, password: `1`

If something goes wrong, just mention it in the gc hehe.