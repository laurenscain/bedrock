# Lauren Cain

Bedrock Learning Application

## How to Run

In the root dir, npm install

npm run json:server to start json api

npm run start
## Requirements

We'd like you to build an infinite scrolling component that allows users to scroll through a list of recipes as styled recipe cards (you can use the recipes from your other example if you like). We do not need to see the full text of the recipe; this is just a catalog showing the title, categories, and author of the recipe.

Each recipe card image should have the recipe name, author, and categories overlaid as text. You may want to use a darkened or semi transparent overlay or gradient behind the text to make the text readable on the image. The style is ultimately up to you, though.

As for the functionality, we'd like the list to be an infinite scroll list. This means all the recipe cards must not be rendered at all times. We want to see a list that is smart enough to only render the rows that are in view or about to be in view, and loads more rows as the user scrolls toward the end of the list. You do not need to load the data from an external server or database, a simple JS method that takes in some arguments (like "offset" or "page") and returns a handful of rows will suffice.