

const timerFunction = (date, time, result,interval=null,audio=null,stop=null) => {

    const current_time = Date.now();
    const setTime = new Date(date +' '+ time);
    let orderTime = Math.floor(setTime.getTime() - current_time);
    let total_sec = Math.floor(orderTime/1000)
    let total_min = Math.floor(total_sec/60)
    let total_hour = Math.floor(total_min/60)
    let total_day = Math.floor(total_hour / 24 )

    let hour = total_hour - (total_day * 24);
    let min = total_min - (total_day * 24 * 60)-(hour * 60);
    let second = total_sec - (total_day * 24 * 60 * 60) - (hour * 60 * 60) - (min * 60);
   
    
    if (total_sec >= 0) {
        result.innerHTML = `
        <div class="d-flex justify-content-between align-items-center px-1 py-1  text-white">
        <div style="width: 100px; height: 100px" class="d-flex flex-column bg-primary shadow  px-2 py-3 text-white rounded rounded-5 ">
            <span class="d-inline-block h5">${total_day}</span>
            <span class="h5"> Day </span>
            </div>
    
        :
        <div style="width: 100px; height: 100px" class="d-flex flex-column bg-primary shadow  px-2 py-3 text-white rounded rounded-5">
        <span class="d-inline-block h5">${hour}</span>
        <span class="h5"> Hour </span>
        </div>
        :
        <div style="width: 100px; height: 100px" class="d-flex flex-column  bg-primary shadow px-2 py-3  text-white rounded rounded-5">
        <span class="d-inline-block h5">${min}</span>
        <span class="h5">Munites</span>
        </div>
        :
        <div style="width: 100px; height: 100px" class="d-flex flex-column  bg-primary shadow px-2 py-3  text-white rounded rounded-5">
        <span class="d-inline-block h5">${second}</span>
        <span class="h5">Second</span>
        </div>
        </div>                
        `

    } else {
        clearInterval(interval)
        audio.play();
        let num = 0;
        let stopInt = setInterval(() => {
            num++;
            if (num == stop) {
                audio.pause()
                clearInterval(stopInt)
            }
           
        }, 1000)
    }
    
}