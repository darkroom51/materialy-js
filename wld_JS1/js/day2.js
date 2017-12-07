/*var a = '1';

if (a === 1) {
    console.log(1);

} else if (a === '1'){
    console.log(2);
} else if (a === 2) {
    console.log(a);
} else{
    console.log(0);
}*/

var a = "1";
switch (a){
    case 1:
        console.log(1);
        break;
    case "1":
        console.log(2);
        break;
    case 2:
        console.log(a);
        break;
    default:
        console.log(0);
}
