function initCover() {
  // Получаем элемент с классом "cover__timer"
  const timerElement = document.querySelector('.cover__timer');

  // Функция для запуска таймера
  function startTimer(duration) {
    // Устанавливаем начальное значение таймера равным переданному значению
    let timer = duration;
    // Объявляем переменные для хранения часов, минут и секунд
    let hours, minutes, seconds;

    // Запускаем интервал, который будет выполняться каждую секунду
    const countdown = setInterval(() => {
      // Вычисляем количество часов
      hours = parseInt(timer / 3600, 10);
      // Вычисляем количество минут
      minutes = parseInt((timer % 3600) / 60, 10);
      // Вычисляем количество секунд
      seconds = parseInt(timer % 60, 10);

      // Если количество часов меньше 10, добавляем впереди ноль
      hours = hours < 10 ? "0" + hours : hours;
      // Если количество минут меньше 10, добавляем впереди ноль
      minutes = minutes < 10 ? "0" + minutes : minutes;
      // Если количество секунд меньше 10, добавляем впереди ноль
      seconds = seconds < 10 ? "0" + seconds : seconds;

      timerElement.textContent = hours + ":" + minutes + ":" + seconds; // Обновляем текстовое содержимое элемента с новым значением времени

      // Уменьшаем значение таймера на 1 и проверяем, достигло ли оно нуля
      if (--timer < 0) {
        // Если да, очищаем интервал
        clearInterval(countdown);
        // Запускаем таймер заново, чтобы он перезапустился
        startTimer(duration);
      }
      // Интервал выполняется каждую секунду (1000 миллисекунд)
    }, 1000);
  }

  // Проверяем, существует ли элемент с классом "cover__timer"
  if (timerElement) {
    // Получаем значение атрибута "data-timer"
    const timerValue = timerElement.getAttribute('data-timer');
    // Разбиваем значение на отдельные часы, минуты и секунды
    const [hours, minutes, seconds] = timerValue.split(':');

    // Преобразуем часы, минуты и секунды в общее количество секунд
    const totalSeconds = parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);

    // Запускаем таймер, передавая ему общее количество секунд
    startTimer(totalSeconds);
  }
}

initCover();
