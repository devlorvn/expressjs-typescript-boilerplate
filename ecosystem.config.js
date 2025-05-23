module.exports = {
  apps: [
    {
      name: "Devlord Express.Js & typescript boilerplate",
      script: "dist/index.js",
      exec_mode: "cluster",
      instances: 1,
      autorestart: true,
      watch: false,
      ignore_watch: ["node_modules", "logs"],
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
