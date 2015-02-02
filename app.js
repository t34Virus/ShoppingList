
function ShoppingListItem ( name, description ) {

  this.name = name;
  this.description = description;
  this.is_done = false;

}

ShoppingListItem.prototype.check = function ( is_done ) {

  this.is_done = true; 

};

ShoppingListItem.prototype.uncheck = function( is_done ) {

  this.is_done = false;

};

ShoppingListItem.prototype.render = function() {


  return '<li class="completed_' + this.is_done + '"><span>' + this.name + '</span> <span>' + this.description + '</span></li> ' 

};

function ShoppingList () {

  this.items = [];

}

ShoppingList.prototype.addItem = function( item ) {

  if (item === instanceof ShoppingListItem) {
    this.items.push(item);
  }
};

ShoppingList.prototype.removeItem = function( ) {

  if (item === instanceof ShoppingListItem) {
    this.items.pop(item);
  }
};

ShoppingList.prototype.render = function( ) {

    return '<li class="completed_' + this.is_done + '"><span>' + this.name + '</span> <span>' + this.description + '</span></li> ' 
  

};


  