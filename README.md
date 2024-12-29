# Gutenberg Slideshow Block

A custom Gutenberg block for WordPress that displays a responsive slideshow of posts fetched using the WP REST API.

## Features
- Fetches the latest posts from any WordPress site via the WP REST API.
- Displays:
  - Post title
  - Featured image
  - Post date
  - Additional metadata (if available)
- Links directly to the original post when clicking the title or image.
- Block settings include:
  - Toggling visual elements (e.g., metadata display).
  - Enabling/disabling auto-scroll.
  - Changing the source WordPress site URL dynamically.
- Supports:
  - Keyboard navigation (left/right arrow keys).
  - Swipe gestures for mobile navigation.
- Fully responsive design.

## Installation
1. Download the ZIP file and extract it.
2. Upload the extracted folder to your WordPress installation under `wp-content/plugins/`.
3. Activate the plugin in the WordPress admin panel.

## Usage
1. Open the WordPress block editor (Gutenberg).
2. Add the "Slideshow Block" to your post or page.
3. Configure block settings in the sidebar to:
   - Change the source WordPress site URL.
   - Toggle auto-scroll and visual elements.

## Development Notes
- Built using:
  - Core JavaScript (no frameworks or libraries like jQuery).
  - Vanilla CSS for styling.
- Dynamic block rendering on the server-side ensures flexibility and performance.
- Includes caching for better performance when fetching data from external APIs.

## Demo
Test the block by adding it to a page and fetching posts from a WordPress site like [WPTavern](https://wptavern.com). You can also switch to any other WordPress site by changing the site URL in the block settings.

## Contributions
Feel free to fork the repository, report issues, or submit pull requests for improvements. Contributions are always welcome!

## License
This project is licensed under the MIT License.

---

**Author**: Your Name  
**Version**: 1.0.0
