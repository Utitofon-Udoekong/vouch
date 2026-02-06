import fs from 'node:fs/promises';
import crypto from 'node:crypto';
import { IExecDataProtectorDeserializer } from '@iexec/dataprotector-deserializer';

/**
 * Vouch Yield Verification App
 * 
 * This iExec TEE application processes protected yield data
 * and outputs a verification result.
 * 
 * Expected protected data structure:
 * - yieldPercent: number (0-100)
 * - verifiedAt: string (ISO date)
 * - type: string (e.g., "real_estate")
 * - occupancyPercent: number (optional)
 */

const main = async () => {
  const { IEXEC_OUT } = process.env;

  let computedJsonObj = {};

  try {
    console.log('Vouch Yield Verification App v1.0.0');
    console.log('===================================');

    // Initialize the deserializer to read protected data
    const deserializer = new IExecDataProtectorDeserializer();

    // Read yield data from protected data
    let yieldPercent = 0;
    let verifiedAt = '';
    let dataType = '';
    let occupancyPercent = 0;
    let rawDataHash = '';

    try {
      // Try to read yieldPercent
      yieldPercent = await deserializer.getValue('yieldPercent', 'number');
      console.log('Yield Percent:', yieldPercent);
    } catch (e) {
      console.log('Could not read yieldPercent:', e.message);
    }

    try {
      // Try to read verifiedAt timestamp
      verifiedAt = await deserializer.getValue('verifiedAt', 'string');
      console.log('Verified At:', verifiedAt);
    } catch (e) {
      console.log('Could not read verifiedAt:', e.message);
    }

    try {
      // Try to read type
      dataType = await deserializer.getValue('type', 'string');
      console.log('Data Type:', dataType);
    } catch (e) {
      console.log('Could not read type:', e.message);
    }

    try {
      // Try to read occupancyPercent (optional)
      occupancyPercent = await deserializer.getValue('occupancyPercent', 'number');
      console.log('Occupancy Percent:', occupancyPercent);
    } catch (e) {
      console.log('occupancyPercent not present (optional field)');
    }

    // Validation checks
    const validationResults = {
      hasYieldData: yieldPercent > 0,
      yieldInRange: yieldPercent >= 0 && yieldPercent <= 100,
      hasTimestamp: verifiedAt !== '',
      hasType: dataType !== ''
    };

    console.log('Validation Results:', validationResults);

    // Determine if verification passed
    const isVerified = validationResults.hasYieldData && validationResults.yieldInRange;

    // Calculate yield tier
    let yieldTier;
    if (yieldPercent >= 10) {
      yieldTier = 'PREMIUM';
    } else if (yieldPercent >= 5) {
      yieldTier = 'STANDARD';
    } else {
      yieldTier = 'BASIC';
    }

    // Create a hash for proof
    const dataToHash = `${yieldPercent}|${verifiedAt}|${dataType}|${occupancyPercent}`;
    rawDataHash = crypto
      .createHash('sha256')
      .update(dataToHash)
      .digest('hex')
      .substring(0, 16);

    // Build verification result
    const verificationResult = {
      verified: isVerified,
      yieldPercent: yieldPercent,
      yieldTier: yieldTier,
      occupancyPercent: occupancyPercent,
      validationResults: validationResults,
      verifiedAt: new Date().toISOString(),
      originalVerifiedAt: verifiedAt,
      dataType: dataType,
      verifierVersion: '1.0.0',
      enclave: 'Intel SGX',
      dataHash: rawDataHash
    };

    console.log('===================================');
    console.log('Verification Result:', JSON.stringify(verificationResult, null, 2));

    // Write result to IEXEC_OUT
    await fs.writeFile(
      `${IEXEC_OUT}/result.json`,
      JSON.stringify(verificationResult, null, 2)
    );

    // Build the "computed.json" object
    computedJsonObj = {
      'deterministic-output-path': `${IEXEC_OUT}/result.json`,
    };

    console.log('Verification complete!');

  } catch (e) {
    // Handle errors
    console.error('Verification failed:', e);

    const errorResult = {
      verified: false,
      error: e.message || 'Unknown error',
      timestamp: new Date().toISOString()
    };

    await fs.writeFile(
      `${IEXEC_OUT}/result.json`,
      JSON.stringify(errorResult, null, 2)
    );

    // Build the "computed.json" object with error
    computedJsonObj = {
      'deterministic-output-path': `${IEXEC_OUT}/result.json`,
      'error-message': e.message || 'Verification failed',
    };
  } finally {
    // Save the "computed.json" file
    await fs.writeFile(
      `${IEXEC_OUT}/computed.json`,
      JSON.stringify(computedJsonObj)
    );
  }
};

main();
