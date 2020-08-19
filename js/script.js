/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/

const listItems = document.querySelectorAll('li');
const studentListOfTen = 10;

/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

function showPage(list, page) {
   let startIndex = (page * studentListOfTen) - studentListOfTen;
   let endIndex = (page * studentListOfTen);

   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         list[i].style.display = 'block';
      } else {
         list[i].style.display = 'none';
      }
   }
}

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

function appendPageLinks(list) {
   let numberOfPages = (list.length / studentListOfTen);
   let paginationDiv = document.createElement('div');
   // https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
   paginationDiv.classList.add('pagination');
   let pageDiv = document.querySelector('div.page')
   pageDiv.appendChild(paginationDiv);
   let ul = document.createElement('ul');
   paginationDiv.appendChild(ul);

   for (let i = 1; i < numberOfPages + 1; i++) {
      let li = document.createElement('li');
      let a = document.createElement('a');
      a.textContent = i;
      a.href = "#";

      ul.appendChild(li);
      li.appendChild(a);
   }

   ul.addEventListener('click', (event) => {
      let pageButtons = event.target;
      let pageNumbers = event.target.textContent;

      showPage(listItems, pageNumbers);
      let anchorTags = document.querySelectorAll('a');

      for (let i = 0; i < anchorTags.length; i++) {
         anchorTags[i].className = 'none';
      }
      pageButtons.className = 'active'; // If I click on a page button it's not becoming blue, therefore the class active isn't working.
   });

}

showPage(listItems, 1);
appendPageLinks(listItems);



// Remember to delete the comments that came with this file, and replace them with your own code comments.