$('#inp').keypress(function(e){
    
    if (e.which ==13){
        const todoText =$('#inp').val();
        $('#list').append(`<li><span>X</span>${todoText}</li>`);
        $('#inp').val("");
    }
})
//mark the todo as completed
$('ul').on('click', 'li',function(){
   $(this).toggleClass('completed')
});

$('#list').parent().fadeOut(700,function (e){
    $(this).remove();
})

    e.stopPropagation();
