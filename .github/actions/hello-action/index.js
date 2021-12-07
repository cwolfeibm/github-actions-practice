const core = require('@actions/core');
const github = require('@actions/github');
try {
    core.debug("MY GOD")
    core.warning("WARN WARN WARN")
    core.error("ERROR SET")
    const name = core.getInput('who-to-greet');
    core.setSecret(name)
    console.log(`Hello ${name}`);
    const time = new Date();
    core.setOutput("time", time.toTimeString());
    console.startGroup('Logging group one');
    console.log(JSON.stringify(github, null, '\t'));
    console.endGroup('Logging group one');
}catch(error){
    core.setFailed(error.message)
}

