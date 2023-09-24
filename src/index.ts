import * as core from '@actions/core';
import * as github from '@actions/github';

try {
  const message = core.getInput('message');
  console.log(message);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  if (error instanceof Error) core.setFailed(error.message)
}
