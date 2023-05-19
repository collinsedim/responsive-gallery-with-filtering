document.addEventListener('DOMContentLoaded', () => {
  
    const sortItems = document.querySelectorAll('.sort-items button');
    const searchInput = document.getElementById('search');
    const cardBodies = document.querySelectorAll('.card-body');
  
    // add event to get user input, check against all h3 elements and return only exact matches
    searchInput.addEventListener('input', () => {
      // convert search input to lowercase
      const searchValue = searchInput.value.toLowerCase();
  
        cardBodies.forEach((cardBody) => {
            const cardHeading = cardBody.querySelector('.card-heading');

            // also convert h3 text to lowercase to avoid case-sensitivity when matching against search value
            const headingText = cardHeading.innerText.toLowerCase();

            // hide or show cards based on search input
            if (searchValue.length === 0 || headingText.includes(searchValue)) {
                cardBody.classList.remove('hide');
            } else {
                cardBody.classList.add('hide');
            }
        });
    });
  
    const switchActiveTab = (e) => {
      const selectNew = document.querySelector('.selected');
      selectNew.classList.remove('selected');
      e.target.classList.add('selected');
  
      // loop through each card and include 'hide' class
      cardBodies.forEach((cardBody) => {
        if (cardBody.dataset.name === e.target.dataset.name || e.target.dataset.name === 'display-all') {
          cardBody.classList.remove('hide');
        } else {
          cardBody.classList.add('hide');
        }
      });
    };
  
    // add event to switch active tab and sort items on button click
    sortItems.forEach((item) => {
      item.addEventListener('click', switchActiveTab);
    });
});
  