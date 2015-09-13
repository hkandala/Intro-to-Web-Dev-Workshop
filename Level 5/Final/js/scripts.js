function myfunc () {
  var x = 5;
  var y = 129;
  var z = (x + y)*x/y;
  alert('This is how the alert will be...');
  console.log('This is mostly used while debugging');
  console.log(z);
  document.write('This writes directly to DOM');
  var msg = prompt('Enter your message');
  if(confirm('Are you sure your msg is ' + msg + ' ?')) {
    document.write(msg);
  } else {
    document.write('Invalid');
  }
}
