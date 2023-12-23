function startTimer() {
	const durationInSeconds = document.getElementById('durationInput').value

	if (!isNaN(durationInSeconds) && durationInSeconds > 0) {
		updateTimer(parseInt(durationInSeconds, 10))
	} else {
		alert('Invalid input. Please enter a valid number greater than 0.')
	}
}

function updateTimer(durationInSeconds) {
	const hours = Math.floor(durationInSeconds / 3600)
	const minutes = Math.floor((durationInSeconds % 3600) / 60)
	const remainingSeconds = durationInSeconds % 60

	const formattedTime = `${String(hours).padStart(2, '0')}:${String(
		minutes
	).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`
	document.getElementById('timer').textContent = formattedTime

	durationInSeconds--

	if (durationInSeconds >= 0) {
		setTimeout(function () {
			updateTimer(durationInSeconds)
		}, 1000)
	} else {
		playSound()
		displayMessage('Timer has finished!')

		setTimeout(function () {
			clearMessage()
		}, 5000)
	}
}

function playSound() {
	const audio = document.getElementById('audio')
	audio.play()
}

function displayMessage(message) {
	const messageElement = document.getElementById('message')
	messageElement.textContent = message
	messageElement.style.color = '#28a745'
}

function clearMessage() {
	const messageElement = document.getElementById('message')
	messageElement.textContent = ''
	messageElement.style.color = ''
}
