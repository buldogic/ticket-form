# Форма поиска авиабилетов

- Платформа: **Web**
- Язык: **TypeScript**

## Тестовое задание: поиск авиабилетов.

Для данного проекта не предусмотрено взаимодействие с сервером, поэтому все данные статичны и берутся из макета, кроме данных которые пользователь ввел в форму поиска(город,  дата), они  динамически отображаются в карточке рейса.

Страницы приложения:
1. Страница  поиска
2. Страница с одним билетом в одну сторону 
3. Страница с билетов туда и обратно 

Описание страниц:
1.Страница - форма поиска
Сделана базовая валидация полей для формы поиска.
- Откуда* - текстовое поле
- Куда*  - текстовое поле
- Туда* - текстовое поле
- Обратно - текстовое поле
- обязательные поля*

Если обязательных поля не заполнены или не проходят валидацию, кнопка **“Найти билеты”** находится в состоянии *disabled*.

В полях стоит проверка на ограниченное количество городов.

Список городов:  
- Москва
- Саратов 
- Санкт-петербург 
- Екатеринбург
- Волгоград
- Пермь
- Уфа
- Орск
- Казань
- Воронеж

            
2.Страница Страница с одним билетом в одну сторону 

На странцие перелёта город и дата вылета/прилёта  содержаться значения,  которые пользователь ввел в форме поиска. Пользователь может выбрать рейс с другим временем. При выборе времени, активное состояние  изменяется, также  изменяется основное время в рейсе.

3.Страница с билетов туда и обратно 

Есоли форме поиска было выбрано направление туда и обратно, то отобразиться страница с информацией о двух рейсах.

## Используемые библиотеки
- [React](https://reactjs.org/) - библиотека для построения интерфейсов
- [react-router](https://reactrouter.com/en/main) - библиотека, которая  предназначена для маршрутизации в веб-приложениях
- [react-scripts](https://www.npmjs.com/package/react-scripts) - удобная библиотека, которая поставляется с выдающейся конфигурацией, и команда сценариев, которая значительно упрощает создание приложений React

## Запуск приложения

### `npm ci` 
Устанавливает зависимости напрямую из package-lock. json и использует package. json только для проверки отсутствия несовпадающих версий.


### `npm start`

Запускает приложение в режиме разработки.\
Открыть [http://localhost:3000](http://localhost:3000) для просмотра в браузере.

### `npm build`

Собирает production build приложения
