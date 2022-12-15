let current = {
  sub: 'INFO',
  tag: 'top5',
}

let previous = {
  sub: 'INFO',
  tag: 'top5',
}

const getClass = (className, item = document) => {
  return item.getElementsByClassName(className)
}
const getId = (id) => {
  return document.getElementById(id)
}

const showTiles = () => {
  const classes = getClass('tile')
  const menu = getId('menu-slider')
  const selector = getId('item-sorter')
  const dropdown = getId('dropdown-list')
  // const random = getId('show-random');

  const max = menu.childNodes.length
  for (let i = 0; i < max; i++) {
    const child = menu.childNodes[i]
    if (
      child.constructor.name !== 'Text' ||
      child.constructor.name !== 'HTMLAnchorElement'
    ) {
      const click = (event) => {
        const label = getId('label-container')
        let item = event.target

        if (item.nodeName == 'I') item = item.parentElement
        RemoveAttributes(menu.childNodes, 'id')
        SetAttributes(
          menu.childNodes,
          'class',
          'menu-button menu-unselected',
        )
        item.removeAttribute('class')
        item.setAttribute('class', 'menu-button')
        item.setAttribute('id', 'menu-selected')
        // history.pushState({type:'menu'}, '', '');
        // history.pushState({type:'menu'}, '', '');
        ShowCloset(item.getAttribute('value'))
      }

      child.addEventListener('click', click)

      child.childNodes.forEach((node) => {
        if (node.constructor.name === 'HTMLElement') {
          node.addEventListener('click', click)
        }
      })
    }
  }

  selector.addEventListener('click', () => {
    dropdown.classList[0].indexOf('in') > 0
      ? dropdown.setAttribute('class', 'dropdown-menu-active')
      : dropdown.setAttribute('class', 'dropdown-menu-inactive')
  })

  dropdown.addEventListener('click', (e) => {
    const label = getId('label-container')
    const item = e.target
    label.innerHTML = item.innerHTML
    current.tag = item.getAttribute('value')
    ShowCloset(current.sub)
  })

  // random.addEventListener('click', const() {
  //   var max = classes.length;
  //   for (var i = 0; i < max; i++) {
  //     Math.round(Math.random())
  //      ? (classes[i].style.display = 'block')
  //      : (classes[i].style.display = 'none');

  //     if (classes[i].getAttribute('sub').indexOf('PROJ') > -1)
  //       if (classes[i].getAttribute('tag').indexOf('RND') > -1)
  //         classes[i].style.display = 'block';
  //   }
  // })

  const RemoveAttributes = (arr, attribute) => {
    const max = arr.length
    for (let i = 0; i < max; i++) {
      child = arr[i]
      if (child.constructor.name !== 'Text')
        child.removeAttribute(attribute)
    }
  }

  const SetAttributes = (arr, attribute, value) => {
    const max = arr.length
    for (let i = 0; i < max; i++) {
      child = arr[i]
      if (child.constructor.name !== 'Text')
        child.setAttribute(attribute, value)
    }
  }

  const ShowCloset = (value) => {
    window.scrollTo(0, 0)
    previous.sub = current.sub
    current.sub = value
    const max = classes.length
    for (let i = 0; i < max; i++) Show(i, value, 'sub')
    if (!(current.sub == 'ART') && !(current.sub == 'INFO'))
      ShowBasket(current.tag)
  }

  const ShowBasket = (value) => {
    previous.tag = current.tag
    current.tag = value
    const max = classes.length
    for (let i = 0; i < max; i++)
      if (classes[i].getAttribute('sub').indexOf(current.sub) > -1)
        Show(i, value, 'tag')
  }

  const Show = (i, value, type) => {
    classes[i].getAttribute(type).indexOf(value) > -1
      ? (classes[i].style.display = 'block')
      : (classes[i].style.display = 'none')
  }

  ShowCloset(current.sub)
}

const backProject = () => {
  window.history.back()
}

window.onpopstate = () => {
  if (event.state.type == 'item') {
    const main = getId('menu')

    main.style.display = 'block'

    showTiles()
    initProjects()
  }
}

const initProjects = () => {
  const tiles = getClass('tile')

  function setEventListeners() {
    const max = tiles.length
    for (let i = 0; i < max; i += 1) {
      const tile = tiles[i]

      if (
        tile.getAttribute('sub').indexOf('INFO') > -1 ||
        tile.getAttribute('sub').indexOf('PROJ') > -1 ||
        tile.getAttribute('sub').indexOf('ART') > -1
      ) {
        const id = parseInt(tile.id)

        if (!isNaN(id)) {
          const face = getClass('face', tile)[0]
          if (face !== undefined) {
            const trigger = face.children[0]
            trigger.id = id

            trigger.addEventListener('click', loadProject, false)
          }
        }
      }
    }
  }

  function loadProject(element) {
    const id = element.target.parentNode.id
    const tiles = getClass('tile')
    const main = getId('menu')

    history.pushState({ type: 'item' }, '', '')
    history.pushState({ type: 'item' }, '', '')

    const max = tiles.length
    for (let i = 0; i < max; i += 1) {
      const tile = tiles[i]
      tile.style.display = 'none'
    }

    main.style.display = 'none'

    showProject(id)

    window.scrollTo({ top: 0, behavior: 'smooth' })

    const interfal = window.setInterval(() => {
      window.dispatchEvent(new Event('resize'))
      window.clearInterval(interfal)
    }, 30)
  }

  const showProject = (id) => {
    const items = getClass(id)

    items[1].style.display = 'block'
  }

  setEventListeners()
}

showTiles()
initProjects()
