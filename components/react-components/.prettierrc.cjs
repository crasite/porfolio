module.exports = {
  tabWidth: 2,
  useTabs: false,
  pluginSearchDirs: ["."],
  plugins: [import("prettier-plugin-tailwindcss")],
  tailwindFunctions: ["clsx", "cn", "cva"],
};
