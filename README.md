# Moviefy
This website will create a movie soundtrack album cover using your most listened tracks on Spotify.

# Visuals
![Screenshot](https://github.com/nurcinozer/moviefy/blob/main/screenshot.jpeg)

# Installation
```
git clone https://github.com/nurcinozer/moviefy.git .
```

```
cd client
npm install
cd ..
npm install
```

# Enviroment variables

Create a file named ".env" in the root directory and fill its contents as follows.

```
CLIENT_ID=SPOTIFY CLIENT ID
CLIENT_SECRET=SPOTIFY CLIENT SECRET
REDIRECT_URI=http://localhost:5000/callback // for local
FRONTEND_URI=http://localhost:3000 // for local
```
# Run the app

```
npm start
```
