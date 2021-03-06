---
title: CSS
order: 3
github: https://github.com/ajpawlicki/reddit-reader/blob/master/react-client/dist/styles.css
description: Enhanced UI cleanliness by vertically and horizontally aligning items in containers using the Flexbox layout.
---

```css
body {
  font-family: system-ui, sans-serif;
  font-size: 60%;
}

a {
  text-decoration: none;
}

.post-title {
  font-size: medium;
  font-weight: normal;
  margin-bottom: 1px;
}

.post-title:visited {
  color: #0000ff;
}

.post-flat-list {
  color: #888;
  font-weight: bold;
  padding: 0 1px;
  display: flex;
  flex-direction: row;
}

.post-score {
  margin-right: 10px; 
}

.post-comments a {
  color: #888;
}

.post-thumbnail {
  max-height: 70px;
}

.post-thumbnail-col {
  margin-right: 10px;
}

.post-content-col  {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.post-container {
  display: flex;
  flex-direction: row;
  margin: 5px 0;
}

.delete-btn {
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
}

.subreddit {
  margin-bottom: 10px;
  border: 1px solid #888;
  padding: 10px;
  border-radius: 10px;
}

.subreddit-names-list {
  columns: 3;
  -webkit-columns: 3;
  -moz-columns: 3;
  list-style: none;
  display: inline-block;
}

.subreddit-name {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.subreddit-names-list li {
  cursor: pointer;
}

.alert {
  margin: 10px 0;
}

.input-text-box {
  margin-right: 5px;
}
```
