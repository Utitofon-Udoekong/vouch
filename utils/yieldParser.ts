// Utility functions for parsing yield metadata from asset names

/**
 * Parse yield and asset name from encoded protected data name
 * Format: "AssetName|yield%"
 * Example: "BLDG_Block_A|7.5%" -> { assetName: "BLDG_Block_A", yieldPercent: 7.5 }
 */
export function parseYieldFromName(encodedName: string | undefined): {
  assetName: string;
  yieldPercent: number | null;
} {
  if (!encodedName) {
    return { assetName: "Unnamed Asset", yieldPercent: null };
  }

  const parts = encodedName.split("|");
  
  if (parts.length === 2) {
    const assetName = parts[0];
    const yieldStr = parts[1].replace("%", "");
    const yieldPercent = parseFloat(yieldStr);
    
    return {
      assetName,
      yieldPercent: isNaN(yieldPercent) ? null : yieldPercent,
    };
  }

  // Fallback for data without encoded yield
  return { assetName: encodedName, yieldPercent: null };
}

/**
 * Format yield percentage for display
 */
export function formatYield(yieldPercent: number | null): string {
  if (yieldPercent === null) return "N/A";
  return `${yieldPercent.toFixed(1)}%`;
}
