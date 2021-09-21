//Click counter button java script
// let count = 0

// document.getElementById('increment').addEventListener('click', () => {
//   count++

//   document.getElementById('count').textContent = count
// })
//end

//Get user data and render it to the page via HTML
// axios.get('/users')
//   .then(({ data: users }) => {
//     users.forEach(({ name, age }) => {
//       const userElem = document.createElement('div')
//       userElem.innerHTML = `
//       <h1>${name}</h1>
//       <h2>${age}</h2>
//       `
//       document.getElementById('users').append(userElem)
//     })
//   })
//   .catch(err => console. error(err))
  //end

  document.getElementById('getUser').addEventListener('click', event => {
    event.preventDefault()

    const name = document.getElementById('search').value

    axios.get(`/user?name=${name}`)
    .then(({ data:user }) => {
      console.log(user)
    })
    .catch(err => console.error(err))
  })