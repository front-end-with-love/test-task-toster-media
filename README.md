# Тестовое задание Front-end разработчик Toster Media
Верстка шаблонов
***
* Автоматизация и сборка проекта [Gulp](https://gulpjs.com)
* Шаблонизатор для разметки [Pug](https://pugjs.org/api/getting-started.html)
* Препроцессор для стилей [SASS](https://sass-lang.com)
* Методология [БЭМ](https://ru.bem.info)
***
## Информация для back-end разработчика
* Собранный проект находится в каталоге ```build```;
* Стили ```build/css/app-project.css```;
* Сценарии ```build/js/*.js```
  * Библиотеки ```build/js/app-project-base.js```.
  * Кастомные сценарии и вызовы плагинов```build/js/app-project-run.js```.
* Изображения ```build/img/```;
* Шрифты ```build/fonts/```;
* Шаблоны ```build/*.html```.
## Что включает в себя сборка?
* [breakpoint-sass](https://www.npmjs.com/package/breakpoint-sass) — упрощенный синтаксис для написания медиа-запросов;
* [browser-sync](https://browsersync.io/docs/gulp) — авто-обновление браузера;
* [gulp](https://www.npmjs.com/package/gulp) — автоматизация процессов;
* [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) — добавление авто-префиксов для стилей;
* [gulp-clean](https://www.npmjs.com/package/gulp-clean) — удаление файлов и каталогов;
* [gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css) - очистка лишнего CSS;
* [gulp-concat](https://www.npmjs.com/package/gulp-concat) — конкатенация файлов;
* [gulp-load-plugins](https://www.npmjs.com/package/gulp-load-plugins) — загрузка плагинов из зависимостей;
* [gulp-notify](https://www.npmjs.com/package/gulp-notify) — уведомления;
* [gulp-pug](https://www.npmjs.com/package/gulp-pug) — компиляция Pug в HTML;
* [gulp-sass](https://www.npmjs.com/package/gulp-sass) — компиляция SASS/SCSS в CSS (в новой версии только с помощью вызова в нем пакетов "sass"/"node-sass");
* [sass](https://www.npmjs.com/package/sass) — дополнение к "gulp-sass" для компиляции SASS/SCSS в CSS
* [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps) — создание карты sourcemap;
* [gulp-webp](https://www.npmjs.com/package/gulp-webp) — преобразование изображений в WebP;
* [load](https://www.npmjs.com/package/load) — загрузка глобальных переменных;
* [gulp-rename](https://www.npmjs.com/package/gulp-rename) - переименование файлов;
* [gulp-postcss](https://www.npmjs.com/package/gulp-postcss) - плагин для передачи CSS через несколько плагинов серии PostCSS;
* [postcss-merge-rules](https://www.npmjs.com/package/postcss-merge-rules) - объединение правил CSS с помощью PostCSS;
* [postcss-combine-duplicated-selectors](https://www.npmjs.com/package/postcss-combine-duplicated-selectors) - автоматическое обнаружение и объединение дублирующихся селекторов CSS;
* [postcss-sort-media-queries](https://www.npmjs.com/package/postcss-sort-media-queries) - сортировка и комбинирование медиа-запросов CSS с методологиями Mobile First / Desktop First;
* [postcss-discard-comments](https://www.npmjs.com/package/postcss-discard-comments) - удаление комментариев в файлах CSS.

Версии пакетов обновлены до последних 14 июля 2023 года, Node.js 20.3.1
***
## Описание работы с проектом
Установить ```Node.js```
Далее, используя ```cmd``` в Windows или Терминал Linux/macOS, проделайте следующие шаги:
* Клонировать репозиторий ```git clone git@gitlab.com:cutprice.games/cutprice-games-frontend-static.git```;
* Установить утилиту Gulp Cli глобально ```npm install gulpjs/gulp-cli -g```.
***
### Начало работы
* Устанавливаем пакеты из package.json: ```npm i```;
* Основная команда: ```gulp``` собирает проект и запускает слежку за файлами ```gulp-watch``` и ```browserSync```;
* Сборка проекта для backend-разработчика: ```gulp min``` сборка в каталоге ```build```;
* Просмотр главной страницы осуществляется по адресу [localhost:3000](http://localhost:3000);
* Компиляция проекта осуществляется в каталог ```build``` (SASS в CSS, Pug в HTML).
***
### Структура проекта
* ```build``` - каталог, в котором находится скомпилированная версия;
* ```gulp``` - список задач для Gulp;
* ```src``` - основной каталог, в котором находятся исходники проекта;
* ```.gitignore``` - список исключений из Git;
* ```gulpfile.js``` - основной файл конфигурации для автоматизации задач;
* ```package.json``` - список NPM пакетов для установки.
***
#### Подробнее о каталоге ```src```
В данном каталоге происходит основная работа над проектом (создание новых шаблонов, блоков, импорт шрифтов, создание базовых стилей etc)
* ```blocks``` - содержит каталог блоков (согласно БЭМ методологии);
* ```static``` - содержит каталог общих стилей, шрифты, изображения;
* ```tpls``` - содержит шаблоны страниц;
* ```app-project``` - ядро стилей для сборки финального CSS файла.
***
#### Подробнее о каталоге ```blocks```
Каждый блок содержит 3 файла с разметкой, стилями и скриптами
***
#### Подробнее о каталоге ```static```
Содержит глобальные стили и файлы
* ```fonts``` - шрифты;
* ```img``` - изображения;
* ```libs``` - сторонние библиотеки (JS/SASS);
* ```sass``` - глобальные стили (переменные, миксины, базовые стили типографики, стили для печати etc).
***
#### Подробнее о каталоге ```tpls```
Содержит список шаблонов
* ```index``` - список шаблонов для быстрого доступа в браузере;
* ```any-template-name``` - шаблон по названию в Figma.
