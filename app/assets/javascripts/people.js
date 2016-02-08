$(document).ready(function (){

  $(".person").click(function (){
    if(isToShow(this.id)){
      showBio(this.id);
    }else {
      hideBio(this.id);
    }
  });

});

function isToShow(id) {
  return $('#'+id+' .bio').hasClass('hidden');
}

function getBio(id, setBio) {
  $.get( "people/"+id+"/bio", function( data ) { setBio(id, data);});
}

function setBio(id, data) {
  $('#'+id+' .bio .bio_content').text(data);
}

function showBio(id) {
  getBio(id, setBio);
  $('#'+id+' .bio').removeClass('hidden');
}

function hideBio(id) {
  $('#'+id+' .bio .bio_content').text('');
  $('#'+id+' .bio').addClass('hidden');
}
