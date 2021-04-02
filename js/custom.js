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

// function closeNav() {
//   document.getElementById("mySidenav").style.width = "0";
// }


//////////// search //////////////////

function opensearch(){
  if (document.getElementById('open-search-content').style.display == 'block') {
    document.getElementById('open-search-content').style.display='none';
  }
  else {
    document.getElementById('open-search-content').style.display='block';
  }
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


