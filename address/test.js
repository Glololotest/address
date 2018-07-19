/*$(document).ready(function() {
   $('#adm').click(function() { 
    $('.tableadm').show();
	$('.tablemsk').hide();
	$('.tablenevskiy').hide();
	$('.tablepetrd').hide();
   }); //end click adm
   $('#msk').click(function() {
    $('.tablemsk').show();
	$('.tablenevskiy').hide();
	$('.tableadm').hide();
	$('.tablepetrd').hide();
   });//end click msk
   $('#nev').click(function() {
    $('.tablenevskiy').show();
	$('.tablemsk').hide();
	$('.tableadm').hide();
	$('.tablepetrd').hide();
   });//end click nev
   $('#petrd').click(function() {
    $('.tablepetrd').show();
	$('.tablemsk').hide();
	$('.tableadm').hide();
	$('.tablenevskiy').hide();
   });//end click petrd
}); //end ready*/
$(document).ready(function() {
 $("#test1").change(function() {
  if($(this).val()=='1'){
   $('.tableadm').show();
   $('.tablemsk').hide();
   $('.tablenevskiy').hide();
   $('.tablepetrd').hide();
  } else if ($(this).val()=='2') {
   $('.tablemsk').show();
   $('.tablenevskiy').hide();
   $('.tableadm').hide();
   $('.tablepetrd').hide();
  } else if ($(this).val()=='3') {
   $('.tablenevskiy').show();
   $('.tablemsk').hide();
   $('.tableadm').hide();
   $('.tablepetrd').hide();
  } else if ($(this).val()=='4') {
   $('.tablepetrd').show();
   $('.tablemsk').hide();
   $('.tableadm').hide();
   $('.tablenevskiy').hide();
  }
 });//end change

}); //end ready