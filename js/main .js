var siteName = document.getElementById("bookmarkName");
var siteURL = document.getElementById("bookmarkURL");
var submitBtn = document.getElementById("submitBtn");
var tableContent = document.getElementById("tableContent");

var closeBtn = document.getElementById("closeBtn");
var boxInfo = document.querySelector(".box-info");
var deleteBottn;
var visitBottn;
var bookmarksList= [];

if (localStorage.getItem("bookmarksList") !=null) {
  bookmarksList = JSON.parse(localStorage.getItem("bookmarksList"));
  for (var x = 0; x < bookmarksList.length; x++) {
    displayBookmark(x);
  }
}


// add proudct

function createBookmarks() {
 
  if( nameValidtion(true) && urlValidtion(true)){
     
  var siteContent = {
    siteName:siteName.value, 
    siteURL:siteURL.value  
  }

  bookmarksList.push(siteContent)

  localStorage.setItem('bookmarksList',JSON.stringify(bookmarksList))
  clearInput()
  displayBookmark()


  }else{
    Swal.fire({
      icon: "error",
      title: "Site Name or Url is not valid, Please follow the rules below :",
      text: "Site name must contain at least 3 characters , Site URL must be a valid one",
      
    });
  }
}




// //!  Display 


function displayBookmark(websiteIndex) {
   // var siteURL = ${bookmarksList (https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*))} ;
  var catrtona=''

  for (var i = 0; i < bookmarksList.length; i++) {
    catrtona +=  `<tr>
    <td>${i + 1}</td>
        <td>${bookmarksList[i].siteName}</td>              
        <td>
          <a href="${bookmarksList[i].siteURL}" target="_blank" data-index="${websiteIndex}" class="btn btn-visit"><i class="fa-solid fa-eye pe-2"></i>visit</a>
          </td>
        <td>
          <button class="btn btn-delete pe-2" onclick="deleteInbut(${i})" data-index="${websiteIndex}">
            <i class="fa-solid fa-trash-can" ></i>Delete
          </button>
        </td>
    </tr>`
    ;
    
  }
  document.getElementById('data').innerHTML = catrtona




}



function clearInput() {
  siteName.value = "";
  siteURL.value = "";
}

function deleteInbut(index) {
  bookmarksList.splice(index,1)
  localStorage.setItem('bookmarksList',JSON.stringify(bookmarksList) )

  displayBookmark()
  

}





function nameValidtion(){

  var nameRegex = /^[A-Z-a-z]{3,15}$/
  var nameText = siteName.value
  
  if (nameRegex.test(nameText)) {
    
    siteName.classList.add('is-valid');
    siteName.classList.remove('is-invalid');
    return true;

  }else{
    
    siteName.classList.add('is-invalid');
    siteName.classList.remove('is-valid');
    return false;
  
  }

  
}


function urlValidtion(){

  var urlRegex =  /^https?:\/\//g;
  var urlText = siteURL.value
  
  if (urlRegex.test(urlText)) {
    
    siteURL.classList.add('is-valid');
    siteURL.classList.remove('is-invalid');
    return true;

  }else{
    
    siteURL.classList.add('is-invalid');
    siteURL.classList.remove('is-valid');
    return false;
  
  }

  
}



