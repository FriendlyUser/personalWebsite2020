+++
# Project title.
title = "Nuxt Url Redirector"

# Date this page was created.
date = 2018-12-08T00:00:00

# Project summary to display on homepage.
summary = "A blockchain-based url redirect system"

# Tags: can be used for filtering projects.
# Example: `tags = ["machine-learning", "deep-learning"]`
tags = ["nuxt","vue","Ethereum"]
categories = ["blockchain"]
# Optional external URL for project (replaces project detail page).
external_link = ""

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references 
#   `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides = ""

# Links (optional).
url_pdf = ""
url_slides = ""
url_video = ""
url_code = "https://github.com/FriendlyUser/nuxt-url-shortener"

# Custom links (optional).
#   Uncomment line below to enable. For multiple links, use the form `[{...}, {...}, {...}]`.
url_custom = [{icon_pack = "fab", icon="twitter", name="Follow", url = "https://twitter.com/georgecushen"}]

# Featured image
# To use, add an image named `featured.jpg/png` to your project's folder. 
[image]
  # Caption (optional)
  caption = "Redirect logo"
  
  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = "Smart"
+++


# Summary

This application allows an user to enter a url on the kovan network and then gets a short url in the form of an id.

* [url.surge.sh/1](http://url.surge.sh/1)
* [url.surge.sh/2](http://url.surge.sh/2)

The Url Shortener I plan to use, will end up using truffle to deploy, query the json file and extract specific properties such as possibly have some crazy naming scheme for like based on network ID and then based on contract address, but I'll stick with a simple truffle based ethereum url extraction system.

Todo Aspects

1. Improve Styling.
2. Add Truffle integration
3. Dynamically load abi and contracts based on network id. I will not deploy to mainnet
3a. Table of links for each individual network
3b. Morph this into a truffle box template?
4. Ropsten --- jobs Rinkeby tutorials Kovan everything else
5. Better styling
6. Bigger contract to allow anyone to make links??? privately.
7. Add TypeScript.

Would like to have two seperate html pages tho.