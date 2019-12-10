---
title: Making stock ticker app in dash
description: Here I cover how to make a simple stock ticker app in dash
date: 2019-12-09
---

Also posted on medium <a href="https://medium.com/@davidli012345/how-to-create-a-stock-tracker-app-part-1-584ea38036bd"> Medium </a>

Plotly Dash has been out for years with many easy to use examples available at the dash website. I feel the existing stock ticker app is inadequately documented, using a legacy yahoo finance and a legacy version of the dash (pre 1.0.0).
In this tutorial we will cover how to make the UI components for a basic stock app using dash.

<script src="https://gist.github.com/FriendlyUser/1737cc05fb09bdb628c0e8ae37c354c2.js"></script>

Just having a date picker is not enough to have a stock picking app, at bare minimum we need interval to retrieve ticker data and the ticker id.

<script src="https://gist.github.com/FriendlyUser/7ddfe60123cc4c699759240f20b1221d.js"></script>

All of these dash components have excellent documentation available on the dash docs website (which is a dash app fyi). For the date picker it only makes sense to allow dates up to today (cannot render future stock data, if we could I would be rich). Additionally, the dropdown values are set to map to the yfinance input values (more coming in part 2).

The beauty of dash is that it makes it easy to make data science applications and right now the application is a little plain, lets display some text when the user updates the various input fields.

For the most part the added text callbacks is pretty self-explanation, when the text input field is updated, output the new text.
The date picker callback code is a bit more involved, checking for truthy values for start date and end date respectively.

Importing the yfinance library makes it easy to grab data from yahoo finance, however the format of the dates is datetime64 instead of datetime which will cause the xaxis malformed (think exponentials).
The full code is available on github.

<script src="https://gist.github.com/FriendlyUser/17d08a29582dca855fa99c82f01d7049.js"></script>

Combining that code with the existing content and adding a ticker-graph html div results in the following graph.

This is a basic example of how plotly can be used in conjuction with external data sources to easier display data.
In the part we will cover deploying this dash app to heroku and adding basic authentication, do not worry it about the same complexity as the other parts.