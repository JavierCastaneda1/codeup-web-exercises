

$(`.dbl-click-box`).dblclick(function(e){
    alert(`BOX DOUBLE-CLICKED`);
});

$(`#dark-mode-btn`).click(()=>{
    $(`body`).toggleClass(`dark-mode`);
})

$(`#uppercase`).hover(()=>{
    $(`#lowercase`).text($(`#uppercase`).text().toLowerCase());
});

let counter = 0;
setInterval(function () {
    counter ++;
    $(`#counter`).text(counter)
}, 1000);


$(`#list-chars-btn`).click((e) =>{
    e.preventDefault();
    let str = $(`#characters`).val();
    str = str.split(``);
    str.forEach((l)=>{
        $(`#characters-list`).append(`<li>${l}</li>`);
    });
})

$(`#clean-animal-list-btn`).click(()=>{
    // let allLis = $(`.animal-list-item`);
    // console.log(allLis[0].text());
    // for (let i=0; i< allLis.length; i++){
    //     let str = allLis[i].text();
    //     let nextEl = allLis[i].next();
    //     let nextText = nextEl.text();
    //     nextEl.text(`${str} ${nextText}`);
    //     allLis[i].remove();
    // }
    $(`.animal-list-item`).each(function (){
        let str = $(this).text();
        let next = $(this).next().text();
        $(this).text(` ${next} ${str}`);
        $(this).next().remove();
    })
});
//
// $(`span`).parent(`div`).hover(function(){
//
//        $(this).children(`span`).css("visibility", "visible")
//
//
// })

$('div.hidden-letters > div').hover(function() {
    $(this).children('span').css('visibility', 'visible')
})

//        // .css("visibility", "visible")
//
// })

   