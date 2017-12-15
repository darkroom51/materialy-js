$(function () {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", 'js/project.js', false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4)
        {
            if (rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                $('#code').html(allText);
                hljs.initHighlightingOnLoad();
                hljs.initLineNumbersOnLoad();
            }
        }
    }

    rawFile.send(null);
});