describe('People', function() {
  beforeEach(function() {
    MagicLamp.load("people/index");
  });

  it('should have a div with pippo', function() {
    console.log($('#1'));
    expect($('#1').text()).to.have.string('pippo');
    expect($('#1').text()).to.have.string('Age:42');
  });
});
