<style type="text/css">
@import url('https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i');
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono:100,100i,300,300i,400,400i,500,500i,700,700i');
* {font-family: 'Roboto', sans-serif;}
/* Headings */
h1, h2, h3, h4, h5, h6{font-family: 'Roboto', sans-serif;color: #1a3acc; border-bottom: 4px solid #1a3acc !important;}
a:link{text-decoration: none; color: #1a3acc;border-bottom: 1px dotted #1a3acc;}
a:hover{border-bottom: 3px solid #1a3acc;}
.this{color:#ccab1a;}
/* dark mode */
/* body, table *{background: #222;color:#fff;} */
/* body, table *{background: #142a2d;color:#fff;font-size: 13px} */
/* light mode */
/* body, table *{background: #fff;color: #777;} */
body, table *{background: #e4dfd9; color: #444 !important; font-size: 13px !important;}
body blockquote{border-left: 4px solid #ab1acc; background: #}
h1, h2, h3, h4, h5, h6{font-family: 'Roboto', sans-serif;background: ;font-family: 'Roboto', sans-serif;color: #1a3acc; border-bottom: 2px dotted #1a3acc !important; color: #1a3acc; border-bottom: 2px solid #1a3acc !important;}
pre, code{background: #aaa !important; color: #eee !important; font-family: 'Roboto Mono', monospace !important;}
.syntax--scss{}
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
.title{
  display: block;
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

**cat in a box pic**

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

![Gobekli Tepe](https://upload.wikimedia.org/wikipedia/commons/d/d5/G%C3%B6bekli_Tepe%2C_Urfa.jpg)
[Gobekli Tepe Turkey][0002]

[0002]: https://www.telegraph.co.uk/travel/destinations/europe/turkey/articles/Gobekli-Tepe-Turkey-a-new-wonder-of-the-ancient-world/ "old"

<span style="height:800px;display:block;"></span>

# Sass

Syntaxly Awesome Stylesheets

####...but first NPM & \*\*GULP

Being that SASS & LESS are based on _Ruby_ and _Java_ we need to set up the system processes to be able to read, process, render, and output the files that will be used by our site our app.

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

```scss
.parent-class {
  .child-element {
    .grand-child-element {
    }
  }
}
```

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
.title{

}
```

```
em, rem, px
vw = viewpot width
vh = viewpot height
```

## Frequent visitor?

What is a site you tend to find yourself returning to? Is it Facebook? Twitter? NYT? Weather channel? Youtube?

---

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi sit amet mauris commodo quis imperdiet massa tincidunt. Quam viverra orci sagittis eu volutpat odio. Sed risus ultricies tristique nulla aliquet enim tortor. Habitasse platea dictumst quisque sagittis. Volutpat sed cras ornare arcu dui vivamus arcu felis. Aenean sed adipiscing diam donec adipiscing. Cursus risus at ultrices mi tempus imperdiet nulla malesuada. Vitae turpis massa sed elementum tempus egestas sed. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus. Nunc non blandit massa enim.

Potenti nullam ac tortor vitae purus faucibus. Scelerisque in dictum non consectetur. Turpis cursus in hac habitasse platea dictumst. Lorem ipsum dolor sit amet consectetur adipiscing elit. Odio euismod lacinia at quis risus sed. Vivamus arcu felis bibendum ut tristique et egestas quis ipsum. Vitae elementum curabitur [vitae](this) nunc. Nunc eget lorem dolor sed viverra ipsum. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Ipsum dolor sit amet consectetur adipiscing. Ullamcorper eget nulla facilisi etiam. Dolor sit amet consectetur adipiscing elit ut aliquam purus. Varius quam quisque id diam vel quam elementum pulvinar. Egestas diam in arcu cursus euismod quis viverra nibh cras. Suscipit adipiscing bibendum est ultricies integer quis auctor elit sed. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Aliquet sagittis id consectetur purus. Consequat id porta nibh venenatis cras sed felis. Magna fringilla urna porttitor rhoncus dolor purus non enim. Dolor purus non enim praesent elementum.

# Foo

Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Quis ipsum suspendisse ultrices gravida dictum fusce. Id faucibus nisl tincidunt eget. Orci a scelerisque purus semper eget. Est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque. Mauris a diam maecenas sed enim ut. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Massa placerat duis ultricies lacus. Tellus elementum sagittis vitae et. In arcu cursus euismod quis viverra nibh. Sit amet volutpat consequat mauris nunc. Dictum varius duis at consectetur. Lectus sit amet est placerat in. Placerat in egestas erat imperdiet sed euismod. Euismod nisi porta lorem mollis. Dolor sit amet consectetur adipiscing elit. Cursus eget nunc scelerisque viverra. Mauris sit amet massa vitae tortor condimentum.

Nec nam aliquam sem et. At augue eget arcu dictum varius. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Sit amet luctus venenatis lectus magna fringilla. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Suscipit tellus mauris a diam. Ornare quam viverra orci sagittis eu volutpat. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Suspendisse ultrices gravida dictum fusce ut placerat orci. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Id porta nibh venenatis cras sed felis eget. Lectus proin nibh nisl condimentum id. Justo eget magna fermentum iaculis eu non diam phasellus vestibulum. Lectus magna fringilla urna porttitor rhoncus dolor purus. Nisl vel pretium lectus quam id. Egestas sed sed risus pretium quam vulputate. Sit amet dictum sit amet justo. Ut consequat semper viverra nam libero justo laoreet. Proin sagittis nisl rhoncus mattis rhoncus urna.

Molestie at elementum eu facilisis. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Amet consectetur adipiscing elit pellentesque habitant morbi. Hendrerit gravida rutrum quisque non tellus orci ac auctor. Ullamcorper eget nulla facilisi etiam dignissim diam quis. Aliquet eget sit amet tellus cras. Aliquam purus sit amet luctus venenatis lectus magna. Feugiat nisl pretium fusce id velit ut. Malesuada proin libero nunc consequat interdum. Ut venenatis tellus in metus vulputate eu scelerisque felis. Ultrices eros in cursus turpis massa tincidunt dui. Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet. At augue eget arcu dictum varius duis. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Arcu risus quis varius quam quisque id. Sed viverra tellus in hac. Risus sed vulputate odio ut enim. Varius duis at consectetur lorem donec massa sapien.

## When things don't work...

> What happens when you've put all the time into framing out something with markup and styling?

To begin toubleshooting problems with **CSS** & **SASS** it's important to make sure you have your files outputing `sourcemaps`. This is huge for being able to target the specific stylesheet that is styling the elements you have and also shows how properties are inherited or being overwritten.

```
screen cap of instance of great UI broken
```

## Designing for as little interaction as possible...

So you've outlined a new feature. You've thought about the logic and formatting and how it will be sent to the UI, but what about the interactions for how the user will see it or possibly interact with it.

Like most things, the simpler the better. There are some fun crazy things you can do with Javascript and Sass but you need to be asking "should you?". SOmthig that I've constantly wrestle with how much is to much. How cool can it be but how functional should it be.

## Making and Breaking the Grid

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
