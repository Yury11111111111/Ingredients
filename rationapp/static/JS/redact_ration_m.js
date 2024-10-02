

// Получаем элементы
const racentBlock = document.querySelectorAll('.racion__child-block');
const foodBlock = document.querySelectorAll('.food-composition__child-block');
const racentHiddenBlock = document.querySelectorAll('.racion__hidden-block');
const foodHiddenBlock = document.querySelectorAll('.food-composition__hidden-block');




function useArrowList(event){
    if (event.target.closest(".popup-category").nextElementSibling.hidden == false){

        event.target.closest(".popup-category").nextElementSibling.hidden = true;
        blockIngredientAll[blockIngredientAll.length-1].classList.add("popup-category__category_border-radius");

        event.target.closest(".list-popup__arrow").classList.remove("list-popup__arrow_rotate");

    } else{
        event.target.closest(".popup-category").nextElementSibling.hidden = false;
        blockIngredientAll[blockIngredientAll.length-1].classList.remove("popup-category__category_border-radius");

        event.target.closest(".list-popup__arrow").classList.add("list-popup__arrow_rotate");
    }
}
for (var index = 0; index < racentBlock.length; index++) {
    racentBlock[index].addEventListener('mouseover', () => {
        for (var indexi = 0; indexi < racentHiddenBlock.length; index++) {
            racentHiddenBlock[indexi].style.display = 'block';
        }
    });
    racentBlock[index].addEventListener('mouseout', () => {
        for (var indexi = 0; indexi < racentHiddenBlock.length; index++) {
            racentHiddenBlock[indexi].style.display = 'none';
        }
    });
}