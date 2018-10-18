const getSleepHours = day => {
    switch (day) {
      case 'Monday' :
        return 8;
      case 'Tuesday' :
        return 6;
      case 'Wednesday' :
        return 6;
      case 'Thursday' :
        return 7;
      case 'Friday' :
        return 6;
      case 'Saturday' : 
        return 10
      case 'Sunday' :
        return 8
    };
  };
  const getActualSleepHours = function(){
    return getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') +
  getSleepHours('Saturday') + getSleepHours('Sunday');
  };
  const getIdealSleepHours = () => {
    return idealHours = 6 * 7;
  };
  calculateSleepDebt = function(){
    actualSleepHours = getActualSleepHours();
    idealSleepHours = getIdealSleepHours();
    sleepDebt = Math.abs(idealSleepHours - actualSleepHours)
    if(actualSleepHours === idealSleepHours){
      console.log('You have slept the ideal amount!');
    } else if(actualSleepHours > idealSleepHours){
      console.log(`You have overslept by ${sleepDebt} hours!`)
    } else if(actualSleepHours < idealSleepHours){
      console.log(`You have a sleep debt of ${sleepDebt} hours! Please rest!`)
    }
  };
  
  calculateSleepDebt()
  