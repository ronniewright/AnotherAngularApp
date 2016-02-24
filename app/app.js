'use strict';
(function(){


    var app = angular.module('toDoList', [])

    app.controller('ToDoListController', function(){
        this.items = listItems;
    });

    var listItems = [{
        itemName : "First thing to do"
    },{
        itemName : "Second thing to do"
    }];
})();