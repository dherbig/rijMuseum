var elButton = document.querySelector('#mainDoor');
var backButton = document.querySelector('#return');
var ltButton = document.querySelector('#masterpieces');
var lmtButton = document.querySelector('#classicism');
var lmlButton = document.querySelector('#rococo');
var lbButnton = document.querySelector('#italianates');
var rtButton = document.querySelector('#rembrandt');
var rmtButton = document.querySelector('#baroque');
var rmlButton = document.querySelector('#mannerism');
var rlButton = document.querySelector('#renaissance');

var flDoor = document.querySelector('#flDoor');
var frDoor = document.querySelector('#frDoor');
var blDoor = document.querySelector('#blDoor');
var brDoor = document.querySelector('#brDoor');

//Elevator door open and close
    function openDoor(side, delay){
        setTimeout(function() {
            if(side == 'back'){
                blDoor.innerHTML = '<a-animation easing="ease-in-out" attribute="position" fill="backwards" from="-1.1 1.75 -19.59" to="-3.32 1.75 -19.59" repeat="1" direction="alternate" dur="7000"></a-animation>';
                brDoor.innerHTML = '<a-animation easing="ease-in-out" attribute="position" fill="backwards" from="1.1 1.75 -19.59" to="3.32 1.75 -19.59" repeat="1" direction="alternate" dur="7000"></a-animation>';
            }else{
                flDoor.innerHTML = '<a-animation  easing="ease-in-out" attribute="position" fill="backwards" from="-1.1 2.2 -15.06" to="-3.32 2.2 -15.06" repeat="1" direction="alternate" dur="7000"></a-animation>';
                frDoor.innerHTML = '<a-animation  easing="ease-in-out" attribute="position" fill="backwards" from="1.1 2.2 -15.06" to="3.32 2.2 -15.06" repeat="1" direction="alternate" dur="7000"></a-animation>';
            }
        }, delay);
    }


// gallery door animations
    // gallery entrance animation
    elButton.addEventListener('click', function(){
        elButton.innerHTML = '<a-animation easing="ease-in" attribute="position" fill="backwards" from="2.7 2.75 -14.77" to="2.7 2.75 -14.82" repeat="1" direction="alternate" dur="99"></a-animation>';
        openDoor('front', 300)
    })
    // left button animations
    ltButton.addEventListener('click', function(){
        ltButton.innerHTML = '<a-animation easing="ease-in" attribute="position" fill="backwards" from="-2.7 3.05 -19.2" to="-2.7 3.05 -19.30" repeat="1" direction="alternate" dur="99"></a-animation>';
        openDoor('back', 6000)
    })

    lmtButton.addEventListener('click', function(){
        lmtButton.innerHTML = '<a-animation easing="ease-in" attribute="position" fill="backwards" from="-2.7 2.55 -19.2" to="-2.7 2.55 -19.30" repeat="1" direction="alternate" dur="99"></a-animation>';
        openDoor('back', 6000)
    })

    lmlButton.addEventListener('click', function(){
        lmlButton.innerHTML = '<a-animation easing="ease-in" attribute="position" fill="backwards" from="-2.7 2.05 -19.2" to="-2.7 2.05 -19.30" repeat="1" direction="alternate" dur="99"></a-animation>';
        openDoor('back', 6000)
    })

    lbButnton.addEventListener('click', function(){
        lbButnton.innerHTML = '<a-animation easing="ease-in" attribute="position" fill="backwards" from="-2.7 1.55 -19.2" to="-2.7 1.55 -19.30" repeat="1" direction="alternate" dur="99"></a-animation>';
        openDoor('back', 6000)
    })

    // right button animations
    rtButton.addEventListener('click', function(){
        rtButton.innerHTML = '<a-animation easing="ease-in" attribute="position" fill="backwards" from="2.7 3.05 -19.2" to="2.7 3.05 -19.30" repeat="1" direction="alternate" dur="99"></a-animation>';
        openDoor('back', 6000)
    })

    rmtButton.addEventListener('click', function(){
        rmtButton.innerHTML = '<a-animation easing="ease-in" attribute="position" fill="backwards" from="2.7 2.55 -19.2" to="2.7 2.55 -19.30" repeat="1" direction="alternate" dur="99"></a-animation>';
        openDoor('back', 6000)
    })

    rmlButton.addEventListener('click', function(){
        rmlButton.innerHTML = '<a-animation easing="ease-in" attribute="position" fill="backwards" from="2.7 2.05 -19.2" to="2.7 2.05 -19.30" repeat="1" direction="alternate" dur="99"></a-animation>';
        openDoor('back', 6000)
    })

    rlButton.addEventListener('click', function(){
        ltButton.innerHTML = '<a-animation easing="ease-in" attribute="position" fill="backwards" from="2.7 1.55 -19.2" to="2.7 1.55 -19.30" repeat="1" direction="alternate" dur="99"></a-animation>';
        openDoor('back', 6000)
    })

// Animates a button in the gallery that reopens the elevator doors.
backButton.addEventListener('click', function(){
    backButton.innerHTML = '<a-animation easing="ease-in" attribute="position" fill="backwards" from="-3.1 2.75 -19.87" to="-3.1 2.75 -19.79" repeat="1" direction="alternate" dur="99"></a-animation>';
    openDoor('back', 700);
})