---
layout: post
title: whoip and automating ip identification and geolocation
---

My friend [Kenny](https://twitter.com/kennydurk_in) showed me [Peerblock](http://peerblock.com), which blocks certain IPs from seeding data while torrenting. By supplying Peerblock with a list of IP addresses, it will make sure to avoid any transmissions from those addresses; you can read more about this process [here](http://www.peerblock.com/userguide/how_to_use/htu-appropriatelists).

I have a list of malicious IPs. I thought it would be cool to track where these IP addresses are geolocated, as well as theire WHOIS registration. Additionally, I wanted to use some cool-sounding python packages I had head of, like [folium](https://github.com/python-visualization/folium). So I built [whoip](https://github.com/aaronsdevera/whoip), a program that automates IP identification and geolocation using reverse DNS and visualization with folium.

![whoip process with malicious IP sample list.](http://aaronsdevera.com/public/img/post_img/2015-12-26-whoip-automated-ip-identification-and-geolocation.png "whoip process with malicious IP sample list")
*whoip process with malicious IP sample list.*

whoip also allows you to visualize and experiences the challenges associated with attribution, a topic I think about a lot. Seeing the hops and locations necessary in providing a casual browser access to a webapge can help reinforce how nebulous networking can become. While this tool may try its best to display the associated owner of the IP address, there's no gaurantee it won't be outdated, nullified, or [disguised as an identity other than their effective owner](http://www.jareds-blog.com/known-nsa-shell-companies/).

## Functions
whoip processes IPs from one of two sources: a list file input from the command line, or by selecting a target domain to traceroute.

```
whoip.py -f <LISTFILE>
```
<br>
```
whoip.py -t <TARGET DOMAIN>
```
<br>
```
-f, --list-file     :     Upload a list of IPs for processing
```
<br>
```
-t, --traceroute    :     Perform traceroute on target IP
```
<br>
```
-h, --help          :     Assistance
```

The **list file feature** parses through the list file for IPs with a regex. The **traceroute feature** performs a pretty standard traceroute, targeting the hops along the way to your target domain. This mode was interesting; targeting the google.com domain, I revealed hops originated from datacenters in Wichita, Kansas that were registered to Comcast Business Solutions, despite my close proximity to Mountain View.

## Free and open-source
I welcome anyone to [visit the source code on GitHub and contribute](https://github.com/aaronsdevera/whoip). This was a hack-and-slash couple hours worth of programming, and a manageble start to improve upon!

### To-do:<br>
- [viz] Better starting zoomed view of map to show all waypoints<br>
- [viz] Toggle-able lines between traceroute hops on map<br>
- [viz] Better styling for IP info on map<br>
- [code] Improve exception handling for IP parsing<br>
- [code] Improve exception handling in geolocation function<br>
- [code] More usage options<br>
- [code] Clean and caption<br>