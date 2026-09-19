/* =========================================================
   POWERFUL WEBS
   SHARED TOOL DATABASE

   IMPORTANT:
   - Is file me sirf tool data rahega.
   - Homepage aur Details page dono isi file ko use karenge.
   - Kisi aur JS file me "const tools = [...]" mat banana.
========================================================= */


/* =========================================================
   AI TOOLS
========================================================= */

const aiTools = [

  {
    id: "krisp",
    name: "Krisp",
    category: "AI Tools",
    pricing: "Premium",
    desc: "AI-powered noise cancellation for calls and meetings.",
    longDesc: "Krisp uses AI to remove background noise and improve audio quality during online meetings and calls.",
    link: "https://krisp.ai/",
    features: [
      "AI noise cancellation",
      "Echo removal",
      "Voice enhancement",
      "Works with online meetings"
    ]
  },

  {
    id: "beatoven",
    name: "Beatoven",
    category: "AI Tools",
    pricing: "Freemium",
    desc: "Create original AI-generated music for your projects.",
    longDesc: "Beatoven helps creators generate original background music using AI for videos, podcasts and other creative projects.",
    link: "https://www.beatoven.ai/",
    features: [
      "AI music generation",
      "Custom moods",
      "Background music",
      "Creator-friendly workflow"
    ]
  },

  {
    id: "cleanvoice",
    name: "Cleanvoice",
    category: "AI Tools",
    pricing: "Premium",
    desc: "AI audio cleanup tool for podcasts and recordings.",
    longDesc: "Cleanvoice uses AI to clean recorded audio by removing unwanted sounds and improving the overall listening experience.",
    link: "https://cleanvoice.ai/",
    features: [
      "Remove filler sounds",
      "Audio cleanup",
      "Podcast enhancement",
      "AI-powered processing"
    ]
  },

  {
    id: "podcastle",
    name: "Podcastle",
    category: "AI Tools",
    pricing: "Freemium",
    desc: "AI-powered platform for recording and editing audio and video.",
    longDesc: "Podcastle provides AI-powered tools for recording, editing and creating audio and video content.",
    link: "https://podcastle.ai/",
    features: [
      "Audio recording",
      "Video editing",
      "AI voice tools",
      "Content creation"
    ]
  },

  {
    id: "flair",
    name: "Flair",
    category: "AI Tools",
    pricing: "Free",
    desc: "AI-powered product photography and visual creation.",
    longDesc: "Flair helps users create product visuals and marketing images using AI-powered design tools.",
    link: "https://flair.ai/",
    features: [
      "AI product photography",
      "Visual generation",
      "Product scenes",
      "Creative templates"
    ]
  },

  {
    id: "illustroke",
    name: "Illustroke",
    category: "AI Tools",
    pricing: "Freemium",
    desc: "Generate vector illustrations from text prompts.",
    longDesc: "Illustroke converts text descriptions into customizable vector illustrations that can be used in creative projects.",
    link: "https://illustroke.com/",
    features: [
      "Text-to-vector",
      "AI illustrations",
      "Editable graphics",
      "Multiple styles"
    ]
  },

  {
    id: "patterned",
    name: "Patterned",
    category: "AI Tools",
    pricing: "Freemium",
    desc: "Create custom patterns with AI.",
    longDesc: "Patterned helps designers generate unique patterns for creative and commercial design projects.",
    link: "https://www.patterned.ai/",
    features: [
      "AI pattern generation",
      "Custom designs",
      "Multiple styles",
      "Design-focused workflow"
    ]
  },

  {
    id: "stockimg",
    name: "Stockimg",
    category: "AI Tools",
    pricing: "Freemium",
    desc: "Generate images, logos and other creative assets with AI.",
    longDesc: "Stockimg provides AI-powered generation tools for creating visual assets such as images, posters and logos.",
    link: "https://stockimg.ai/",
    features: [
      "AI image generation",
      "Logo generation",
      "Poster creation",
      "Creative assets"
    ]
  },

  {
    id: "copy-ai",
    name: "Copy.ai",
    category: "AI Tools",
    pricing: "Freemium",
    desc: "AI-powered writing and content creation platform.",
    longDesc: "Copy.ai helps users create marketing copy, content and other written materials using AI.",
    link: "https://www.copy.ai/",
    features: [
      "AI writing",
      "Marketing copy",
      "Content generation",
      "Workflow automation"
    ]
  },

  {
    id: "copymonkey",
    name: "CopyMonkey",
    category: "AI Tools",
    pricing: "Premium",
    desc: "AI tool for optimizing Amazon product listings.",
    longDesc: "CopyMonkey uses AI to help sellers optimize Amazon listings and improve product content.",
    link: "https://copymonkey.ai/",
    features: [
      "Amazon listing optimization",
      "AI copywriting",
      "Keyword integration",
      "Product content"
    ]
  },

  {
    id: "ocoya",
    name: "Ocoya",
    category: "AI Tools",
    pricing: "Premium",
    desc: "AI-powered social media content creation and management.",
    longDesc: "Ocoya combines AI content creation with social media management tools for creators and businesses.",
    link: "https://www.ocoya.com/",
    features: [
      "Social media content",
      "AI copywriting",
      "Post scheduling",
      "Content management"
    ]
  },

  {
    id: "unbounce-smart-copy",
    name: "Unbounce Smart Copy",
    category: "AI Tools",
    pricing: "Premium",
    desc: "AI writing assistant for marketing and landing pages.",
    longDesc: "Unbounce Smart Copy helps marketers generate and improve marketing copy for campaigns and landing pages.",
    link: "https://unbounce.com/product/smart-copy/",
    features: [
      "AI copywriting",
      "Marketing content",
      "Landing page copy",
      "Content templates"
    ]
  },

  {
    id: "vidyo",
    name: "Vidyo",
    category: "AI Tools",
    pricing: "Freemium",
    desc: "Turn long videos into short-form content using AI.",
    longDesc: "Vidyo uses AI to identify useful moments in long videos and create short-form content for social media.",
    link: "https://vidyo.ai/",
    features: [
      "Long-to-short video",
      "AI clipping",
      "Social media content",
      "Automatic captions"
    ]
  },

  {
    id: "maverick",
    name: "Maverick",
    category: "AI Tools",
    pricing: "Premium",
    desc: "AI-powered personalized video marketing.",
    longDesc: "Maverick helps businesses create personalized videos for customer communication and marketing campaigns.",
    link: "https://www.trymaverick.com/",
    features: [
      "Personalized videos",
      "AI video creation",
      "Customer engagement",
      "Marketing automation"
    ]
  },

  {
    id: "quickchat",
    name: "Quickchat",
    category: "AI Tools",
    pricing: "Freemium",
    desc: "Build AI assistants for customer conversations.",
    longDesc: "Quickchat provides tools for creating AI assistants that can communicate with customers and answer questions.",
    link: "https://www.quickchat.ai/",
    features: [
      "AI assistants",
      "Customer support",
      "Automated conversations",
      "Business integrations"
    ]
  },

  {
    id: "puzzle",
    name: "Puzzle",
    category: "AI Tools",
    pricing: "Premium",
    desc: "Build AI-powered healthcare applications and assistants.",
    longDesc: "Puzzle provides infrastructure and tools for building AI applications designed for healthcare workflows.",
    link: "https://www.puzzle.com/",
    features: [
      "AI healthcare tools",
      "AI applications",
      "Developer platform",
      "Workflow support"
    ]
  },

  {
    id: "soundraw",
    name: "Soundraw",
    category: "AI Tools",
    pricing: "Premium",
    desc: "Generate customizable AI music for creative projects.",
    longDesc: "Soundraw allows creators to generate and customize AI music for videos, content and other projects.",
    link: "https://soundraw.io/",
    features: [
      "AI music generation",
      "Music customization",
      "Multiple genres",
      "Creator-focused tools"
    ]
  },

  {
    id: "cleanup",
    name: "Cleanup",
    category: "AI Tools",
    pricing: "Freemium",
    desc: "Remove unwanted objects from images using AI.",
    longDesc: "Cleanup helps users remove unwanted objects, people and imperfections from images using AI-powered editing.",
    link: "https://cleanup.pictures/",
    features: [
      "Object removal",
      "AI image editing",
      "Remove unwanted elements",
      "Simple browser workflow"
    ]
  },

  {
    id: "resume-worded",
    name: "Resume Worded",
    category: "AI Tools",
    pricing: "Freemium",
    desc: "Get AI-powered feedback on resumes and LinkedIn profiles.",
    longDesc: "Resume Worded analyzes resumes and professional profiles and provides suggestions to improve their presentation.",
    link: "https://resumeworded.com/",
    features: [
      "Resume feedback",
      "LinkedIn feedback",
      "AI suggestions",
      "Resume optimization"
    ]
  },

  {
    id: "looka",
    name: "Looka",
    category: "AI Tools",
    pricing: "Freemium",
    desc: "Create logos and brand designs using AI.",
    longDesc: "Looka uses AI to help users create logos and build visual branding for businesses and projects.",
    link: "https://looka.com/",
    features: [
      "AI logo creation",
      "Brand identity",
      "Logo customization",
      "Brand assets"
    ]
  },

  {
    id: "theres-an-ai-for-that",
    name: "There's An AI For That",
    category: "AI Tools",
    pricing: "Free",
    desc: "Discover AI tools for different tasks and use cases.",
    longDesc: "There's An AI For That is a directory that helps users discover AI tools based on different tasks and requirements.",
    link: "https://theresanaiforthat.com/",
    features: [
      "AI tool discovery",
      "Task-based search",
      "Large AI directory",
      "Tool discovery"
    ]
  },

  {
    id: "synthesia",
    name: "Synthesia",
    category: "AI Tools",
    pricing: "Freemium",
    desc: "Create AI avatar videos from text.",
    longDesc: "Synthesia allows users to create professional videos using AI avatars and text-based scripts.",
    link: "https://www.synthesia.io/",
    features: [
      "AI avatar videos",
      "Text-to-video",
      "Multiple languages",
      "Business video creation"
    ]
  },

  {
    id: "descript",
    name: "Descript",
    category: "AI Tools",
    pricing: "Freemium",
    desc: "Edit audio and video using a text-based workflow.",
    longDesc: "Descript combines audio and video editing with transcription and AI-powered content creation features.",
    link: "https://www.descript.com/",
    features: [
      "Text-based editing",
      "Transcription",
      "Audio editing",
      "Video editing"
    ]
  },

  {
    id: "otter",
    name: "Otter",
    category: "AI Tools",
    pricing: "Freemium",
    desc: "AI meeting transcription and note-taking assistant.",
    longDesc: "Otter uses AI to transcribe meetings and conversations and generate useful notes and summaries.",
    link: "https://otter.ai/",
    features: [
      "AI transcription",
      "Meeting notes",
      "Summaries",
      "Speaker identification"
    ]
  },

  {
    id: "ink",
    name: "INK",
    category: "AI Tools",
    pricing: "Freemium",
    desc: "AI writing and content optimization platform.",
    longDesc: "INK provides AI-powered writing, content optimization and SEO-focused tools for creators and marketers.",
    link: "https://inkforall.com/",
    features: [
      "AI writing",
      "SEO optimization",
      "Content improvement",
      "Writing assistance"
    ]
  },

  {
    id: "thundercontent",
    name: "Thundercontent",
    category: "AI Tools",
    pricing: "Premium",
    desc: "AI-powered text and voice content generation.",
    longDesc: "Thundercontent helps users generate written and audio content using artificial intelligence.",
    link: "https://thundercontent.com/",
    features: [
      "AI content generation",
      "AI voice generation",
      "Text creation",
      "Content workflows"
    ]
  }

];


