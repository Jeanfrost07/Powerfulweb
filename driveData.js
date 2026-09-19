const driveItems = [
  {
    id: "freelancing-digital-marketing-bundle",
    name: "Freelancing & Digital Marketing 30+ Courses",
    category: "Drive Links",
    description: "A massive bundle of 30+ recorded video courses covering Digital Marketing, SEO, Web/App Development, Shopify, Fiverr freelancing, and more.",
    link: "https://drive.google.com/drive/folders/1ezDZ3uDplBOjbuBGw1qxzzD64tiXhtDt?usp=sharing"
  },
  {
    id: "ethicalhackingcourse",
    name: "Cyber Security & Ethical Hacking",
    category: "Cybersecurity",
    link: "https://drive.google.com/drive/mobile/folders/1if6MCeBCj8sxWwJIKhtgwU0GBuBW8uLx",
    description:"A complete hands-on practical course covering Linux basics to advanced website hacking."
  },
  {
    id: "mega-it-course-bundle",
    name: "1TB+ Mega IT & Tech Course Bundle",
    category: "Drive Links",
    description: "Massive 1TB+ collection of 1000+ premium courses covering Data Science, AI, AWS, Machine Learning, Python, Ethical Hacking, and more.",
    link: "https://drive.google.com/drive/folders/1CgN7DE3pNRNh_4BA_zrrMLqWz6KquwuD"
  },
  {
    id: "youtube-masterclass-a-to-z",
    name: "YouTube Masterclass - Complete A To Z Creator Guide",
    category: "Drive Links",
    description: "A complete A to Z guide on creating a successful YouTube channel, covering ideation, scripting, recording, editing, team management, and monetization.",
    link: "https://drive.google.com/drive/folders/11foeRsMRUa_y_sGmaUPzjhNek6Tp9pJu"
  },
  {
    id: "fb-movie-upload-blueprint",
    name: "Facebook Movie Upload Master Blueprint 2026",
    category: "Drive Links",
    description: "A complete master blueprint and guide for uploading and monetizing movie clips on Facebook.",
    link: "https://drive.google.com/drive/folders/1QOErgQOzNylQT0MRV1iwXUTWvZ4f9J3q"
  },
  {
    id: "black-hat-hacking",
    name: "Black Hat Hacking",
    category: "Drive Links",
    description: "Advanced hacking resources, tutorials, and materials focused on deep cybersecurity concepts and exploits.",
    link: "https://drive.google.com/drive/folders/1OupQx076SN-RSGCMZuPwUWocciEZkShd"
  },
  {
    id: "ai-reels-bundle",
    name: "AI Reels Bundle",
    category: "Drive Links",
    description: "A complete bundle of AI-generated reels and short-form video content ready for social media growth.",
    link: "https://drive.google.com/drive/folders/1O6Xz8g2N1W19SZNfFvNAGaccy64pugNZ"
  },
  {
    id: "fb-movie-clips-bundle",
    name: "Facebook Movie Clips Bundle",
    category: "Drive Links",
    description: "A collection of ready-to-upload movie clips optimized for Facebook pages and video monetization.",
    link: "https://drive.google.com/drive/folders/1s2vzrE9IEqzh8CsriqaLRWOAt0lHsSR7"
  },
  {
    id: "slic-media-editing-pack",
    name: "SLIC MEDIA — 2000GB Video Editing Pack",
    category: "Drive Links",
    description: "A massive 2TB collection of premium video editing assets, overlays, sound effects, and templates for professional editing.",
    link: "https://drive.google.com/drive/folders/1N7Z7rPvEWbynDXFX-fQSn_GDOdXz-NB1"
  },
  {
    id: "editing-arrows-pack",
    name: "Video Editing Arrows Pack",
    category: "Drive Links",
    description: "A collection of animated and static arrow assets perfect for highlighting elements and retaining viewer attention.",
    link: "https://drive.google.com/drive/folders/12rGF-xaM104zQTZjKNjhmHHs65qhK-Tt"
  },
  {
    id: "green-screen-assets",
    name: "Green Screen Assets",
    category: "Drive Links",
    description: "Ready-to-use green screen (chroma key) clips and animations to add dynamic elements to your videos.",
    link: "https://drive.google.com/drive/folders/1xN2mXd5JJBuuWIYYRp2mICfDILKfaD3Q"
  },
  {
    id: "editing-gifs-pack",
    name: "Video Editing GIFs",
    category: "Drive Links",
    description: "A curated pack of trending and funny GIFs to add humor and engagement to your social media edits.",
    link: "https://drive.google.com/drive/folders/1Fq5OTTYvxNzpNrtO2qQNczZ953fF8VrY"
  },
  {
    id: "sound-effects-pack",
    name: "Premium Sound Effects (SFX)",
    category: "Drive Links",
    description: "A massive library of essential sound effects including swooshes, pops, risers, and cinematic impacts.",
    link: "https://drive.google.com/drive/folders/10vR3XlJ_2A9c-o36EOIAQX8Cc65Zfg61"
  },
  {
    id: "video-transitions-pack",
    name: "Video Transitions Pack",
    category: "Drive Links",
    description: "Smooth, dynamic, and professional video transitions to elevate the quality of your cuts.",
    link: "https://drive.google.com/drive/folders/1JwBP2ug3AKTl-l5-R0wwqQQydlYB9Ud5"
  },
  {
    id: "editing-images-elements",
    name: "Stock Images & Elements",
    category: "Drive Links",
    description: "High-quality images and graphical elements useful for video backgrounds, B-roll, and visual storytelling.",
    link: "https://drive.google.com/drive/folders/13eUfWhZVgXPMT5-c3sORmeD2u-O-W37A"
  },
  {
    id: "video-overlays-pack",
    name: "Cinematic Video Overlays",
    category: "Drive Links",
    description: "Light leaks, film grains, CRT effects, and visual overlays to give your videos a highly polished, cinematic look.",
    link: "https://drive.google.com/drive/folders/1WobS6xLS_IJggS8UbyV8NYR_lYit5NPR"
  },
  {
    id: "video-backgrounds-pack",
    name: "Video Backgrounds",
    category: "Drive Links",
    description: "A collection of motion graphics and static backgrounds ideal for green screen replacements or text overlays.",
    link: "https://drive.google.com/drive/folders/1tTyX89RpsHcXNtjsyNddjOSl0E5a-52C"
  },
  {
    id: "thumbnail-material-pack",
    name: "Thumbnail Design Material",
    category: "Drive Links",
    description: "Essential assets, glow effects, borders, and elements to design high-CTR (Click-Through Rate) YouTube thumbnails.",
    link: "https://drive.google.com/drive/folders/18FUvGBBJQAVJCEC9dkxuyUGrZiVmWTvQ"
  },
];