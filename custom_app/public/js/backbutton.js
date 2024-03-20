const backbutton = document.createElement('button')

      // Set the button text to 'Can you click me?'
      button.innerText = 'Can you click me?'

      backbutton.id = 'backbutton'

      // Attach the "click" event to your button
      button.addEventListener('click', () => {
       window.history.go(-1);
      })

      document.body.appendChild(backbutton)
