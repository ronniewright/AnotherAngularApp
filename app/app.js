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
        subItems : [{
            subItemName :"Let them exist",
            completed : true
        },{
           subItemName : "Strikethrough on click",
            completed: true
        },{
            subItemName: "Select item if all subtasks complete",
            completed: false
        },{
            subItemName: "Add new subtasks",
            completed: false
        },{
            subItemName: "delete subtasks",
            completed: false
        }]
        },
        {
         itemName : "persist data",
          subItems: []
        }];

    app.directive('item', function(){
        return {
            restrict: 'E', //e for element
            templateUrl: 'item.html'
        };
    })

})();