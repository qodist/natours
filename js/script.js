//CLOSE NAV MENU
var checkbox = document.querySelector(".navigation__checkbox");
var items = document.querySelectorAll(".navigation__item");

items.forEach(function(item){
    item.addEventListener("click", function(){
        checkbox.checked = false;
    });
});