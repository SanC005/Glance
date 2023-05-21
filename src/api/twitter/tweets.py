import tweepy

# Set up Twitter API credentials
consumer_key = "k7ioNl1CHrIlrwNQ0oJIK6gIv"
consumer_secret = "tzsie99cMkFZC6T8amFAelI2IfXRVmcgA97UFJXGP9DRSa21bT"
access_token = "1354083500547330049-WPzve81oQQIx8alMTQfXCvkWnoOiz4"
access_token_secret = "Pzgg7cJOKDtNzBQOoolYX5yVaj3GUc6kjpnSoLq2xEaOC"

# Authenticate with Twitter
auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)

# Create API object
api = tweepy.API(auth)

# Get top trending tweets
trends = api.get_trends(id=1)  # Use the appropriate WOEID for your location

# Parse and display the top trends
for trend in trends[0]['trends']:
    print(trend['name'])

