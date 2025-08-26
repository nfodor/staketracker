#!/usr/bin/env node

import { StakeTracker } from './models/StakeTracker';
import { Logger } from './utils/logger';

const logger = new Logger('Main');

async function main() {
  try {
    logger.info('Starting Stake Tracker...');
    
    const tracker = new StakeTracker();
    await tracker.initialize();
    
    logger.info('Stake Tracker initialized successfully');
  } catch (error) {
    logger.error('Failed to start Stake Tracker:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

export { StakeTracker };