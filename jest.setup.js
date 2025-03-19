import { TextEncoder, TextDecoder } from 'text-encoding';

// Polyfill for 'global'
if (typeof global.TextEncoder === 'undefined') {
  global.TextEncoder = TextEncoder;
}
if (typeof global.TextDecoder === 'undefined') {
  global.TextDecoder = TextDecoder;
}