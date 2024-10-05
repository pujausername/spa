$(document).on('click','.fa-times',function(){
    $('.menu').hide();
})
$(document).on('click','.fa-bars',function(){
    $('.menu').show();
})

window.addEventListener("load",function() {
    const loader=document.querySelector(".loader")
    loader.classList.add("loader_hidden");
    loader.addEventListener("transitionend", () =>{
        document.body.removeChild(loader);
    })

});