// ============================================================
//  PitFUSION Configuration
//  Edit this file to configure your keys and settings.
//  Place this file in the same folder as PitFUSION.html
// ============================================================

// ── API Keys ─────────────────────────────────────────────────
const NEXUS_KEY = 'YOUR_NEXUS_KEY';
const TBA_KEY   = 'YOUR_TBA_KEY';

// ── EPA Field Definitions by Year ────────────────────────────
// Each year maps to the EPA breakdown fields returned by Statbotics.
// The REST API endpoint is:
//   https://api.statbotics.io/v3/team_year/{team}/{year}
// Response structure: data.epa.breakdown contains game-specific components.
// To update for a new season:
//   1. Look up the new year's breakdown field names in the Statbotics API docs
//   2. Add a new entry below using the year as the key
//
// Fields:
//   key   — dot-notation path into the API response (e.g. "epa.total" or "epa.breakdown.auto_notes")
//   label — display label shown in PitFUSION
//   color — bar color for the chart (any CSS color)

const EPA_FIELDS = {
  2026: [
    { key: 'epa.total',            label: 'Total EPA',           color: '#00d4ff' },
    { key: 'epa.auto',             label: 'Auto EPA',            color: '#00e676' },
    { key: 'epa.teleop',           label: 'Teleop EPA',          color: '#ffd600' },
    { key: 'epa.endgame',          label: 'Endgame EPA',         color: '#ff6b35' },
    { key: 'epa.rp_1',             label: 'Energized RP EPA',    color: '#a78bfa' },
    { key: 'epa.rp_2',             label: 'Supercharged RP EPA', color: '#f472b6' },
  ],
  2025: [
    { key: 'epa.total',            label: 'Total EPA',           color: '#00d4ff' },
    { key: 'epa.auto',             label: 'Auto EPA',            color: '#00e676' },
    { key: 'epa.teleop',           label: 'Teleop EPA',          color: '#ffd600' },
    { key: 'epa.endgame',          label: 'Endgame EPA',         color: '#ff6b35' },
    { key: 'epa.rp_1',             label: 'Coral RP EPA',        color: '#a78bfa' },
    { key: 'epa.rp_2',             label: 'Barge RP EPA',        color: '#f472b6' },
  ],
  // Add future years here following the same pattern
};
