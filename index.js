'use strict'

function shoppinglist() {
    console.log('ready');
    //listen for add items, prevent submit,add div with  val
    $('#js-shopping-list-form').submit(e => {
        e.preventDefault();
        let userInput = $(e.currentTarget).find('#shopping-list-entry').val();
        const html = function () {
            return `<li>
            <span class="shopping-item">${userInput}</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>
          </li>`
        };
        $('.shopping-list').append(html())
    })
    //listen for check, prevent, change strikethrough style in span
    $('.shopping-list').on('click','.shopping-item-toggle', e => {
        $(e.currentTarget).closest('li').children('.shopping-item').toggleClass('shopping-item__checked');
    });
    //listen for delete, prevent, delete parent li
    $('.shopping-list').on('click','.shopping-item-delete', e => {
        $(e.currentTarget).closest('li').remove();
    });
}

$(shoppinglist);