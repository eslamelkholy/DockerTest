echo "Starting Streams Service 🚀🚀🔥🔥"
pm2 start ./config/pm2.streams.config.js --name Streams-Service --log /var/log/pm2/pm2.log --watch --no-daemon