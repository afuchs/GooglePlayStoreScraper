var request 	= require('request');
var cheerio 	= require('cheerio');
var qs 			= require('querystring');

module.exports = {
	getAppData: function(bundleId, cb) {
		var baseUrl = 'https://play.google.com/store/apps/details?id=';
		request(baseUrl + bundleId, function(err, res, html) {

			if (err) {
				cb(err);
				return;
			}

			if (res.statusCode == 404) {
				cb(null, null);
				return;
			}

			var app = {
				packageId: bundleId,
				appName: null,
				developer: null,
				category: null,
				logo: null,
				price: null,
				inAppPurchases: null,
				playStoreUrl: null,
				description: null,
				screenshots: null,
				ratingValue: null,
				ratingCount: null,
				score: null,
				datePublished: null,
				fileSize: null,
				numDownloads: null,
				softwareVersion: null,
				operatingSystems: null,
				contentRating: null,
				developerLinks: null,
				developerEmail: null
			};

			try {
				var $ = cheerio.load(html);
		
				app.appName = $('.document-title div').html();
				app.developer = $('.document-subtitle.primary span').html();
				app.category = $('.document-subtitle.category span').html();
				app.logo = $('.details-info img.cover-image').attr('src');
				
				// price
				var spans = $('.info-container .buy-button-container button.price.buy span'); 
				var contents = $(spans[spans.length -1]).html();
				var idx = contents.indexOf(' Buy');
				var price = contents.substr(0, idx);

				app.price = price.length > 0 ? price : 'free';				
				//

				app.inAppPurchases = !(!$('.inapp-msg').html());
				app.playStoreUrl = baseUrl + bundleId;
				app.description = $('.id-app-orig-desc').html();
				
				app.screenshots = [];
				$('.thumbnails img').each(function(i, item) {
					app.screenshots.push($(item).attr('src'));
				});

				app.ratingCount = $('.details-section.reviews meta[itemprop=ratingCount]').attr('content');
				app.ratingValue = $('.details-section.reviews meta[itemprop=ratingValue]').attr('content');
				app.score = $('.details-section.reviews .score').html();

				// meta data
				var meta = {};
				$('.meta-info').each(function(i, item) {
					var prop = $('.title', item).html().trim().toLowerCase().replace(' ', '_');
					var val = $('.content', item).html().trim();
					
					meta[prop] = val;
				});

				app.datePublished = meta.updated;
				app.fileSize = meta.size;
				app.numDownloads = meta.installs;
				app.softwareVersion = meta.current_version;
				app.operatingSystems = meta.require_android;
				app.contentRating = meta.content_rating;
				app.developerLinks = [];

				// developer contact info
				$('.dev-link').each(function(i, item) {
					var href = $(item).attr('href');
					if (href && href.indexOf('mailto:') > -1) {
						app.developerEmail = href.substr(7);
					} else {
						var parsed = qs.parse(href);						
						app.developerLinks.push(parsed['https://www.google.com/url?q']);
					}
				});		
			} catch (ex) {
				var error = new Error('Error scraping Play Store');
				error.inner = ex;

				cb(error);
				return;
			}

			cb(err, app);
			return;
		});
	}
};