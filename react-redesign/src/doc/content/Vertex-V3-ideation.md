# Vertex <span style="font-size:.5em;">`v3`</span>

### User management

**story**

> as a **GPS Admin** I would like to see a list of **Users** and their top 5 demographics details listed along as contextual links to thier app profile `(first name, last name, role, location, email, ect.)`

![](/images/2019/07/user-setting.png)

### Case management

**story**

> as a **GPS User** I would like to see a list of cases with "last modified by:\_\_\_\_" in a grid with sort similiar to **github** repo view that allows me to see past cases and their statuses and dates. These would be broken up into monthly/yearly buckets as cases typically only quarterly/annually, that will help organize long standing patient needs.

### Security image

**story**

> as a **GPS User** I need to be able to visually select an image to associate with my account upon signing up that is unique to **Me**, this will be used to unlock **My** account as well as periodically asked to verify upon sign in.

The user could save this image for future reffernce, but a `seedNumber` or `hashNumber` would combined with a hidden variable to keep from duplicates from being made, as well as store the unique identifier. The unique ID would be stored and not the image, but would be used to generate the image each time they are asked to verify their identity.

![indenticon](https://github.blog/wp-content/uploads/2013/08/a3c4e2a0-04df-11e3-824c-7378e6550707.png?resize=2384%2C784)

These icons would be similiar to [github identicons][f5cd2c9e] and [the repo for how to make them][ddbe221c]

[f5cd2c9e]: https://github.blog/2013-08-14-identicons/ "generated profile image ~ simple 5×5 “pixel” sprites that are generated using a hash of the user’s ID. The algorithm walks through the hash and turns pixels on or off depending on even or odd values. These generated patterns, combined with hash-determined color values, ensures a huge number of unique Identicons. →"
[ddbe221c]: https://github.com/stewartlord/identicon.js "GitHub-style identicons as PNGs or SVGs in JS"

### Help center

> as a **GPS User** I need a place to go _inside the app_ that allows me to find a list of contact numbers, screenshot, videos, step-by-step walkthroughs of how to operate the app features as well as diagnose light support issues.

This would be an elaborate `README.md` that could link to internal pages or features to callout areas that pertain to the question the User might have.
