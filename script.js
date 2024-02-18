// // 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
// // []()

// // const addClass = document.querySelectorAll(".dropdown-item");
// // addClass.forEach((addClass) => {
// //   addClass.classList.add("super-dropdown");
// // });

// document
//   .querySelectorAll(".dropdown-item")
//   .forEach((addClass) => addClass.classList.add("super-dropdown"));

// // 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.
// // []()

// // const presentOrAbsent = document.querySelector(".btn");
// // presentOrAbsent.classList.toggle("btn-secondary");

// document.querySelector(".btn").classList.toggle("btn-secondary");

// // Если класс у элемента есть, метод classList.toggle ведёт себя как classList.remove и класс у элемента убирает. А если указанного класса у элемента нет, то classList.toggle, как и classList.add, добавляет элементу этот класс.

// // Используем метод-переключатель classList.toggle и убедимся, что при нажатии на кнопку «Изменить тему» у элемента будет то убираться, то добавляться класс light-theme.

// // 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
// // []()

// document.querySelector(".menu").classList.remove("dropdown-menu");

// // 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// // `<a href="#">link</a>`
// // []()

// document
//   .querySelector("div.dropdown")
//   .insertAdjacentHTML("afterend", '<a href="#">link</a>');

// // 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
// // []()

// document.getElementById("dropdownMenuButton").id = "superDropdown";

// // 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
// // []()

// document.querySelector('[aria-labelledby="dropdownMenuButton"]').dataset.dd = 3;

// // 7. Удалите атрибут type у элемента с классом "dropdown-toggle".

// document.querySelector(".dropdown-toggle").removeAttribute("type");
