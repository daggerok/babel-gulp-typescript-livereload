export let render = (result: any) => {
  let d = document, div = d.createElement('div')

  div.innerHTML = `${result}<br/>`
  d.getElementById('content').appendChild(div)
}