# atombuttons

![Atom Buttons Example](https://i.imgur.com/vR9ZaTb.png)

### Features
- Easy to use
- Different States
    - Primary
    - Secondary
    - Danger
    - Ghost
    - Disabled
- Material Icon Buttons supported
    - Icon only button
    - Icon with text
    - Left and Right aligned buttons
- Override styles with your own

## Installation

```shell
npm install atombuttons --save
```

## API

### Import and Use

#### Add Material Icons CDN
For using the icon feature, you must include Material Design Icons.
```
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
```

```js
import AtomButton from "atombuttons";
```

### Props

| Name  | Type  | Default  | Description  |
|---|---|---|---|
| size  | `enum["sm", "md", "lg"]` | `"md"`  | Defines the `size` of button  |
| state  | `enum["primary","secondary","ghost","danger"]`  | `"primary"`  | The color scheme of button. Defaults to `primary`  |
| disabled  |  `boolean` | `false`  | if `true`, disables the button  |
|  icon | Material Icon Name  | null  | Icons can be picked up from here -> https://fonts.google.com/icons  |
|  iconAlignment | `enum["left", "right"]`  | `"left"`  |  Aligns the chosen icon to `left` or `right` |
|  children | HTML element  | null  | if specified, it's wrapped in a <span> tag  |
| rounded  | `boolean`  | `false`  | Makes the buttons rounded  |
| roundEdge  |  `boolean` | `false`  | Makes the buttons slightly round edged  |
| tooltip  |  `string` | null  | It adds a tooltip around the button  |
|  overrideStyles | css `object`  | `{}`  | applies the object to `style{{}}` property |

## License

Licensed under the [MIT License](https://github.com/Bttstrp/bootstrap-switch/blob/master/LICENSE).