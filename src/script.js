// 동영상 강의에 나온 코드를 그대로 실습하세요
// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.
let elInputUsername = document.querySelector('#username');
let elFailureMessage = document.querySelector('.failure-message');
let elSuccessMessage = document.querySelector('.success-message');
let elMismatchMessage = document.querySelector('.mismatch-message');
let elInputPassword = document.querySelector('#password');
let elInputPasswordRetype = document.querySelector('#password-retype');


elInputUsername.onkeyup = function () {
  if(isMoreThan4Length(elInputUsername.value)) {
    elSuccessMessage.classList.remove('hide');

    elFailureMessage.classList.add('hide');
  }
  else {
    elSuccessMessage.classList.add('hide');
    elFailureMessage.classList.remove('hide');
  }
}
elInputPasswordRetype.onkeyup = function () {
  if(isMatch(elInputPassword.value, elInputPasswordRetype.value)) {
    elMismatchMessage.classList.add('hide');
  }
  else {
    elMismatchMessage.classList.remove('hide');
  }
}

function isMoreThan4Length(value) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.\
  return value.length >= 4
}

function isMatch (elInputPassword, elInputPasswordRetype) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  if (elInputPassword === elInputPasswordRetype) {
    return true;
  }
  else {
    return false;
  }
}

