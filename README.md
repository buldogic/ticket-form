# Форма поиска авиабилетов

Тестовое задание: поиск авиабилетов.

Для данного проекта не предусмотрено взаимодействие с сервером, поэтому все данные статичны и берутся из макета, кроме данных которые пользователь ввел в форму поиска(город,  дата), они  динамически отображаются в карточке рейса.

Страницы приложения:
    1. Страница поиска  /SearchForm
    2. Страница с одним билетом в одну сторону /Tickets/FormTicket
    3. Страница с билетов туда и обратно /Tickets/FormTicketTo

Описание страниц:
    1.Страница - форма поиска  /avia

        Сделана базовая валидация полей для формы поиска.

            Откуда* - текстовое поле

            Куда*  - текстовое поле

        В полях стоит проверка на ограниченное количество городов.
        Список городов:  {
                         'москва', 'саратов', 'санкт-петербург', 
                         'екатеринбург', 'волгоград', 'пермь',
                         'уфа', 'орск', 'казань', 'воронеж',
                         }

            Туда* - текстовое поле

            Обратно - текстовое поле

        *  - обязательные поля
        Если обязательных поля не заполнены или не проходят валидацию,
         кнопка “Найти билеты” находится в состоянии disabled.


 2.Страница Страница с одним билетом в одну сторону /Tickets/FormTicket

    На странцие перелёта город и дата вылета/прилёта  содержаться значения, 
    которые пользователь ввел в форме поиска.
    Пользователь может выбрать рейс с другим временем. 
    При выборе времени, активное состояние  изменяется, 
    также  изменяется основное время в рейсе.

 3.Страница с билетов туда и обратно /Tickets/FormTicketTo

    Есоли форме поиска было выбрано направление туда и обратно, 
    то отобразиться страница с информацией о двух рейсах.

Проекте для всех форм используются свои компоненты,
 а также использовались библиотеки: 
 
{
    date fns,
    react-router-dom,
 }


### `npm start`

Запускает приложение в режиме разработки.\
Открыть [http://localhost:3000](http://localhost:3000) для просмотра в браузере.
