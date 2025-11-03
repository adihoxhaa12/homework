function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie(){
    var x = document.querySelector("#inputi").value;
document.querySelector("#adi").innerHTML=x;
var user=getCookie("username")
if(aadi !=""){
    document.querySelector("#adi").innerHTML=aadi;
} else {
    aadi=prompt("Please enter your username");
    if( aadi !=""&& aadi !=null){
        setCookie("username",aadi,365)
    }
}

}

