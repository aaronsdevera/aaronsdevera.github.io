---
layout: post
title: Teaching a computer to sell
---

![header img](http://aaronsdevera.com/public/img/post_img/2016-04-17-teaching-a-computer-to-sell-1.jpg "header img")

*This post is related to a series of posts about Pirate Trading Platform, an automated trading platform research project. [See the project here](http://fordhamcss.me/ptp/). See the previous posts [here](http://aaronsdevera.com/2016/04/04/speedtests-for-streaming-financial-data-storage/) and [here](http://aaronsdevera.com/2016/03/16/financial-data-testing-for-automated-trading/).*


There is no shortage of trading approaches and strategies used by humans. So how do you teach a computer to sell?

When building our automated trading platform, we established a design requirement for the programming team so that the user can easily configure different trading strategies.

By default, Pirate Trading Platform operates on a strategy designed by the project's finance team. This algorithm is designed to maximize short-term profits on volatile stocks over short periods. Once the machine is holding the stock, the algorithms establishes three selling conditions:

If the current price is less then the price we bought at plus a safety threshold, sell the stock. This condition runs through the entirety of the selling run. If at any point the current market price dips below the price we bought at plus a safety threshold (say $0.03), the program will immediately sell to break even. This safety threshold is in place for an anomalous $0.01-$0.02 fee that is likely charged by [Robinhood](https://www.robinhood.com/), the retail investing service we are automating (Robinhood advertises no fees or commissions). With this condition we ensure we never lose money.

If the current price is stagnant for  number of observations, sell. X being a risk appetite supplied to the program by the user. We designed the selling strategy to operate over a short period. Our intention is to make quick, small profits on volatile stocks. If the program is holding a position in a stock for too long, then the program is wasting the time it could be using to operate on a different stock. By continuously measuring stagnancy and deviation, we ensure we are not increasing our risk.

If the current price is descending and cannot recover its peak after Y number of observations, sell. Y also being an exogenous variable for recovery risk appetite supplied to the program by the user. While the current market price continues to climb while fluctuating, the program measures how many observations where it declines. The price may peak, then decline, and continue to either decline or stabilize at a lower price. In this selling condition, the computer measures how many observations since the price peaked. After a certain number of observations, the program sells.

These are basic default conditions for selling. The user can configure them and run as-is, program on top of them, or take them out completely.

Here is a case study on Adeptus Health Inc (ADPT), a stock targeted because of it's intraday volatility. In this trading strategy, the program was acting on an additional condition atop of the three listed above. It measured the bid-ask spread, awaiting market corrections that may make the price decrease.

![ADPT case study](http://aaronsdevera.com/public/img/post_img/2016-04-17-teaching-a-computer-to-sell-2.png "ADPT case study")

The program got in at $51.43, a period when the ask price (Yellow) was below the bid price (Red). We can see that at the beginning of this chart, which covers an approximate 4-minute time period, the bid, ask, and last-traded price (Blue) are very spread. The program continued to watch the bid price, which decreased, then peaked near $51.90. By the time that the bid price dropped down to $51.75 at the end of this graph, market corrections in the three prices measures were converging the three lines around a price, limiting the spread. Because the spread contracted, the program sold its position the moment the bid price went down to $51.75.

A single instance of this program will only every net pocket change. However, the program is small enough and designed to be run as several parallel instances simultaneously. It would not be difficult to deploy many instances operating on the same or different stocks throughout intraday trading, with the number of instances a user runs depending on computer processing power.

This was a fun project with a great team. It started out as a weekend project and turn up into a large, well-thought out product that I know every participant is proud of! 

[Check out the project page here.](http://fordhamcss.me/ptp)


[Check out the code on GitHub.](https://github.com/fordham-css/ptp)


Learn more about [Fordham Computer Science Society](http://fordhamcss.me/).