/* =========================================================
   PHOTO TOOLS
========================================================= */

const photoTools = [

  {
    id: "remove-bg",
    name: "remove.bg",
    category: "Photo Tools",
    pricing: "Freemium",
    desc: "Remove backgrounds from images automatically.",
    longDesc: "remove.bg uses AI to automatically remove image backgrounds and create transparent or new-background images.",
    link: "https://www.remove.bg/",
    features: [
      "Automatic background removal",
      "Transparent backgrounds",
      "AI image processing",
      "Easy browser workflow"
    ]
  },

  {
    id: "leiapix",
    name: "LeiaPix Converter",
    category: "Photo Tools",
    pricing: "Free",
    desc: "Convert images into immersive 3D motion experiences.",
    longDesc: "LeiaPix Converter allows users to transform regular images into depth-based 3D motion experiences.",
    link: "https://convert.leiapix.com/",
    features: [
      "Image-to-3D motion",
      "Depth effects",
      "Browser-based tool",
      "Free conversion"
    ]
  },
  
  {
    id: "photopea",
    name: "Photopea",
    category: "Design",
    link: "https://www.photopea.com/",
    pricing: "Freemium",
    desc: "A free, advanced web-based photo editor similar to Adobe Photoshop.",
    longDesc: "Photopea is an incredibly powerful, browser-based graphics editor that perfectly mimics the interface and features of Adobe Photoshop. It supports PSD, AI, XD, and Sketch files natively. The best part is that it runs entirely locally in your browser, meaning your files are never uploaded to any server.",
    features: [
      "Photoshop-like UI and keyboard shortcuts",
      "Native support for PSD, AI, and Sketch files",
      "Runs entirely locally in the browser",
      "No installation or registration required"
    ]
  },
  {
    id: "upscayl",
    name: "Upscayl",
    category: "Photo Tools",
    link: "https://www.upscayl.org/",
    pricing: "Free",
    desc: "A free and open-source AI image upscaler to enhance low-resolution photos.",
    longDesc: "Upscayl is a powerful, completely free, and open-source AI image upscaling tool. It uses advanced artificial intelligence algorithms to enlarge and sharpen low-resolution images without losing quality. The desktop version runs entirely locally on your hardware, ensuring 100% privacy for your files.",
    features: [
      "Completely free and open-source",
      "Runs locally on your device for privacy",
      "Batch processing for multiple images",
      "Available for Windows, Mac, and Linux"
    ]
  },
  {
    id: "iloveimg",
    name: "iLoveIMG",
    category: "Photo Tools",
    link: "https://www.iloveimg.com/",
    pricing: "Freemium",
    desc: "A collection of simple online tools to compress, crop, resize, and edit images.",
    longDesc: "iLoveIMG is an incredibly useful web-based platform that offers a complete suite of quick image editing tools. It allows you to easily compress file sizes, resize dimensions, crop photos, and convert image formats in bulk without needing to install any heavy software.",
    features: [
      "Bulk image compression and resizing",
      "Convert multiple formats (JPG, PNG, GIF, RAW)",
      "Built-in meme generator and basic editor",
      "Direct integration with Google Drive and Dropbox"
    ]
  },
  {
    id: "cleanuppictures",
    name: "Cleanup.pictures",
    category: "Photo Tools",
    link: "https://cleanup.pictures/",
    pricing: "Freemium",
    desc: "Remove unwanted objects, people, or text from your photos using AI.",
    longDesc: "Cleanup.pictures is a powerful, browser-based AI retouching tool. It uses advanced inpainting technology to let you quickly and seamlessly erase unwanted objects, watermarks, or photobombers from your images with just a few brush strokes.",
    features: [
      "AI-powered object and text removal",
      "Seamless background reconstruction",
      "Extremely easy brush interface",
      "High-resolution exports (Pro version)"
    ]
  },
  {
    id: "squoosh",
    name: "Squoosh",
    category: "Photo Tools",
    link: "https://squoosh.app/",
    pricing: "Free",
    desc: "An advanced image compression web app by Google to reduce file sizes instantly.",
    longDesc: "Squoosh is an incredibly powerful, open-source image compression tool created by the Google Chrome Labs team. It features a side-by-side slider that lets you visually compare the original and compressed images in real-time, helping you find the perfect balance between file size and quality.",
    features: [
      "Side-by-side visual comparison slider",
      "Supports modern web formats like WebP and AVIF",
      "Processes images locally in the browser",
      "Completely free and open-source"
    ]
  },
{
    id: "vectorizerai",
    name: "Vectorizer.AI",
    category: "Photo Tools",
    link: "https://vectorizer.ai/",
    pricing: "Freemium",
    desc: "Easily convert your JPEG and PNG bitmap images to scalable SVG vectors using AI.",
    longDesc: "Vectorizer.AI uses advanced deep learning algorithms to trace pixels and convert raster images into crisp, scalable vector graphics. It is an essential tool for designers and creators who need to scale up logos, artwork, or sketches into infinite-resolution SVGs without any quality loss.",
    features: [
      "Fully automatic AI image tracing",
      "Supports JPEG, PNG, WEBP, and GIF inputs",
      "Exports to SVG, PDF, EPS, DXF, and PNG",
      "Maintains sharp edges and vibrant colors"
    ]
  },
  {
    id: "tinypng",
    name: "TinyPNG",
    category: "Photo Tools",
    link: "https://tinypng.com/",
    pricing: "Freemium",
    desc: "Smart lossy compression to reduce the file size of your WEBP, JPEG, and PNG files.",
    longDesc: "TinyPNG uses smart lossy compression techniques to drastically reduce the file size of your images without any visible drop in quality. By selectively decreasing the number of colors in the image, it saves bandwidth and significantly speeds up your website's loading time.",
    features: [
      "Smart lossy compression algorithm",
      "Supports WebP, PNG, and JPEG formats",
      "Batch compress up to 20 images at once",
      "Preserves full alpha transparency in PNGs"
    ]
  },
  {
    id: "waifu2x",
    name: "waifu2x",
    category: "Photo Tools",
    link: "https://waifu2x.udp.jp/",
    pricing: "Free",
    desc: "An AI-powered image upscaler and noise reduction tool built for anime-style art.",
    longDesc: "waifu2x is a powerful, open-source image scaler that uses Deep Convolutional Neural Networks. Although it was originally designed specifically for upscaling anime-style art and illustrations without creating blurry edges, it also performs exceptionally well on regular photographs for noise reduction and resolution enhancement.",
    features: [
      "Specialized in anime-style art and illustrations",
      "Deep Convolutional Neural Networks (SRCNN)",
      "Excellent image noise reduction levels",
      "Completely free and open-source"
    ]
  },
  {
    id: "lunapic",
    name: "LunaPic",
    category: "Photo Tools",
    link: "https://www.lunapic.com/",
    pricing: "Free",
    desc: "A completely free, feature-rich online photo editor with tons of effects and filters.",
    longDesc: "LunaPic is a web-based photo editor that might look a bit retro, but it packs an incredible amount of power. It offers hundreds of free effects, filters, and animation tools. You can easily make backgrounds transparent, create GIFs, and edit photos without ever needing to create an account or download any software.",
    features: [
      "Hundreds of filters and artistic effects",
      "Built-in GIF animation and editing",
      "1-click background transparency",
      "No registration or installation required"
    ]
  },
  {
    id: "lunapic",
    name: "LunaPic",
    category: "Photo Tools",
    link: "https://www.lunapic.com/",
    pricing: "Free",
    desc: "A completely free, feature-rich online photo editor with tons of effects and filters.",
    longDesc: "LunaPic is a web-based photo editor that might look a bit retro, but it packs an incredible amount of power. It offers hundreds of free effects, filters, and animation tools. You can easily make backgrounds transparent, create GIFs, and edit photos without ever needing to create an account or download any software.",
    features: [
      "Hundreds of filters and artistic effects",
      "Built-in GIF animation and editing",
      "1-click background transparency",
      "No registration or installation required"
    ]
  },

];

/* =========================================================
   VIDEO TOOLS
========================================================= */

