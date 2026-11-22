// Widths every public image is pre-resized to at build (scripts/build-images.mjs), and the only widths
// next/image may ask for (next.config.mjs). One list, so a srcset never names a file that wasn't made.
// Small sizes cover the fixed-size photos and thumbnails (64-384px slots); large ones the screenshots.
export const IMAGE_SIZES = [64, 128, 256, 384];
export const DEVICE_SIZES = [640, 828, 1080, 1280, 1920];
export const IMAGE_WIDTHS = [...IMAGE_SIZES, ...DEVICE_SIZES];
export const IMAGE_QUALITY = 75;
