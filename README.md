# Picto

<center>
    <img src="public/picto.svg">
</center>

<br>
<br>

## Easily showcase your skills with flare 🔥

**Picto** is a tool that generates dynamic images to showcase the programming
languages, technologies, and tools you’ve learned.

#### ✨ +100 icons in our library currently!

Check the [**full list**](icons/README.md).

## 🤔 How to create your own **Picto**?

That's easy! Picto allows you to customize the appearance and layout of the
generated image using query parameters.

```sh
https://mypicto.xyz/icons
    ?i=php,ruby,javascript,react,laravel
    &cols=4
```

| Parameter | Type             | Default | Description                                                                |
| --------- | ---------------- | ------- | -------------------------------------------------------------------------- |
| i         | string           | -       | Icon identifier                                                            |
| cols      | string (numeric) | 8       | Number of columns to display                                               |
| size      | string (numeric) | 100     | Icon size                                                                  |
| bg        | string           | -       | Background setting (`none` or empty string)                                |
| rounded   | string           | -       | Border radius setting (`none`, `rounded` or numeric: `0`, `6`, `12`, etc.) |
| playful   | string (booleam) | false   | Add _pizzazz_ to the icon row                                              |
| shadow    | string (size)    | -       | Add drop shadow to the icons' background (`xs`, `sm`, `md`, `lg`, `xl`)    |

## Examples

### No rounded corners and 2 columns

<img src="https://mypicto.xyz/icons?i=html,css,javascript,python&round=none&cols=2&size=22">

```
https://mypicto.xyz/icons?i=html,css,javascript,python&round=none&cols=2
```

### No background

<img src="https://mypicto.xyz/icons?i=svelte,react,php,auth0,vue,python&bg=none&size=22">

```
https://mypicto.xyz/icons?i=svelte,react,php,auth0,vue,python&bg=none&cols=4
```

### Plaful 8 column showcase

<img src="https://mypicto.xyz/icons?i=javascript,react,11ty,svelte,unity,pytorch,postman,premiere&playful=true&cols=8&size=22">

```
https://mypicto.xyz/icons?i=javascript,react,11ty,svelte,unity,pytorch,postman,premiere&playful=true&cols=8
```

## 📍 Roadmap

- WIP: Add theming, light, dark & auto
- Add more icons, of course (Open an Issue to add _your_ missing icon).
- Add kits/groups (MERN, MEAN, LAMP, etc)
- Improve... erm, add documentation
- Confidence / Skill Level

## Contributing

This project was made to test the wonderful
[Deno 2.0](https://github.com/denoland/deno), but I decided to open this up to
build it publicly.

If you find it helpful, please do not forget to ⭐ this repo!

After reading CONTRIBUTING.md, feel free to contribute adding icons. Otherwise,
open an issue and I'll try to solve it.

## Acknowledgements

- This project is heavily inspired by the amazing tool created by
  **[tandpfun](https://github.com/tandpfun)**:
  **[skill-icons](https://github.com/tandpfun/skill-icons)**.
- A lot of icons were created using the insanely helpful stuff in
  **[SVGRepo](https://www.svgrepo.com/)**.
