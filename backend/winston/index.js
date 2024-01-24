const winston = require("winston");

const logger = winston.createLogger({
  level: "verbose", //messages with level verbose or higher can be logged with this 'logger' instance. logger.verbose() won't work
  format: winston.format.json(), //others:
  defaultMeta: { service: "eg user-service" }, //appears in all logs as end-messages
  transports: [
    new winston.transports.File({
      filename: "warnOrHigher.log",
      level: "warn", // warn or higher level msgs
    }),
    new winston.transports.File({ filename: "combined.log" }), //all logs that are logged with this 'logger' ie all logs that are level verbose or higher
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  ],
});

logger.error("error lvl"); //goes into both warnOrHigher.log and combined.log
logger.info("info lvl"); //goes into only combined.log
logger.silly("silly lvl"); //doesn't work

//NOTES
//LEVELS
//   error: 0,
//   warn: 1,
//   info: 2,
//   http: 3,
//   verbose: 4,
//   debug: 5,
//   silly: 6
