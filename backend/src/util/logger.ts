import pino from "pino"
import dayjs from "dayjs"

export const logger = pino({
  level: "info",
  transport: {
    target: "pino-pretty",
  },
  base: {
    pid: false,
  },
  timestamp: () => `,"time":"${dayjs().format()}`,
})
