export default function convertHourToMinutes(time) {
  const aux = time / 60;
 const hours = parseFloat(aux.toFixed(0));
  var minutes = time % 60;

  if(minutes == 0){
    minutes = '00';
  }
  const timeInMinutes = hours + ':' + minutes;
  return timeInMinutes;
}
