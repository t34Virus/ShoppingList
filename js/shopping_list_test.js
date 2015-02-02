var expect = chai.expect;
var should = chai.should();
var sandbox;

beforeEach(function() {
  // create a sandbox
  sandbox = sinon.sandbox.create();
  sinon.spy(window.console, "log");
});

afterEach(function() {
  sandbox.restore();
  console.log.restore();
});

describe('ShoppingListItem', function () {
  it('should be a function', function() {
     expect(ShoppingListItem).to.be.a('function'); 
   });

});