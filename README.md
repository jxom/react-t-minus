# React T-Minus

> A React component to handle countdowns

<p align="center"><img src="./react-t-minus.png" width="300px"></img></p>

## Install

`npm install react-t-minus`

## Example

```jsx
import T from 'react-t-minus';

<T
  minus={10}
  onComplete={() => console.log('blast off!')}
  onTick={({ secondsLeft }) => console.log(secondsLeft)}
>
  {({ isComplete, secondsLeft }) =>
    isComplete ? (
      <img src="https://media.giphy.com/media/26xBEamXwaMSUbV72/giphy.gif" alt="rocket launch" />
    ) : (
      <div>{secondsLeft} seconds until launch...</div>
    )
  }
</T>
```

### More examples

- [Storybook](https://jxom.github.io/react-t-minus/)
- [Storybook Stories](https://github.com/jxom/react-t-minus/blob/master/src/__stories__/index.stories.js)

## Props

### minus

Type: `number`

The number (in seconds) to countdown from.

### onComplete

Type: `function()`

The function to invoke when the countdown is complete.

### onTick

Type: `function({ secondsLeft: number })`

The function to invoke per tick of the countdown. Also includes how many seconds are left (`secondsLeft`).

### Render props

#### isComplete

Type: `boolean`

Returns whether or not the countdown is complete

#### secondsLeft

Type: `number`

Returns the amount of seconds left

## License

MIT © [jxom](http://jxom.io)
