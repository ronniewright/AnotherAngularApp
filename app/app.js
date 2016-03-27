'use strict';
(function(){


    var app = angular.module('toDoList', [])

    app.controller('ToDoListController', function(){
        this.items = listItems;
        this.newItem = "";
        this.deleteItem = function(index){
            this.items.splice(index, 1);
        };
        this.allSubItemsComplete = function(index){
            var subItems = this.items[index].subItems;
            var allSelected=true;
            if ((subItems.length === 0)){
                allSelected=false;
            } else {
                for (var i = 0; i< subItems.length; i++){
                    if (!subItems[i].completed){
                        allSelected = false;
                        break;
                    }
                }
            }
            if (allSelected){
                this.items[index].completed = true;
            } else {
                this.items[index].completed = false;
            }
            return allSelected;

        };
    });

    app.controller('NewItemController', function(){
        this.newItem = {};

        this.addItem = function(){
            listItems.push(this.newItem);
            this.newItem={};
        }
    });

    app.directive('item', function(){
        return {
            restrict: 'E',
            templateUrl: 'item.html'
        };
    });

    var listItems = [{
        itemName : "Subtasks",
        completed: false,
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
            completed: false,
            subItems: []
        }];

})();