# <Page/>

Page component is a wrapper component which allows you to use the sticky header component.
<br/>
The PageHeader component is the header implementation that will be changed when scrolling down inside the page.

## Properties
| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| backgroundImageUrl | string | null | false | Background image url of the header beackground |
| maxWidth | number | null | false | Sets the max width of the header and the content |
| sidePadding | number | null | false | Sets padding of the sides of the page |
| gradientClassName | string | null | false | Header background color class name, allows to add a gradient to the header |
| gradientCoverTail | bool | true | false | Should gradient cover Page.Tail |

## Children
| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| Page.Header | Page.Header | null | true | The PageHeader object which defines the components within the Header |
| Page.Tail | Page.Tail | null | false | A placeholder for a component which sticks to the bottom of the header. Page.Tail.children receive `minimized` flag |
| Page.Content | Page.Content | null | true | A placeholder for the page scrollable body, support `fullScreen` property which spans the content on the available area |

## Usage
When using the `Page` component it is mandatory to apply styles to it's container.
<br/>
The component by design needs to be contained in a container otherwise the scroll won't work.
<br/>
The necessary style for the container is:
<br/>
```
height: 100vh;
display: flex;
flex-flow: column;
min-height: 0;
```
A live example is available <a href="https://wix.github.io/wix-style-react/?selectedKind=2.%20Layout&selectedStory=2.6%20%2B%20Page%20Example">here</a>.

## Gradient
You can generate Gradient CSS <a href="https://www.cssmatic.com/gradient-generator">here</a>.
