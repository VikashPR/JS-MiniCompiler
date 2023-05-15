var console = {};
console.log = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    $('#editorOutput').append(args.join(', ') + "<br />");
};
var editorSource = $('#editorJS');
function compileJS(input) {
    var source = input.text();
    //source = source.replace(/(for)/g, `<span class="conditional">for</span>`);
    eval(source);
    //console.log(input.val());
}
$(document).keydown(function (e) {
    var key = e.keyCode || e.which;
    //console.log(key, EventTarget.ctrlKey);
    if (key)
        if (key === 13 && e.ctrlKey)
            compileJS(editorSource);
});
var header = $('#header');
var screenX = $(document).width();

function adjustHeader(x, text, alt, header, size) {
    if (x > size)
        header.html(text);
    else
        header.html(alt);
    $(window).resize(function () {
        x = $(document).width();
        if (x > size)
            header.html(text);
        else
            header.html(alt);
    });
}

$('#compile').click(function () { return compileJS(editorSource); });
