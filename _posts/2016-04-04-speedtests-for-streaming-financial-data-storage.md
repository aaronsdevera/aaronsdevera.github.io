---
layout: post
title: Speedtests for streaming financial data storage
---

*This post is related to a series of posts about Pirate Trading Platform, an automated trading platform research project. See the previous post [here](http://aaronsdevera.com/2016/03/16/financial-data-testing-for-automated-trading/).*

Choosing how to store data is often an application-specific decision.

Since financial data is high-volume at high-speeds, let's filter our primary storage need for speed only. One option is a filesystem store, which is just like how we save files in any other situation. The other option is a database store, such as [Redis](http://redis.io), which allows for large table adding and querying. Between the two, the consensus answer is likely that the databse will be faster. But by how much?

Here's a quick test of a program in our trading platform that fetches financial data for analysis by other programs.

## Filesystem storage speedtest
![file i/o](http://aaronsdevera.com/public/img/post_img/2016-04-04-speedtests-for-streaming-financial-data-storage1.png "file i/o")

## Redis data store speedtest
![file i/o](http://aaronsdevera.com/public/img/post_img/2016-04-04-speedtests-for-streaming-financial-data-storage2.png "file i/o")

The results are pretty clear. Our average time to reach out to financial data servers and download the data to the filesystem looks to be about .5 seconds. Downloading to a Redis instance takes an average time of 0.18 seconds or so.

Also note the outlying spike that happens in Filesystem "test3" between the 1st and 3rd downloads (x-axis) and Redis "test3" for the 2nd and 4th downloads (x-axis). This may be due to the financial data service we are using, and possible rate limits on how much data one can access in a given time.

It's worth mentioning a more extragenous factor that bears influence on this test is internet connection. The connection speed is about the same for both of these tests, but it is a factor in the amount of time it takes to get data and save it. But there's plenty of literature about that out [there](https://www.google.com/webhp?hl=en#hl=en&q=flash+boys).

*As always, I'll tease more updates on [my blog](http://aaronsdevera.com). My team, Pirate Trading Platform, will present our data and code April 13 at the [Fordham Undergraduate Research Symposium](http://www.fordham.edu/info/20331/undergraduate_research_symposium).*