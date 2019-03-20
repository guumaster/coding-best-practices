// Bad:
function createMenu(title, body, btnText, cancellable) {
  // ...
}

// Good:
function createMenu({ title, body, btnText, cancellable }) {
  // ...
}
createMenu({
  title: "Foo",
  btnText: "Baz",
  cancellable: true,
  body: "Bar"
})
