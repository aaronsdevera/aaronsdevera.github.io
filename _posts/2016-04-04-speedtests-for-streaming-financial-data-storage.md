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