const submitBtn = document.querySelector("button");
submitBtn.addEventListener("click", isEmailValid);
/*vanilla js form validation*/
function isEmailValid(emailAddr) {
  const regexCheck = new RegExp(/^[\w-]+\.)+[\w-]{2,4})?$/);
  regexCheck.test(emailAddr) ? true : false;
}
