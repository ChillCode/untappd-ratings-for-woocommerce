# Untappd Ratings for WooCommerce

### Prerequisites

* [WordPress](https://wordpress.org)
* [WooCommerce](https://github.com/woocommerce/woocommerce)
* [Untappd API Key](https://untappd.com/api/dashboard)

## Show Untappd Ratings on product page instead of WooCommerce one's

![Product Beer search](https://github.com/ChillCode/untappd-ratings-for-woocommerce/blob/development/assets/screenshot-4.png)

![Product ratings](https://github.com/ChillCode/untappd-ratings-for-woocommerce/blob/development/assets/screenshot-7.png)

## Add a Google Map Untappd Feed to your site

To use Google maps it's required to enbale Google Javascript Maps API

![Untappd Map](https://github.com/ChillCode/untappd-ratings-for-woocommerce/blob/development/assets/screenshot-8.png)

Easy way to add a map using a shortcode:

[urwc_untappd_map api_key="GOOGLE_API_KEY" brewery_id="73836" center_map="yes" height="500" max_checkins="300" zoom="4"]

| Attribute | Description | Default |
| ------------- | ------------- | ------------- |
| api_key | Google Javascript Maps API key. | "" |
| brewery_id | Brewery ID to show on map. | "0" |
| class | Map div class. | "" |
| center_map | Center map to home coordinates. | "yes" |
| container_class | Map container class. | "" |
| container_height | Map container height. | "inherit" |
| container_width | Map container width. | "inherit" |
| container_style | Map container style. | "" |
| height | Map height. | "500px" |
| id | Map div ID. | "" |
| lat_lng | Untappd at home default coordinates. | "34.2346598,-77.9482096" |
| max_checkins | Checkins to show on the map. Max 300. | "25" |
| style | Map div style. | "" |
| type | Show an "interactive" or "static" map. To use a "static" map it's required to enable Google Staticmap API. | "interactive" |
| use_icon | Use Untappd icon to mark checkins on the map | "true" |
| use_url_icon | Use your own icon. | "" |
| width | Map width. | "640px" |
| zoom | Map zoom. | "4" |

![Brewery Search](https://github.com/ChillCode/untappd-ratings-for-woocommerce/blob/development/assets/screenshot-5.png)

## Add Ratings to Structured Data

![Structured Data](https://github.com/ChillCode/untappd-ratings-for-woocommerce/blob/development/assets/screenshot-6.png)

### Configuration

To configure the plugin just go to WooCommerce->Settings Untappd Tab

### **Untappd API section**:

![Untappd API](https://github.com/ChillCode/untappd-ratings-for-woocommerce/blob/development/assets/screenshot-1.png)

* **Untappd API Client ID**: Your Client ID obtained from **Untappd** API Dashboard.
* **Untappd API Client Secret**: Your Client Secret obtained from **Untappd** API Dashboard.
* **API Url**: Endpoint for the Untappd API. Default is https://api.untappd.com/v4/.
* **APP Name**: The name of your application as registered in the **Untappd** API access request.
* **Cache time**: This plugin utilizes temporarily cached data. Enter an integer representing the number of hours the cached data will last. Default is 3 hours.
* **Show "Powered by Untappd" logo**: Enable to display the Untappd logo in the footer of Storefront-based themes. Default is disabled.

![Untappd rattings](https://github.com/ChillCode/untappd-ratings-for-woocommerce/blob/development/assets/screenshot-2.png)

### **Untappd ratings configuration**:
* **Use Untappd Ratings**: Override **WooCommerce** ratings system with **Untappd** ratings. Default is disabled.
* **Sort using Untappd Ratings**: Enable sorting on loop-page by **Untappd** ratings. To enable sorting by ratings, URWC will add post meta data to all products. Default is disabled.
* **Display Ratings Text**: Show text-based ratings alongside stars. Default is disabled.
* **Display Total Ratings**: Show total ratings next to stars. Default is disabled.
* **Structured Data**: Include **Untappd** ratings and check-in data in product structured data. Default is disabled.

![Untappd MAP](https://github.com/ChillCode/untappd-ratings-for-woocommerce/blob/development/assets/screenshot-3.png)

###  **Untappd map**:
* **Cache Status**:  If cache fails, this option is disabled to prevent excessive connections to the **Untappd** API. Default is enabled.
* **Add Product Link**: Show a link to the Untappd review for products that have been reviewed on Untappd. Default is enabled.
* **Show ratings/reviews**: Only show ratings and reviews to WP editors on **Google Maps** InfoWindows. Default is disabled.
* **Apply disallowed and moderation words checks to Untappd data**: Checkins with WP disallowed words will not be shown and checkins with moderated words will only be shown to WP editors. Default disabled.
* **Show disclaimer on infoWindows marker**: Display a disclaimer linked to the Untappd reporting page. Default is disabled.
* **Untappd brewery search**: Use the selector to find a term and retrieve the brewery ID needed to add a shortcode.
