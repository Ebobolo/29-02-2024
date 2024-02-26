// Создаем пустую строку для хранения введенных пользователем значений
let str = ''

// Выбираем элемент с классом "display" для отображения результатов вычислений
let display = document.querySelector('.display')

// Выбираем все элементы с классом "buttonbox" (кнопки калькулятора)
let buttons = document.querySelectorAll('.buttonbox')

// Итерируемся по всем кнопкам и к каждой кнопке добавляем обработчик события "click"
buttons.forEach(function (button) {
	button.addEventListener('click', function (dets) {
		// Проверяем, какая кнопка была нажата
		if (dets.target.innerHTML == '=') {
			// Попытка вычисления выражения, содержащегося в строке "str"
			try {
				str = eval(str)
				// Отображаем результат вычислений в элементе "display"
				display.innerHTML = str
			} catch (error) {
				// Если при вычислении возникла ошибка, то отображаем сообщение об ошибке
				str = 'Error'
				display.innerHTML = str
			}
		} else if (dets.target.innerHTML == 'C') {
			// Очищаем строку "str" и очищаем элемент "display"
			str = ''
			display.innerHTML = str
		} else if (dets.target.innerHTML === 'DEL') {
			// Удаляем последний символ из строки "str" и обновляем элемент "display"
			str = str.slice(0, -1)
			display.innerHTML = str
		} else {
			// Добавляем значение нажатой кнопки в строку "str" и обновляем элемент "display"
			str = str + dets.target.innerHTML
			display.innerHTML = str
		}
	})
})
