let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("#voiceSelect");

window.speechSynthesis.onvoiceschanged = () => {
	voices = window.speechSynthesis.getVoices();
	voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
	speech.voice = voices[0];
}

voiceSelect.addEventListener("change", () => {
	speech.voice = voices[voiceSelect.value];
})

document.querySelector("#play").addEventListener("click",()=>{
	speech.text = document.querySelector("#text").value;
	window.speechSynthesis.speak(speech);
});
