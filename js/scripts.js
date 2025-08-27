const callHistoryWrapper    = document.getElementById('call-history-wrapper');
const heartCount            = document.getElementById('heart-count');

const callBtns              = document.querySelectorAll('.call-btn');
const historyClearBtn       = document.getElementById('history-clear-btn');
const heartBtns              = document.querySelectorAll('.heart-btn');

function callFeature() {
    let coinCount = document.getElementById('coin-count');
    for(const callBtn of callBtns) {
        callBtn.addEventListener('click', function() {
            const helplineService   = callBtn.parentNode.parentNode.querySelector('.helpline-service').innerText;
            const helplineNumber    = callBtn.parentNode.parentNode.querySelector('.helpline-number').innerText;
            
            if(coinCount.innerText >= 20) {
                coinCount.innerText = coinCount.innerText - 20;
                alert(`Calling ${helplineService} ${helplineNumber}`);
                callHistoryWrapper.innerHTML += `
                    <div class="single-call-history flex gap-4 justify-between items-center bg-[#fafafa] rounded-lg p-4 mb-2">
                        <div>
                            <h4 class="inter-semibold text-lg text-[#111111]">${helplineService}</h4>
                            <p class="hind-madurai-regular text-lg text-[#5c5c5c]">${helplineNumber}</p>
                        </div>
                        <p class="hind-madurai-regular text-lg text-[#111111]" id="time">${new Date().toLocaleTimeString()}</p>
                    </div>
                `;
            } else {
                alert('You don\'t have enough coins');
            }
        })
    }
}

function getHeartCount() {
    for(const heartBtn of heartBtns) {
        heartBtn.addEventListener('click', function() {
            heartCount.innerText++;
        });
    }
}

historyClearBtn.addEventListener('click', function() {
    callHistoryWrapper.innerHTML = '';
});

callFeature();
getHeartCount();