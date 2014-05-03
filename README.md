# GooglePlayStoreScraper

Tool for accessing Google Play Store data programmatically.

## Usage

    var googlePlayStore = require('./index.js');

    googlePlayStore.getAppData('bundle.id', function(err, app) {
        console.log(app);
    });

## Sample Response

    {
        "packageId": "com.aviary.android.feather",
        "appName": "Photo Editor by Aviary",
        "developer": "Aviary, Inc.",
        "category": "Photography",
        "logo": "https://lh5.ggpht.com/lpDaPxwrxAJ35t7Aay6uhW1ZcYgd0XKfUYW_UAfdrG3opev3dNCBDSqxv1B-UJoTVGSY=w300",
        "price": "free",
        "inAppPurchases": true,
        "playStoreUrl": "https://play.google.com/store/apps/details?id=com.aviary.android.feather",
        "description": "&quot;A one-stop shop for any photo editing need.&quot; -Mashable<p>&quot;A very comprehensive photo editor and pretty much everything you could ever want to do on your phone.&quot; -LifeHacker</p><p>&quot;A solid, simple camera editing app.&quot; -USA Today</p><p>*********************</p><p>Aviary is a powerful photo editor which we created because we wanted a quick and easy way to edit our photos on the go with no fuss. </p><p>We’ve included all the tools you need, in a super intuitive interface so you can get right to editing.</p><p>Features:</p><p>+ One-tap auto enhance <br>+ Gorgeous photo effects and frames<br>+ Fun stickers<br>+ Color balance<br>+ Crop, rotate, and straighten your photo<br>+ Adjust brightness, contrast, color temperature, and saturation<br>+ Sharpen and blur<br>+ Color temperature (&quot;Warmth&quot;)<br>+ Color Splash<br>+ Focus (Tilt Shift)<br>+ Draw and add text<br>+ Create your own memes<br>+ Cosmetic tools: fix redeye, remove blemishes and whiten teeth</p><p>...and we’re adding new tools all the time :) Got a feature request?? It may already be in the works! Check out the list of upcoming features or submit your own idea at <a href=\"https://www.google.com/url?q=http://aviary.uservoice.com&amp;sa=D&amp;usg=AFQjCNHdZopujv8m_DYhni3O9vamJvz5NQ\" target=\"_blank\">http://aviary.uservoice.com</a></p><p>&gt;&gt; Love Aviary? Help us beta test new releases! You&#39;ll get exclusive access to new versions of Aviary before they become available to the public. Join our Google+ community! Learn more at <a href=\"https://www.google.com/url?q=http://blog.aviary.com/posts/2013/9/26/aviary-for-android-beta-test&amp;sa=D&amp;usg=AFQjCNFtvNN7Se_m-IZPaW_zfJynYKD1iQ\" target=\"_blank\">http://blog.aviary.com/posts/2013/9/26/aviary-for-android-beta-test</a> </p><p>Bonus:</p><p>+ Purchasable effect packs! (We provide 12 effects for free, but if you&#39;d like to add on more you can.)<br>+ High resolution output<br>+ Drag and drop to customize the toolset<br>+ Scroll through your recent photos in a cover photo-like view from the home screen<br>+ Long press on photos on the homescreen to see options (including deleting the photo from your device)</p><p>&gt;&gt; Developers: Want to add this editor to your own app? You can choose the tools you need, change the colors of the UI, and more. Download our SDK for free to embed Aviary directly inside your app, or create your own customized plugin - learn more at aviary.com.</p><p>If you have any questions, please email <a href=\"mailto:android@aviary.com\">android@aviary.com</a>.</p><p>------</p><p>Permissions: <br>android.permission.INTERNET (for error reporting)<br>android.permission.WRITE_EXTERNAL_STORAGE (for saving your edited photos)<br>android.permission.VIBRATE (for some fun tactile feedback which we bet will make you smile!)<br>android.permission.NFC (used to share photos via NFC from the main screen)</p>",
        "ratingValue": "4.485920429229736",
        "ratingCount": "784536",
        "score": "4.5",
        "datePublished": "April 21, 2014",
        "fileSize": "11M",
        "numDownloads": "50,000,000 - 100,000,000",
        "softwareVersion": "3.3.4",
        "contentRating": "Everyone",
        "developerLinks": [
            "http://www.aviary.com/android"
        ],
        "developerEmail": "support@aviary.com"
    }