const videoTools = [
{
    id: "capcut",
    name: "CapCut",
    category: "Video Tools",
    link: "https://www.capcut.com/",
    pricing: "Freemium",
    desc: "An all-in-one video editor packed with AI tools, effects, and templates.",
    longDesc: "CapCut is an immensely popular, highly capable video editor available on desktop, web, and mobile. It is packed with built-in effects, transitions, and AI-powered tools like auto-captions and background removal, making it the perfect daily driver for creating fast-paced social media clips, reels, and faceless videos.",
    features: [
      "Advanced AI auto-captions and effects",
      "Massive library of trending templates",
      "Cross-platform (Mobile, Desktop, Web)",
      "Seamless timeline editing experience"
    ]
  },
  {
    id: "veed",
    name: "VEED.IO",
    category: "Video Tools",
    link: "https://www.veed.io/",
    pricing: "Freemium",
    desc: "A powerful online video suite specifically designed for social media creators.",
    longDesc: "VEED is a browser-based video editing platform tailored for creators and marketers. It excels at generating highly accurate, customizable animated subtitles and translating audio. It is incredibly useful for quickly formatting podcast clips, dynamic text hooks, and highlights for international audiences.",
    features: [
      "Highly accurate AI auto-subtitles",
      "One-click video formatting for social media",
      "Browser-based collaborative editing",
      "Built-in screen and webcam recording"
    ]
  },
  {
    id: "clipchamp",
    name: "Clipchamp",
    category: "Video Tools",
    link: "https://clipchamp.com/",
    pricing: "Freemium",
    desc: "A user-friendly online video editor now integrated into Microsoft Windows.",
    longDesc: "Acquired by Microsoft, Clipchamp is an easy-to-use video editor that runs in your browser or as a Windows app. It provides an intuitive drag-and-drop interface, high-quality stock footage, and realistic AI voiceovers, making it great for quick edits and narrative documentary-style video generation.",
    features: [
      "Intuitive drag-and-drop timeline",
      "Includes premium stock audio and video",
      "Realistic AI text-to-speech voices",
      "Direct integration with Windows"
    ]
  },
  {
    id: "kapwing",
    name: "Kapwing",
    category: "Video Tools",
    link: "https://www.kapwing.com/",
    pricing: "Freemium",
    desc: "A collaborative online video editor built for modern digital creators and teams.",
    longDesc: "Kapwing is a versatile online workspace for creating images, GIFs, and videos. It is widely used for meme creation, adding text overlays to clips, and collaborative editing. Since it runs in the cloud, teams can edit the same video project simultaneously from anywhere.",
    features: [
      "Real-time collaborative video editing",
      "Extensive toolkit for memes and social content",
      "AI-powered smart cut and translation tools",
      "Cloud-based storage and asset management"
    ]
  },
  {
    id: "opusclip",
    name: "OpusClip",
    category: "Video Tools",
    link: "https://www.opus.pro/",
    pricing: "Freemium",
    desc: "AI-powered tool that turns long videos into viral short clips with one click.",
    longDesc: "OpusClip is an absolute game-changer for clipping channels. It uses AI to analyze long-form videos like podcasts or streams, automatically finding the most engaging moments and turning them into standalone vertical shorts with dynamic captions, formatting, and predictive virality scores.",
    features: [
      "AI-driven long-to-short video repurposing",
      "Dynamic, engaging auto-captions",
      "Predictive AI virality scoring",
      "Automatic face tracking and reframing"
    ]
  },
  {
    id: "handbrake",
    name: "HandBrake",
    category: "Video Tools",
    link: "https://handbrake.fr/",
    pricing: "Free",
    desc: "A powerful, open-source video transcoder to compress and convert video files.",
    longDesc: "HandBrake is a legendary, open-source tool for converting video from nearly any format to a selection of modern, widely supported codecs. It is essential for video editors who need to compress massive raw video files without losing visual quality before importing them into their editing software.",
    features: [
      "Completely free and open-source",
      "Advanced video compression algorithms",
      "Built-in device-specific encoding presets",
      "Supports batch scanning and queuing"
    ]
  },
  {
    id: "shutterencoder",
    name: "Shutter Encoder",
    category: "Video Tools",
    link: "https://www.shutterencoder.com/",
    pricing: "Free",
    desc: "A professional, open-source video and audio converter designed by video editors.",
    longDesc: "Designed by industry professionals, Shutter Encoder is one of the most powerful video conversion tools available. It handles everything from simple MP4 compression to creating broadcast-ready ProRes files. It is a Swiss Army knife for editors dealing with complex codec and formatting issues.",
    features: [
      "Professional-grade codec support (ProRes, DNxHD)",
      "No-loss cutting and trimming tools",
      "Built-in video downloading capabilities",
      "100% free and open-source"
    ]
  },
  {
    id: "losslesscut",
    name: "LosslessCut",
    category: "Video Tools",
    link: "https://mifi.no/losslesscut/",
    pricing: "Free",
    desc: "The ultimate tool for blazing fast, lossless video and audio trimming.",
    longDesc: "LosslessCut allows you to quickly trim, cut, and extract segments from massive video files without any decoding or re-encoding. This means the process is virtually instant and completely preserves the original video quality, saving both time and hard drive space.",
    features: [
      "Instant, lossless cutting and trimming",
      "No quality loss or re-encoding required",
      "Great for extracting clips from heavy raw footage",
      "Free and cross-platform"
    ]
  },
  {
    id: "ezgif",
    name: "EZGIF",
    category: "Video Tools",
    link: "https://ezgif.com/",
    pricing: "Free",
    desc: "A simple online toolset for basic video editing and high-quality GIF creation.",
    longDesc: "Don't let the name or the old-school interface fool you. EZGIF is a highly reliable online toolset for converting videos to GIFs, compressing files, resizing, and making quick cuts. It is incredibly fast and completely free without adding any invasive watermarks.",
    features: [
      "High-quality Video to GIF conversion",
      "Simple online video cropping and resizing",
      "No watermarks on exported files",
      "No account or installation required"
    ]
  },
  {
    id: "clideo",
    name: "Clideo",
    category: "Video Tools",
    link: "https://clideo.com/",
    pricing: "Freemium",
    desc: "A comprehensive suite of online tools to merge, compress, and edit videos easily.",
    longDesc: "Clideo offers a collection of highly specialized, browser-based video tools. Whether you need to quickly compress a video for Discord, merge several clips together, add subtitles, or loop a segment, Clideo provides a clean, single-purpose interface for each specific task.",
    features: [
      "Clean, single-purpose video editing tools",
      "Fast online video compression",
      "Merge, crop, and resize clips easily",
      "Integrates with Google Drive and Dropbox"
    ]
  }

]






/* =========================================================
   Content Creation
========================================================= */
const contentTools = [
{
    id: "portent-idea-generator",
    name: "Portent Content Idea Generator",
    category: "Content Creation",
    link: "https://www.portent.com/tools/title-maker/",
    pricing: "Free",
    desc: "Generate catchy titles and content ideas for your next blog post or video.",
    longDesc: "Portent's Content Idea Generator is a fun and highly useful brainstorming tool. You just enter your subject, and it spins up creative, catchy, and sometimes hilarious title ideas that make for great blog posts, YouTube videos, or podcast episodes.",
    features: [
      "Instantly generates catchy titles",
      "Provides tips on why the title works",
      "Great for overcoming writer's block",
      "Completely free to use"
    ]
  },
  {
    id: "buzzsumo",
    name: "BuzzSumo",
    category: "Content Creation",
    link: "https://buzzsumo.com/",
    pricing: "Freemium",
    desc: "Analyze what content performs best for any topic or competitor.",
    longDesc: "BuzzSumo is an essential tool for content marketers. It allows you to search for any topic or domain and see exactly which articles or videos got the most social shares and engagement. It helps you understand what is trending before you create.",
    features: [
      "Track trending content across social media",
      "Analyze competitor content performance",
      "Identify key influencers in your niche",
      "Data-driven content strategy insights"
    ]
  },
  {
    id: "ahrefs",
    name: "Ahrefs",
    category: "Content Creation",
    link: "https://ahrefs.com/",
    pricing: "Freemium",
    desc: "A massive, industry-leading site explorer and backlink checker.",
    longDesc: "Ahrefs is a powerhouse SEO toolset. It is widely considered the best tool for analyzing a website's backlink profile, researching competitor keywords, and auditing your site for technical SEO issues. A must-have for serious website growth.",
    features: [
      "Comprehensive backlink analysis",
      "Competitor keyword research",
      "In-depth site auditing tools",
      "Rank tracking and content exploration"
    ]
  },
  {
    id: "yoast-seo",
    name: "Yoast SEO",
    category: "Content Creation",
    link: "https://yoast.com/wordpress/plugins/seo/",
    pricing: "Freemium",
    desc: "The most popular WordPress plugin to fully optimize your website.",
    longDesc: "Yoast SEO is the gold standard for WordPress search engine optimization. It provides real-time feedback on your content's readability and keyword usage, handles technical SEO elements like XML sitemaps, and ensures your pages look great on social media.",
    features: [
      "Real-time on-page SEO analysis",
      "Automatic XML sitemap generation",
      "Readability scoring for content",
      "Social media preview integration"
    ]
  },
  {
    id: "similarweb",
    name: "SimilarWeb",
    category: "Content Creation",
    link: "https://www.similarweb.com/",
    pricing: "Freemium",
    desc: "Analyze website traffic statistics and demographics for any domain.",
    longDesc: "SimilarWeb gives you an incredible behind-the-scenes look at any website's traffic. It estimates total monthly visits, shows where the traffic is coming from (search, social, direct), and provides audience demographics, making it perfect for market research.",
    features: [
      "Estimate traffic for any domain",
      "Analyze traffic sources and referrals",
      "Audience geography and demographics",
      "Compare competitor performance"
    ]
  },
  {
    id: "keywordtool-io",
    name: "Keyword Tool",
    category: "Content Creation",
    link: "https://keywordtool.io/",
    pricing: "Freemium",
    desc: "A powerful free alternative to Google Keyword Planner.",
    longDesc: "KeywordTool.io uses Google Autocomplete data to generate hundreds of relevant long-tail keywords for any topic. It is fantastic for SEO and content creation because it shows exactly what people are typing into Google, YouTube, Bing, and Amazon.",
    features: [
      "Generates long-tail keyword ideas",
      "Data from Google, YouTube, and Amazon",
      "No account required for basic searches",
      "Great for finding user search intent"
    ]
  },
  {
    id: "copyscape",
    name: "Copyscape",
    category: "Content Creation",
    link: "https://www.copyscape.com/",
    pricing: "Freemium",
    desc: "Search for copies of your page on the web to prevent plagiarism.",
    longDesc: "Copyscape is the industry standard for plagiarism detection. You simply paste your URL or text, and it scans the entire web to see if anyone has stolen your content, or to ensure that the content you are about to publish is 100% original.",
    features: [
      "Instantly detects duplicate content",
      "Protects your site's SEO ranking",
      "Essential for managing freelance writers",
      "Checks against the live web"
    ]
  },
  {
    id: "pagespeed-insights",
    name: "Google PageSpeed Insights",
    category: "Content Creation",
    link: "https://pagespeed.web.dev/",
    pricing: "Free",
    desc: "Check the load speed and performance of your site on mobile and desktop.",
    longDesc: "Google PageSpeed Insights analyzes the content of a web page, then generates specific suggestions to make that page load faster. Since site speed is a major Google ranking factor, this tool is critical for any web developer or SEO specialist.",
    features: [
      "Official Google performance scoring",
      "Actionable tips to improve load times",
      "Analyzes both mobile and desktop",
      "Checks Core Web Vitals metrics"
    ]
  },
  {
    id: "gtmetrix",
    name: "GTmetrix",
    category: "Content Creation",
    link: "https://gtmetrix.com/",
    pricing: "Freemium",
    desc: "Deeply analyze your page’s speed performance and load bottlenecks.",
    longDesc: "GTmetrix goes a step further than standard speed tests by providing incredibly detailed waterfall charts and video playbacks of how your site loads. It helps developers pinpoint exactly which images, scripts, or fonts are slowing down their website.",
    features: [
      "Detailed waterfall load charts",
      "Historical performance tracking",
      "Test from different global regions",
      "Clear, actionable optimization reports"
    ]
  },
  {
    id: "xmlsitemaps",
    name: "XML Sitemaps",
    category: "Content Creation",
    link: "https://www.xml-sitemaps.com/",
    pricing: "Free",
    desc: "A quick generator that creates XML and HTML sitemap variants.",
    longDesc: "XML-Sitemaps.com is a quick, no-registration-required tool that crawls your website and instantly generates an XML sitemap. This file is essential for submitting to Google Search Console so that search engines can easily find and index all your pages.",
    features: [
      "Generates sitemaps in seconds",
      "No account or installation needed",
      "Supports up to 500 pages for free",
      "Essential for proper Google indexing"
    ]
  },

]

