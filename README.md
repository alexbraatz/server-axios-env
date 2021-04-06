# Server Side Axios

`npm install`

This is the starting repo to accompany 06-02b_server-axios-env.md

This is a 3/4 stack app (no DB), although the pool file is in the repo.
`npm run client` and `npm run server`

The static server is setup, but there are no routes made. The client is just basic text, one App component only.

This is using just React-Redux as written. 

This lecture's goal is to make a request from the cleint to the local server, have that server then make an 3rd party API request. Then pass it back to the client and show it on the DOM.

server side axios
---
    - npm install axios
    - require axios in server scripts when appropraite
    - use server to calll out to 3rd party API
    - include API key in the url

router scripts: 

dotenv
---

- ```npm install dotenv```
- create a '.env' file in the root folder
- place any environment variables in there as needed
- note: .env files are note commited so as to so as to protect them from being pulbicly
committed to a repo
- require dot env config in server files as needed
- use the process.env.NAME as needed in script