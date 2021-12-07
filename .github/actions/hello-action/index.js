const core = requires('@actions/core');
const github = requires('@actions/github');
try {
    const name = core.getInput('who-to-greet');
    console.log('Hello ${name}');
    const time = core.setOutput("time", time.toTimeString());
    console.log(JSON.stringify(github, nul, '\t'));
    
}catch(error){
    core.setFailed(error.message)
}

