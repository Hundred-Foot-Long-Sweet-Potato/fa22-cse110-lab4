function timeCheck()
{
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
}

const myInterval = setInterval(timeCheck, 1000);

function closeInterval()
{
  //Used clearInterval instead of clearTimeout.
  clearInterval(myInterval);
}

setTimeout(closeInterval, 11000);