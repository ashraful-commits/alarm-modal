const date_time = document.getElementById('date_time');
const result = document.querySelector('.result')
const stop = document.querySelector('.stop')
const audio_one = document.getElementById('audio')


date_time.addEventListener('submit', (e) => {
    e.preventDefault();

        const form_data = new FormData(e.target);
    const { date, time, alarm_time } = Object.fromEntries(form_data.entries());
    
    if (!date || !time || !alarm_time) {
        alert('Please set time');
        e.target.reset();
    } else {
        
        let setInt = setInterval(() => {
            timerFunction(date, time, result, setInt, audio_one, alarm_time)
        }, 1000)
        
        e.target.reset();
    }
    

})  

        stop.onclick = (e) => {
            e.preventDefault()
            audio_one.play();
            if (audio_one.play()) {
                audio_one.pause()
            } else {
                audio_one.play();
            }
            
     }