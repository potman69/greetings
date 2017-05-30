var assert = chai.assert

describe('should test for my greeting function',function(){
  it('should test for my greeting function',function(){
    assert.equal(greeting('Janine'),'Hello, Janine')
  })
})

describe ('Should greet in english',function(){
  it("should be able to greet", function(){
    assert.equal('Hello, Anton', greetMessage('Anton', "English"));
  })
  it("should be able to greet", function(){
    assert.equal('Halo, Anton', greetMessage('Anton', "afrikaans"));
  })
  it("should be able to greet", function(){
    assert.equal('Mholweni, Anton', greetMessage('Anton', "xhosa"));
  })
})

var counter = Number(localStorage.clickcount);
var exp = counter +1;
var testList = {
  Anton: 1,
  Sandro: 1
}

describe ('Should counterDisplay',function(){
  it("should be able to count", function(){
    assert.equal(counter, myCounter(testList, 'Anton'));
  })
  it("should be able to count", function(){
      assert.equal(exp, myCounter(testList, 'Shannon'));
  })
})