/* =========================================================
   DEVELOPER TOOLS
========================================================= */

const developerTools = [
  {
    id: "html5up",
    name: "HTML5 UP",
    category: "Developer",
    link: "https://html5up.net/",
    pricing: "Free",
    desc: "Responsive, beautifully designed HTML5 and CSS3 site templates.",
    longDesc: "HTML5 UP offers a fantastic collection of sleek, fully responsive HTML5 and CSS3 website templates. They are highly customizable, super lightweight, and completely free to use for personal and commercial projects under the CCA license. Perfect for developers building quick portfolio or landing pages.",
    features: [
      "100% responsive and mobile-friendly",
      "Clean HTML5 and CSS3 code",
      "Free for personal and commercial use",
      "Highly customizable templates"
    ]
  },
  {
    id: "bootswatch",
    name: "Bootswatch",
    category: "Developer",
    link: "https://bootswatch.com/",
    pricing: "Free",
    desc: "A massive collection of free, open-source themes for Bootstrap.",
    longDesc: "Bootswatch is a legendary resource for web developers using the Bootstrap framework. It provides dozens of free, drop-in CSS themes that completely transform the look and feel of a standard Bootstrap website without needing to write any custom CSS.",
    features: [
      "Drop-in CSS themes for Bootstrap",
      "Completely free and open-source",
      "Easy to install and customize",
      "Regularly updated with Bootstrap versions"
    ]
  },
  {
    id: "templated",
    name: "Templated",
    category: "Developer",
    link: "https://templated.co/",
    pricing: "Free",
    desc: "A massive collection of free CSS and HTML5 site templates.",
    longDesc: "Templated provides a massive library of nearly a thousand free CSS and HTML5 website templates. It is an excellent starting point for web developers and designers who need a quick, reliable structural foundation for their web projects.",
    features: [
      "Hundreds of free HTML5 templates",
      "Clean and simple codebase",
      "Great for prototyping websites",
      "Creative Commons licensing"
    ]
  },
  {
    id: "wordpress",
    name: "WordPress",
    category: "Developer",
    link: "https://wordpress.org/",
    pricing: "Free",
    desc: "The world's most popular open-source content management system.",
    longDesc: "WordPress powers over a third of the internet. It is a highly customizable, open-source content management system (CMS) that allows you to build anything from a simple blog to a complex e-commerce store using thousands of free plugins and themes.",
    features: [
      "Powers 40%+ of the entire web",
      "Massive ecosystem of plugins and themes",
      "Completely open-source and free",
      "Highly scalable for any business"
    ]
  },
  {
    id: "strikingly",
    name: "Strikingly",
    category: "Developer",
    link: "https://www.strikingly.com/",
    pricing: "Freemium",
    desc: "Build a beautiful website in minutes without any coding or design skills.",
    longDesc: "Strikingly is a website builder that focuses on creating gorgeous, mobile-optimized single-page websites. It is incredibly user-friendly and perfect for entrepreneurs, freelancers, and creatives who need to get a landing page up and running fast.",
    features: [
      "Zero coding experience required",
      "Optimized for single-page layouts",
      "Built-in e-commerce and blog features",
      "Excellent mobile responsiveness"
    ]
  },
  {
    id: "withoomph",
    name: "Withoomph",
    category: "Developer",
    link: "https://withoomph.com/",
    pricing: "Freemium",
    desc: "Beautiful, custom logos designed instantly for your startup or project.",
    longDesc: "Withoomph is a fast and intuitive logo generator that creates custom typography and icon-based logos in seconds. By just entering your business name and keywords, it generates dozens of stylish options perfect for rapid branding.",
    features: [
      "Instant logo generation via keywords",
      "Hundreds of typography and icon combos",
      "Clean and modern design aesthetics",
      "Great for rapid prototyping"
    ]
  },
  {
    id: "hipsterlogo",
    name: "Hipster Logo Generator",
    category: "Developer",
    link: "https://www.hipsterlogogenerator.com/",
    pricing: "Freemium",
    desc: "It’s Hip, It’s Current, It’s Stylish, It’s the Hipster Logo Generator.",
    longDesc: "This fun and highly effective tool allows you to create trendy, minimalist 'hipster-style' logos in just a few clicks. You combine basic shapes, text, and icons to create modern badges that look great on websites, merchandise, and coffee cups.",
    features: [
      "Creates trendy, minimalist badge logos",
      "Simple step-by-step visual editor",
      "Free low-res downloads",
      "Perfect for modern, indie branding"
    ]
  },
  {
    id: "squarespacelogo",
    name: "Squarespace Free Logo",
    category: "Developer",
    link: "https://logo.squarespace.com/",
    pricing: "Freemium",
    desc: "A sleek, minimalist tool to design and download free low-res logos.",
    longDesc: "Squarespace provides a beautifully simple logo creation tool. You can search through thousands of high-quality icons, pair them with elegant typography, and download a free low-resolution version for your website or digital projects.",
    features: [
      "Minimalist, drag-and-drop interface",
      "Access to thousands of premium icons",
      "Clean typography pairings",
      "Free low-resolution downloads"
    ]
  },
  {
    id: "hivecloud",
    name: "Hive",
    category: "Developer",
    link: "https://hive.com/",
    pricing: "Freemium",
    desc: "A powerful cloud service and project management workspace.",
    longDesc: "Hive is a robust productivity and cloud storage platform that helps teams manage projects, share files, and collaborate in real-time. It integrates messaging, task management, and file sharing into one centralized dashboard.",
    features: [
      "Centralized project management",
      "Real-time team collaboration",
      "Integrated file sharing and storage",
      "Flexible workflow visualizations"
    ]
  },
  {
    id: "invoicetome",
    name: "Invoice to me",
    category: "Developer",
    link: "https://invoiceto.me/",
    pricing: "Free",
    desc: "A completely free, ridiculously simple online invoice generator.",
    longDesc: "Invoice to me is a bare-bones, highly efficient web tool for freelancers and contractors. It provides a clean invoice template right in your browser. You simply click on the text fields, type your billing details, and download a professional PDF.",
    features: [
      "No sign-up or installation required",
      "Click-to-edit browser template",
      "Instantly generates professional PDFs",
      "Automatically calculates totals and taxes"
    ]
  },
  {
    id: "freeinvoicegenerator",
    name: "Free Invoice Generator",
    category: "Developer",
    link: "https://invoice-generator.com/",
    pricing: "Free",
    desc: "An alternative, highly customizable free invoice generator.",
    longDesc: "This tool lets you quickly make invoices with an intuitive, stylish template straight from your web browser. It allows for advanced features like adding your own logo, discounts, shipping costs, and currency selection before exporting to PDF.",
    features: [
      "Customizable with brand logos",
      "Supports multiple currencies and discounts",
      "Clean, professional PDF exports",
      "Completely free to use without an account"
    ]
  },
  {
    id: "slimvoice",
    name: "Slimvoice",
    category: "Developer",
    link: "https://slimvoice.co/",
    pricing: "Free",
    desc: "Insanely simple, minimalist invoicing for freelancers.",
    longDesc: "Slimvoice cuts out all the bloated features of traditional accounting software and gives you an insanely simple way to create, manage, and send invoices. Its minimalist interface ensures you spend less time billing and more time working.",
    features: [
      "Ultra-minimalist interface",
      "Creates stunningly simple PDF invoices",
      "Stripe integration for direct payments",
      "Easy management of past invoices"
    ]
  },
  {
    id: "thenameapp",
    name: "The Name App",
    category: "Developer",
    link: "https://thenameapp.com/",
    pricing: "Free",
    desc: "Find an available name for your brilliant idea across domains and social media.",
    longDesc: "The Name App helps entrepreneurs and developers quickly check if their new project name is available as a domain (like .com, .net, .io) and across major social media platforms, saving tons of time during the branding phase.",
    features: [
      "Simultaneous domain and social media search",
      "Clean, distraction-free interface",
      "Instant availability results",
      "Perfect for early-stage brainstorming"
    ]
  },
  {
    id: "naminum",
    name: "Naminum",
    category: "Developer",
    link: "https://www.naminum.com/",
    pricing: "Free",
    desc: "Discover a perfect, unique company name based on your root keyword.",
    longDesc: "Naminum takes a base word that you provide and intelligently adds suffixes, prefixes, and modifications to generate hundreds of unique, brandable company names that you might not have thought of yourself.",
    features: [
      "Generates brandable names from keywords",
      "Prefix and suffix modifications",
      "Checks domain availability instantly",
      "Great for finding short, catchy names"
    ]
  },
  {
    id: "shortdomainsearch",
    name: "Short Domain Search",
    category: "Developer",
    link: "https://shortdomainsearch.com/",
    pricing: "Free",
    desc: "Find short, available single-word domain names quickly.",
    longDesc: "Short Domain Search is a continuously updated database of short, single-word domain names that are currently available to register. It's an absolute goldmine for finding premium-sounding names without paying premium auction prices.",
    features: [
      "Curated list of single-word domains",
      "Automatically updated database",
      "Filter by domain extension (.com, .io, etc.)",
      "Direct links to registrars"
    ]
  },
  {
    id: "wordoid",
    name: "Wordoid",
    category: "Developer",
    link: "https://wordoid.com/",
    pricing: "Free",
    desc: "Pick a short and catchy name for your business that sounds like a real word.",
    longDesc: "Wordoid is an intelligent naming tool that generates invented words that look and sound completely natural. You can set rules like language, length, and whether it should contain a specific keyword, making it ideal for Web 2.0 style branding.",
    features: [
      "Generates natural-sounding made-up words",
      "Filter by length and quality",
      "Multi-language support (English, Spanish, etc.)",
      "Integrated domain availability check"
    ]
  },
  {
    id: "hipsterbusinessname",
    name: "Hipster Business Name",
    category: "Developer",
    link: "https://www.hipsterbusiness.name/",
    pricing: "Free",
    desc: "A fun, hipster business name generator paired with a cool logo.",
    longDesc: "If you want a trendy, hipster-style name (think 'Ampersand & Co' style), this generator does exactly that. It pairs random, trendy words together and even displays them in a cool hipster logo format to give you instant branding inspiration.",
    features: [
      "Trendy and quirky name generation",
      "Instantly previews names in a logo layout",
      "Integrated with domain purchasing",
      "Great for creative and indie projects"
    ]
  },
  {
    id: "impossibility",
    name: "Impossibility",
    category: "Developer",
    link: "http://impossibility.org/",
    pricing: "Free",
    desc: "The best domain name generator ever that actually checks unregistered domains.",
    longDesc: "Impossibility takes your keyword, combines it with a carefully curated list of nouns, verbs, and adjectives, and then rapidly searches for unregistered .com domain names. It guarantees that the results it shows are actually available to buy.",
    features: [
      "Combines keywords with curated word lists",
      "Lightning-fast .com availability checks",
      "Only shows actually unregistered domains",
      "No cluttered or taken results"
    ]
  },
  {
    id: "leandomainsearch",
    name: "Lean Domain Search",
    category: "Developer",
    link: "https://leandomainsearch.com/",
    pricing: "Free",
    desc: "Find a great available domain name for your website in seconds.",
    longDesc: "Created by Automattic (the makers of WordPress), Lean Domain Search pairs your keyword with thousands of other words to generate a massive list of available .com domains. It's one of the most reliable and fastest tools for domain hunting.",
    features: [
      "Generates thousands of ideas instantly",
      "Sort by popularity, length, or alphabetical",
      "Checks Twitter handle availability too",
      "Built by the trusted WordPress team"
    ]
  },
  {
    id: "domainr",
    name: "Domainr",
    category: "Developer",
    link: "https://domainr.com/",
    pricing: "Free",
    desc: "Fast, free, domain name search exploring all top-level domains.",
    longDesc: "Domainr goes beyond the standard .com and explores the entire universe of Top Level Domains (TLDs). As you type, it instantly checks availability and suggests clever domain hacks (like del.icio.us) using over 2,000 domain extensions.",
    features: [
      "Instant, as-you-type search results",
      "Explores over 2,000 domain extensions",
      "Excellent for finding clever 'domain hacks'",
      "Clean, minimalist interface"
    ]
  },
  {
    id: "geektyper",
    name: "GeekTyper",
    category: "Developer",
    pricing: "Free",
    desc: "A fun fake hacker terminal simulator.",
    longDesc: "GeekTyper provides simulated hacker-style terminal interfaces for entertainment and creative projects.",
    link: "https://geektyper.com/mobile/",
    features: [
      "Fake hacker interface",
      "Terminal simulation",
      "Multiple themes",
      "Entertainment-focused"
    ]
  },

  {
    id: "transitioncss",
    name: "Transition.css",
    category: "Developer",
    link: "https://www.transition.style",
    pricing: "Free",
    desc: "Drop-in CSS transitions to easily animate your web elements.",
    longDesc: "Transition.css offers a collection of pre-made, easy-to-use CSS transitions. It allows developers to add smooth animations to elements instantly without writing complex keyframes from scratch.",
    features: [
      "No JavaScript required",
      "Plug-and-play CSS file",
      "40+ unique transition styles",
      "Lightweight and fast"
    ]
  },
  {
    id: "chartjs",
    name: "Chart.js",
    category: "Developer",
    link: "https://www.chartjs.org",
    pricing: "Free",
    desc: "Simple, clean, and engaging HTML5 based JavaScript charts.",
    longDesc: "Chart.js is an open-source library that lets developers create beautiful, responsive charts and graphs using the HTML5 canvas element. It is incredibly easy to set up and highly customizable.",
    features: [
      "8 different chart types",
      "Responsive scaling",
      "Excellent rendering performance",
      "Extensive documentation"
    ]
  },
  {
    id: "packery",
    name: "Packery",
    category: "Developer",
    link: "https://packery.metafizzy.co",
    pricing: "Freemium",
    desc: "A bin-packing layout library for draggable and resizable grids.",
    longDesc: "Packery is a JavaScript layout library that uses a smart bin-packing algorithm. It makes it incredibly easy to create dynamic, drag-and-drop grid layouts where items fill empty gaps perfectly (like Pinterest).",
    features: [
      "Smart gap-filling algorithm",
      "Built-in drag and drop support",
      "Responsive fluid layouts",
      "Free for non-commercial use"
    ]
  },
  {
    id: "splide",
    name: "Splide",
    category: "Developer",
    link: "https://splidejs.com",
    pricing: "Free",
    desc: "A lightweight, accessible, and flexible slider/carousel library.",
    longDesc: "Splide is a dependency-free slider and carousel library written in TypeScript. It focuses on accessibility, performance, and flexibility, making it a modern alternative to older jQuery-based sliders.",
    features: [
      "No dependencies required",
      "Excellent accessibility (ARIA support)",
      "Touch and swipe friendly",
      "Video and thumbnail support"
    ]
  },
  {
    id: "simpleparallax",
    name: "SimpleParallax",
    category: "Developer",
    link: "https://simpleparallax.com",
    pricing: "Free",
    desc: "A tiny Vanilla JS library that adds parallax animations to images.",
    longDesc: "SimpleParallax is a lightweight JavaScript library designed to add subtle parallax effects to images seamlessly. It works beautifully on any image and doesn't require complex HTML wrappers or background images.",
    features: [
      "Extremely lightweight",
      "Works on standard image tags",
      "No background-image CSS required",
      "Customizable orientation and scale"
    ]
  },
  {
    id: "aos",
    name: "AOS",
    category: "Developer",
    link: "https://michalsnik.github.io/aos",
    pricing: "Free",
    desc: "Animate On Scroll library to reveal elements as you scroll down.",
    longDesc: "AOS (Animate On Scroll) is a small library that allows you to animate elements smoothly as you scroll down the page. It's incredibly easy to set up using data attributes directly inside your HTML tags.",
    features: [
      "CSS-driven animations",
      "No dependencies",
      "Easy HTML attribute setup",
      "Fade, slide, and zoom effects"
    ]
  },
  {
    id: "swiperjs",
    name: "Swiper.js",
    category: "Developer",
    link: "https://swiperjs.com",
    pricing: "Free",
    desc: "The most modern free mobile touch slider with hardware acceleration.",
    longDesc: "Swiper is the industry standard for creating mobile-friendly touch carousels and sliders. It delivers native-like swipe gestures, incredible performance, and extensive customization options for modern websites.",
    features: [
      "Hardware-accelerated transitions",
      "Native touch interactions",
      "Rich API and callbacks",
      "Used by major global brands"
    ]
  },
  {
    id: "gsap",
    name: "GSAP",
    category: "Developer",
    link: "https://greensock.com/gsap",
    pricing: "Freemium",
    desc: "Professional-grade JavaScript animation platform for the modern web.",
    longDesc: "GSAP (GreenSock Animation Platform) is a robust animation library used by top developers to create high-performance, complex sequences. It can animate anything that JavaScript can touch, from CSS to Canvas and SVG.",
    features: [
      "Industry standard for web animation",
      "Incredible performance & speed",
      "ScrollTrigger plugin for scroll animations",
      "Cross-browser compatibility"
    ]
  },
  {
    id: "threejs",
    name: "Three.js",
    category: "Developer",
    link: "https://threejs.org",
    pricing: "Free",
    desc: "An easy-to-use, lightweight 3D library with a default WebGL renderer.",
    longDesc: "Three.js makes creating 3D graphics in the browser accessible to developers. It provides an abstraction over WebGL, allowing you to render 3D models, complex scenes, and interactive animations using JavaScript.",
    features: [
      "Renders high-quality 3D graphics",
      "Supports various 3D model formats",
      "VR and AR (WebXR) support",
      "Massive open-source community"
    ]
  },
  {
    id: "lenis",
    name: "Lenis",
    category: "Developer",
    link: "https://lenis.studiofreight.com",
    pricing: "Free",
    desc: "A lightweight, robust, and performant smooth scroll library.",
    longDesc: "Lenis is an open-source smooth scrolling library built for the modern web. It provides a buttery-smooth, native-like scrolling experience while giving developers the power to sync scrolling with complex GSAP animations.",
    features: [
      "Buttery smooth scrolling",
      "Lightweight and highly performant",
      "Integrates perfectly with GSAP",
      "Accessible and user-friendly"
    ]
  },
  {
    id: "framermotion",
    name: "Framer Motion",
    category: "Developer",
    link: "https://www.framer.com/motion",
    pricing: "Free",
    desc: "A production-ready declarative motion library for React.",
    longDesc: "Framer Motion is an open-source React library that makes creating complex, interactive animations simple. It offers declarative animations, drag interactions, and layout animations with a very clean syntax.",
    features: [
      "Built specifically for React",
      "Declarative animation syntax",
      "Advanced drag and gesture controls",
      "Automatic layout animations"
    ]
  },
  {
    id: "locomotivescroll",
    name: "Locomotive Scroll",
    category: "Developer",
    link: "https://locomotivemtl.github.io/locomotive-scroll",
    pricing: "Free",
    desc: "Viewport element detection and smooth scrolling with parallax.",
    longDesc: "Locomotive Scroll provides a seamless smooth scrolling experience combined with native parallax effects. It is highly favored by award-winning websites for creating immersive, high-end web experiences.",
    features: [
      "Smooth inertial scrolling",
      "Built-in parallax effects",
      "Scroll direction detection",
      "Used in Awwwards-winning sites"
    ]
  }

];


