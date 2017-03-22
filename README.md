# SafetyPulse 

SafetyPulse is a mobile app that demonstrates how to evaluate crime levels near a mobile device. It works in selected cities around the US, including Boston, San Francisco, Las Vegas, New Orleans and Chicago. The app uses crime statistics combined with your location and the direction you’re heading to gauge the safety level of where you are, and where you’ll soon be. You’ll get a gentle warning when your environment is a little risky, and when you’re heading towards a really high-crime area you get a text message so you can concentrate on where you are, instead of looking at your phone. Set it up once and forget it. SafetyPulse, running in the cloud, will always have your back. Check out the movie here: http://www.rajsingh.org/safetypulse.mp4

To determine crime rates, SafetyPulse uses open data provided by local government and stored in Cloudant. Crime data is harvested nightly from their open data portals, which leverage a common open data publishing system from Socrata, so any city that uses Socrata could quickly be added to a real SafetyPulse service.

## How it works

The applications use this Bluemix service:

* a Node.js runtime


## Running the apps on Bluemix

The fastest way to deploy this application to Bluemix is to click the **Deploy to Bluemix** button below.

[![Deploy to Bluemix](https://deployment-tracker.mybluemix.net/stats/c77bbdef28978e37782549ee9b730eb2/badge.svg)](https://bluemix.net/deploy?repository=https://github.com/ibm-cds-labs/safetypulse.git)

**Don't have a Bluemix account?** If you haven't already, you'll be prompted to sign up for a Bluemix account when you click the button.  Sign up, verify your email address, then return here and click the the **Deploy to Bluemix** button again. Your new credentials let you deploy to the platform and also to code online with Bluemix and Git. If you have questions about working in Bluemix, find answers in the [Bluemix Docs](https://www.ng.bluemix.net/docs/).

## Running the app locally

Clone this repository then run `npm install` to add the Node.js libraries required to run the app.

Then run: `$ node app.js`

## Privacy Notice

The Crime demos web application includes code to track deployments to Bluemix and other Cloud Foundry platforms. The following information is sent to a [Deployment Tracker](https://github.com/IBM-Bluemix/cf-deployment-tracker-service) service on each deployment:

* Application Name (`application_name`)
* Space ID (`space_id`)
* Application Version (`application_version`)
* Application URIs (`application_uris`)

This data is collected from the `VCAP_APPLICATION` environment variable in IBM Bluemix and other Cloud Foundry platforms. This data is used by IBM to track metrics around deployments of sample applications to IBM Bluemix. Only deployments of sample applications that include code to ping the Deployment Tracker service will be tracked.

### Disabling Deployment Tracking

For manual deploys, deployment tracking can be disabled by removing `require("cf-deployment-tracker-client").track();` from the end of the `app.js` main server file.

### License 

Copyright 2016 IBM Cloud Data Services

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

_These applications are for demonstration purposes only and are in no way offering advice for safety purposes._


