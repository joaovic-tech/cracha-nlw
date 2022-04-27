/* Dark Mode Light Mode */
const html = document.querySelector('html')

const getStyle = (element, style) =>
  window.getComputedStyle(element).getPropertyValue(style)

const initialColors = {
  bg: getStyle(html, '--bg'),
  bgColor: getStyle(html, '--bg-color'),
  colorText: getStyle(html, '--color-text')
}

const lightMode = {
  bg: 'hsl(240, 9%, 89%)',
  bgColor: '#F8F8F8',
  colorText: '#202024'
}

const transformKey = key => '--' + key.replace(/([A-Z])/, '-$1').toLowerCase()

const changeMode = colors => {
  Object.keys(colors).map(key => {
    html.style.setProperty(transformKey(key), colors[key])
  })
}

light.style.display = 'none'
function ColorThemes(theme) {
  theme == 'dark' ? changeMode(lightMode) : changeMode(initialColors)

  if (light.style.display == 'none') {
    light.style.display = 'flex'
    dark.style.display = 'none'
  } else {
    light.style.display = 'none'
    dark.style.display = 'flex'
  }
}

/* Change Colors */
function ChangeColors(color) {
  const root = document.documentElement
  if (color == 'default') {
    root.style.setProperty('--color-primary', '#FF008E')
    root.style.setProperty('--color-secundary', '#FFCD1E')
  }
  if (color == 'blue') {
    root.style.setProperty('--color-primary', '#0047FF')
    root.style.setProperty('--color-secundary', '#57E5DC')
  }
  if (color == 'green') {
    root.style.setProperty('--color-primary', '#00FF19')
    root.style.setProperty('--color-secundary', '#57E5DC')
  }
  if (color == 'purple') {
    root.style.setProperty('--color-primary', '#D800B9')
    root.style.setProperty('--color-secundary', '#8257E5')
  }
  root.style.setProperty(
    '--img-background',
    `url(../svgs/${color}-background.svg)`
  )
  root.style.setProperty('--img-light', `url(../svgs/${color}-light.svg)`)
  root.style.setProperty('--img-range', `url(../svgs/${color}-range.svg)`)
}
