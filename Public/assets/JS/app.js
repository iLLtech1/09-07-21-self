//Axios handler
const {
  axios,
  slert
} = window

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

  //create an event listener for for the USERS Form on the index HTML
  document.getElementById('addUser').addEventListener('click', event => {
    event.preventDefault()

    const user = {
      name: document.getElementById('name').value,
      age: parseInt(document.getElementById('age').value)
    }

    axios.post('/user', user)
    .then(() => alert('User Created!'))
    .catch(err => console.err(err))

  })

  document.getElementById('getUser').addEventListener('click', event => {
    event.preventDefault()

    const name = document.getElementById('search').value

    // axios.get(`/user?name=${name}`)
    axios.get(`/user/${name}`)
    .then(({ data:user }) => {
      console.log(user)
    })
    .catch(err => console.error(err))
  })