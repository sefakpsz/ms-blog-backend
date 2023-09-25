//https://nitro.unjs.io/config
export default defineNitroConfig({
  routeRules: { "/blog/**": { swr: 60 * 60 } },
});
