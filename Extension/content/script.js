window.onload = () => {
  setTimeout(() => {
    const element = document.getElementById('app').children[0];

    console.log(element.classList);
    if (element) {
      if (element.classList.contains('app-wrapper-web')) {
        element.classList.remove(['app-wrapper-web']);
        console.log('removed');
      }
      console.log(element.classList);
    }
  }, 5000);
};
console.log('script loaded...');
