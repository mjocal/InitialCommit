# READ ME NOTES

### _Hello!_

In this ReadMe file you'll find all my comments and suggestions regarding this project.

Also, I have to say I really enjoyed this challenge! It's the kind of issues I love solving.

## Styling

In order to adjust to best practices, the first thing is not to override default HTML Element's styles. We don't know how big the project will become and also is not recommended. I prefer to create classes in order to style them.

For example:

```sh
.main-header {
	font-size: 52px;
	font-weight: bold;
}
```

Instead of:

```sh
h1 {
	font-size: 52px;
	font-weight: bold;
}
```

### Use of BEM

- Is a naming convention for CSS Classes
- Helps simplify and reutilize styles for same elements and gives the code better structure

For example:

```sh
<button  class="btn btn--select">EMAIL ADDRESS</button>
<button  class="btn btn--select">PHONE NUMBER</button>
<button  class="btn btn--submit">GO!</button>

<style>
.btn {
	font-size: 24px;
	font-weight: bold;
	border-radius: 6px;
	outline: 0;
	height: 40px;
	width: 150px;
	margin-left: 25px;

	&--select {
		color: #F6BC25;
		background-color: transparent;
		border: 3px  solid  #F6BC25;
	}

	&--submit {
		color: #004A80;
		background-image: linear-gradient(225deg, #F2DA56  0%, #F6BC25  100%);
		box-shadow: 0  3px  0  0  #A6953B, inset  0  1px  0  0  #FFFFFF;
		background-color: #F6BC25;
		transition-duration: 0.6s;
	}
}
</style>
```

Instead of:

```sh
<button  class="btn-select-email">EMAIL ADDRESS</button>
<button  class="btn-select-phone">PHONE NUMBER</button>
<button  class="btn-submit-form">GO!</button>

.btn-submit-form {
	font-size: 16px;
	font-weight: bold;
	color: #F6BC25;
	background-color: transparent;
	border-radius: 6px;
	border: 3px  solid  #F6BC25;
	outline: 0;
	height: 40px;
	width: 150px;
	margin-left: 25px;
}

.btn-select-email,
.btn-select-phone {
	font-size: 24px;
	font-weight: bold;
	color: #004A80;
	background-image: linear-gradient(225deg, #F2DA56  0%, #F6BC25  100%);
	box-shadow: 0  3px  0  0  #A6953B, inset  0  1px  0  0  #FFFFFF;
	background-color: #F6BC25;
	transition-duration: 0.6s;
	border-radius: 6px;
	outline: 0;
	appearance: none;
	-webkit-appearance: none;
	width: 180px;
	margin-left: 20px;
}
```

You can check more about BEM on [this link](https://sparkbox.com/foundry/bem_by_example)

Also, to modernize the code and be more practical, I would've used a preprocessor like **SASS** for these reasons:

### Nested syntax

For example:

```sh
.btn-form-submit {
	background-color: #F6BC25;

	&:hover {
	background-color: #F2DA56;
	}
}
```

Instead of:

```sh
.btn-form-submit {
	background-color: #F6BC25;
}

.btn-form-submit:hover {
	background-color: #F2DA56;
}
```

### Use of variables

For example:

```sh
$yellow-btn: #F6BC25;

.btn-form-submit {
	background-color: $yellow-btn;
}
```

Instead of:

```sh
.btn-form-submit {
	background-color: #F6BC25;
}
```

### Importing files

- We can separate one large css file and make various scss files to import them whenever we need them
- For example, import a scss file containing all color variables used in the project

### Use of mixins

For example:

```sh
@mixin flex-properties($direction, $justify, $align) {
    display: flex;
    flex-direction: $direction;
    justify-content: $justify;
    align-items: $align;
}

.search-again {
    @include flex-properties(row, center, center);
}
```

Instead of:

```sh
.search-again {
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
}
```

### Other styling notes

- Best practices suggest we should "Mobile First", and then adjust it to tablet and desktop
- And, in case Bootstrap wasn't mandatory, I would've tried Grid Layout

## Accesibility

I would've used an accesibility tool to check whether the website has the right font sizes, colors and HTML elements for people with different disabilities.

This includes also keyboard navigation throughout the page.

The tools I'm most familiarized with are:

- [NVDA](https://www.nvaccess.org/) – Screen reader.

- [WAVE](https://wave.webaim.org/) – Accessibility Evaluation Tool.

- Inspect Elements from the DOM

## Other Notes

- I would've put it the `result.html` in a separate folder, so that only the home page `index.html` remains in the root folder.

- I also wouldn't have committed any changes to the master branch. I would have made a different branch for each feature and then merged them in a `development branch` . After that, I'd merged it to `master` once the code was tested and approved.
  > I feel more comfortable using GitFlow, in order to avoid code conflicts and keep the work clean =)
