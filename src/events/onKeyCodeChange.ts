// Events
import { eventEmitter } from './EventEmitter';

// Add polyfill for keycode

// Issues:
// Chrome Android returns undefined keycodes using `.key` and always 229 on `.keyCode` (using the native keyboard) - https://live.browserstack.com/dashboard#os=android&os_version=9.0&device=Samsung+Galaxy+S10e&device_browser=chrome&zoom_to_fit=true&full_screen=true&url=http%3A%2F%2Flocalhost%3A1234%2F&speed=1&host_ports=google.com%2C80%2C0
// Internet Explorer 11 uses `Up`, `Left`, `Down`, `Right` instead of `ArrowUp`, ArrowLeft`, `ArrowDown`, `ArrowRight` (Chrome, Safari, Edge, Firefox)
// `Spacebar` in Safari does not work

// Correct:
// iOS Safari / Chrome (12 / 11 / 10)

/**
 * Monitor keycode changes
 */
function onKeyCodeChange(event: KeyboardEvent): void {
  eventEmitter.emit('ALPINE::KEYCODE_CHANGE', {
    key: event.key,
    keyCode: event.keyCode,
  });
}

/**
 * Start listening to keycode change events
 */
export const listenToKeyCodeChange = (): void => {
  window.addEventListener('keydown', (event: KeyboardEvent) => onKeyCodeChange(event), false);
};

/**
 * Stop listening to keycode change events
 */
export const stopListeningToKeyCodeChange = (): void => {
  window.removeEventListener('keydown', (event: KeyboardEvent) => onKeyCodeChange(event), false);
};
