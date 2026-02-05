# Server

1. To run server, install virtualenv first https://virtualenv.pypa.io/en/latest/ and create a new virtual environment to load all necessary python packages

2. Go to server folder and install all necessary packages using command `pip install -r requirements.txt`

3. Set up environment variables:
   - Copy `.env.example` to `.env`: `cp .env.example .env`
   - Edit `.env` and add your credentials:
     - `FLASK_ENV=dev`
     - `FLASK_APP=webserver.py`
     - `google_client_id` - Get from [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
     - `google_client_secret` - Get from Google Cloud Console

   **To create Google OAuth credentials:**
   1. Go to Google Cloud Console > APIs & Services > Credentials
   2. Click "Create Credentials" > "OAuth client ID"
   3. Select "Web application"
   4. Add authorized redirect URIs:
      - `http://localhost:5000/rp/google_callback` (for development)
   5. Copy the Client ID and Client Secret to your `.env` file

4. Create a db for storing all the info using commands:
   ```bash
   flask db init
   flask db migrate
   flask db upgrade
   ```

5. Run the server using `python webserver.py`


# Client

1. To run client, go to client folder and do `npm install`

2. Now run `npm start` and this should start the client
