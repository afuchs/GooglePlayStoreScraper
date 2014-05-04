var googlePlayStore = require(__dirname + '/index.js');

googlePlayStore.getAppData('com.aviary.android.feather', function(err, app) {
	console.log(JSON.stringify(app))
});