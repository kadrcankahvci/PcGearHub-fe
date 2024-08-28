import Product from '../models/Product';

const products = [
  // Mice (categoryId: 1)
  new Product(
    1,
    "Gaming Mouse",
    "High precision gaming mouse with customizable RGB lighting and programmable buttons.",
    "This gaming mouse is designed for ultimate precision and control. It features customizable RGB lighting to match your setup and programmable buttons for assigning complex commands. The ergonomic design ensures comfort during long gaming sessions, while the high-DPI sensor provides accurate tracking.",
    49.99,
    20,
    1,
    "/images/mouse.jpg"
  ),
  new Product(
    2,
    "Wireless Optical Mouse",
    "Ergonomic wireless optical mouse with adjustable DPI settings for versatile use.",
    "This wireless optical mouse features adjustable DPI settings, allowing you to switch between different sensitivity levels. Its ergonomic design ensures comfort for long hours of use, and the wireless connectivity provides a clean and clutter-free workspace.",
    29.99,
    25,
    1,
    "/images/optical-mouse.jpg"
  ),

  // Keyboards (categoryId: 2)
  new Product(
    3,
    "Mechanical Keyboard",
    "Durable mechanical keyboard with customizable backlighting and tactile switches for gaming and typing.",
    "The mechanical keyboard offers a satisfying typing experience with tactile switches that provide feedback on every keystroke. It comes with customizable backlighting options, allowing you to choose from various colors and effects to match your gaming environment. The sturdy build ensures durability and longevity.",
    89.99,
    15,
    2,
    "/images/keyboard.jpg"
  ),
  new Product(
    4,
    "Wireless Gaming Keyboard",
    "Lightweight wireless gaming keyboard with responsive keys and programmable macros.",
    "This wireless gaming keyboard offers a clutter-free experience with responsive keys and customizable macros. The lightweight design and long battery life ensure convenience during extended gaming sessions. The backlit keys add a stylish touch and enhance visibility in low-light environments.",
    99.99,
    10,
    2,
    "/images/wireless-keyboard.jpg"
  ),

  // Monitors (categoryId: 3)
  new Product(
    5,
    "HD Monitor",
    "27-inch HD monitor with high refresh rate and ultra-thin bezel, perfect for gaming and multimedia.",
    "This HD monitor delivers stunning visuals with its high refresh rate and ultra-thin bezel design. The 27-inch screen size provides an immersive viewing experience, whether you're gaming, watching movies, or working. The monitor features excellent color accuracy and sharpness to enhance your overall multimedia experience.",
    199.99,
    10,
    3,
    "/images/monitor.jpg"
  ),
  new Product(
    6,
    "4K Ultra HD Monitor",
    "32-inch 4K Ultra HD monitor with high color accuracy and built-in speakers.",
    "This 32-inch 4K Ultra HD monitor offers exceptional color accuracy and clarity, making it ideal for professional work and high-definition entertainment. The built-in speakers provide convenient audio without needing additional peripherals. The sleek design and high resolution ensure a top-notch viewing experience.",
    349.99,
    8,
    3,
    "/images/4k-monitor.jpg"
  ),

  // Headphones (categoryId: 4)
  new Product(
    7,
    "Gaming Headset",
    "Comfortable gaming headset with surround sound and noise-cancelling microphone for immersive gameplay.",
    "This gaming headset provides an immersive audio experience with surround sound technology, enhancing your gaming sessions. The noise-cancelling microphone ensures clear communication with your teammates, while the adjustable headband and plush ear cushions offer comfort during extended use. The sleek design and customizable RGB lighting add a stylish touch to your gaming setup.",
    79.99,
    25,
    4,
    "/images/headset.jpg"
  ),
  new Product(
    8,
    "Wireless Bluetooth Headphones",
    "High-quality wireless Bluetooth headphones with noise cancellation and long battery life.",
    "These wireless Bluetooth headphones offer high-quality sound with active noise cancellation. The long battery life ensures uninterrupted listening, while the comfortable over-ear design provides a secure fit for extended wear. Ideal for both casual listening and focused work.",
    129.99,
    15,
    4,
    "/images/bluetooth-headphones.jpg"
  ),

  // Microphones (categoryId: 5)
  new Product(
    9,
    "USB Microphone",
    "High-definition USB microphone with adjustable stand and noise-filtering technology.",
    "This USB microphone provides high-definition audio capture, making it ideal for podcasting, streaming, and voiceovers. The adjustable stand allows for optimal positioning, and the noise-filtering technology ensures clear sound without unwanted background noise.",
    89.99,
    20,
    5,
    "/images/usb-microphone.jpg"
  ),
  new Product(
    10,
    "Studio Condenser Microphone",
    "Professional studio condenser microphone with shock mount and pop filter for clear recordings.",
    "The studio condenser microphone offers professional-grade audio quality with a shock mount and pop filter to minimize unwanted noise. Ideal for studio recordings, voiceovers, and high-quality audio capture, this microphone ensures clear and accurate sound reproduction.",
    149.99,
    12,
    5,
    "/images/studio-microphone.jpg"
  ),
];

export default products;
