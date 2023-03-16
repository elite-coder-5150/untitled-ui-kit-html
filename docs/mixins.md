## This is a collection of mixins that i have created for this project

1. **xl-desktop** - This mixin is used to set the width of the element to 100% 
 of the screen size. This is used for the desktop version of the website. this 
 mixin is designed to create a media query for a specific screen size. 

2. The **xl-desktop** as the name suggests, that it's intended for extra large screens
    
#### usage


1. The **@media** rul creates a media query that targets screen with a width greater tha or equal to the value of the **$xl-desktop** variable.
2. The **@content** keyword is used to include the content of the mixin inside the media query.

Here is an example of how you might use this mixin in your project.

```scss
    @mixin xl-desktop {
        @media (min-width: 1200px) {
            @content;
        }
    }
```

The compiled code looks like this:

```css
    @media (min-width: 1200px) {
        .container {
            width: 100%;
        }
    }
```

This would apply the styles inside the **@include** block only to screens with 
a width greater than or equal to 1200px.

<hr>

3. **px-to-rem** - This is a sass function that converts pixels to rem units.
###Here is an example of how you might use this function in your project.

```scss
@import '../scss/partials/mixins';
    .container {
        font-size: px-to-rem(16);
    }
```

Here's what it does:
1. the function take in two parameters: **px** value to be converted, and 
 **value**, which is the base font size in pixels. By default the **value**
    is set to 16px.
