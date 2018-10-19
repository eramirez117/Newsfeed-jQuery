const $odd = $('a:odd');
const $secureLinks = $('a[href^="https://"]'); //the ^ means 'start with', in this line of code we are asking jQuery to find all anchor tags with an href attribute that starts with https
const $pdfs = $('a[href$="pdf"]'); //this code finds all anchor elements in the page that end in PDF
const $pdfCheckbox =  $("<label><input type='checkbox'>Allow pdf downloads<label>"); //creating a new checkbox dynamically with jQuery
$secureLinks.attr('target','_blank'); //to use attribute method we use pass in two arguments, the first is the attribute we want to get or change for example (src),(alt),(target), the second argument sets the value of the attribute, we do that by passing a string 
$pdfs.attr('download', true);

$odd.css('backgroundColor','lightgrey') //we can add styling with jQuery but its recommended that all styling be done in a css file
$secureLinks.addClass('secure'); //adding a class to links
$pdfs.addClass('pdf');

$pdfs.on('click', function(event){
//check if checkbox has been checked
//if zero check boxes are checked
if ($(':checked').length === 0){
//prevent download of document
event.preventDefault();
//alert the user
alert('Please check the box to allow PDF downloads');
 }
});

$('#links').append($pdfCheckbox);

$('a').each(function(){ //The each() method specifies a function to loop for each matched element.
  const url = $(this).attr('href'); //for every item in the list, we are using the attr method to get the href of (this) item we are working on, then append that href to the items parent 
  $(this).parent().append(`(${url})`);
});
