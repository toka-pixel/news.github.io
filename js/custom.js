//////////////////// navbar ///////////////

function openNav() {
  if (document.getElementById('open').style.display == 'block') {
    document.getElementById('open').style.display = 'none';
    document.getElementById('close').style.display = 'block';
    document.getElementById("mySidenav").style.width = "100%";
  }

  else {
    document.getElementById('open').style.display = 'block';
    document.getElementById('close').style.display = 'none';
    document.getElementById("mySidenav").style.width = "0";


  }


  // document.getElementById("mySidenav").style.width = "100%";
}




//////////// search //////////////////

function opensearch(){
  if (document.getElementById('open-search-content').style.display == 'block') {
    document.getElementById('open-search-content').style.display='none';
  }
  else {
    document.getElementById('open-search-content').style.display='block';
  }
}


// ///////////// privacy //////////////////
function privacyContent(){

  if( document.getElementById('privacy').style.display=='block'){
    document.getElementById('privacy').style.display='none'
  }
  else{
  document.getElementById('privacy').style.display='block';
  }
}

// ///////////////// input ///////////////////
function focusFunction(x) {
  // Focus = Changes the background color of input to yellow
x.style.border = "1px solid #ffc107";
}

function blurFunction(x) {
  // No focus = Changes the background color of input to red
//  x.style.border = "1px solid rgb(118, 118, 118)";
}




$(document).ready(function () {

  //////////// panel //// //////////
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      // this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }


});


