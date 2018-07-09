if (!process.env.IS_BUILD_AGENT) {
  console.log('Package will not be published because we\'re not running in a CI build agent');
  return process.exit(0);
}

const path = require('path');
const semver = require('semver');
const exec = promisify(require('child_process').exec);
const writeFile = promisify(require('fs').writeFile);

const packageJSONPath = path.resolve(__dirname, '..', 'package.json');
const packageJSON = require(packageJSONPath);


const ghPagesRelease = () =>
  exec('gh-pages-auto-release --dist=storybook-static')
    .then(console.log)
    .catch(e => console.log('ERROR: unable to update gh-pages branch', e));


const getPublishedVersion = () =>
  exec('npm view wix-style-react version --registry=https://registry.npmjs.org/')
    .catch(e => console.log('ERROR: Unable to get published version from npmjs.org', e));


writeFile(
  packageJSONPath,
  stringify(Object.assign({}, packageJSON, {private: true}))
)

  .then(getPublishedVersion)

  .then(publishedVersion =>
    [
      semver.gt(packageJSON.version, publishedVersion),
      packageJSON.version,
      publishedVersion
    ]
  )

  .then(([shouldPublish, packageJSONVersion, publishedVersion]) =>
    shouldPublish ?
      writeFile(packageJSONPath, stringify(packageJSON))
        .then(() =>
          console.log(`Package will be published because version set in package.json ${packageJSONVersion} is newer than published ${publishedVersion}`))
        .then(ghPagesRelease) :

      console.log(`Package will not be published because version ${packageJSONVersion} set in package.json is already published`)
  )

  .catch(error => {
    console.error('ERROR: Unable to publish', error);
    process.exit(1);
  });



// promisify : Function -> List arguments -> Promise
function promisify(fn) {
  return (...args) =>
    new Promise((resolve, reject) =>
      fn(
        ...args,
        (err, payload) => err ? reject(err) : resolve(payload)
      )
    );
}

function stringify(data) {
  return JSON.stringify(data, null, 2);
}
