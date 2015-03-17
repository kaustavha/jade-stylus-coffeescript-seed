append = (ele, txt) ->
  div = document.createElement('div')
  div.innerHTML = txt
  ele.appendChild(div)

class Text
  constructor: (@name) ->

  write: (label) ->
    str = "Scripted lorem ipsum text - #{label} - " + @name
    append(document.body, str)

class Foo extends Text
  write: -> super "foo"

class Bar extends Text
  write: -> super "bar"

class Baz
  foo = new Foo "3"
  bar = new Bar "4"
  write: ->
    foo.write()
    bar.write()

a = new Foo "1"
b = new Bar "2"
a.write()
b.write()
document.onreadystatechange = () ->
  if document.readyState is "complete"
    c = new Baz
    c.write()
