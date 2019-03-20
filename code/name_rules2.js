const address = "One Infinite Loop, Cupertino 95014"
const cityZipCodeRegex = /^...magic_regexp...?$/

// Bad:
saveCityZipCode(
  address.match(cityZipCodeRegex)[1],
  address.match(cityZipCodeRegex)[2]
)

// Good:
const [, city, zipCode] = address.match(cityZipCodeRegex) || []
saveCityZipCode(city, zipCode)
