describe('People', function() {
  beforeEach(function() {
    MagicLamp.load("people/index");
  });

  it('should have a div with pippo', function() {
    expect($('#1').text()).to.have.string('pippo');
    expect($('#1').text()).to.have.string('Age:42');
  });


  it('should toggle bio visibility', function() {
    expect(isToShow(1)).to.equal(true);

    showBio(1);

    expect(isToShow(1)).to.equal(false);

    hideBio(1);

    expect(isToShow(1)).to.equal(true);
  });

  it('should set bio description', function() {
    expect($('#1 .bio .bio_content').text()).to.equal('');

    setBio(1, 'a beatiful description');
    expect($('#1 .bio .bio_content').text()).to.equal('a beatiful description');
  });

});
