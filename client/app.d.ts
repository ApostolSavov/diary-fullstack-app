declare module "*.css" {
  const css: Record<string, string>
  export default css
}

type Hash = Record<string, unknown>