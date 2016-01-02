---
layout: post
title: Visualizing cycling in 3D space
---

Biking is fun, and I often use [Strava](http://strava.com) to collect geographic and health data during my ride. After a ride, Strava provides a way to view this data on their site and mobile app; here is a ride I took [New Year's Day](https://www.strava.com/activities/460853226).

However, I also like to take pictures during my ride, which of course have embeddded EXIF data which includes GPS longitude, latitude, and elevation data taken from the phone camera's sensors.

While there is no all-in-one solution to do so, I like to fuse all this data into one visualization. 

![Image overlay atop geographic data.](../../../../public/img/post_img/2016-01-01-visualizing-cycling-3d.png "Image overlay atop geographic data.")
*Image overlay atop geographic data.*

# My workflow
1. Collect data using the Strava mobile app during the ride.
2. On Strava's website, export the GPX data from the ride.
3. Import the data into Google Maps, using a custome Google Map. Google Maps is being used to format all the data, but the final visualization will be done in Google Earth; for now Earth is the best (but woefully older) free platform for 3D GIS visualization.
4. Collect the photos from the ride, and scrape their GPS data. This can be done using a script, or even manually. Save all the GPS data into a CSV file.
5. Import the CSV of image data into the custom Google Map.
6. After uploading your photos to you cloud storage service, input their URLs into the waypoints created by inputting the CSV file in the last step.
7. When this is all done, export this custom Google Map as a KML or KMZ file, which will bundle all the data.
8. Open the KML or KMZ file in Google Earth. You can now browse the ride vector, filter data based on altitude or time, and view the waypoints where the photo is taken, with the photo conveniently overlayed atop the map baselayer.

A lot of steps. I've been toying around with [Mapbox](https://www.mapbox.com), but the Google route offers less configuration to get running. Ideally, there would be an all-in-one solution that prepares the photo data atop the map layer, but this will do for me now.

# Fun stats
<table>
  <thead>
    <tr>
      <th>Detail</th>
      <th>Data</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Distance</th>
      <th>6.4mi</th>
    </tr>
    <tr>
      <td>Elapsed Time</td>
      <td>1:43:07</td>
    </tr>
    <tr>
      <td>Moving Time</td>
      <td>1:00:36</td>
    </tr>
    <tr>
      <td>Climbed Elevation</td>
      <td>1,006ft</td>
    </tr>
    <tr>
      <td>556kJ</td>
      <td>Energy Output</td>
    </tr>
  </tbody>
</table>

### View the ride data on Strava: [link](https://www.strava.com/activities/460853226) <br>
### View the ride on Google Maps here: [link](https://www.google.com/maps/d/u/1/viewer?mid=zVfxGx3ZeYjc.kGD_ozKbdMO0) <br>
### Download the ride w/photos as KMZ and view in your own GIS vis such as Google Earth: [link](../../../../public/files/01012016/NYD\ Ridge\ Ride.kmz)