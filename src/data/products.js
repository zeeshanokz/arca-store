export const CATEGORIES = [
  "All",
  "Keyboards",
  "Mice",
  "Audio",
  "Connectivity",
  "Workspace",
];

export const products = [
  {
    id: 1,
    name: "Apex Pro TKL Keyboard",
    category: "Keyboards",
    price: 149.99,
    rating: 4.8,
    reviews: 2847,
    tagline: "Tactile precision for power users",
    description:
      "The Apex Pro TKL features magnetically actuated OmniPoint switches, a compact tenkeyless layout, and a full OLED display for instant performance feedback. Whether you're deep in a coding session or dominating your workflow, every keystroke responds exactly when and how you want.",
    specs: [
      "OmniPoint 2.0 adjustable magnetic switches (0.1–4.0 mm actuation)",
      "Tenkeyless layout with function row",
      "Per-key RGB with 16.8 M colour support",
      "OLED smart display",
      "USB Type-A passthrough + detachable braided cable",
      "Aircraft-grade aluminium top frame",
      "N-key rollover & 100% anti-ghosting",
    ],
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Flow X Wireless Mouse",
    category: "Mice",
    price: 89.99,
    rating: 4.7,
    reviews: 1563,
    tagline: "Fluid movement, zero compromise",
    description:
      "The Flow X combines an ultra-lightweight design under 55 g with a TrueMove Air optical sensor that delivers pinpoint accuracy at any speed. Switch seamlessly between two devices via Bluetooth or 2.4 GHz USB receiver with less than 1 ms latency.",
    specs: [
      "TrueMove Air optical sensor (100–18,000 DPI)",
      "55 g ultralight honeycomb shell",
      "2.4 GHz wireless + Bluetooth multipoint",
      "Up to 70 hours battery per charge",
      "6 programmable buttons",
      "Onboard memory for 5 profiles",
      "PTFE feet for frictionless glide",
    ],
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Arctis Nova Pro Headset",
    category: "Audio",
    price: 249.99,
    rating: 4.9,
    reviews: 4201,
    tagline: "Reference-grade audio for creators",
    description:
      "The Arctis Nova Pro headset redefines premium audio with its high-fidelity stereo drivers, dual-battery hot-swap system, and active noise cancellation. From spatial audio to studio-quality music production, it handles it all in complete comfort.",
    specs: [
      "High-resolution 40 mm neodymium drivers",
      "Active Noise Cancellation (ANC)",
      "Dual hot-swap Li-ion batteries (no downtime)",
      "2.4 GHz + Bluetooth dual wireless",
      "Retractable ClearCast bidirectional microphone",
      "Steel headband + ski-goggle suspension system",
      "Companion app with 10-band parametric EQ",
    ],
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "UltraHub Pro 7-in-1",
    category: "Connectivity",
    price: 69.99,
    rating: 4.5,
    reviews: 892,
    tagline: "One hub, every connection you need",
    description:
      "Expand your laptop's connectivity instantly with the UltraHub Pro. Featuring a 4K HDMI port, 100 W Power Delivery pass-through, USB 3.0 ports, SD/microSD card readers, and a 3.5 mm audio jack — all in a slim aluminium enclosure that fits in any bag.",
    specs: [
      "4K@30 Hz HDMI output",
      "100 W USB-C Power Delivery pass-through",
      "3× USB 3.0 Type-A (5 Gbps)",
      "SD & microSD card reader (simultaneous)",
      "3.5 mm combo audio jack",
      "Braided USB-C cable (20 cm)",
      "Aluminium heat-dissipation shell",
    ],
    image:
      "https://media.istockphoto.com/id/1155975789/photo/man-holding-mini-adapter-for-laptops-and-flash-memory.webp?a=1&b=1&s=612x612&w=0&k=20&c=H4aVayA6zkwGh4ORzZyJLPtmQaoNboO-aOofhCiTwmk=",
  },
  {
    id: 5,
    name: "Ergo Monitor Arm",
    category: "Workspace",
    price: 119.99,
    rating: 4.6,
    reviews: 1104,
    tagline: "Perfect positioning, every time",
    description:
      "The Ergo Monitor Arm provides six degrees of adjustability — height, depth, tilt, swivel, rotation, and pivot — keeping your display exactly where your eyes need it. A built-in cable management channel keeps your desk clean.",
    specs: [
      'Supports 17"–34" monitors up to 10 kg',
      "360° rotation + 90° pivot (portrait mode)",
      "Height range: 15–60 cm above desk",
      "Full-motion tilt: +90° / −45°",
      "Integrated cable management channel",
      "Desk clamp or grommet mount included",
      "VESA 75×75 and 100×100 mm compatible",
    ],
    image:
      "https://images.unsplash.com/photo-1547119957-637f8679db1e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    name: "Nova True Wireless Earbuds",
    category: "Audio",
    price: 129.99,
    rating: 4.7,
    reviews: 3358,
    tagline: "Immersive sound, all day long",
    description:
      "Nova earbuds deliver rich, balanced audio with custom-tuned 11 mm dynamic drivers. Hybrid ANC cuts ambient noise by up to 30 dB, while a transparency mode keeps you aware of your surroundings. Eight hours of playback plus 24 via the case.",
    specs: [
      "11 mm custom dynamic drivers",
      "Hybrid Active Noise Cancellation (−30 dB)",
      "Transparency / ambient awareness mode",
      "8 h playback + 24 h with charging case",
      "IPX5 sweat & water resistance",
      "Bluetooth 5.3 with multipoint connection",
      "Touch controls + voice assistant support",
    ],
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 7,
    name: 'Arc Slim Laptop Sleeve 15"',
    category: "Workspace",
    price: 44.99,
    rating: 4.4,
    reviews: 657,
    tagline: "Sleek protection for your setup",
    description:
      "The Arc Slim Sleeve wraps your laptop in 8 mm dual-layer memory foam lined with anti-scratch microfibre. A magnetic closure keeps it shut securely, while the water-resistant outer shell shrugs off spills and light rain.",
    specs: [
      'Fits 13"–15.6" laptops',
      "8 mm dual-layer memory foam padding",
      "Anti-scratch microfibre lining",
      "Water-resistant coated nylon exterior",
      "Magnetic snap closure",
      "Front zip pocket for cables & accessories",
      "Compatible with most backpacks & bags",
    ],
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 8,
    name: "XL Desk Mat Obsidian",
    category: "Workspace",
    price: 39.99,
    rating: 4.8,
    reviews: 2105,
    tagline: "Your entire desk, elevated",
    description:
      "The XL Desk Mat Obsidian transforms your workspace with an extra-large 900×400 mm surface that unifies keyboard, mouse, and accessories. The micro-textured cloth top provides consistent glide for any mouse sensor, while the 4 mm rubber base keeps everything in place.",
    specs: [
      "900×400×4 mm (XL size)",
      "Micro-textured cloth surface",
      "Compatible with all optical & laser sensors",
      "4 mm natural rubber non-slip base",
      "Stitched anti-fray edges",
      "Spill-resistant surface treatment",
      "Rolled, not folded — crease-free delivery",
    ],
    image:
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=600&q=80",
  },
];
