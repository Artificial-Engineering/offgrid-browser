
# Machine Proxy (Work in Progress)

brought to you as libre software with joy and pride by [Artificial Engineering](http://artificial.engineering).

Support our libre Bot Cloud via BTC [1CamMuvrFU1QAMebPoDsL3JrioVDoxezY2](bitcoin:1CamMuvrFU1QAMebPoDsL3JrioVDoxezY2?amount=0.5&label=lychee.js%20Support).



## Overview

This website is a project made with [lychee.js](https://lychee.js.org).

It is automatically built and deployed to GitHub using the following
`lycheejs-fertilizer` integration scripts:

- `bin/build.sh` builds the website and copies asset and download folders
- `bin/package.sh` deploys everything to the `gh-pages` branch


## Work-in-Progress (aka alpha)

These are the features that are currently work-in-progress and are known
to fail right now. If you want to help building these, you are welcome to
submit an Issue or a Pull Request. We could use any help :)

- Offline Cache (respond with 302 on no internet connection)
- Facebook Plugin
- Instagram Plugin
- Reddit Plugin
- NLP Fingerprinting
- Picture Fingerprinting (Face Recognition)


## Overview

The Machine Proxy translates the internet into a JSON format
that Machines can understand. The idea behind it is to save
traffic for typical web scraping / machine training applications,
as HTML as a format is too huge to be efficient.

Similar applications written with headless WebKit runtimes
are error prone, dependent on a CSS parser and JS VM; so they
use very huge amounts of memory just for the sake of parsing.

The JSON structure returned by this Proxy always has the
identical structure and does not focus on website-specific
linking, integration and structure.

The Plugins integrated here can be easily extended to more
websites and domains. The idea behind the Plugins is always
to return a minimal JSON structure with minimal overhead.

It's basically an easier generic API for the interwebz :)



## Features

TODO: This section needs to be written and documented.



## Quickstart

This project is the counterpart of the [Machine Spider](https://github.com/Artificial-Engineering/machine-spider.git)
project.


**1) Installation**

This project requires a `lychee.js` Engine installation located
at `/opt/lycheejs`. With the upcoming `lychee.js Release`, this
is being migrated to the `lycheejs-library` via `npm`.

The current work-in-progress state extends the `lycheejs-library`
with Definitions and features that are necessary for typical
spider/scraper applications.


**2) Bootup**

```bash
cd /opt/lycheejs/projects/machine-proxy;

node ./index.js;
```



## License

This project is distributed under a Prototype License.

No warranty if you do something illegal with this project.
You are solely responsible for the damage / actions you
do with this project.

You are not allowed to use it for commercial projects and
its purpose is to be used only for educational reasons.

It may be distributed under an Open Source license later,
but for the sake of humanity's privacy - this is a tech demo
and should be used with respect.

I mean, we are the good guys; and not the Feds - right?

