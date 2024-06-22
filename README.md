# How to set up project on your PC


Before we start, open the repository in VS Code.
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

If something goes wrong, just mention it in the gc hehe.