class Log {
    constructor() {
      this._type = 2 // default type, set to 'info'
      this._types = [' error ', 'warning', ' info  ', 'success']
      this._colors = [
        '#ff3333', // error   - type 0
        '#ffc21b', // warning - type 1
        '#ffffff', // info    - type 2
        '#32cd32', // success - type 3
      ]
      this._typeBackground = '#224972'
      this._messageBackground = '#41b883'
      this._messageColor = '#ffffff'
    }
    set type(id) {
      this._type = id
    }
    set typeBackground(colorHex) {
      this._typeBackground = colorHex
    }
    set messageBackground(colorHex) {
      this._messageBackground = colorHex
    }
    set messageColor(colorHex) {
      this._messageColor = colorHex
    }
    get logStyles() {
      const typeStyle = [
        `background: ${this._typeBackground}`,
        `color: ${this._colors[this._type]}`,
        'border-radius: 2px 0 0 2px',
        'padding-bottom: 1px',
        'font-family: Dejavu Sans Mono, Consolas',
      ].join(';')
      const messageStyle = [
        `background: ${this._messageBackground}`,
        `color: ${this._messageColor}`,
        'border-radius: 0 2px 2px 0',
        'padding-bottom: 1px',
        'padding-right: 5px',
        'font-family: Dejavu Sans Mono, Consolas',
      ].join(';')
      return { typeStyle, messageStyle }
    }
    _send(message, type) {
      this.type = type
      return console.log(
          `%c ${this._types[this._type]} %c ${message}`,
          this.logStyles.typeStyle,
          this.logStyles.messageStyle
      )
    }
    _isObject(item) {
      return typeof item === "object"
    }
    error(message) {
      return this._isObject(message) ? console.log(message) : this._send(message, 0)
    }
    warning(message) {
      return this._isObject(message) ? console.log(message) : this._send(message, 1)
    }
    info(message) {
      return this._isObject(message) ? console.log(message) : this._send(message, 2)
    }
    success(message) {
      return this._isObject(message) ? console.log(message) : this._send(message, 3)
    }
  }
  
  const log = new Log()
  module.exports = log
  
  