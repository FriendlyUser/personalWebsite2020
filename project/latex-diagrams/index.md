+++
# Project title.
title = "IPFS-Dapp"

# Date this page was created.
date = 2018-04-27T00:00:00

# Project summary to display on homepage.
summary = "Tracks files uploaded to IPFS in a smart contract, made with bulma and truffle"

# Tags: can be used for filtering projects.
# Example: `tags = ["machine-learning", "deep-learning"]`
tags = ["Ethereum","Solidity"]
categories = ["Blockchain"]
# Optional external URL for project (replaces project detail page).
external_link = ""

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references 
#   `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
# slides = ""
slides = ""

# Links (optional).
url_pdf = ""
url_slides = ""
url_video = ""
url_code = "https://github.com/FriendlyUser/file-track-Dapp"

# Custom links (optional).
#   Uncomment line below to enable. For multiple links, use the form `[{...}, {...}, {...}]`.
url_custom = [{icon_pack = "fab", icon="twitter", name="Follow", url = "https://twitter.com/georgecushen"}]

# Featured image
# To use, add an image named `featured.jpg/png` to your project's folder. 
[image]
  # Caption (optional)
  caption = "Architecture Diagram"
  
  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = "Smart"
+++

# File-track Dapp 


![Screenshot](https://gateway.ipfs.io/ipfs/Qmb1ZEhXaTCfzdgVxXmW3WqfcjCRG4ctsieP2zkuhFZRtP)

Simple Dapp that can track files uploaded to IPFS. See http://ipfsDapp.surge.sh

![Dapp Structure](/img/ipfs-dapp/ipfs-dapp.png)


Images are converted from pdf to png using imagemagick

```sh
convert -density 400 -resize 50% ipfs-dapp.pdf ipfs-dapp.png
```

## Tasks

- [x] Truffle Test 
- [x] User Registry Contract
- [x] Basic Front End
- [x] Design Auth Contract
- [x] Add front-end for authentication
- [x] Add component for viewing files for self, use bulma table.
- [x] Boilerplate for Front-end testing
- [x] Add component for viewing files for other users
- [ ] Add Contact Us Page, FAQ Page, etc ...
- [ ] Polish app, adding loading icons or render bulma icons, or font-awesome loading icons, add Contact Page.

|Filename                | IPFS Hash| url |
| ---| ---| ---| 
| ENGR001 Report   | QmSE4qrynVfCU1Vevhvaeav6RWtN5vFKSn3KaC3GuSKPvq | [ENGR001](https://gateway.ipfs.io/ipfs/QmSE4qrynVfCU1Vevhvaeav6RWtN5vFKSn3KaC3GuSKPvq) |
| ENGR002 Report  |QmezncgKe3NEMyN9mmitT3BLwLE3adCNyNDUSJssgCqGXb | [ENGR002](https://ipfs.io/ipfs/QmezncgKe3NEMyN9mmitT3BLwLE3adCNyNDUSJssgCqGXb) |
| ENGR003 Report  | QmZb7crH2YYqwvq5d2pCjZxAovzqXkhWwnEE993UM4jikk | [ENGR003](https://gateway.ipfs.io/ipfs/QmZb7crH2YYqwvq5d2pCjZxAovzqXkhWwnEE993UM4jikk) |
| ENGR446 Report  | QmeQegoUZ3YMNpgUvinU424FtrMUYNNHgQafmaThrzG9nZ |[ENGR446](https://ipfs.io/ipfs/QmeQegoUZ3YMNpgUvinU424FtrMUYNNHgQafmaThrzG9nZ) |


## Badges


[![Build Status](https://travis-ci.org/FriendlyUser/file-track-Dapp.svg?branch=master)](https://travis-ci.org/FriendlyUser/file-track-Dapp) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Coverage Status](https://coveralls.io/repos/github/FriendlyUser/file-track-Dapp/badge.svg?branch=master)](https://coveralls.io/github/FriendlyUser/file-track-Dapp?branch=master)
