let count = 0

document.getElementById('increment').addEventListener('click', () => {
  count++

  document.getElementById('count').textContent = count
})