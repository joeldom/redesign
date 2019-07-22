<link rel="stylesheet" type="text/css" href="talk.css">
<!--
 ██░ ██ ▓█████  ██▓     ██▓     ▒█████      █     █░ ▒█████   ██▀███   ██▓    ▓█████▄  ▐██▌
▓██░ ██▒▓█   ▀ ▓██▒    ▓██▒    ▒██▒  ██▒   ▓█░ █ ░█░▒██▒  ██▒▓██ ▒ ██▒▓██▒    ▒██▀ ██▌ ▐██▌
▒██▀▀██░▒███   ▒██░    ▒██░    ▒██░  ██▒   ▒█░ █ ░█ ▒██░  ██▒▓██ ░▄█ ▒▒██░    ░██   █▌ ▐██▌
░▓█ ░██ ▒▓█  ▄ ▒██░    ▒██░    ▒██   ██░   ░█░ █ ░█ ▒██   ██░▒██▀▀█▄  ▒██░    ░▓█▄   ▌ ▓██▒
░▓█▒░██▓░▒████▒░██████▒░██████▒░ ████▓▒░   ░░██▒██▓ ░ ████▓▒░░██▓ ▒██▒░██████▒░▒████▓  ▒▄▄
 ▒ ░░▒░▒░░ ▒░ ░░ ▒░▓  ░░ ▒░▓  ░░ ▒░▒░▒░    ░ ▓░▒ ▒  ░ ▒░▒░▒░ ░ ▒▓ ░▒▓░░ ▒░▓  ░ ▒▒▓  ▒  ░▀▀▒
 ▒ ░▒░ ░ ░ ░  ░░ ░ ▒  ░░ ░ ▒  ░  ░ ▒ ▒░      ▒ ░ ░    ░ ▒ ▒░   ░▒ ░ ▒░░ ░ ▒  ░ ░ ▒  ▒  ░  ░
 ░  ░░ ░   ░     ░ ░     ░ ░   ░ ░ ░ ▒       ░   ░  ░ ░ ░ ▒    ░░   ░   ░ ░    ░ ░  ░     ░
 ░  ░  ░   ░  ░    ░  ░    ░  ░    ░ ░         ░        ░ ░     ░         ░  ░   ░     ░-->

<span style="height:800px;display:block;"></span><span style="height:800px;display:block;"></span>

<div style="display:block;margin:8em 0 16em;border:3px dashed #1a3acc;position:relative;background:#142a2d;font-size:12px;text-align:center;padding:1em 0"><span class=rwd-title1 style="color:#ab1acc;font-family:Roboto,sans-serif;font-size:4em;font-weight:700;text-align:center;text-shadow:0 0 #000,0 0 0 #ff00ff">Front End</span><br class=rwd-break><span class=rwd-title2 style="font-family:Roboto,sans-serif;font-size:3em;border:1px solid #0ff;color:#fff;opacity:.75;text-shadow:-2px 0 #1a3acc;padding:1.25em .25em">Top to Bottom</span><div style="position:absolute;top:90px;left:80px;right:80px;margin:auto;z-index:9;background:rgba(0,0,25,.65);text-shadow:-1px 0 #000;box-shadow:9px 9px #ccab1a;color:#0ff;padding:1.2em 4em;font-style:italic;font-weight:100;font-family:serif;font-size:1.25em;text-align:center;display:block"class=rwd-quote>vol.1 ~ Sass & Bootstrap</div></div>

<span style="height:800px;display:block;"></span>

# Welcome

# Today, I want to talk about what Front End _really_ is.

<span style="height:600px;display:block;"></span>

## Except...I only have a little bit of time

<img src="https://luckyones.carrd.co/assets/images/gallery03/3e0e140c.gif?v96265876212351" />
so lets get going...

<span style="height:800px;display:block;"></span>

<!-- ## Large topic -->

This is a **LARGE** topic.

One I've spent the last **15** years doing.

Striving for 1-1 pixel perfect layouts in the all digital mediums.

This isn't where I started though.

<br><br>

I used to just be a Graphic Designer.

