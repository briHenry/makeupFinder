// Dropdown functionality
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}


// Click functionality

function startThis() {
  console.log("clicking Mabelinendlskfn");
  console.log(document.querySelectorAll('tag').innerHTML)
 
 
}

document.addEventListener('click', function(e) {
   // 1. Collect data
  e = e || window.event;
  var target = e.target || e.srcElement,
  text = target.textContent || text.innerText;
  console.log(text);

   // 2. Pass data to the next page -> calling a function that passes this data to all the other htmls
  passData(text);
});

var makeupName;

function passData(data) {
  makeupName = data;
  console.log("makeup here " + makeupName);

  setup(name);
}

function setup(name) {
  console.log("print");
  document.getElementById("brandName").innerHTML = name;
}