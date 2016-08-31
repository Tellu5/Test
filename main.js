<script>
function myFunction1() {
    var x = document.forms["frm1"];
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
        text += x.elements[i].value + "<br>";
    }
    document.getElementById("demo").innerHTML = "name, date of birth, work experience";
}
function myFunction2() {
    var x = document.forms["frm2"];
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
        text += x.elements[i].value + "<br>";
    }
    document.getElementById("demo").innerHTML = "name, date of birth, work experience and waffles";
}
function myFunction3() {
    var x = document.forms["frm3"];
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
        text += x.elements[i].value + "<br>";
    }
    document.getElementById("demo").innerHTML = "name, date of birth, work experience and bears";
}
function myFunction4() {
    var x = document.forms["frm4"];
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
        text += x.elements[i].value + "<br>";
    }
    document.getElementById("demo").innerHTML = "name, date of birth, work experience and sheep";
}
function myFunction5() {
    var x = document.forms["frm5"];
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
        text += x.elements[i].value + "<br>";
    }
    document.getElementById("demo").innerHTML = "name, date of birth, work experience and mice";
}
</script>
