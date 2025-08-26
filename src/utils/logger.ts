export class Logger {
  private context: string;

  constructor(context: string) {
    this.context = context;
  }

  private formatMessage(level: string, message: string, ...args: unknown[]): string {
    const timestamp = new Date().toISOString();
    const formattedArgs = args.length > 0 ? ` ${args.map(arg => 
      typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
    ).join(' ')}` : '';
    
    return `[${timestamp}] [${level}] [${this.context}] ${message}${formattedArgs}`;
  }

  info(message: string, ...args: unknown[]): void {
    console.log(this.formatMessage('INFO', message, ...args));
  }

  error(message: string, ...args: unknown[]): void {
    console.error(this.formatMessage('ERROR', message, ...args));
  }

  warn(message: string, ...args: unknown[]): void {
    console.warn(this.formatMessage('WARN', message, ...args));
  }

  debug(message: string, ...args: unknown[]): void {
    console.debug(this.formatMessage('DEBUG', message, ...args));
  }
}