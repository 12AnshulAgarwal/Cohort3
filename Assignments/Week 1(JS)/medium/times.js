/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
   var startTime=new Date();
   var sum=0;
   for(var i=1;i<=n;i++){
    sum+=i;
   }
   var endTime=new Date();
   var duration=(endTime-startTime)/1000;
   console.log('Sum from 1 to'+n+':'+sum);
   console.log('Time taken:'+duration+'seconds');
}
calculateTime(100)
calculateTime(1000)
calculateTime(10000)