/* =========================================================
   PRODUCTIVITY TOOLS
========================================================= */

const productivityTools = [

{
    id: "notion",
    name: "Notion",
    category: "Productivity",
    link: "https://www.notion.so/",
    pricing: "Freemium",
    desc: "An all-in-one workspace for your notes, tasks, wikis, and databases.",
    longDesc: "Notion is a highly customizable, all-in-one workspace that blends everyday work apps into one. It allows individuals and teams to write, plan, collaborate, and organize everything from personal study notes to massive company databases using a flexible block-based system.",
    features: [
      "Flexible block-based document editor",
      "Customizable databases and Kanban boards",
      "Thousands of free community templates",
      "Real-time cross-platform synchronization"
    ]
  },
  {
    id: "obsidian",
    name: "Obsidian",
    category: "Productivity",
    link: "https://obsidian.md/",
    pricing: "Freemium",
    desc: "A private and flexible writing app that adapts to the way you think.",
    longDesc: "Obsidian is a powerful knowledge base that works on top of a local folder of plain text Markdown files. It features a unique graph view to visualize connections between your notes, making it an excellent 'second brain' for organizing complex computer science concepts, code snippets, or research notes securely.",
    features: [
      "Local Markdown storage for total privacy",
      "Interactive graph view for linked thinking",
      "Highly customizable with community plugins",
      "Works completely offline"
    ]
  },
  {
    id: "todoist",
    name: "Todoist",
    category: "Productivity",
    link: "https://todoist.com/",
    pricing: "Freemium",
    desc: "A simple yet powerful task manager and to-do list app.",
    longDesc: "Todoist helps you organize your work and life with ease. It features powerful natural language recognition, meaning you can just type 'Study Data Structures every Monday at 5 PM' and it will automatically set up the recurring task. It is perfect for keeping daily schedules on track.",
    features: [
      "Natural language date recognition",
      "Priority levels and task labels",
      "Cross-platform synchronization",
      "Productivity trend tracking"
    ]
  },
  {
    id: "trello",
    name: "Trello",
    category: "Productivity",
    link: "https://trello.com/",
    pricing: "Freemium",
    desc: "A visual tool that empowers your team to manage any type of project or workflow.",
    longDesc: "Trello is a highly visual project management tool based on the Kanban framework. You organize tasks into boards, lists, and cards, making it incredibly easy to track progress at a glance. It is widely used by developers and creators to track content schedules and software development phases.",
    features: [
      "Intuitive Kanban board interface",
      "Drag-and-drop task management",
      "Power-Ups for app integrations",
      "Built-in workflow automation"
    ]
  },
  {
    id: "clockify",
    name: "Clockify",
    category: "Productivity",
    link: "https://clockify.me/",
    pricing: "Freemium",
    desc: "The most popular free time tracker and timesheet app for teams and individuals.",
    longDesc: "Clockify is a robust time-tracking application that lets you track work hours across various projects. Whether you are freelancing, managing a team, or just trying to monitor your own study habits before exams, Clockify provides detailed reports and visual dashboards completely free of charge.",
    features: [
      "Unlimited users in the free plan",
      "Detailed time and project reporting",
      "Idle detection and pomodoro timer",
      "Integrates with 80+ web apps"
    ]
  },
  {
    id: "pomofocus",
    name: "Pomofocus",
    category: "Productivity",
    link: "https://pomofocus.io/",
    pricing: "Free",
    desc: "A customizable pomodoro timer that works on desktop and mobile browsers.",
    longDesc: "Pomofocus is a simple, browser-based Pomodoro timer designed to help you focus on work or tasks without distractions. It uses the popular 25-minute work and 5-minute break technique, and allows you to add specific sub-tasks to track your session progress efficiently.",
    features: [
      "Classic Pomodoro technique timer",
      "Task and session tracking",
      "Customizable work and break intervals",
      "Clean, distraction-free interface"
    ]
  },
  {
    id: "habitica",
    name: "Habitica",
    category: "Productivity",
    link: "https://habitica.com/",
    pricing: "Freemium",
    desc: "A free habit-building and productivity app that treats your real life like a game.",
    longDesc: "Habitica gamifies your personal productivity. It turns your daily tasks, to-do lists, and habits into a retro RPG game. As you complete real-world coding or editing tasks, your digital avatar gains experience, levels up, and unlocks new gear, making productivity genuinely fun.",
    features: [
      "RPG-style gamification of tasks",
      "Customizable digital avatars",
      "In-game rewards and consequences",
      "Join parties with friends for accountability"
    ]
  },
  {
    id: "zapier",
    name: "Zapier",
    category: "Productivity",
    link: "https://zapier.com/",
    pricing: "Freemium",
    desc: "Connect your apps and automate workflows without writing any code.",
    longDesc: "Zapier is the ultimate automation tool that acts as a bridge between thousands of different web applications. It allows you to create 'Zaps'—automated workflows that trigger actions across different apps seamlessly, saving you hours of repetitive manual data entry.",
    features: [
      "Integrates with 5,000+ applications",
      "No-code workflow automation",
      "Multi-step customizable Zaps",
      "Saves time on repetitive digital tasks"
    ]
  },
  {
    id: "excalidraw",
    name: "Excalidraw",
    category: "Productivity",
    link: "https://excalidraw.com/",
    pricing: "Free",
    desc: "A virtual collaborative whiteboard with a charming hand-drawn style.",
    longDesc: "Excalidraw is a brilliant open-source virtual whiteboard. It features a unique, hand-drawn aesthetic that makes diagrams, wireframes, and flowcharts look organic. It is completely browser-based, highly secure, and perfect for quick brainstorming or mapping out web game logic.",
    features: [
      "Charming hand-drawn visual style",
      "End-to-end encrypted collaboration",
      "No registration required",
      "Export as PNG or SVG"
    ]
  },
  {
    id: "miro",
    name: "Miro",
    category: "Productivity",
    link: "https://miro.com/",
    pricing: "Freemium",
    desc: "A visual workspace and infinite canvas for innovation and team collaboration.",
    longDesc: "Miro is a professional-grade online whiteboard platform built for dynamic workflows. It offers an infinite canvas where you can map out complex project architectures, plan multi-phase documentary scripts, or brainstorm ideas using sticky notes, flowcharts, and mind maps.",
    features: [
      "Infinite collaborative canvas",
      "Extensive template library",
      "Real-time cursor tracking for teams",
      "Integrations with Figma, Slack, and more"
    ]
  }

];


