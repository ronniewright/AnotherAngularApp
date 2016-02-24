'use strict';
(function(){


    var app = angular.module('toDoList', [])

    app.controller('ToDoListController', function(){
        this.items = listItems;
    });

    var listItems = [{
        isComplete : false,
        itemName : "First thing to do"
    },{
        isComplete : false,
        itemName : "Second thing to do"
    }];
})();