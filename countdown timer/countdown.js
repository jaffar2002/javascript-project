const endDate = '31 December 2022 12:00 AM';

const inputs = document.querySelectorAll('input')
document.getElementById("endDate").innerText = endDate;

function clock (){
    const end = new Date (endDate)
    const now = new Date();
    const diff = (end - now) / 1000;

    if (diff < 0) return ;
    //convert into days
    inputs[0].value = Math.floor(diff / 3600 / 24);
    //convert into hours
    inputs[1].value = Math.floor(diff / 3600) % 24;
        //convert into minutes
    inputs[2].value = Math.floor(diff / 60) % 60;
        //convert into seconds
    inputs[3].value = Math.floor(diff) % 60;
}
clock()

setInterval(
    () => {
        clock()
    },
    1000


)