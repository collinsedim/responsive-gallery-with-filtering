# Responsive Gallery With Item(s) Filter Options

## Code/ Features Summary

The provided JavaScript code is for a responsive gallery with sorting functionality. The HTML structure consists of a container with a sorting section and a card section containing various items. Here's a description of what the script does:

It selects the necessary elements from the HTML using document selectors and assigns them to variables.

It adds an event listener to the search input field, which triggers a function when the user enters input.

Inside the search event listener function, it loops through all the card bodies (individual items) and compares the search input value with the heading text of each card.

Based on the search input, it either shows or hides the cards by adding or removing the "hide" class.

It updates the "cardBodies" variable to include the current set of card bodies after filtering based on the search input.
It adds an event listener to each sorting button, which triggers the "switchActiveTab" function when clicked.

Inside the "switchActiveTab" function, it removes the "selected" class from the previously selected button and adds it to the clicked button.

It loops through all the card bodies and shows or hides them based on the selected sorting button.

It updates the "cardBodies" variable to include the current set of card bodies after filtering based on the selected sorting button.

Overall, the script enables the user to search for specific items by entering keywords in the search input field. It also allows the user to filter and display specific categories of items by clicking on the sorting buttons. The gallery dynamically updates and shows/hides the relevant items based on the user's input and selection.