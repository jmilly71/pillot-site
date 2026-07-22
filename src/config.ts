export type LaunchState = 'prelaunch' | 'live';

// Flip to 'live' when the App Store listing is up. Hero and footer CTAs both read this.
export const LAUNCH_STATE: LaunchState = 'prelaunch';

// Used when LAUNCH_STATE is 'live'. Staged ahead of approval; this URL 404s
// until Apple makes the listing public, which is why the flip waits for approval.
export const APP_STORE_URL = 'https://apps.apple.com/app/id6788505158';

export const SUPPORT_EMAIL = 'support@pillot.app';

// Buttondown embed-subscribe endpoint for the "pillot" launch list (account: jmilly).
// Cross-origin POST (no-cors); the form confirms optimistically since Buttondown
// doesn't return a CORS-readable response. Empty string = form shows "not open yet".
export const EMAIL_FORM_ACTION = 'https://buttondown.com/api/emails/embed-subscribe/jmilly';
