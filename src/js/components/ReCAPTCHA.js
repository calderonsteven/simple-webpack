const defaultReCAPTCHAconfig = {
    sitekey : '6LezghAUAAAAAEjvX07b7ZvJMIJK_sFxiRlyq482'
};

/**
 * @class ReCAPTCHA
 * @description render the google reCAPTCHA Element
 */
export default class ReCAPTCHA {
  constructor(container, config = {}) {
    this.container = container;
    this.config = Object.assign(defaultReCAPTCHAconfig, config);

    this.loadRecaptchaScript()
        .then(this.renderRecaptcha.bind(this));
  }

  loadRecaptchaScript() {
    return new Promise((resolve, reject) => {
      if(window.grecaptcha) {
        resolve();
        return;
      }

      const urlPath = 'https://www.google.com/recaptcha/api.js?onload=ReCAPTCHACallback&render=explicit';
      const headElm = document.querySelector('head');
      const script = document.createElement('script');

      script.src = urlPath;
      script.async = true;
      script.defer = true;
      script.onerror = () => reject();
      window.ReCAPTCHACallback = () => resolve();

      headElm.appendChild(script);
    });
  }

  renderRecaptcha() {
    window.ReCAPTCHACallback = null;
    grecaptcha.render(this.container, this.config);
  }

  destroy() {
    this.container.remove();
  }
}
