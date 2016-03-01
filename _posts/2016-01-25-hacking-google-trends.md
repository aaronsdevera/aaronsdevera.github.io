---
layout: post
title: Hacking Google Trends to predict voter turnout
---

![Aggressive data acquisition](http://aaronsdevera.com/public/img/post_img/2016-01-25-hacking-google-trends.png "Aggressive data acquisition")

Since the release of [Google Trends](https://www.google.com/trends/), the average web surfer most likely uses it for [novelties](http://www.google.com/trends/2014/) if they use it at all. But there is power in knowing what people are searching at a given time and place; Nate Silver's FiveThirtyEight recently examined a correlation between [NHL game ticket sales and the Google Searches in a given area](http://fivethirtyeight.com/datalab/how-google-searches-can-predict-hockey-ticket-sales/). I took this approach further. During an election season, local measures and politicians are the subject of many Google searches, as constituents  seek to inform themselves of the issues and candidates at hand. Could these searches predict which voters will show up in specific voting precincts? And will these predictions be more accurate than the myriad of other reporting methods and polling currently used by political campaign operatives?

The goal of this experiment is to measure whether people using Google search to find their nearest polling location had any influence on voter turnout.

Hacking Google Trends
Google Trends shows popular searches that people are asking Google web search. The Trends service provides some filtering on geolocation, and time, so you can see where people are searching for what, and when. There is no public API that allows developers to build apps using the Trends data. You can browse the Trends website to see some datapoints, but to build an app or test a hypothesis, we need to scrape the data visualized on the Trends website. With a bit of hacking and slashing, you can access the data published on Google Trends due to exposed API endpoints; no developer account or OAuth necessary. 

![Google Trends Parameters](http://aaronsdevera.com/public/img/post_img/2016-01-25-hacking-google-trends-2.png "Google Trends Parameters")
*Parameters input into a HTTP request for the Trends API. The API will show you whose is searching for what, when they did, and where they were.*

By understanding the parameters input into the Trends API, you can query search terms ("where to vote"), geolocation, time, or hone in on a specific area like a county within a state. For instance, the geo value for the San Francisco Bay Area is given the value geo=US-CA-807. This granular level of filtering is perfect to test against voter turnout, because the voter turnout is often divided into similar geographic boundaries (counties or voting precincts). 

##Scrounging State Governments for Turnout Data
It's the duty of most States' Secretaries of State to compile and list data on elections and voter turnout. Unfortunately most of this data is difficult to read, poorly organized, or displayed on websites that are awkward to navigate. With a mix of scripting, PDF parsing, and manual data entry, my research partner Joe O'Brien and I got started on a list of counted votes in elections from 2004-2014. We wanted elections that were large and statewide; these type of elections occur every 2 years, and elect congressional representatives, senators, and presidents.

We eventually leveraged a source that had the missing state data we were looking for. One important consideration that Joe determined; we decided to use the metric of **ballots received** as opposed to actual votes. The goal of this experiment is to measure dependency between people Googling "where to vote" and who showed up to vote. Whether or not the vote "counted" for any political candidate or party is thus insignificant, focusing instead on who participated in the election.

##How We Tested
After we acquired the Google trends data for each state from 2004 to 2014 of people searching "where to vote" we compared the relative behavior of people's Google's searches against the relative behavior of voter turnout reflected in the total turnout figures we collected. This was first done in R Studio, but our automated tests and compilation for publication was generated in Python. We normalized the data from both datasets by measuring the data points’ standard deviations from the mean to accelerate comparable analysis in a variety of tests.

##Preliminary Results
Our results from the New Jersey data showed preliminary signs of correlation. By the Pearson correlation test, the data is correlated to 80.97%. By testing our linear model, we saw that the R-squared, a separate indicator used for correlation and the model’s goodness of fit is 0.657. We deem this test significant due to our low standard error, which is 0.2522%. A graph of the Google Trends search data compared to the voter turnout data in the state of New Jersey demonstrates a possible dependency.

![Trends v Turnout Behavior](http://aaronsdevera.com/public/img/post_img/2016-01-25-hacking-google-trends-4.jpg "Trends v Turnout Behavior")
*Google Trends v. Voter Turnout Behavior*

These results show promise for similar correlations in other state data. If other states show a similar pattern to New Jersey’s, there could be a national correlational trend between voting-related Google search queries and voter participation in elections. Currently with only the New Jersey data, there is a possibility of that the Google searches might be influenced by the increased adoption of Google searching over time. While the behavior we have observed doesn’t show signs of this influencing our result, additional data from more states will ensure the strength of the test and the accuracy of our model. Finally, our results from New Jersey alone can be developed into a model for predicting voter turnout in future elections. Testing and analysis on additional states’ data will improve our ability to predict voter turnout in such a model. The New Jersey test subject data has strongly suggested the existence of a pattern and compels us to continue data mining, parsing, and analysis operations on all states. 

This is an ongoing project; we plan on automating the process for each state as we complete our data sets for each state. I'll be updating on [LinkedIn](http://linkedin.com/in/aaronsdevera) and [my blog](http://aaronsdevera.com) with more updates and conclusions as they come along!

*This is an excerpt of a report to appear in academic journals this Spring. Read that preliminary report [here](http://aaronsdevera.com/public/files/01252016/hacking_google_report.pdf).*