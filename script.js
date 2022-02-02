let slidebar = document.querySelector(".slide-bar");
let range = document.getElementById("myRange");
let billing = document.getElementById("billing");
let pricing = document.getElementById("pricing");
let pageviews = document.getElementById("pageviews");
let shouldDiscount = billing.checked;

const billingInfos = [["10K", 8],["50K", 12],["100K", 16],["500K",24],["1M", 36]]
function updateValues(){
    let val = Number(range.value)
    let info = Math.round(val / 25);
    pricing.innerHTML = shouldDiscount ? "$" + applyDiscount(billingInfos[info][1]) : "$" + billingInfos[info][1] + ".00"
    pageviews.innerHTML = billingInfos[info][0]
    slidebar.style.background = `linear-gradient(60deg ,hsl(174, 77%, 85%) ${val}%, hsl(224, 65%, 95%) ${val}% )`;
}

function applyDiscount(n){
    return (n / 1.25).toFixed(2)
}

range.oninput = function () {
    updateValues();
}

billing.oninput = function () {
    if(billing.checked){
        shouldDiscount = true
    } else {
        shouldDiscount = false
    }
    updateValues();
}