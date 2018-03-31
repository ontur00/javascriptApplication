var currentList = {};

function createShoppingList() {
    currentList.name = $("#shoppingListName").val();
    currentList.items = new Array();

    console.info(currentList.name);
    //Web Service call

    $("#shoppingListTitle").html(currentList.name);
    //$("#shoppingListTitle").empty();

    $("#createListDiv").hide();
    $("#shoppingListDiv").show();
}

function addItem() {
    var newItem = {};
    newItem.name = $("#newItemName").val();
    currentList.items.push(newItem);
    console.info(currentList);

    drawItems();
}

function drawItems() {
    var $list = $("#shoppingListItems").empty();

    for (var i = 0; i < currentList.items.length; i++) {
        var currentItem = currentList.items[i];
        var $li = $("<li>").html(currentItem.name)
            .attr("id", "item_", i);
        var $deleteBtn = $("<button onclick='deleteItem(" + i + ")'>D</button>").appendTo($li);
        var $checkBtn = $("<button onclick='checkItem(" + i + ")'>C2</button>").appendTo($li);
        var $checkBtn = $("<button onclick='checkItem("+ i +")'>C</button>").appendTo($li);

        $li.appendTo($list);
    } 
}

function deleteItem(index) {
    currentList.items.splice(index, 1);
    drawItems();
}

function checkItem(index) {
    if ($("#item_" + index).hasClass("checked")) {
        $("#item_" + index).removeClass("checked");
        console.info("remove " + index);
    }
    else
    {
        $("#item_" + index).addClass("checked"); 
        console.info("checked " + index);
    }
    //$("#item_" + index).addClass("button");
    //console.info("checkItem " + index);
}

$(document).ready(function () {
    console.info("Info ready")
    console.log("Log")
    console.error("Error message")
});
