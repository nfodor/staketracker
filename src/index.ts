#!/usr/bin/env node

import { ColdStart } from './models/ColdStart';
import { Logger } from './utils/logger';

const logger = new Logger('Main');

async function main() {
  try {
    logger.info('Starting ColdStart...');
    
    const coldstart = new ColdStart();
    await coldstart.initialize();
    
    logger.info('ColdStart initialized successfully');
  } catch (error) {
    logger.error('Failed to start ColdStart:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

export { ColdStart };