# Server

1. To run server, install virtualenv first https://virtualenv.pypa.io/en/latest/ and create a new virtual environment to load all necessary python packages

2. Go to server folder and install all necessary packages using command "pip install -r requirements.txt"

3. Set environment variables FLASK_ENV=dev and FLASK_APP=webserver.py

4. Create a db for storing all the info using commands  i) flask db init ii) flask db migrate iii) flask db upgrade

5. Run the server using python webserver.py


# Client

1. To run client, go to client folder and do npm install

2. Now run "npm start" and this should start the client
