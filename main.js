function myFunc(){
    var CkBox = document.getElementById('CheckBox');

    if(CkBox.checked == true){
        document.getElementById('bdy').style.backgroundColor = 'black';
    }
    else{
        document.getElementById('bdy').style.backgroundColor = 'white';
    }
}