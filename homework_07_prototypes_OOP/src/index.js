document.querySelectorAll('pre code').forEach(
element => {
    const functionBody = element.textContent;

    const button = document.createElement('button');
    button.textContent = 'Run the solution';
    const callback = new Function(functionBody);
    button.addEventListener('click', callback);

    element.after(button);

    // console.log(functionBody, element);
  }
);
