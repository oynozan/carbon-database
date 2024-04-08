# Carbon Database

The Carbon Database has a single goal: letting people learn about the carbon emissions of cars. In order to do that, we utilize from knowledge of other people.

Users connect their Metamask wallet on the Hedera network and gain access to fill out a carbon emission form to add an entry to the public database.

People who want to only grab information and don't want to contribute don't have to log in.

## Getting Started

First, clone the [Github repository](https://github.com/oynozan/carbon-database).
Then rename the .env.template file to .env.local and fill the necessary fields.

.env file contains 2 necessary fields: URL and Mongo URI.
URL is _localhost:3000_ as default. For Mongo URI, developers can use Mongo Atlas or local Mongo, it depends on their choice.

Then you can install dependencies via npm: ```npm install```

Lastly, start the application via the command ```npm run dev```.
