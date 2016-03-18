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
        itemName : "Add Delete Buttons"
    },{
        itemName : "Have Delete Buttons actually Delete"
    },{
        itemName : "Make input field required to submit"
    },{
        itemName : "Subtasks"
    }];

})();