function getTimeRemaining(endtime) {
		const total = Date.parse(endtime) - Date.parse(new Date());
		const seconds = Math.floor((total / 1000) % 60);
		const minutes = Math.floor((total / 1000 / 60) % 60);
		const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
		const days = Math.floor(total / (1000 * 60 * 60 * 24));

	return {
	total,
	days,
	hours,
	minutes,
	seconds
	};
}

function initializeClock(id, endtime) {
	const clock = document.getElementById(id);
	const daysSpan = clock.querySelector('.days');
	const hoursSpan = clock.querySelector('.hours');
	const minutesSpan = clock.querySelector('.minutes');
	const secondsSpan = clock.querySelector('.seconds');

	function updateClock() {
		const t = getTimeRemaining(endtime);

		daysSpan.innerHTML = t.days;
		hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
		minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
		secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

		if (t.total <= 0) {
		  clearInterval(timeinterval);
		}
	}

	updateClock();
	const timeinterval = setInterval(updateClock, 1000);
}

const tanggal_nikah = new Date(2024,2,31);
initializeClock('countdown-clock', tanggal_nikah);
const btn_bokek = document.querySelector('.bokek')
const btn_copy = document.querySelector('.nyumbang')

btn_bokek.addEventListener(
  "mouseenter",
  (event) => {
    var left = Math.floor(Math.random() * window.innerWidth)
    var top = Math.floor(Math.random() * window.innerheight)

    event.currentTarget.style.position = 'absolute'
    event.currentTarget.style.left = `${left}px`
    event.currentTarget.style.top = `${top}px`

  },
  false,
);

btn_copy.addEventListener(
  "click",
  (event) => {
  	// Get the text field
	  var copyText = document.querySelector('#input').placeholder

	   // Copy the text inside the text field
	  navigator.clipboard.writeText(copyText);

	  // Alert the copied text
	  alert("Nomer rekening sudah di copy: " + copyText);
  },
  false,
);