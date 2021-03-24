# Redwood: Twin & Emotion Example

> I saw some people talking about Twin and Emotion on the Redwood Discord and decided to share my experience integrating these tools with Redwood.

This example includes the setup required to use [`twin.macro`](https://github.com/ben-rogerson/twin.macro) and [`emotion`](https://emotion.sh/docs/introduction) within a RedWoodJS application, featuring the utilities offered by [`TailwindCSS`](https://tailwindcss.com/).

It also uses the new Redwood `0.27` TypeScript `create-redwood-app` setting.

Instructions on how to reproduce this repository can be found [here](https://github.com/realStandal/my-redwoodjs-tips-n-workflows/blob/main/twin-macro-emotion.md#redwoodjs-using-twinmacro--emotion).

---

# Redwood

> **WARNING:** RedwoodJS software has not reached a stable version 1.0 and should not be considered suitable for production use. In the "make it work; make it right; make it fast" paradigm, Redwood is in the later stages of the "make it work" phase.

## Getting Started
- [Tutorial](https://redwoodjs.com/tutorial/welcome-to-redwood): getting started and complete overview guide.
- [Docs](https://redwoodjs.com/docs/introduction): using the Redwood Router, handling assets and files, list of command-line tools, and more.
- [Redwood Community](https://community.redwoodjs.com): get help, share tips and tricks, and collaborate on everything about RedwoodJS.

### Setup

We use Yarn as our package manager. To get the dependencies installed, just do this in the root directory:

```terminal
yarn install
```

### Fire it up

```terminal
yarn redwood dev
```

Your browser should open automatically to `http://localhost:8910` to see the web app. Lambda functions run on `http://localhost:8911` and are also proxied to `http://localhost:8910/.redwood/functions/*`. 
