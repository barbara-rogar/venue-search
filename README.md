# Venue search app

This app is used for collecting data from most popular business rating services and display all of reviews and ratings in one place.

## Prerequisites

Create a ```.env``` file in ```/server``` folder and put these variables with your data:

```
YELP_API_KEY
FOURSQUARE_CLIENT_ID
FOURSQUARE_CLIENT_SECRET
EXPRESS_PORT
```

## Start app

```
cd frontend
npm start
```

then in another terminal window:

```
cd server
npm run start
```

## API

### Yelp routes

Search business list

```GET /yelp/businesses/search```

For this route we must provide parameter ```query``` which is the search term, e.g. "Food".

Search business details

```GET /yelp/businesses/:businessId```

```:businessId``` is Yelp's business ID that you can get from search response.

### Foursquare routes

Search business list

```GET /fsq/businesses/search```

For this route we must provide parameter ```query``` which is the search term, e.g. "Food".

Search business details

```GET /fsq/businesses/:businessId```

```:businessId``` is Foursquare's business ID that you can get from search response.

### Mock routes

We can use these routes if we want to develop, but not waste our Foursquare or Yelp API calls.
Data from ```/server/mocks``` is used as a response.

```/mock/fsq/businesses/search```

```/mock/fsq/businesses/:businessId```

```/mock/yelp/businesses/search```

```/mock/yelp/businesses/:businessId```
