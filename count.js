var interval = 30000;  

function doAjax() {
    $.ajax({
            type: 'GET',
            url: 'https://api.countdown.znf.sk/',
            dataType: 'json',
            success: function (data) {
                document.querySelector('.signs').textContent = data.count;
            },
    });
}

doAjax()
setInterval(doAjax, interval);

var countDownDate = new Date("Mar 11, 2020 23:59:59").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector('.remainingdaysletter').textContent = "d "
  document.querySelector('.remaininghoursletter').textContent = "h "
  document.querySelector('.remainingminutesletter').textContent = "m "
  document.querySelector('.remainingsecondsletter').textContent = "s "


  document.querySelector('.remainingdays').textContent = days 
  document.querySelector('.remaininghours').textContent = hours
  document.querySelector('.remainingminutes').textContent = minutes
  document.querySelector('.remainingseconds').textContent = seconds

    
  if (distance < 0) {
    clearInterval(x);
    document.querySelector('.signs').textContent = 0;
  }
}, 1000);