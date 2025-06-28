VANTA.FOG({
  el: "#vanta-bg",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  highlightColor: 0xff0033,
  midtoneColor: 0x000000,
  lowlightColor: 0x000000,
  baseColor: 0x000000,
  blurFactor: 0.5,
  speed: 1.0
});
//function startCountdown(endDateStr, prefixId) {
//  const countdown = setInterval(() => {
//    const now = new Date().getTime();
  //  const endDate = new Date(endDateStr).getTime();
    //const distance = endDate - now;

    //if (distance < 0) {
     // clearInterval(countdown);
      //document.getElementById(prefixId + 'days').innerText = '0';
      //document.getElementById(prefixId + 'hours').innerText = '0';
      //document.getElementById(prefixId + 'minutes').innerText = '0';
      //document.getElementById(prefixId + 'seconds').innerText = '0';
      //return;
    //}

    //const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  //  const minutes = Math.floor((distance / (1000 * 60)) % 60);
    //const seconds = Math.floor((distance / 1000) % 60);

//    document.getElementById(prefixId + 'days').innerText = days;
//    document.getElementById(prefixId + 'hours').innerText = hours;
//    document.getElementById(prefixId + 'minutes').innerText = minutes;
//    document.getElementById(prefixId + 'seconds').innerText = seconds;
//  }, 1000);
//}

// Example usage: count down to July 31, 2025 00:00:00
//startCountdown('July 24, 2025 00:00:00', 'countdown-');
//function startCountdown(endDateStr, prefixId) {
//  const countdown = setInterval(() => {
//    const now = new Date().getTime();
//    const endDate = new Date(endDateStr).getTime();
//    const distance = endDate - now;

//    if (distance < 0) {
//      clearInterval(countdown);
//      document.getElementById(prefixId + 'days').innerText = '0';
//      document.getElementById(prefixId + 'hours').innerText = '0';
//      document.getElementById(prefixId + 'minutes').innerText = '0';
//      document.getElementById(prefixId + 'seconds').innerText = '0';
//      return;
//    }

//    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
//    const minutes = Math.floor((distance / (1000 * 60)) % 60);
//    const seconds = Math.floor((distance / 1000) % 60);

//    document.getElementById(prefixId + 'days').innerText = days;
//    document.getElementById(prefixId + 'hours').innerText = hours;
//    document.getElementById(prefixId + 'minutes').innerText = minutes;
//    document.getElementById(prefixId + 'seconds').innerText = seconds;
//  }, 1000);
//}

// Start the countdown for Out of Frame
//startCountdown('July 24, 2025 00:00:00', 'countdown-outofframe-');
//<script>
// Set the date we're counting down to
var countDownDate = new Date("July 24, 2025 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
//</script>
