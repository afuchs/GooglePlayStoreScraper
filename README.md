# GooglePlayStoreScraper

Tool for accessing Google Play Store data programmatically.

## Usage

    var googlePlayStore = require('./index.js');

    googlePlayStore.getAppData('bundle.id', function(err, app) {
        console.log(app);
    });