# Unit Testing Tutorial

## Enzyme basics
* render types

## Jest basics
* `expect().[comparatorMethod]`
* Putting it together with enzyme; see `basic.test.js`

## Testing props with StyledComponents
* `renderedComponent.props()`
* `renderedComponent.find()`
* DRY: `setup()`

## Testing event handlers
* `events.test.js`

## Mocking modules
`mocking.test.js`

## Mounting / Testing Lifecycle events
`lifecycle.test.js`

## Testing Higher-Order Components

## Gotchas
* Object comparison, `toEqual` + `expect.objectContaining`, not `toBe`
* If spying on prototype object (or in doubt), `jest.clearAllMocks()` between each test

## Future
* Testing mock-heavy containers
* Testing sagas (i.e. async/generator functions)
