/**
 * @typedef {{
 *  github: ReturnType<import('@actions/github').getOctokit>
 *  context: import('@actions/github').context
 *  core: import('@actions/core')
 *  result: Record<string, [label:string, result: string]>
 * }} JobContext
 */

// @ts-check
// @type{Params = any}

/**
 * @type {function (JobContext): Promise<any>}
 * */
const task = async (ctx) => {
  await Promise.all([
    writeJobSummary(ctx),
  ])
}


/**
 * @type {function (JobContext): Promise<any>}
 */
const writeJobSummary = async ({ core, result, context }) => {
  core.summary.addHeading("context", 2)
  core.summary.addTable([
    ['event', context.eventName],
  ])

  core.summary.addHeading("github", 2)
  core.summary.addTable(Object.values(result).map(([k,v]) => [`<code>${k}</code>`, v]))

  await core.summary.write()
}

module.exports = task
