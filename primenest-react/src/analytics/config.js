// ============================================================
// PrimeNest Global — Google Analytics 4 Configuration
// ============================================================
//
// Measurement ID is safe to commit — it appears in browser source
// regardless. Override via VITE_GA_MEASUREMENT_ID env var if needed.
//
// To change the ID: update the string below, commit, and redeploy.
// ============================================================

export const GA4_MEASUREMENT_ID =
  import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-2BFKYCF30X'
