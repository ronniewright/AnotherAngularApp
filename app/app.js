'use strict';
(function(){


    var app = angular.module('toDoList', [])

    app.controller('ToDoListController', function(){
        this.item = listItem;
    });

    var listItem = {
        isComplete : false,
        itemName : "First thing to do"
    };
})();