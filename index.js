
document.addEventListener('DOMContentLoaded', async () => {
    const week = ['mony', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
    const data = await fetch ('data.json');
    const days = await data.json();
    const dayOfWeek = week[new Date().getDay()-1];  
    

    const items = document.querySelectorAll('.bar-chart-inner');
    
    for(const item of items){
        const itemClass = item.classList[1];
        const itemPercent = days.filter(({day}) => day === itemClass)[0].amount;
        if(itemClass == dayOfWeek){
            item.style.setProperty('--bar-back-color', 'hsl(186, 34%, 60%)');
        } else {
            item.style.setProperty('--bar-back-color', 'hsl(10, 79%, 65%)');
        }
        item.style.setProperty('--bar-height', `${itemPercent}%`);
        item.addEventListener('mouseover', () => {
        const barChar = document.createElement('div');
        barChar.classList.add('chart-hover');
        barChar.innerText = `$${itemPercent}`;
        item.closest('.bar-chart-height').prepend(barChar); 
        item.addEventListener('mouseout', () => {
            barChar.remove();
        });   
});
    }
        

});