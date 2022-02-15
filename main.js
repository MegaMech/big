var position;
var comicLoader;
const comicsLength = Object.keys(comics).length;

window.onload = function()
{
    var menus = document.getElementsByClassName("cellphoneMenuPanel")[0];
    menus.style.height = "0px";
    footerLink();
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', 'particles.json', function() {
      console.log('callback - particles.js config loaded');
    });

    setTimeout(function(){
         document.getElementById("loadspin").style.opacity = 0;
         //document.getElementById("logoImg").style.width = "450px";
         //document.getElementById("logoImg").style.marginTop = "2%";
        setTimeout(function(){
             document.getElementsByTagName("body")[0].style.overflow = "auto";
             document.getElementsByTagName("body")[0].style.position = "relative";
             //document.getElementsByTagName("nav")[0].style.zIndex = "15";
             //document.getElementsByTagName("nav")[0].style.opacity = "1";
             document.getElementById("contentDisplay").style.zIndex = "1";
             document.getElementById("contentDisplay").style.opacity = "1";
             document.getElementsByTagName("footer")[0].style.zIndex = "1";
             document.getElementsByTagName("footer")[0].style.opacity = "1";
             document.getElementById("loadspin").remove();
             position = Object.keys(comics).length - 1;
        }, 1000);

    }, 1000);
    comicLoader = document.getElementById("comicLoader");
    //comicLoader.src = "url('comics/"+comics[0].FileName+"')";
    comicLoader.src = "comics/"+comics[0].FileName;

    window.addEventListener('resize', vh);
}

function menu()
{
    var menus = document.getElementsByClassName("cellphoneMenuPanel")[0];
    if (menus.clientHeight == "375") {
        menus.style.height = "0px";
    }
    else {
        menus.style.height = "375px";
    }
    return true;
}

function displayComic() {
    minimizeNav();
    comic(0);
    // On PC
    if (screen.width >= 800)
    {
        document.addEventListener('mousemove', e => {
            //if (timer) {
            //    clearTimeout(timer);
            //}
            //timer=setTimeout(mouseStopped,300);
        });
    }
}

function mouseStopped(){                                 // the actual function that is called
    document.getElementById("gui").style.display = "none";
}

function minimizeNav() {
    document.getElementsByTagName("nav")[0].style.display = "none";
    //document.getElementById("gui").style.display = "grid";
}

function maximizeNav() {
    document.getElementsByTagName("nav")[0].style.display = "block";
    //document.getElementById("gui").style.display = "none";
}

function vh() {
    let v = document.getElementsByTagName("footer")[0].offsetHeight;
    let v2 = (100 * v) / Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    console.log(v2);
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    console.log((100 - v2)+"vh");
    document.getElementsByClassName("comic")[0].style.minHeight = (100 - v2)+"vh";
}

var width;
var heighth;
function comic(direction)
{
    position += direction;
    if (position === -1) {position = comicsLength - 1;}
    if (position === comicsLength) {position = 0;}
    var urlString = "url('comics/"+comics[position].FileName+"')";
    //var urlString = "comics/"+comics[position].FileName;

    console.log(urlString);
    //document.getElementById("comicPanel").src = getMeta(urlString);
    document.getElementsByClassName("comic")[0].style.backgroundImage = urlString;
    //document.getElementById("comicTitle").innerHTML = comics[position].Title;
    //document.getElementById("comicDate").innerHTML = comics[position].Date;
}

function getMeta(url) {
    const img = new Image();
    img.addEventListener("load", function() {
        //document.getElementById("comicPanel").width = this.naturalWidth;
        //document.getElementById("comicPanel").heighth = this.naturalHeight;
    });
    img.src = url;
    return img.src;
}

function footerLink()
{
    var o = "ew";
    var idf = "b";
    var c = "o";
    var efjei = "n";
    var idje = "nce"
    var ei = "s";
    var ehdidoe = "@";
    var a = "ma";
    var ioda = "a";
    var l = "e";
    var agh = "c"
    var edds = "u";
    var dats = ".";
    var mn = "t";
    var ied = "p";
    var d = "i";
    var ijd = "d";
    var z = "l";
    var x = "r";

    document.getElementsByClassName("footerLink")[0].href = a+d+z+c+":"+ei+ied+ioda+efjei+ijd+x+o+ehdidoe+edds+ioda+z+idf+l+x+mn+ioda+dats+agh+ioda;
    document.getElementsByClassName("footerLink")[1].href = a+d+z+c+":"+ei+ied+ioda+efjei+ijd+x+o+ehdidoe+edds+ioda+z+idf+l+x+mn+ioda+dats+agh+ioda;
    document.getElementsByClassName("footerLink")[0].innerHTML = ei+ied+ioda+efjei+ijd+x+o+ehdidoe+edds+ioda+z+idf+l+x+mn+ioda+dats+agh+ioda;
    document.getElementsByClassName("footerLink")[1].innerHTML = ei+ied+ioda+efjei+ijd+x+o+ehdidoe+edds+ioda+z+idf+l+x+mn+ioda+dats+agh+ioda;
}
