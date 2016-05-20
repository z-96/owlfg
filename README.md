# Overview

This is a group and team finder for Overwatch that's meant to connect players
with other like-minded people to make for the best team experience.


# Developing

## Basic Data Structure

This application revolves around a few main entities that you should be
familiar with before you start developing. They're detailed below:

### Players

Each person who uses the site is represented by a player object. Players have a
one-to-one mapping with a battle.net account. The player object looks like the
following:

```
{
  id: 123456,
  name: "Tracer",
  hash: "#1234",
  profile: {
    type: "competitive",
    role: "offense",
    region: "na",
    microphone: true,
    heroes: ["tracer", "winston", "soldier76"]
  }
}
```

### Groups

Groups are short-lived teams that people can join or be invited to freely. They
share a lot with the teams in terms of data, but are less detailed and have
fewer controls. They are also limited to the size of an overwatch team. The
group object looks like the following:

```
{
  id: 123456,
  name: "The Overwatch",
  owner: {
    // Player object...
  },
  players: [
    // List of player objects...
  ],
  type: "competitive",
  region: "asia",
  microphone: true
}
```

### Teams

Teams are long-term groups that have additional data and control associated
with them. They can also contain more players than groups. The team object
looks like the following:

```
{
  id: 123456,
  name: "Hotdog All Day",
  logo: "path/to/logo.png",
  description: "Information about the team.",
  owner: {
    // Player object...
  },
  players: [
    // List of player objects...
  ],
  type: "competitive",
  region: "oceanic",
  microphone: true
}
```


## Server / API

To start the server, run `npm run server`. This'll start an Express server
on port 3000. The code for this server is in index.js, and each base level
endpoint has its own file of the same name in the api folder, i.e. the code
for /profile endpoints is in api/profile.js.

There are also a limited number of ejs files for views in the views folder.
Most of the app is just run through views/index.ejs, but some simple pages
like 404 and error pages are just hard coded simple templates.


## JS

Javascript is assembled via Webpack. To develop, run `npm run watch` to kick
off the file watcher. Changes you make will be eslinted, run through babel, and
be placed in the dist folder. If you fail to pass eslint, your build will fail
(but the watcher will continue) so keep it clean, folks.

Client side JS is all in the client folder, with the exception of the shared
folder, which houses code used on both ends. The site is built with React and
Redux, and organized like so:

* `index.js` - This is the entry point for the client code. All boilerplate.
* `apps`     - This contains each discrete page for the site. Apps are comprised
               of an App.jsx file that connects to the store and creates events,
               and simply includes components from its components folder that do
               the real heavy lifting.
* `template` - Same structure as an app, but this is the meta component that
               all the apps live in.
* `ducks`    - This is where the bulk of the redux logic will be. For more info
               about ducks, refer to
               [this proposal](https://github.com/erikras/ducks-modular-redux)
               of the format.
* `modules`  - Reusable components that can be used for any app.


## CSS

CSS is also built with webpack! Each component has a file with a matching
structure in the css folder. This is done by doing a simple import of the
CSS in your JSX file, and it figures out the rest.

Order is NOT maintained in any way, so CSS should follow
[SuitCSS](https://suitcss.github.io/) guidelines, with the addition if single
word modifiers like `isShowing` or `hasContent`. This should only ever be
targeted with an & prepended. This should result in extremely light and flat
selectors, with no fear of overriding and conflicting styles. If you find
yourself nesting more than 2 or 3 levels deep, that means you should probably
make a new component. Here's an example:
```
.profile {
  &-form {
    &-microphone {
      &-label {
        // We've gone too deep!
      }
    }
  }
}

.profilemic {
  &-label {
    // Aaaah, much better.
  }
}
```

