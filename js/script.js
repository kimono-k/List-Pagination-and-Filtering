/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Select all the <li> elements.
const listItems = document.querySelectorAll('li');

// Integer of 10 to display ten students later on...
const studentListOfTen = 10;

// The showPage function hides all the items in the list except for the ten you want to show.
function showPage(list, page) {

   // 1 * 10 = 10 - 10 = 0 and zero is the first index, thus the startIndex is the first student item. 
   let startIndex = (page * studentListOfTen) - studentListOfTen;

   // 1 * 10 = 10 -> The endIndex is 10.
   let endIndex = (page * studentListOfTen);

   // Iterating over listItems.
   for (let i = 0; i < list.length; i++) {

      // If i is greater or equal to startIndex and i is less than endIndex then...
      if (i >= startIndex && i < endIndex) {
         // Show the list items.
         list[i].style.display = 'block';
      } else {
         // Hide list items when the if condition isn't met.
         list[i].style.display = 'none';
      }
   }
}

// appendPageLinks adds links to <li> items.
function appendPageLinks(list) {
   // Calculates the number of pages -> 54 / 10 = 5 and the remainder is 4. So you will see 6 pages.
   let numberOfPages = (list.length / studentListOfTen);

   // Create a new div element -> <div></div>
   let paginationDiv = document.createElement('div');

   // Resource: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
   // Adds the pagination class to the div.
   paginationDiv.classList.add('pagination');

   // Select the div with the page class.
   let pageDiv = document.querySelector('div.page')

   // add paginationDiv as a child to the div with the class of page.
   pageDiv.appendChild(paginationDiv);

   // Create a new ul element -> <ul></ul>
   let ul = document.createElement('ul');

   // Add ul as a child to the div with the class of pagination.
   paginationDiv.appendChild(ul);

   // Iteration over the numberOfPages.
   // Starting my i and numberOfPages value from 1 because I don't want to display zero on the page nums.
   for (let i = 1; i < numberOfPages + 1; i++) {
      // Create a new li element -> <li></li>
      let li = document.createElement('li');
      // Create a new a element -> <a></a>
      let a = document.createElement('a');
      // Set the text value from 1, 2, 3, 4, 5, 6 for each time the for loop runs.
      a.textContent = i;
      // Set the link to #.
      a.href = "#";
      // Add <li> as a child to <ul>
      ul.appendChild(li);
      // Add <a> as a child to <li>
      li.appendChild(a);
   }

   // If you click on the ul or something that inside that container then...
   ul.addEventListener('click', (event) => {
      // pageButton = a.active.
      let pageButtons = event.target;
      // Text can be 1, 2, 3, 4, 5, 6.
      let pageNumbers = event.target.textContent;
      // Shows list items and the page numbers it ensures that next list displays when you click on a pageNumber.
      showPage(listItems, pageNumbers);
      // Select all <a> elements.
      let anchorTags = document.querySelectorAll('a');
   
      // Iterating over all <a> elements.
      for (let i = 0; i < anchorTags.length; i++) {
         // Remove their active class name.
         anchorTags[i].className = 'none';
      }
      // Give the active class to whatever button is clicked.
      pageButtons.className = 'active';
   });
}

// showPage all the listItems starting from page one.
showPage(listItems, 1);

// Give links to all the all <li> elements.
appendPageLinks(listItems);