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
  buttonText: "Baz",
  cancellable: true,
  body: "Bar"
})