/* =========================================================
   MARKETING TOOLS
========================================================= */

const marketingTools = [

 {
    id: "answerthepublic",
    name: "AnswerThePublic",
    category: "Marketing",
    link: "https://answerthepublic.com/",
    pricing: "Freemium",
    desc: "Discover what people are asking about on search engines to guide your content creation.",
    longDesc: "AnswerThePublic is a visual keyword research tool that listens into search engine autocomplete data. It cranks out every useful phrase and question people are asking around your keyword, making it an absolute goldmine for content creators and SEO specialists planning their next topics.",
    features: [
      "Visual search listening and mapping",
      "Generates content ideas from search queries",
      "Exports data directly to CSV",
      "Daily free searches available"
    ]
  },
  {
    id: "googletrends",
    name: "Google Trends",
    category: "Marketing",
    link: "https://trends.google.com/",
    pricing: "Free",
    desc: "Analyze the popularity of top search queries in Google Search across various regions.",
    longDesc: "Google Trends is a free data exploration tool that shows how frequently a given search term is entered into Google's search engine relative to the site's total search volume. It is essential for spotting viral topics, seasonal trends, and planning marketing campaigns effectively.",
    features: [
      "Real-time search data analysis",
      "Compare multiple keywords globally",
      "Filter by region, time, and category",
      "Completely free to use"
    ]
  },
  {
    id: "alsoasked",
    name: "AlsoAsked",
    category: "Marketing",
    link: "https://alsoasked.com/",
    pricing: "Freemium",
    desc: "Explore the 'People Also Ask' data from Google to understand user search intent.",
    longDesc: "AlsoAsked aggregates and visualizes the 'People Also Ask' questions that appear in Google search results. By showing the relationship between these questions, it helps marketers and writers structure their articles to directly answer what users are actively searching for.",
    features: [
      "Maps Google's 'People Also Ask' data",
      "Visualizes relationships between queries",
      "Exportable data for content briefs",
      "Highly valuable for SEO and content strategy"
    ]
  },
  {
    id: "wordcounter",
    name: "WordCounter",
    category: "Marketing",
    link: "https://wordcounter.net/",
    pricing: "Free",
    desc: "An easy-to-use online tool for counting words, characters, sentences, and paragraphs.",
    longDesc: "WordCounter goes beyond just counting words and characters. It helps improve word choice and writing style, optionally detects grammar mistakes, and calculates both reading and speaking time, making it a perfect quick tool for scriptwriters, bloggers, and copywriters.",
    features: [
      "Real-time word and character counting",
      "Reading and speaking time estimates",
      "Keyword density analysis",
      "Grammar and spell checking"
    ]
  },
  {
    id: "metatags",
    name: "Meta Tags",
    category: "Marketing",
    link: "https://metatags.io/",
    pricing: "Free",
    desc: "Preview, edit, and generate HTML meta tags for better SEO and social media sharing.",
    longDesc: "Meta Tags is a brilliant tool to debug and generate meta tag code for any website. You can preview exactly how your web page will look when shared on platforms like Google, Facebook, Twitter, and LinkedIn, ensuring your titles, descriptions, and images look perfect before deploying.",
    features: [
      "Live preview for social media shares",
      "Generates HTML meta tag code instantly",
      "Supports Open Graph and Twitter Cards",
      "Clean, user-friendly interface"
    ]
  },
  {
    id: "sharethis",
    name: "ShareThis",
    category: "Marketing",
    link: "https://sharethis.com/",
    pricing: "Free",
    desc: "Add free social sharing buttons and engagement tools to your website quickly.",
    longDesc: "ShareThis provides simple, customizable sharing buttons that you can drop into any website to increase social traffic. It supports over 40 of the most popular social channels and provides analytics to help you understand what content your audience is engaging with.",
    features: [
      "Customizable inline and sticky share buttons",
      "Supports 40+ social media platforms",
      "Easy integration with lightweight code",
      "Built-in audience sharing analytics"
    ]
  },
  {
    id: "bitly",
    name: "Bitly",
    category: "Marketing",
    link: "https://bitly.com/",
    pricing: "Freemium",
    desc: "A URL shortener built with powerful tools to help you grow and protect your brand.",
    longDesc: "Bitly is the industry standard for link management. It allows you to shorten long URLs, create custom branded links, and generate QR codes. Its comprehensive dashboard provides detailed click analytics, geographic data, and referral sources to track marketing performance.",
    features: [
      "Custom URL shortening and branding",
      "Detailed click analytics and tracking",
      "Dynamic QR code generation",
      "Integrates with hundreds of marketing apps"
    ]
  },
  {
    id: "tinywow",
    name: "TinyWow",
    category: "Marketing",
    link: "https://tinywow.com/",
    pricing: "Free",
    desc: "A massive collection of free online tools for PDFs, videos, images, and more.",
    longDesc: "TinyWow is an incredibly generous utility website that offers a vast array of free tools that usually require paid subscriptions elsewhere. From unlocking PDFs and converting video formats to removing image backgrounds and generating AI text, it has almost everything you need in one place.",
    features: [
      "100+ free tools for PDF, image, and video editing",
      "No account required and completely free",
      "Files are deleted after 15 minutes for privacy",
      "Built-in AI writing and generation tools"
    ]
  },
  {
    id: "hunter",
    name: "Hunter",
    category: "Marketing",
    link: "https://hunter.io/",
    pricing: "Freemium",
    desc: "Find professional email addresses in seconds and connect with people that matter.",
    longDesc: "Hunter lets you find professional email addresses associated with any domain. It is an essential tool for sales professionals, marketers, and creators looking to pitch sponsorships, network, or verify contact information for outreach campaigns.",
    features: [
      "Domain search to find company emails",
      "Email verification to ensure deliverability",
      "Built-in cold email campaign manager",
      "Browser extension for quick access"
    ]
  },
  {
    id: "ubersuggest",
    name: "Ubersuggest",
    category: "Marketing",
    link: "https://neilpatel.com/ubersuggest/",
    pricing: "Freemium",
    desc: "A powerful SEO tool that specializes in generating keyword ideas and site audits.",
    longDesc: "Acquired by Neil Patel, Ubersuggest is an all-in-one SEO and content marketing tool. It provides insights into your competitors' SEO strategies, suggests high-ranking keywords, offers content ideas, and runs comprehensive site audits to help improve your website's Google rankings.",
    features: [
      "Keyword research and volume data",
      "Competitor domain analysis",
      "Backlink tracking and insights",
      "Comprehensive SEO site auditing"
    ]
  },
  {
    id: "sparktoro",
    name: "SparkToro",
    category: "Marketing",
    link: "https://sparktoro.com/",
    pricing: "Freemium",
    desc: "Discover what your audience reads, listens to, watches, and follows online.",
    longDesc: "SparkToro is an innovative audience research tool. Instead of focusing on search keywords, it crawls social profiles and websites to tell you exactly which podcasts, YouTube channels, and websites your target audience is paying attention to, making PR and outreach highly targeted.",
    features: [
      "Deep audience behavior and interest research",
      "Identifies hidden niche influencers",
      "Analyzes social media and web data",
      "Perfect for targeted PR and marketing outreach"
    ]
  },
  {
    id: "reallygoodemails",
    name: "Really Good Emails",
    category: "Marketing",
    link: "https://reallygoodemails.com/",
    pricing: "Free",
    desc: "A curated collection of the best email designs and marketing campaigns.",
    longDesc: "Really Good Emails is an inspiration gallery showcasing the best email marketing designs on the web. It allows developers, designers, and marketers to browse thousands of well-crafted emails, see the underlying code, and get ideas for their own newsletters and campaigns.",
    features: [
      "Curated library of 10,000+ email designs",
      "View the actual HTML code behind emails",
      "Organized by categories (e.g., welcome, promotional)",
      "Save and build custom inspiration collections"
    ]
  },
  {
    id: "marketingexamples",
    name: "Marketing Examples",
    category: "Marketing",
    link: "https://marketingexamples.com/",
    pricing: "Free",
    desc: "A gallery of real-world marketing case studies, copywriting tips, and growth hacks.",
    longDesc: "Marketing Examples features short, sweet, and highly practical case studies on everything from cold emails and SEO to landing page design and copywriting. It is an absolute must-read resource for indie hackers, founders, and creators looking to grow their audience.",
    features: [
      "Bite-sized, practical marketing case studies",
      "Excellent teardowns of landing pages and copy",
      "Categorized for easy learning and reading",
      "Actionable tips for startups and creators"
    ]
  }

];


