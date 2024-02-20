/* add to the bottom of html file: 
    <div id="overlay">
        <div id="overlayText">Tryk på skærmen</div>
    </div>
*/
var elem = document.documentElement;
document.addEventListener('click', function () {
    document.getElementById('overlay').style.display = 'none';
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
})
