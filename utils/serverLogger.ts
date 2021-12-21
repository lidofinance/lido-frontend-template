import { createLogger, transports, format } from 'winston';
import { traverse } from 'object-traversal';
import { sanitizeMessage } from './sanitize';

const { json, timestamp, combine, errors } = format;

const sanitize = format((info) => {
  traverse(info, (context) => {
    const { parent, key, value } = context;
    if (parent && key && typeof value === 'string') {
      parent[key] = sanitizeMessage(value);
    }
  });
  return info;
});

const jsonLogger = createLogger({
  defaultMeta: {
    service: 'frontend_template',
  },
  format: combine(timestamp(), errors({ stack: true }), sanitize(), json()),
  transports: [new transports.Console()],
});

export const serverLogger =
  process.env.NODE_ENV === 'production' ? jsonLogger : console;