/* =========================================================
   EDUCATION TOOLS
========================================================= */
const educationTools = [

    {
    id: "goalkicker",
    name: "GoalKicker",
    category: "Education",
    link: "https://goalkicker.com/",
    pricing: "Free",
    desc: "Download completely free programming books compiled from Stack Overflow.",
    longDesc: "GoalKicker is a hidden gem for programmers and computer science students. It provides high-quality programming books for HTML, CSS, JavaScript, Java, C++, and 40+ other languages in free PDF format. All content is compiled directly from the legendary Stack Overflow Documentation.",
    features: [
      "Completely free PDF books",
      "Covers 40+ programming languages",
      "Notes compiled from Stack Overflow",
      "No login or registration required"
    ]
  },
  {
    id: "codewithrandom",
    name: "CodeWithRandom",
    category: "Education",
    link: "https://www.codewithrandom.com/javascript-projects/",
    pricing: "Free",
    desc: "Free HTML, CSS, and JavaScript projects with complete source code.",
    longDesc: "If you are learning web development, CodeWithRandom is one of the best websites for practice. You will find over 100 JavaScript projects ranging from beginner to advanced levels, complete with their HTML, CSS, and JS source code. It is absolutely perfect for building your resume and developer portfolio.",
    features: [
      "100+ Free JavaScript projects",
      "Includes complete HTML, CSS & JS code",
      "Great for building a developer portfolio",
      "Step-by-step beginner tutorials"
    ]
  },
  {
    id: "phet",
    name: "PhET Interactive Simulations",
    category: "Education",
    link: "https://phet.colorado.edu/",
    pricing: "Free",
    desc: "Free interactive math and science simulations based on extensive education research.",
    longDesc: "Founded by Nobel Laureate Carl Wieman at the University of Colorado Boulder, PhET creates highly engaging, interactive math and science simulations. These tools allow students to explore complex concepts in physics, chemistry, biology, and math in an intuitive, game-like environment.",
    features: [
      "Interactive STEM simulations",
      "Game-like learning environment",
      "Available in multiple languages",
      "Offline access available"
    ]
  },
  {
    id: "mathigon",
    name: "Mathigon",
    category: "Education",
    link: "https://mathigon.org/",
    pricing: "Free",
    desc: "The 'Textbook of the Future' offering highly interactive math courses.",
    longDesc: "Mathigon is an award-winning online mathematics learning platform. It offers highly interactive, visual courses filled with virtual manipulatives, puzzles, and engaging narratives that make learning complex mathematical concepts incredibly fun, intuitive, and accessible.",
    features: [
      "Interactive virtual manipulatives",
      "Engaging, story-driven courses",
      "Personalized learning paths",
      "Completely free to use"
    ]
  },
  {
    id: "nrich",
    name: "NRICH",
    category: "Education",
    link: "https://nrich.maths.org/",
    pricing: "Free",
    desc: "Rich, engaging mathematical problem-solving resources for teachers and students.",
    longDesc: "Created by the University of Cambridge, NRICH provides thousands of free mathematics enrichment materials. It focuses on developing deep problem-solving skills and mathematical thinking through challenging, engaging activities and games designed for students of all ages.",
    features: [
      "Curated by the University of Cambridge",
      "Focuses on critical problem-solving skills",
      "Thousands of free math games and puzzles",
      "Resources tailored by age group"
    ]
  },
  {
    id: "paulsmathnotes",
    name: "Paul's Online Math Notes",
    category: "Education",
    link: "https://tutorial.math.lamar.edu/",
    pricing: "Free",
    desc: "Comprehensive, free math notes and tutorials covering Calculus and Algebra.",
    longDesc: "Created by Professor Paul Dawkins, this legendary site provides complete, detailed notes, tutorials, and practice problems for College Algebra, Calculus I-III, and Differential Equations. It is an absolute lifesaver for university students needing clear, step-by-step mathematical explanations.",
    features: [
      "Detailed notes for Algebra and Calculus",
      "Step-by-step practice problems with solutions",
      "Downloadable PDF versions of all notes",
      "Clear, straightforward explanations"
    ]
  },
  {
    id: "chemcollective",
    name: "ChemCollective",
    category: "Education",
    link: "https://chemcollective.org/",
    pricing: "Free",
    desc: "Virtual labs, scenario-based learning activities, and tutorials for chemistry.",
    longDesc: "The ChemCollective is a massive collection of virtual labs, scenario-based learning activities, tutorials, and concept tests. Teachers and students can use their highly interactive Virtual Lab to design and carry out real-world chemistry experiments safely right from their browser.",
    features: [
      "Fully interactive virtual chemistry lab",
      "Scenario-based learning activities",
      "Safe environment for experiments",
      "Great for high school and college chemistry"
    ]
  },
  {
    id: "learngenetics",
    name: "Learn.Genetics",
    category: "Education",
    link: "https://learn.genetics.utah.edu/",
    pricing: "Free",
    desc: "Highly interactive educational resources covering genetics, bioscience, and health.",
    longDesc: "Developed by the University of Utah, Learn.Genetics is one of the most widely used science websites in the world. It delivers highly engaging multimedia, interactive animations, and easy-to-understand explanations for complex topics in genetics, cell biology, and human health.",
    features: [
      "Interactive animations and learning modules",
      "Covers genetics, cell biology, and neuroscience",
      "Accessible language for complex topics",
      "Developed by the University of Utah"
    ]
  },
  {
    id: "geogebra",
    name: "GeoGebra",
    category: "Education",
    link: "https://www.geogebra.org/",
    pricing: "Free",
    desc: "Dynamic mathematics software bringing together geometry, algebra, and calculus.",
    longDesc: "GeoGebra is a powerful, dynamic mathematics software for all levels of education that brings together geometry, algebra, spreadsheets, graphing, statistics, and calculus in one easy-to-use package. It allows students to visually interact with and manipulate math concepts in real-time.",
    features: [
      "Dynamic 2D and 3D graphing calculators",
      "Interactive geometry environment",
      "Millions of free, community-created resources",
      "Available offline and cross-platform"
    ]
  },
  {
    id: "concordconsortium",
    name: "Concord Consortium",
    category: "Education",
    link: "https://concord.org/",
    pricing: "Free",
    desc: "Open educational resources featuring interactive STEM models and data explorations.",
    longDesc: "The Concord Consortium is a non-profit educational research organization that creates highly interactive STEM activities. Their STEM Resource Finder offers hundreds of free, research-based data explorations and models for physics, earth science, and biology.",
    features: [
      "Interactive STEM models and simulations",
      "Research-based educational tools",
      "Data exploration and graphing activities",
      "Open-source software for science education"
    ]
  },
  {
    id: "csunplugged",
    name: "CS Unplugged",
    category: "Education",
    link: "https://www.csunplugged.org/",
    pricing: "Free",
    desc: "Learn computer science completely offline through engaging games and puzzles.",
    longDesc: "CS Unplugged is a brilliant collection of free teaching materials that teaches Computer Science through engaging games and physical puzzles. It is highly effective for teaching core concepts like binary numbers, algorithms, and data compression without using a computer at all.",
    features: [
      "Teaches computer science without screens",
      "Great for beginners of all ages",
      "Covers algorithms, binary, and cryptography",
      "Printable activities and lesson plans"
    ]
  },
  {
    id: "flexboxfroggy",
    name: "Flexbox Froggy",
    category: "Education",
    link: "https://flexboxfroggy.com/",
    pricing: "Free",
    desc: "A fun, interactive browser game for learning CSS Flexbox layouts.",
    longDesc: "Flexbox Froggy is a beloved interactive coding game that teaches web developers the intricacies of CSS Flexbox. By writing actual CSS code to move frogs onto their lilypads, you effortlessly memorize flexbox properties like justify-content and align-items in a highly visual way.",
    features: [
      "Gamified learning for CSS Flexbox",
      "24 levels of increasing difficulty",
      "Immediate visual feedback on code",
      "Perfect for frontend web developers"
    ]
  },
  {
    id: "cssgridgarden",
    name: "CSS Grid Garden",
    category: "Education",
    link: "https://cssgridgarden.com/",
    pricing: "Free",
    desc: "An interactive coding game that teaches you the fundamentals of CSS Grid layout.",
    longDesc: "Created by the same team behind Flexbox Froggy, CSS Grid Garden teaches you the powerful CSS Grid layout system. You write real CSS code to grow your virtual carrot garden, mastering complex grid templates, rows, columns, and areas through 28 progressively challenging levels.",
    features: [
      "Interactive gameplay to learn CSS Grid",
      "28 hands-on practical coding levels",
      "Visualizes complex grid layouts instantly",
      "Created specifically for web developers"
    ]
  },
  {
    id: "projecteuler",
    name: "Project Euler",
    category: "Education",
    link: "https://projecteuler.net/",
    pricing: "Free",
    desc: "Challenging mathematical and computer programming problem sets.",
    longDesc: "Project Euler is a legendary series of challenging mathematical and computer programming problems that require more than just mathematical insights to solve. It is heavily utilized by software developers and computer science students to practice algorithm optimization and logical problem-solving.",
    features: [
      "Hundreds of complex algorithmic problems",
      "Requires both math and programming skills",
      "Language agnostic (use any coding language)",
      "Global community and achievement tracking"
    ]
  },
  {
    id: "euclida",
    name: "Euclidea",
    category: "Education",
    link: "https://www.euclidea.xyz/",
    pricing: "Free",
    desc: "A brilliantly designed geometric puzzle game that teaches Euclidean geometry.",
    longDesc: "Euclidea is an incredibly addictive and educational geometric puzzle game. It tasks you with constructing geometric figures using only a digital straightedge and compass. It is a fantastic way to build mathematical intuition and learn classic Euclidean geometry through direct, interactive gameplay.",
    features: [
      "Interactive geometric construction puzzles",
      "Strict adherence to Euclidean rules",
      "Clean, minimalist user interface",
      "Builds deep mathematical and spatial intuition"
    ]
  },
  {
    id: "keybr",
    name: "Keybr",
    category: "Productivity",
    link: "https://www.keybr.com/",
    pricing: "Free",
    desc: "A smart web application that helps you learn touch typing faster using algorithms.",
    longDesc: "Keybr is an intelligent typing tutor that uses statistical learning algorithms to generate typing lessons matching your skill level. Instead of regular words, it generates readable but nonsensical words to force your brain to actually learn the keyboard layout and build genuine muscle memory.",
    features: [
      "Algorithm-generated custom typing lessons",
      "Focuses heavily on your weakest keys",
      "Detailed statistics and performance tracking",
      "Supports multiple keyboard layouts"
    ]
  },
  {
    id: "schoolhouseworld",
    name: "Schoolhouse.world",
    category: "Education",
    link: "https://schoolhouse.world/",
    pricing: "Free",
    desc: "Free, peer-to-peer live tutoring in math and SAT prep, founded by Sal Khan.",
    longDesc: "Founded by Sal Khan (creator of Khan Academy), Schoolhouse.world is an educational platform connecting learners from around the globe with free, live, peer-to-peer tutoring via Zoom. It focuses heavily on math, SAT prep, and college readiness, fostering a safe and supportive learning community.",
    features: [
      "100% free live tutoring sessions via Zoom",
      "Founded by Khan Academy's Sal Khan",
      "Focuses on Math, SAT prep, and AP subjects",
      "Safe, peer-to-peer learning environment"
    ]
  }

];

