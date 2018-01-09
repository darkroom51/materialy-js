function jQueryLike(selector) {
    var nodeList   = document.querySelectorAll(selector)
    var jQueryLikeObject = {}

    for (var i=0; i < nodeList.length; i++)
        jQueryLikeObject[i] = nodeList[i]  //!!!!! WAZNE TO NIE SA TABLICE TYLKO OBIEKTY a[1] === {1:a}

    jQueryLikeObject.lenght = i;
    jQueryLikeObject.find = function(selector){
      return this
    }

    return jQueryLikeObject
}