// check off todos when clicked

$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
})

// delete a To-Do

$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();

});


//add todo 

$("input[type='text']").on('keypress',function(event) {

    // if the pressed key is Enter
    if(event.which == 13) {
        //get the text value from the input
        var todo = $("input[type='text']").val();
        if(todo.length > 0 ){
        // appened it ul
        $("ul").append(`<li><span><i class="fas fa-trash"></i></span> ${todo}</li>`);
        $("input[type='text']").val(""); 
        }
        
    }
});
