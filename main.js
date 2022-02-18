let position = 0;
let comicLoader;
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
let timer = null;
function displayComic() {
    minimizeNav();
    comic(0);
    activateMouseMoveEvent();
}

function activateMouseMoveEvent() {
    // On PC
    if (screen.width >= 800)
    {
        document.addEventListener('mousemove', mouseMoveEvent);
    }
    
}

function displayArchive() {
    minimizeNav();
    document.getElementById("archive").style.display = "block";
    let t = document.getElementById("comicTable");
    if (t.children[0].children.length > 1) {
        return;
    }
    for (i = 0; i < Object.keys(comics).length; i++)
    {
        let r = t.insertRow(-1);

        let td = r.insertCell(0);

        td.innerText = comics[i].Title;
        td.style.textAlign = "left";

        td2 = r.insertCell(1).innerText = comics[i].Date;

        r.setAttribute("data-id", i);
        r.onclick = function() {return gotoComicPanel(this);};
    }
}

function gotoComicPanel(e) {
    document.getElementById("archive").style.display = "none";
    position = parseInt(e.dataset.id);
    activateMouseMoveEvent();
    comic(0);
}

function mouseMoveEvent() {
    if (timer != null) {
        clearTimeout(timer);
        timer = null;
    }

    // Move UI depending on where mouse is on screen
    if (window.event.clientY < document.getElementById("contentDisplay").clientHeight / 2) {
        document.getElementById("gui").style.top = 0;
        document.getElementById("gui").style.bottom = "";
        document.getElementById("gui").style.borderBottomLeftRadius = "12px";
        document.getElementById("gui").style.borderBottomRightRadius = "12px";
        document.getElementById("gui").style.borderTopLeftRadius = "0px";
        document.getElementById("gui").style.borderTopRightRadius = "0px";
        document.getElementsByClassName("comicArrows")[0].style.borderBottomLeftRadius = "12px";
        document.getElementsByClassName("comicArrows")[1].style.borderBottomRightRadius = "12px";
        document.getElementsByClassName("comicArrows")[0].style.borderTopLeftRadius = "0px";
        document.getElementsByClassName("comicArrows")[1].style.borderTopRightRadius = "0px";
    } else {
        document.getElementById("gui").style.bottom = 0;
        document.getElementById("gui").style.top = "";
        document.getElementById("gui").style.borderTopLeftRadius = "12px";
        document.getElementById("gui").style.borderTopRightRadius = "12px";
        document.getElementById("gui").style.borderBottomLeftRadius = "0px";
        document.getElementById("gui").style.borderBottomRightRadius = "0px";
        document.getElementsByClassName("comicArrows")[0].style.borderTopLeftRadius = "12px";
        document.getElementsByClassName("comicArrows")[1].style.borderTopRightRadius = "12px";
        document.getElementsByClassName("comicArrows")[0].style.borderBottomLeftRadius = "0px";
        document.getElementsByClassName("comicArrows")[1].style.borderBottomRightRadius = "0px";
    }
    
    document.getElementById("gui").style.display = "flex";

    setTimeout(() => {
        document.getElementById("gui").style.opacity = 1;
    }, 10);

    timer=setTimeout(mouseStopped, 1000);
}

function mouseStopped(){                                 // the actual function that is called
    document.getElementById("gui").style.opacity = 0;
    setTimeout(() => {
        document.getElementById("gui").style.display = "none";
    }, 200);
    
}

function gotoMenu() {
    document.removeEventListener('mousemove', mouseMoveEvent)
    document.getElementById("gui").style.display = "none";
    document.getElementsByClassName("comic")[0].style.backgroundImage = "none";

    document.getElementById("archive").style.display = "none";
    maximizeNav();
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
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    document.getElementsByClassName("comic")[0].style.minHeight = (100 - v2)+"vh";
}

var width;
var heighth;
function comic(direction)
{
    mouseMoveEvent();
    position += direction;
    if (position === -1) {position = comicsLength - 1;}
    if (position === comicsLength) {position = 0;}
    var urlString = "url('comics/"+comics[position].FileName+"')";
    //var urlString = "comics/"+comics[position].FileName;
    //document.getElementById("comicPanel").src = getMeta(urlString);
    document.getElementsByClassName("comic")[0].style.backgroundImage = urlString;
    //document.getElementById("comicTitle").innerHTML = comics[position].Title;
    //document.getElementById("comicDate").innerHTML = comics[position].Date;
}
/*
function getMeta(url) {
    const img = new Image();
    img.addEventListener("load", function() {
        //document.getElementById("comicPanel").width = this.naturalWidth;
        //document.getElementById("comicPanel").heighth = this.naturalHeight;
    });
    img.src = url;
    return img.src;
}
*/
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

function sortTable(n, e) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById(e);
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /* Loop through all table rows (except the
        first, which contains table headers): */
        for (i = 1; i < (rows.length - 1); i++) {
            // Start by saying there should be no switching:
            shouldSwitch = false;
            /* Get the two elements you want to compare,
            one from current row and one from the next: */
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            /* Check if the two rows should switch place,
            based on the direction, asc or desc: */
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
                } else if (dir == "desc") {
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                        // If so, mark as a switch and break the loop:
                        shouldSwitch = true;
                        break;
                    }
                }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark that a switch has been done: */
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            // Each time a switch is done, increase this count by 1:
            switchcount ++;
        } else {
            /* If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again. */
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}
