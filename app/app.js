'use strict';
(function(){


    var app = angular.module('toDoList', [])

    app.controller('ToDoListController', function(){
        this.items = listItems;
        this.newItem = "";
        this.addItem = function(item){
            var tempItem = {itemName : item};
            this.items.push(tempItem);
        };
    });

    var listItems = [{
        itemName : "First thing to do"
    },{
        itemName : "Second thing to do"
    }];

})();