function validateForm() {
  var name = document.getElementById('name');
  var phoneno = document.getElementById('phoneno');
  var about = document.getElementById('about');
  var feedback = document.getElementById('feedback');

  if(name.value == '') {
    feedback.innerHTML = 'Please enter your name';
    return false;
  } else if(phoneno.value == '' || phoneno.value.length < 10) {
    feedback.innerHTML = 'Please enter a valid phone number';
    return false;
  } else if(about.value == '') {
    feedback.innerHTML = 'Please fill description about you';
    return false;
  } else {
    return true;
  }
}
