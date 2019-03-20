const address = "One Infinite Loop, Cupertino 95014"
const splitAddressRe = /^...magic_regexp...?$/

// Bad:
saveCityZipCode(
  address.match(splitAddressRe)[1],
  address.match(splitAddressRe)[2]
)

// Good:
const [, city, zipCode] = address.match(splitAddressRe) || []
saveCityZipCode(city, zipCode)
