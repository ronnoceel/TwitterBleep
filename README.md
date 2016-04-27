# TwitterBleep

Twitter Bleep is a single-page webapp that shows the distribution of explicit words in tweets across the country, by state. It does this by communicating with the Twitter steaming api, while using node.js as a backend.

# To Run

## Keys
- Obtain AOuth keys from Twitter, to allow access to their api.
- Place your keys into the twitterConfig.json file located in the libs directory

## Execution Command
- Open a terminal window in the rood directory of Twitter Bleep and execute the command: 
```
DEBUG=myapp:* npm start
```

Then open localhost:3000 on your web browser to view the page.
