#!/bin/sh

sed -i "52i<script>window.botpressWebChat.init({ host: 'https://lit-beach-86646.herokuapp.com/', botId: 'smalltalk'})<\/script>" ../dist/index.html