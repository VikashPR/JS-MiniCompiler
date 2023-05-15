
let console: any = {};
console.log = (...args) => {
    $('#editorOutput').append(`${args.join(', ')}<br />`);
};

let editorSource: any = $('#editorJS');


function compileJS(input: any) {
    let source: string = input.text();
    //source = source.replace(/(for)/g, `<span class="conditional">for</span>`);
    eval(source);
    //console.log(input.val());
} 

$(document).keydown((e) => {
    let key: any = e.keyCode || e.which;
    //console.log(key, EventTarget.ctrlKey);
    if (key)
        if (key === 13 && e.ctrlKey)
            compileJS(editorSource)
    
});

let header: any = $('#header');
let screenX: number = $(document).width();

adjustHeader(screenX, header, 1020);

function adjustHeader(x: number, text: string, alt: string, header: any, size: number) {
    if (x > size)
        header.html(text);
    else
        header.html(alt);
    $(window).resize(() => {
        x = $(document).width();
        if (x > size)
            header.html(text);
        else
            header.html(alt);
    });

}

let isShowing: boolean = false;

$('#compile').click(() => compileJS(editorSource));

