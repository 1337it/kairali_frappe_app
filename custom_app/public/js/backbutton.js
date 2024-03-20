const backbutton = document.createElement('button')

      backbutton.id = 'backbutton'

      // Attach the "click" event to your button
      button.addEventListener('click', () => {
       window.history.go(-1);
      })

      document.body.appendChild(backbutton)
