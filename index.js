'use strict';

function shoppinglist() {
    console.log('ready');
    //listen for add items, prevent submit,add div with  val
    $('button').submit(function (e) {
        console.log('fired');
        $(e.currentTarget).preventDefault();
        console.log('fired');)
    //listen for check, prevent, change strikethrough style in span
    //listen for delete, prevent, delete parent li
}

$(shoppinglist);