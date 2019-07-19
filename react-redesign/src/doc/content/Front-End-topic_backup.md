<style type="text/css">
/* dark mode */
/* body, table *{background: #222;color:#fff;} */
/* body, table *{background: #142a2d;color:#fff;font-size: 13px} */
/* light mode */
/* body, table *{background: #fff;color: #777;} */
body, table *{background: #e4dfd9; color: #444 !important;}
@import url('https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i');
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono:100,100i,300,300i,400,400i,500,500i,700,700i');
* {font-family: 'Roboto Mono', sans-serif;}
hr{background-color: #1ACCAB !important;}
img{width: 100%;}
/* Headings */
h1, h2, h3, h4, h5, h6{font-family: 'Roboto', sans-serif;color: #1a3acc; border-bottom: 4px solid #1a3acc !important;}
a:link{text-decoration: none; color: #1a3acc !important; border-bottom: 1px dotted #1a3acc;}
a:hover{border-bottom: 3px solid #1a3acc;}
body blockquote{border-left: 4px solid #ab1acc; background: #d6d6d6;padding: 1em .95em;}
h1, h2, h3, h4, h5, h6{font-family: 'Roboto', sans-serif;color: #1a3acc; border-bottom: 4px solid #1a3acc !important;}
pre, code{background: #142a2d !important; color:#1ACCAB !important; font-family: 'Roboto Mono', monospace !important;}
code{color:#1ACCAB}/* #ab1acc #1ACCAB */
.syntax--scss{}
.syntax--keyword, .syntax--storage.syntax--type{color: #1a3acc;}
.syntax--css.syntax--support.syntax--property-name{color: #CCAB1A;}
/* #e4dfd9 | #ccab1a | rgba(250, 150, 250, .45)*/
.rwd-title2 { width: auto; background:rgba(26,204,171, .75);}
/* .rwd-quote{border: 1px solid magenta;} */
@media screen and (min-width: 601px){
  .rwd-break { display: none; }
	.rwd-title2 {padding: 0 0; width: 50%; background:rgba(26,204,171, .75);}
	.rwd-quote{border: 1px solid #ab1acc !important;}
}
@media screen and (max-width: 600px;){
  .rwd-title1{
    z-index: 9999;
    position: absolute;
  }
}
@media only screen and (max-width: 600px) {
  .rwd-title1{
    padding: 1em 1em 0 1em;
    box-sizing: border-box;
  }
  .rwd-title2 {padding: .85em 1em !important;}
  .rwd-quote{
    border: 1px solid #ab1acc;
    margin-top: 3.5em !important;
    position: absolute;
    top: 200px;
    left: 0 !important;
    right: 0 !important;
    width: 300px;
  }
}
.title{display: block;}
.this{color:#ccab1a;}
</style>

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

 <!-- <span style="height:800px;display:block;"></span> -->

<!-- <span style="height:800px;display:block;"></span> -->

<div style="display: block; margin:8em 0 16em; border: 3px dashed #1a3acc; position: relative; background: #142a2d; font-size: 12px; text-align: center; padding: 1em 0;">
	<span class="rwd-title1" style="color:#ab1acc;font-family: 'Roboto', sans-serif; font-size: 4em; font-weight: 700; text-align: center;text-shadow: -0px 0px #000, 0px 0px 0px magenta;">Front End</span><br class="rwd-break"/>
	<span class="rwd-title2" style="font-family: 'Roboto', sans-serif; font-size: 3em; border: 1px solid aqua; color: white; opacity: .75;text-shadow: -2px 0px #1a3acc; padding: 1.25em .25em;">Top to Bottom</span>
	<div class="rwd-quote" style="position: absolute; top: 90px; left: 80px; right: 80px; margin: auto; z-index:9; background: rgba(0, 0, 25, .65); text-shadow: -1px 0px #000; box-shadow: 9px 9px #ccab1a; color: aqua; padding: 1.2em 4em; font-style: italic; font-weight: 100; font-family: serif; font-size: 1.25em; text-align: center; display: block;">vol.1 ~ Sass & Bootstrap
	</div>
</div>

<!--
<span style="font-size:4em; line-height: .5em; position: absolute; right:85%; bottom: 25%;">&quot;</span>it's easy, just make products people want to use<span style="font-size:4em; line-height: .5em; position: absolute; left: 85%; bottom: 25%;">&quot;</span> -->
<!-- ver 3 -->

<!-- <span style="font-family: 'Roboto', sans-serif; border: 2px dashed #1a3acc; position: relative; background: rgba(250, 250, 250, .85); color:#1a3acc; font-size: 48px; font-weight: 700; text-align: center; display: block; padding: .25em .25em;">Front End <span style="font-size: .75em; background: rgba(125, 125, 125, .5); border: 2px dashed #ab1acc; color: #fff; padding: 2em 1em; ; text-shadow: .09em 0px #1a3acc; z-index: -9; font-weight: 400;">Top : Bottom</span></span>

<span style="z-index:9;background: rgba(250, 250, 250, .85); box-shadow: 8px 8px #1a3acc;color: #1a3ac; padding:1.2em 4em;font-style: italic;font-weight: 300; font-family: 'Helvetica Nueue Light' sans-serif;position: relative; text-align: center; display: block;"><span style="font-size:4em;line-height: .5em; position: absolute; right:85%; bottom: 0;">"</span>make products people want to use<span style="font-size:4em; line-height: .5em; position: absolute; left: 85%; bottom: 0;">"</span>
</span> -->

<!-- <span style="height:800px;display:block;"></span> -->

## Topic Index

1.  Tools --- [#link](https://da-14.com/blog/gulp-vs-grunt-vs-webpack-comparison-build-tools-task-runners)
2.  Welcome --- [#link](#Welcome)

# Welcome

Today I want to talk about what front end <stong>really</stong> is.

# Affordance & Signifiers

Affordances are what an object can do.

![tea pot](https://purepng.com/public/uploads/large/purepng.com-tea-potfood-object-pot-tea-kettle-94152462044382kts.png)

These are things that describe themselves or have some shared understanding based on assumed prior knowledge.

> Signifier: “Any mark or sound, any perceivable indicator that communicates appropriate behavior to a person”. Therefore, signifiers indicates what the object should do, making the affordances clearer to the user. For e.g. the tires of the chair indicates it can be dragged. The arms of the chair indicates that I can rest my arms on them. The shape of the chair indicates that I can sit on it.

![kyoto university](https://www.pri.kyoto-u.ac.jp/images/top2014.png)
![monkey](https://media.npr.org/assets/img/2016/01/07/macaca_nigra_self-portrait_custom-a8e13582c9ca6f71f5cd62815b8bb5d6ff112dc2-s800-c85.jpg)
[Primate Research Institute Kyoto University](https://www.pri.kyoto-u.ac.jp/)

[10 Steps to Interaction Design (IxD)][0001]

# Semantics

**Definition** the branch of linguistics and logic concerned with meaning.

[0001]: https://uxdesign.cc/10-steps-to-interaction-design-ixd-6abe778cb8b8 "UX"

## What does it mean to have Semantic Code?

This means that the element should appear where it does in the code. THis sounds obvious, but for some reason we as developers & product designers love to complicate things so we tell elements to be places they really have no business being and we have to do a ton of extra work to get them that way and then a ton more to test or debug.

Every element should have these properties. These not only make the element along with the page more accessible but these are also used byvarious styling elements and javascript to control the DOM.

- Role
- Name
- State
- Value

Implicit semantics

# The Path forward

When we talk about writing

- Markup
  - Layout
  - Navigation
  - SEO / accessibility
- Styling
  - branding
  - Look / feel
- Interaction
  - Animation
  - usability

Specificity

Sass / gulp. / webpack

## Large topic

This is a large topic. One I've spent the last 15 years doing. Striving for 1-1 pixel perfect layouts in the digital medium.

> "But my (app/site/design) uses **insert_language_here**"

One of the main differences I can see with FE vs BE is that independant of a platform or implementation these same rules, terms and language actually don't ever change. While you might be working with a database or an api or condtional logic

# Methods & Execution

# Data vs Anecdotes

# Boxes

![cat in a box pic](https://blazepress.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTQ5MzAyOTExODM3NDE0ODUz/funny-if-it-fits-i-sits-cat-29.webp)

## 10lb of shit in a 5lb bag

Figuring out what type of content as well as its length and ironically it's weight is very important to knowing how to lay it out on the page.

**bootstrap ascii for breakpoints**

<span style="height:800px;display:block;"></span>

## Isn't this Design?

You don't have to know the code to write to achieve the layout, but you do need to know how to the language to describe it.
<span style="height:800px;display:block;"></span>

## Feedback

One of the most useful tools to help make something go from good to great is input of those who use it.
<span style="height:800px;display:block;"></span>

# Legacy Code

![](images/2019/07/parthenon_bw_by_ihcoyc_d67wkji-fullview.jpg)
![](images/2019/07/parthenon_bw_by_ihcoyc_d67wkji-fullview.jpg)

![Gobekli Tepe](https://upload.wikimedia.org/wikipedia/commons/d/d5/G%C3%B6bekli_Tepe%2C_Urfa.jpg)
[Gobekli Tepe Turkey][0002]

[0002]: https://www.telegraph.co.uk/travel/destinations/europe/turkey/articles/Gobekli-Tepe-Turkey-a-new-wonder-of-the-ancient-world/ "old"

<span style="height:800px;display:block;"></span>

# Sass

clean and subtle ways to do

```css
.btn.selected,
.btn:active,
[open] > .btn {
  border-color: rgba(27, 31, 35, 0.35);
  box-shadow: inset 0 0.15em 0.3em rgba(27, 31, 35, 0.15);
}
```

```scss
.parent-class {
  .child-element {
    .grand-child-element {
    }
  }
}
```

```scss
.family {
  .child-element {
    .grand-child-element {
    }
  }
}
```

Syntaxly Awesome Stylesheets

<span style="height:800px;display:block;"></span>

##...but first NPM & GULP

Being that **SASS** & **LESS** are based on _Ruby_ and _Java_ we need to set up the system processes to be able to read, process, render, and output the files that will be used by our site our app.

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

```

```sass

  border: 1px solid darken($base-color, 20%);
  text-shadow: 0 -1px 0 darken($base-color, 10%);
  @include box-shadow(inset 0 1px 0 lighten($base-color, 20%));


```

[sass color functions][500a12d8]

[500a12d8]: https://sass-lang.com/documentation/functions/color "sass color functions"

<span style="height:800px;display:block;"></span>

# Bootstrap

![](/images/2019/07/githubCode.png)

<span style="height:800px;display:block;"></span>

# SVG

[svg animations][7bca824b]

[easing functions](https://easings.net/en)

[7bca824b]: https://thoughtbot.com/blog/svg-animations "svg"

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

<!--  -->

So you've outlined a new feature. You've thought about the logic and formatting and how it will be sent to the UI, but what about the interactions for how the user will see it or possibly interact with it.

Like most things, the simpler the better. There are some fun crazy things you can do with Javascript and Sass but you need to be asking "should you?". SOmthig that I've constantly wrestle with how much is to much. How cool can it be but how functional should it be.

## Making and Breaking the Grid

![](https://cds.cern.ch/images/CERN-HOMEWEB-PHO-2019-004-1/file?size=large)

[CERN ~ The First website](http://info.cern.ch/hypertext/WWW/TheProject.html)

Most of the sites and app we use on a daily basis use a framework. Whether thats a fonrt-end framework or a backend framework. On the front-end all sites use a grid to layout the content on the pages. Some of these are a different number than the other but all use something to align content.

## Cha cha changes (song?)

> What happnes when you push out a change a user doesn't expect or want?

You published you Patch notes didn't you? But who reads those? Why doesn't the user imediatly understand what is diffrent with an application or service they use

<!--
             _.-~-.
           7''  Q..\
        _7         (_
      _7  _/    _q.  /
    _7 . ___  /VVvv-'_                                            .
   7/ / /~- \_\\      '-._     .-'                      /       //
  ./ ( /-~-/||'=.__  '::. '-~'' {             ___   /  //     ./{
 V   V-~-~| ||   __''_   ':::.   ''~-~.___.-'' _/  // / {_   /  {  /
  VV/-~-~-|/ \ .'__'. '.    '::                     _ _ _        ''.
  / /~~~~||VVV/ /  \ )  \        _ __ ___   ___ ___(_) | | __ _   .::'
 / (~-~-~\\.-' /    \'   \::::. | '_ ` _ \ / _ \_  / | | |/ _` | :::'
/..\    /..\__/      '     '::: | | | | | | (_) / /| | | | (_| | ::'
vVVv    vVVv                 ': |_| |_| |_|\___/___|_|_|_|\__,_| ''

Hi there, nice to meet you!

Interested in having a direct impact on hundreds of millions of users? Join
Mozilla, and become part of a global community that’s helping to build a
brighter future for the Web.

Visit https://careers.mozilla.org to learn about our current job openings.
Visit https://www.mozilla.org/contribute for more ways to get involved and
help support Mozilla.
-->

### Talk to be about...

- typography
- design / design systems / trends
- x-FILES
- crypto
- philosophy

### Related Info & Resources

| topic          | description                                            | link                                                                                        |
| -------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| tools          | some details about it to make you look it up           | [link](https://mozilladevelopers.github.io/playground/css-grid/02-first-grid/)              |
| fonts          | glyphicons was what was inside of bootstrap            | [Glyphicons](https://glyphicons.com/)                                                       |
| CSS Grid       | CSS Grid and Grid Inspector in Firefox                 | [css grid](https://www.mozilla.org/en-US/developer/css-grid/)                               |
| appropriate UI | describes how less may be better with User Interaction | [Medium](https://towardsdatascience.com/designing-for-appropriate-interaction-dcaaeffb7fb5) |
