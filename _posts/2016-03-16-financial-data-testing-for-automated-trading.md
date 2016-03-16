---
layout: post
title: Financial data testing for automated trading application
---
Me and a team of 17 awesome geeks are developing an automated trading platform based on event-driven algorithms. But I'll write about that some other time.

We ran some fun tests yesterday to experiment something I have wanted to do for a while: a comparison of the accuracy and  speed of data coming in from financial information services such as [Robinhood](https://robinhood.com) or [Yahoo Finance](https://finance.yahoo.com), using a Bloomberg Terminal as a control group. Going to have to shout out here to the awesome team I'm working with, whose collective background covers finance, physics, mathematics and computer science. It also helps that Fordham's Gabelli School of Business has a bunch of Bloomberg Terminals and a trade floor :).

Here is a test on Twitter stock ($TWTR) for a time interval between 11:52am and 11:54am. The orange line denotes the Bloomberg price, the red line denotes the Robinhood price, with the blue and green lines detailing the average price over the course of the test. You can try an interactive version of the chart [here](http://aaronsdevera.com/public/files/03162016/pubchart.html).

![Data testing](http://aaronsdevera.com/public/img/post_img/2016-03-16-financial-data-testing-for-automated-trading.png "Data testing")

Obviously there are discrepencies, but it's interesting how there are also close similarities. The Robinhood data often behaves with a slight delay, but the averages begin to converge on a similar trend; a possible result of increased observations [creating more signal in our data](https://en.wikipedia.org/wiki/Law_of_large_numbers).

As always, I'll tease more updates on [my blog](http://aaronsdevera.com). My team, Pirate Trading Platform, will present our data and code April 13 at the [Fordham Undergraduate Research Symposium](http://www.fordham.edu/info/20331/undergraduate_research_symposium).