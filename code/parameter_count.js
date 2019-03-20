// Bad:
function createMenu(title, body, buttonText, cancellable) {
  // ...
}

// Good:
function createMenu({ title, body, buttonText, cancellable }) {
  // ...
}

createMenu({
  title: "Foo",
  body: "Bar",
  buttonText: "Baz",
  cancellable: true
})
