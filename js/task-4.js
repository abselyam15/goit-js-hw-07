const form = document.querySelector('.login-form')

form.addEventListener('submit', function(event) {
    event.preventDefault() 

    const formData = {}
    const formElements = form.elements

    for (let i = 0; i < formElements.length; i++) {
      const element = formElements[i]

      if (element.tagName === 'INPUT') {
        formData[element.name] = element.value.trim()
      }
    }

    const values = Object.values(formData)
    const allFieldsFilled = values.every(value => value !== '')

    if (!allFieldsFilled) {
      alert('All form fields must be filled in')
      return
    }

    console.log(formData)

    form.reset()
  })


