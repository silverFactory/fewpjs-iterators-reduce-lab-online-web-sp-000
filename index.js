const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
 // function batteries(){
   let totalBatteries = batteryBatches.reduce((total, battery) =>
     total += battery, 0)
 // }
