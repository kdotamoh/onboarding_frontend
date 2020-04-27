## REACT FRONTEND

1, You’ll need to install node.js on the server.  
It comes with npm, which you’ll use for running build commands:
https://create-react-app.dev/docs/deployment/.

The simplest solution for deploying a react frontend is netlify.com.

Should you choose to install on a private server, these resources should be of help:
https://www.freecodecamp.org/news/i-built-this-now-what-how-to-deploy-a-react-app-on-a-digitalocean-droplet-662de0fe3f48/
https://www.digitalocean.com/community/questions/setting-up-internal-hosting-server-for-nodejs-react-applications

### .env file

Rename .env.sample to .env. This file contains the base URL for all endpoints and should point to the server. The current example points to a heroku test server.