<span style="height:800px;display:block;"></span>

# Affordance & Signifiers

## **Affordances** are what an object can do.

These are things that describe themselves or have some shared understanding based on assumed prior knowledge.
![tea pot](https://purepng.com/public/uploads/large/purepng.com-tea-potfood-object-pot-tea-kettle-94152462044382kts.png)

## **Signifiers** indicate parts of an object.

These help further educate how an object is intended to be used.

> “Any mark or sound, any perceivable indicator that communicates appropriate behavior to a person”. Therefore, signifiers indicates what the object should do, making the affordances clearer to the user. For e.g. the tires of the chair indicates it can be dragged. The arms of the chair indicates that I can rest my arms on them. The shape of the chair indicates that I can sit on it.

![kyoto university](https://www.pri.kyoto-u.ac.jp/images/top2014.png)
![monkey](https://media.npr.org/assets/img/2016/01/07/macaca_nigra_self-portrait_custom-a8e13582c9ca6f71f5cd62815b8bb5d6ff112dc2-s800-c85.jpg)
[Primate Research Institute Kyoto University](https://www.pri.kyoto-u.ac.jp/)

<span style="height:800px;display:block;"></span>

# Semantics

## The branch of linguistics and logic concerned with meaning.

[0001]: https://uxdesign.cc/10-steps-to-interaction-design-ixd-6abe778cb8b8 "UX"

<span style="height:800px;display:block;"></span>

## What does it mean to have Semantic Code?

---

This means that the element should appear where it does in the code. This sounds obvious, but for some reason we as developers & product designers love to complicate things so we tell elements to be places they really have no business being and we have to do a ton of extra work to get them that way and then a ton more to test or debug.

Every element should have these properties. These not only make the element along with the page more accessible but these are also used byvarious styling elements and javascript to control the DOM.

- Role
- Name
- State
- Value

### Implicit semantics

Most HTML elements have an implicit role that defines the element’s purpose. For example the `<a>` element has an implicit role of **“link”**, the `<img>` element’s implicit role is **“graphic”** or **“image”** (depending on the platform), and the `<header>` element has an implicit role of **“banner”**.

---

# What other reason should we use semantic elements like `nav` `header` `<main>` `article` `aside` `section` `footer` ?

<span style="height:800px;display:block;"></span>

# The Path forward &rarr;

When we talk about writing front-end code it tends to fall into several categories. How you structure your files and code makes it extensible and semantic.

- **Markup**
  - Layout & Structure `containers / parent elements`
  - Navigation `pages/screens`
  - SEO / Accessibility `title / alt / role`
- **Styling**
  - Branding ``
  - Look / feel `how guidelines are applied`
- **Interaction**
  - Animation `transitions`
  - Usability `what is clickable / tappable`

<span style="height:800px;display:block;"></span>

## Navigation

---

<img src="https://media.giphy.com/media/yDZvPPaVooOU8/giphy.gif" style="width: 400px; margin: 0 auto;display:block;" />

Just a quick point about navigation. When deciding how to use components to navigate through the screens or parts of pages. Buttons are good for actions and direct path navigation but it is a good idea to differenciate between internal and external links.

```css
/* long ver */
a[href^="http://"]:not([href*="mysite.com"]),
a[href^="https://"]:not([href*="mysite.com"]),
a[href^="//"]:not([href*="mysite.com"]), {

}
/* shorter ver */
a[href*="//"]:not([href*="mysite.com"]) {
    /* external link styles, use :before or :after if you want! */
}

/*or*/
[href*="//"]:not([href*="mysite.com"]) {
  :after{
    some icon perhaps
  }
}
```

<span style="height:800px;display:block;"></span>

# Specificity

Before diving into **Bootstrap** it's important ot know about `CSS & SASS` specificity.

1. **External** style sheets, which are located in separate .css files.
2. **Internal** style sheets, which are located in the same document, usually within the `<head>` element.

```html
<head>
  <style>
    p {
      margin: 15px;
    }
  </style>
</head>
```

3. **Inline** style sheets, which are applied to specific elements at the point where they appear within the HTML code. `<p style="margin: 10px">Sample paragraph.</p>`

---

## Selectors

Along with creating classes or targeting primitive elements you can use selectors to be more or less specific to the markup.

```css
/*select child of parent*/
.parent > child {
  ...;
}

/*select next element*/
div + p {
  ...;
}

/*select all under element*/
html * {
  ...;
}

/*!important overrides*/
.class1 {
  color: red;
}
.class1 {
  color: blue !important;
}
#parent .class1 {
  color: green;
}
```

# Methods & Execution

**Layout & Structure**

I jump between writng styles or markup first, but when I get into making the styles I will first determine te layout.

> How will the object interact with the rest of the layout? Will it be `display:block;` level and not allow things around it? What should the postion of it be? Will it be relative to something or absolute to the page or parent?

---

**Presentation**
Once I have where the object will sit I will then determine if this is a one-of or a repeating section or reusbale component. The answer to that will determine

# Boxes

![cat in a box pic](https://blazepress.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTQ5MzAyOTExODM3NDE0ODUz/funny-if-it-fits-i-sits-cat-29.webp)

## 10lb of sh!t in a 5lb bag

Figuring out what type of content as well as its length and yes, even it's weight is very important to knowing how to lay it out on the screen.

<pre><code>Bootstrap @media query breakpoints


      0        768          992                1200         ~
      '     '     '     '     '     '     '     '     '     '
      &lt;---------^------------^------------------^-----------&gt;
           xs         sm              md             lg
         (phone)   (tablet)        (laptop)       (desktop)
</code></pre>

![](https://cds.cern.ch/images/CERN-HOMEWEB-PHO-2019-004-1/file?size=large)
Most of the sites and app we use on a daily basis use a framework. Whether thats a fonrt-end framework or a backend framework. On the front-end all sites use a grid to layout the content on the pages. Some of these are a different number than the other but all use something to align content.
[CERN ~ The First website](http://info.cern.ch/hypertext/WWW/TheProject.html)

## Making and Breaking the Grid

<img src="/images/2019/07/Asset 2@3x.png"/>

<span style="height:800px;display:block;"></span>

# Bootstrap

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />

    <!-- Bootstrap CSS -->
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />

    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script
      src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
      integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
      integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
      integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
```

<span style="height:800px;display:block;"></span>

# Sass

## Syntaxly Awesome Stylesheets

<img src="https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg" style="width:50%;display:inline-block;float:left;max-height:300px;"/>
<img src="https://upload.wikimedia.org/wikipedia/commons/7/72/Gulp.js_Logo.svg" style="width:50%;display:inline-block;float:left;max-height:300px;"/>


```css
.btn.selected,
.btn:active,
[open] > .btn {
  border-color: rgba(27, 31, 35, 0.35);
  box-shadow: inset 0 0.15em 0.3em rgba(27, 31, 35, 0.15);
}
```

```scss
.btn {
  &.selected,
  &:active,
  [open] > .btn {
    border-color: rgba(27, 31, 35, 0.35);
    box-shadow: inset 0 0.15em 0.3em rgba(27, 31, 35, 0.15);
  }
}
```

```scss
.family {
  .parent {
    .child {
      ...
    }
  }
}
```

## SASS vs SCSS

```sass
//SASS
$color: red

=my-border($color)
  border: 1px solid $color

body
  background: $color
  +my-border(green)

```

```scss
//SCSS
$color: red;

@mixin my-border($color) {
  border: 1px solid $color;
}

body {
  background: $color;
  @include my-border(green);
}
```

## What are the

<span style="height:800px;display:block;"></span>

##...but first NPM & GULP

![](https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1280px-Npm-logo.svg.png)

Being that **SASS** & **LESS** are based on _Ruby_ [(did run on Ruby as of March 2019)][57e83682] and _Java_ we need to set up the system processes to be able to read, process, render, and output the files that will be used by our site our app.

[57e83682]: https://sass-lang.com/ruby-sass "bye bye ruby sass"

```javascript
var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");
var concat = require("gulp-concat");
var browserSync = require("browser-sync");
var useref = require("gulp-useref");
var beautify = require("gulp-beautify");
var prettify = require("gulp-prettify");
var uglify = require("gulp-uglify");
var gulpIf = require("gulp-if");
var cssnano = require("gulp-cssnano");
var imagemin = require("gulp-imagemin");
var cache = require("gulp-cache");
var swig = require("gulp-swig");
var del = require("del");
var runSequence = require("run-sequence");

//THIS NEEDS ADJUSTED
//var config = require('./config.json');

// Basic Gulp task syntax
gulp.task("hello", function() {
  console.log(
    "//////////////////////////////////////////////////////////   Started"
  );
});
gulp.task("bye", function() {
  console.log(
    "//////////////////////////////////////////////////////////   Finished"
  );
});

// Development Tasks
// -----------------

// Start browserSync server
gulp.task("browserSync", function() {
  browserSync({
    server: {
      //baseDir: "style-guide",
      baseDir: "./",
      directory: true,
      index: "index.html"
    }
  });
});

//Run SASS preprocess
gulp.task("sass", function() {
  //return gulp.src('style-guide/sass/**/*.scss') // Gets all files ending with .scss in style-guide/scss and children dirs
  return (
    gulp
      //.src("style-guide/sass/global.scss") // Gets specific file
      .src("./sass/global.scss") // Gets specific file
      // .pipe(sourcemaps.init())
      // .pipe(sourcemaps.write("."))
      .pipe(sass().on("error", sass.logError)) // Passes it through a gulp-sass, log errors to console
      .pipe(gulp.dest("./css")) // Outputs it in the css folder
      .pipe(
        browserSync.reload({
          // Reloading with Browser Sync
          stream: true
        })
      )
  );
});

gulp.task("prettify", function() {
  gulp
    .src("style-guide/**/*.html")
    .pipe(prettify({ indent_size: 2 }))
    .pipe(gulp.dest("dist"));
});

// Watchers
gulp.task("watch", function() {
  gulp.watch("./sass/**/*.scss", ["sass"]);
  gulp.watch("./*.html", browserSync.reload);
  gulp.watch("./pages/**/*.html", browserSync.reload);
  gulp.watch("./js/**/*.js", browserSync.reload);
});

// Optimization Tasks
// ------------------

// Optimizing CSS and JavaScript
gulp.task("useref", function() {
  return gulp
    .src("./*.html")
    .pipe(useref())
    .pipe(gulpIf("*.js", uglify()))
    .pipe(gulpIf("*.css", cssnano()))
    .pipe(gulp.dest("dist"));
});

// Optimizing Images
gulp.task("images", function() {
  return (
    gulp
      .src("style-guide/images/**/*.+(png|jpg|jpeg|gif|svg)")
      // Caching images that ran through imagemin
      .pipe(
        cache(
          imagemin({
            interlaced: true
          })
        )
      )
      .pipe(gulp.dest("dist/images"))
  );
});

// Copying fonts
gulp.task("fonts", function() {
  return gulp.src("style-guide/fonts/**/*").pipe(gulp.dest("dist/fonts"));
});

// Cleaning
gulp.task("clean", function() {
  return del.sync("dist").then(function(cb) {
    return cache.clearAll(cb);
  });
});

gulp.task("clean:dist", function() {
  return del.sync(["dist/**/*", "!dist/images", "!dist/images/**/*"]);
});

// Build Sequences
// ---------------

// run gulp
gulp.task("default", function(callback) {
  runSequence(
    ["hello", "sass", "prettify", "browserSync", "bye"],
    "watch",
    callback
  );
});

// run build
gulp.task("build", function(callback) {
  runSequence(
    "hello",
    "clean:dist",
    "prettify",
    "sass",
    //'compile',
    ["useref", "images", "fonts"],
    "browserSync",
    "bye",
    callback
  );
});

gulp.task("dev", function(callback) {
  runSequence(
    ["hello", "clean:dist", "prettify", "sass", "browserSync", "bye"],
    "watch",
    callback
  );
});
```

![](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png)
<span style="height:800px;display:block;"></span>

## mixins

```scss
/* SCSS */
@mixin css3-prefix($prop, $value) {
  -webkit-#{$prop}: #{$value};
  -moz-#{$prop}: #{$value};
  -ms-#{$prop}: #{$value};
  -o-#{$prop}: #{$value};
  #{$prop}: #{$value};
}
```

---

| ref                | link                                                                          |
| ------------------ | ----------------------------------------------------------------------------- |
| top 10 scss mixins | [top 10 scss mixins](https://engageinteractive.co.uk/blog/top-10-scss-mixins) |
| sass heading mixin | [heading mixin](https://jsfiddle.net/jitendravyas/cxJtc/)                     |

### Math & Numbers

Once you've beeing doing any sort of FE dev for longer than a few hours you will hopfully run into what are called **unitless measurments**. If you paid attention in school, particularly in geometry you will know what these are and how powerful they can be. Any time you see a **%** that is in essense

**css calc()**

`width: (100 / 12) * 7;`

```
img{
  display: block;
  max-width: 100%;
}
.lg-img{
  max-width: 100vw;
  width:
}
```

```
em, rem, px
vw = viewpot width
vh = viewpot height
```

## functions

```sass

  darken( $base-color, 10% )
  lighten( $base-color, 10% )
  saturate( $base-color, 20% )
  desaturate( $base-color, 20% )
  adjust-hue( $base-color, 20% )
  tint( $base-color, 10% )
  shade( $base-color, 10% )
  transparentize($base-color, .3);

```

```sass

  border: 1px solid darken($base-color, 20%);
  text-shadow: 0 -1px 0 darken($base-color, 10%);
  @include box-shadow(inset 0 1px 0 lighten($base-color, 20%));

```

```sass
  //functions.scss
  @function column-width($col, $total) {
    @return percentage($col/$total);
  }

.col-3 {
  width: column-width(3, 8);
}
.col-5 {
  width: column-width(5, 8);
}
```

[sass color functions][500a12d8]

[500a12d8]: https://sass-lang.com/documentation/functions/color "sass color functions"

<span style="height:800px;display:block;"></span>

# Bootstrap

![](/images/2019/07/githubCode.png)

<span style="height:800px;display:block;"></span>

## Frequent visitor?

What is a site you tend to find yourself returning to? Is it Facebook? Twitter? NYT? Weather channel? Youtube?

---

## When things don't work...

> What happens when you've put all the time into framing out something with markup and styling?

To begin toubleshooting problems with **CSS** & **SASS** it's important to make sure you have your files outputing `sourcemaps`. This is huge for being able to target the specific stylesheet that is styling the elements you have and also shows how properties are inherited or being overwritten.

```
screen cap of instance of great UI broken
```

## Designing for as little interaction as possible...

So you've outlined a new feature. You've thought about the logic and formatting and how it will be sent to the UI, but what about the interactions for how the user will see it or possibly interact with it.

Like most things, the simpler the better. There are some fun crazy things you can do with Javascript and Sass but you need to be asking "should you?". Something that I've constantly wrestle with how much is to much. How cool can it be but how functional should it be.

![](http://e.lvme.me/oozm79d.jpg)

### Related Info & Resources

| topic                   | description                                            | link                                                                                        |
| ----------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| tools                   | some details about it to make you look it up           | [link](https://mozilladevelopers.github.io/playground/css-grid/02-first-grid/)              |
| fonts                   | glyphicons was what was inside of bootstrap            | [Glyphicons](https://glyphicons.com/)                                                       |
| CSS Grid                | CSS Grid and Grid Inspector in Firefox                 | [css grid](https://www.mozilla.org/en-US/developer/css-grid/)                               |
| appropriate UI          | describes how less may be better with User Interaction | [Medium](https://towardsdatascience.com/designing-for-appropriate-interaction-dcaaeffb7fb5) |
| understanding semantics | what do we really mean?                                | [tink.uk](https://tink.uk/understanding-semantics/)                                         |

---

<span style="height:800px;display:block;"></span>

---

<img src="/images/2019/07/Asset 179@2x.png"/>
