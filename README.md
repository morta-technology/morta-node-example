# Morta Notifications - Node Example

This repo showcases a very simple use of Morta webhooks. Events are posted to the /notifications endpoint and simply printed to the console. The following steps should be followed to reproduce.

## Local Server Setup

1. First create a directory for your new application and navigate into it
```
mkdir my-morta-app
cd my-morta-app
```

2. Use the npm init command to create a package.json file for your application. This command prompts you for a number of things, including the name and version of your application and the name of the initial entry point file (by default this is index.js). For now, just accept the defaults.

```
npm init
```

3. Now install Express in the ```my-morta-app``` directory

```
npm install express
```

4. Create an ```index.js``` file and write the following:

```
const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.post('/notifications', (req) => {
    console.log(req.body)
})

app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
});
```

5. You can start the server by calling node with the script in your command prompt:

```
node index.js
```

## Localhost Forwarding

1. We need to forward requests to localhost using a service called ```ngrok```. Go to [ngrok](https://ngrok.com/) and create an account.
2. Follow the steps on their site to generate an endpoint which we will send our notifications to (e.g. ```https://40cf80cfecec.ngrok.io```). Make sure that you are forwarding the requests to the right port (```8000``` as per the example above.)

## Create the Webhook on Morta

1. Go to the Morta staging environment (```https://morta-staging.firebaseapp.com/```) and navigate towards a project
2. Go to ```settings``` and then ```Developers```
3. Click on ```Add notification```
4. Select the events you wish to handle and then enter the ngrok endpoint (e.g. ```https://40cf80cfecec.ngrok.io/notifications```
5. You will now be receiving these events on your local server
6. Handle as you wish and start creating all kinds of things :)
