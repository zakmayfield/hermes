import { createLogger, format, transports } from "winston";

const logger = createLogger({
  level: "info",
  format: format.combine(format.timestamp(), format.json(), format.colorize()),
  transports: [new transports.Console()]
});

export const customLogger = (
  level: "error" | "warn" | "debug",
  code: string,
  metadata?:
    | Error
    | {
        [key: string]: unknown;
        error: Error;
      }
    | unknown
) => {
  return logger.log({ level, message: code, metadata });
};