/* =========================================================
   ENTERTAINMENT TOOLS
========================================================= */

const entertainmentTools = [

  {
    id: "yupptv",
    name: "YuppTV",
    category: "Entertainment",
    link: "https://www.yupptv.com/",
    pricing: "Freemium",
    desc: "Watch 200+ live Indian TV channels, movies, and catch-up TV globally.",
    longDesc: "YuppTV is one of the largest internet platforms for South Asian content. You can watch over 200 Live Indian TV channels, regional movies, and enjoy 7 days of catch-up TV. It is the best legal streaming option for NRIs and Indian content lovers worldwide.",
    features: [
      "200+ Live Indian TV Channels",
      "7 Days Catch-up TV feature",
      "Supports multiple regional languages",
      "Available on Smart TVs, Web & Mobile"
    ]
  },
  {
    id: "sandspiel",
    name: "Sandspiel",
    category: "Entertainment",
    link: "https://sandspiel.club/",
    pricing: "Free",
    desc: "A creative falling sand game built with cellular automata physics.",
    longDesc: "Sandspiel is a highly interactive cellular automata simulation that runs entirely in the browser. Users can draw with elements like sand, water, fire, and plants, watching them interact in real-time through complex, programmed physical and chemical rules.",
    features: [
      "Real-time cellular automata physics",
      "Dozens of reacting environmental elements",
      "Community sharing for saved creations",
      "Built using Rust and WebGL"
    ]
  },
  {
    id: "radiogarden",
    name: "Radio Garden",
    category: "Entertainment",
    link: "http://radio.garden/",
    pricing: "Free",
    desc: "Listen to live radio stations across the globe by rotating a 3D earth.",
    longDesc: "Radio Garden is a unique interactive platform that allows you to explore live radio broadcasts globally. By dragging across an interactive 3D globe, you can instantly tune into local radio stations in almost any city, town, or country in the world.",
    features: [
      "Interactive 3D globe interface",
      "Thousands of live global radio stations",
      "Discover local music and news worldwide",
      "Save favorite stations to your library"
    ]
  },
  {
    id: "windowswap",
    name: "WindowSwap",
    category: "Entertainment",
    link: "https://www.window-swap.com/",
    pricing: "Freemium",
    desc: "Look through someone else's window somewhere in the world.",
    longDesc: "WindowSwap is a beautifully ambient web project created to provide a sense of travel and peace. It plays submitted, high-definition videos of views out of windows from homes all around the globe, complete with natural background audio.",
    features: [
      "User-submitted global window views",
      "Ambient, natural background audio",
      "High-definition video loops",
      "Relaxing, distraction-free interface"
    ]
  },
  {
    id: "tixyland",
    name: "tixy.land",
    category: "Developer Tools",
    link: "https://tixy.land/",
    pricing: "Free",
    desc: "A minimalist creative coding environment to control a 16x16 grid.",
    longDesc: "tixy.land is a brilliant, ultra-minimalist creative coding platform. It challenges you to control the size and color of a 16x16 grid of dots using a single, short JavaScript math function based on variables like time, index, and coordinates.",
    features: [
      "Minimalist 16x16 dot matrix interface",
      "Write actual JavaScript math functions",
      "Immediate visual feedback on code",
      "Excellent for practicing coding logic"
    ]
  },
  {
    id: "adarkroom",
    name: "A Dark Room",
    category: "Entertainment",
    link: "https://adarkroom.doublespeakgames.com/",
    pricing: "Free",
    desc: "A critically acclaimed minimalist, text-based interactive adventure game.",
    longDesc: "A Dark Room is an open-source, text-based role-playing game that begins simply by lighting a fire in a dark room. It gradually expands into a deep, complex resource management and exploration game, demonstrating how much engagement can be built using purely HTML, CSS, and JS.",
    features: [
      "Text-based interactive fiction",
      "Complex resource management mechanics",
      "Minimalist web-based interface",
      "Runs completely entirely in the browser"
    ]
  },
  {
    id: "nealfun",
    name: "Neal.fun",
    category: "Entertainment",
    link: "https://neal.fun/",
    pricing: "Free",
    desc: "A collection of creative, interactive web toys and data visualizations.",
    longDesc: "Created by creative coder Neal Agarwal, Neal.fun hosts a series of highly viral, interactive web toys and mini-games. Projects like 'Infinite Craft', 'The Deep Sea', and 'Space Elevator' blend educational data with flawless frontend web development and game design.",
    features: [
      "Dozens of interactive web toys",
      "Viral mini-games like Infinite Craft",
      "Educational data visualizations",
      "Clean, modern web interfaces"
    ]
  },
  {
    id: "pippinbarr",
    name: "Pippin Barr's Browser Games",
    category: "Entertainment",
    link: "https://pippinbarr.com/",
    pricing: "Free",
    desc: "A portfolio of experimental, thought-provoking browser games.",
    longDesc: "Pippin Barr is a game developer and academic known for creating highly experimental, often philosophical browser games. His creations strip away conventional game mechanics to explore unique interactive concepts, making it a great study resource for aspiring web game developers.",
    features: [
      "Experimental and philosophical mechanics",
      "Built entirely for the web",
      "Explores unique interactive art concepts",
      "Open-source learning resources available"
    ]
  },
  {
    id: "theuselessweb",
    name: "The Useless Web",
    category: "Entertainment",
    link: "https://theuselessweb.com/",
    pricing: "Free",
    desc: "A classic single-button website that teleports you to random weird pages.",
    longDesc: "The Useless Web is an internet classic. By simply clicking the main button, the site randomly redirects you to one of hundreds of bizarre, funny, or completely absurd single-page websites. It highlights the experimental and playful history of web development.",
    features: [
      "Single-button random redirection",
      "Curated list of classic internet pages",
      "Highlights experimental web design",
      "Completely free and distraction-free"
    ]
  },
  {
    id: "cloudgazing",
    name: "Cloud Gazing",
    category: "Entertainment",
    link: "https://cloud-gazing.com/",
    pricing: "Free",
    desc: "A relaxing, ambient web experience designed for mindfulness and relaxation.",
    longDesc: "Cloud Gazing is an ambient web experience focused entirely on relaxation and mindfulness. It offers a distraction-free environment to simply watch procedurally generated or curated digital clouds drift across the screen, providing a mental break for busy developers and creators.",
    features: [
      "Ambient, distraction-free environment",
      "Procedural cloud animations",
      "Designed for mindfulness and breaks",
      "No registration or downloads required"
    ]
  },
  {
    id: "nickycase",
    name: "Nicky Case (Explorable Explanations)",
    category: "Education",
    link: "https://ncase.me/",
    pricing: "Free",
    desc: "Interactive visualizations and explorable explanations for complex systems.",
    longDesc: "Nicky Case builds 'explorable explanations'—interactive web projects designed to help users understand complex topics like sociology, economics, and psychology. Famous projects like 'The Evolution of Trust' use game theory and JavaScript to make deep learning highly accessible and fun.",
    features: [
      "Interactive 'explorable explanations'",
      "Covers complex social and scientific topics",
      "Utilizes game theory and interactive mechanics",
      "Open-source and strictly public domain"
    ]
  }

];


/* =========================================================
   FINAL COMBINED TOOLS ARRAY
========================================================= */

/*
   IMPORTANT:

   Homepage aur Details page dono isi "tools" array ko use karenge.

   Kisi bhi category me new tool add karoge,
   bas us category ke array me add karna hai.

   Is combined array ko manually edit mat karna.
*/

const tools = [

  ...aiTools,
  ...photoTools,
  ...developerTools,
  ...productivityTools,
  ...marketingTools,
  ...entertainmentTools,
  ...educationTools,
  ...videoTools,
  ...contentTools,

];