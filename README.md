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
        "screenshots": [
            "https://lh5.ggpht.com/VAKlFwDAIwNnSQq3-Lpq5eyuvAR2-RWE39fbLpAnVtEkfLQglDffhRq3o6oXNV7huyU=h310",
            "https://lh3.ggpht.com/AcFHAUHmQrh5oaKTbCIRhEH1ulPSx4EkxeaW5gnAjwC6DxiAVRF5wI9zlyr7orU5mQ=h310",
            "https://lh6.ggpht.com/um9Z3VgjUnQ8_TJ0ChLC07f74zJ66NH-EozyXyG5UW3d8RqkN-6tGLx22L62-azlCQ=h310",
            "https://lh5.ggpht.com/01u5Tp_XO1I6S6AXiw_sTlVq1kJK55FhZ6mH5vF4K26721gM6pThdjPf781bzGSjEg=h310",
            "https://lh4.ggpht.com/yc5fm4FVg8vtxT05HBfc_i5x1hBMXgHIhSjHPMeunxfKrglBW-sNs9AcZM8aZhE7oHAW=h310",
            "https://lh5.ggpht.com/mncekbjWMrXpqETwbajnVPYAAgMpyuURi2F9akUq3OV3BCqndA5syOZsPvOH7GTQHzA=h310",
            "https://lh3.ggpht.com/nPiVcWf4jg0kjwyOVx4EBVaKAb81C06OTOsHJxzPit6R-qTUGAfGTFPE-i1qrBPxOSY=h310",
            "https://lh4.ggpht.com/G7WEf7mxHpmA_GVkTrB3d7_2nrmBfEGvf6Eku4cOVSQ-WLQ5QaqvBTmOviNgbLUCGLo=h310",
            "https://lh4.ggpht.com/xNLNy3-pDgPhmg-Ft9nRVfleKG8DPTmqVonBHFLAVPwGj0JL_L4fiqgeAPn30GLPp8lS=h310",
            "https://lh3.ggpht.com/MPMEZwBES8Qeyii_-2m4uB0YdTefvG_-a-MFh4qsHMsS-FwqjKM3epR_Sk6AIFMOIPg=h310",
            "https://lh5.ggpht.com/uIvoNj4DILyFY_RCFbi46ITnbijgGjD7dke4Gw741CNqh4WQTWkTzBv2cp0D_mGxZFVF=h310",
            "https://lh4.ggpht.com/Qo8O9gYHYFDaBI8xZeREJEiGxwMVK3Bbb-KeDy0NhgJLVrSxumcVpkr20fHFR-v7bA=h310",
            "https://lh6.ggpht.com/RZtIpBttD9Hw1Nlllv0Bgp9318BpKRF9ETHuBICtfcVN1BuHvo0Zk7WvzmUph_9y1_b1=h310",
            "https://lh5.ggpht.com/GmSrUFNs-zTh8ri1Bsq6APfCLs3YDV61ZNGyqwyG0nk3seYNe1OcTQvB3aFTm0NZRfs=h310",
            "https://lh6.ggpht.com/ejk-rHl-KB7aD-HO2BqAAsmJT30_aSewm0DLr_JgvGzoMmf9oX6XxxvUSAsNtMaTiy9s=h310",
            "https://lh5.ggpht.com/SdxtD06ApL3VPf5UId7ele3rDid_ycgXBI5C2Fm3zLThvW0dboU34UCE9JoYg7ESvB0=h310",
            "https://lh4.ggpht.com/7Hu0ImqzzlWd7f9g7xfcc-E32Lwmu5dCbOr5AkSdTwEBo-7cOP7ExwO5I2mxYuHiBM8=h310",
            "https://lh4.ggpht.com/oYL9OZmIGAGFe1f38r_7PsipmuwHv69Pm58my5ClkyrCEWul-9i38B-hO1PwmaYMiM4=h310"
        ],
        "ratingValue": "4.484959125518799",
        "ratingCount": "788320",
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