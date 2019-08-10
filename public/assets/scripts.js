var Bar, Baz, Foo, Txt, a, append, b;

append = function (ele, txt) {
  var div;
  div = document.createElement('div');
  div.innerHTML = txt;
  return ele.appendChild(div);
};

Txt = class Txt {
  constructor(name) {
    this.name = name;
  }

  write(label) {
    var str;
    str = `Scripted lorem ipsum text - ${label} - ` + this.name;
    return append(document.body, str);
  }

};
Foo = class Foo extends Txt {
  write() {
    return super.write("foo");
  }

};
Bar = class Bar extends Txt {
  write() {
    return super.write("bar");
  }

};

Baz = function () {
  var bar, foo;

  class Baz {
    write() {
      foo.write();
      return bar.write();
    }

  }

  ;
  foo = new Foo("3");
  bar = new Bar("4");
  return Baz;
}.call(this);

a = new Foo("1");
b = new Bar("2");
a.write();
b.write();

document.onreadystatechange = function () {
  var c;

  if (document.readyState === "complete") {
    c = new Baz();
    return c.write();
  }
};