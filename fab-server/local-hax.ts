import {
  ProtoFab,
  PluginArgs,
  FabBuildStep,
  FabPluginRuntime,
  PluginMetadata
} from '@fab/core'

export const build: FabBuildStep = async (
  args: PluginArgs,
  proto_fab: ProtoFab
) => {
  proto_fab.metadata.ts_test = args.now
}

export const runtime: FabPluginRuntime = (
  args: PluginArgs,
  metadata: PluginMetadata
) => {
  return async ({url}) => {
    console.log("I IN THE FAB YO")
    if (url.pathname === '/lol') {
      return new Response(`HEYOOOOO`, {
        status: 200
      })
    }
  }
}
