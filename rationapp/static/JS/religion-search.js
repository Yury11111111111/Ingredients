const searchInput = document.querySelector('.select__input');
const religions = document.querySelectorAll('.Ch');

searchInput.addEventListener('input', function() {
  const searchText = this.value.toLowerCase();

  religions.forEach(function(religion) {
    const religionText = religion.textContent.toLowerCase();
    const religionBlock = religion.nextElementSibling;

    if (religionText.includes(searchText)) {
      religion.style.display = 'block';
      religionBlock.style.display = 'block';
    } else {
      religion.style.display = 'none';
      religionBlock.style.display = 'none';
    }
  });
});


const searchInputIsl = document.querySelector('.select__input2');
const religionsIsl = document.querySelectorAll('.Ch2');

searchInputIsl.addEventListener('input', function() {
  const searchText = this.value.toLowerCase();

  religionsIsl.forEach(function(religion) {
    const religionText = religion.textContent.toLowerCase();
    const religionBlock = religion.nextElementSibling;

    if (religionText.includes(searchText)) {
      religion.style.display = 'block';
      religionBlock.style.display = 'block';
    } else {
      religion.style.display = 'none';
      religionBlock.style.display = 'none';
    }
  });
});