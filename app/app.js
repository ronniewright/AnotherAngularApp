'use strict';
(function(){


    var app = angular.module('toDoList', [])

    app.controller('ToDoListController', function(){
        this.items = listItems;
        this.newItem = "";
        this.addItem = function(item){
            var newItem = {itemName : item};
            this.items.push(newItem);
        };
    });

    var listItems = [{
        itemName : "First thing to do"
    },{
        itemName : "Second thing to do"
    }];

})();