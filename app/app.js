'use strict';
(function(){


    var app = angular.module('toDoList', [])

    app.controller('ToDoListController', function(){
        this.items = listItems;
        this.newItem = "";
        this.deleteItem = function(index){
            this.items.splice(index, 1);
        };
    });

    app.controller('NewItemController', function(){
        this.newItem = {};

        this.addItem = function(){
            listItems.push(this.newItem);
            this.newItem={};
        }
    });

    var listItems = [{
        itemName : "Subtasks",
        subItems : ["Let them exist", "Strikethrough on click", "add new Subtasks", "select item if all subtasks complete", "delete subtasks?"]
        },
        {
         itemName : "Next Task",
          subItems: []
        }];

})();