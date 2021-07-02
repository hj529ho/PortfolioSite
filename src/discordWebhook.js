import axios from 'axios';

class discordWebhook {

  #content='';
  #username='';
  #URL='https://discord.com/api/webhooks/860373609260253223/ulJYUJQkr8e-n_K0CdrHhXoaOOy5rchxrBhATuDgnMLTKU-3Mguaaq0LG-ejez1CJNc-'

  setContent(content,username)
  {
    this.#content= content
    this.#username=username
  }

  sendMessage = async () => { 
      const response = await axios.post(this.#URL, {
        username : this.signupNickname,
        content: this.#content,
        password  : this.#signupPassword
      }).then(()=> {
        alert(this.#username+" 님! 연락 감사합니다. 곧 메일로 답신 드리겠습니다!");
      }).catch((error) => {
        if (error.response.status == 400) {
        }
      })  
  }
};
export default discordWebhook