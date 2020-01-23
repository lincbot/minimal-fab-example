import {
  ProtoFab,
  PluginArgs,
  FabBuildStep,
  FabPluginRuntime,
  PluginMetadata
} from '@fab/core'

function getCurrentTime() {
  return new Date().toLocaleString()
}

export const build: FabBuildStep = async (
  args: PluginArgs,
  proto_fab: ProtoFab
) => {
  proto_fab.metadata.local_hax = {
    compiled_at: getCurrentTime(),
    args
  }
}

export const runtime: FabPluginRuntime = (
  args: PluginArgs,
  metadata: PluginMetadata
) => {
  return async ({ url }) => {
    console.log('I IN THE FAB YO')
    if (url.pathname === '/lol') {
      const lines = [
        'HEYOOOOO!',
        `Rendered at: ${getCurrentTime()}`,
        JSON.stringify(metadata.local_hax, null, 2)
      ]

      return new Response(lines.join('\n'), {
        status: 200
      })
    }
  }
}
