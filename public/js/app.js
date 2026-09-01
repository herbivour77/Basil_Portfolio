/* ---------- Icons ---------- */
const ICONS = {
  grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="3" width="8" height="8" rx="1.5"/><rect x="13" y="3" width="8" height="8" rx="1.5"/><rect x="3" y="13" width="8" height="8" rx="1.5"/><rect x="13" y="13" width="8" height="8" rx="1.5"/></svg>',

  folder: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 6a1 1 0 011-1h5l2 2h9a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1z"/></svg>',

  library: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="14" height="14" rx="1.5"/><path d="M17 8l4 2v9l-4-2"/></svg>',

  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="8" r="3.3"/><path d="M5 20c1.2-3.6 4-5.5 7-5.5s5.8 1.9 7 5.5"/></svg>',

  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 6l9 7 9-7"/></svg>',

  eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M2 12s3.8-7 10-7 10 7 10 7-3.8 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>',

  pencil: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 20l4-1 11-11-3-3L5 16z"/></svg>',

  kebab: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><circle cx="12" cy="5" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="12" cy="19" r="1.6"/></svg>',

  cloudUpload: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M7 18a4 4 0 01-1-7.9A5 5 0 0116 8a4.5 4.5 0 011 8.9"/><path d="M12 12v7"/><path d="M9 16l3-3 3 3"/></svg>',

  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',

  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 7h16"/><path d="M9 7V4h6v3"/><path d="M6 7l1 13h10l1-13"/></svg>',

  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 3v12"/><path d="M7 10l5 5 5-5"/><path d="M4 21h16"/></svg>',

  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/></svg>',

  video: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="6" width="13" height="12" rx="1.5"/><path d="M16 10l5-3v10l-5-3z"/></svg>',

  camera: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 8h3l2-2h6l2 2h3v11H4z"/><circle cx="12" cy="13.5" r="3.5"/></svg>',

  design: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M16 3l5 5-9.5 9.5L4 21l3.5-7.5z"/><path d="M13.5 5.5l5 5"/></svg>',

  share: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="5" cy="12" r="2.3"/><circle cx="18" cy="6" r="2.3"/><circle cx="18" cy="18" r="2.3"/><line x1="7" y1="11" x2="16" y2="7"/><line x1="7" y1="13" x2="16" y2="17"/></svg>',

  doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4"/><line x1="9.5" y1="12" x2="14.5" y2="12"/><line x1="9.5" y1="15.5" x2="14.5" y2="15.5"/></svg>',

  company: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="7" width="18" height="13" rx="1.5"/><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2"/><path d="M3 12h18"/></svg>',

  web: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.5 2.7 4 6 4 9s-1.5 6.3-4 9c-2.5-2.7-4-6-4-9s1.5-6.3 4-9z"/></svg>'
};


/* ---------- Themes ---------- */
const THEMES = {
  purple: { bg:'#efe9fe', ic:'#8b6cf1', text:'#6d4fd6' },
  pink: { bg:'#fdeaf0', ic:'#ec5e8e', text:'#d43f72' },
  green: { bg:'#e8f7ee', ic:'#2fbf71', text:'#1f9c5a' },
  blue: { bg:'#e8f2fe', ic:'#3b82f6', text:'#2563eb' },
  orange: { bg:'#fdf1e5', ic:'#f0983c', text:'#c9791f' },
  teal: { bg:'#e6f7f6', ic:'#2bb3ab', text:'#1f8f88' }
};


/* ---------- Platform Colours ---------- */
const PLATFORM_COLORS = {
  'YouTube':'#e0524f',
  'Instagram':'linear-gradient(135deg,#d6409f,#f0a262)',
  'TikTok':'#25262b',
  'Vimeo':'#1fb6c9',
  'X (Twitter)':'#232733',
  'Facebook':'#3b5fa4',
  'Google Drive':'linear-gradient(135deg,#1a73e8,#0f9d58)',
  'open.spotify.com':'#1DB954'
};


const LANDSCAPE_PLATFORMS = ['YouTube','Vimeo','Google Drive'];


/* ---------- Navigation ---------- */
const NAV = [
  { key:'dashboard', label:'Dashboard', icon:ICONS.grid },
  { key:'companies', label:'Companies', icon:ICONS.company },
  { key:'media', label:'Media Library', icon:ICONS.library },
  { key:'social', label:'Social Posts', icon:ICONS.share },
  { key:'about', label:'About Me', icon:ICONS.user },
  { key:'contact', label:'Contact', icon:ICONS.mail }
];


const FILTER_TABS = [
  { key:'all', label:'All' },
  { key:'video', label:'Videos' },
  { key:'photo', label:'Photos' },
  { key:'design', label:'Designs' },
  { key:'document', label:'Documents' }
];


/* =========================================================
   SEED DATA HELPERS
   (must be declared before `state` since state uses them)
   ========================================================= */

let __seedId = 0;

function seedLink(url,label){
  __seedId++;
  const info = detectPlatform(url);
  return {
    id:'seed_link_' + __seedId,
    type:'link',
    url,
    platform: info ? info.platform : 'Link',
    embedUrl: info ? info.embedUrl : null,
    domain: info ? info.domain : '',
    label: label || null,
    addedAt: Date.now()
  };
}


const SU_SINGAPORE = {
  id:'su-singapore',
  name:'Scripture Union Singapore',
  desc:'Video, photography, and design work for Scripture Union Singapore.',
  themeKey:'purple',
  categories:[
    {
      id:'su-videography',
      name:'Videography',
      desc:'Video projects and motion content',
      themeKey:'purple',
      icon:ICONS.video,
      isSocial:false,
      subs:[
        {
          id:'su-camps',
          name:'Scripture Union Singapore Camps',
          items:[
            seedLink('https://www.instagram.com/scriptureunionsg/reel/DSU2-ZbgfMm/','Youth 2025'),
            seedLink('https://www.instagram.com/scriptureunionsg/reel/DSSEKm_gYgy/','SUPA 2025'),
            seedLink('https://www.instagram.com/scriptureunionsg/reel/DDZTOHpyVxj/','Youth 2024'),
            seedLink('https://www.instagram.com/scriptureunionsg/reel/DDQjrBRSYAz/','SUPA 2024')
          ]
        },
        {
          id:'su-podcast',
          name:'Podcast',
          items:[
            seedLink('https://open.spotify.com/show/2RIqfhMFxChnYCE9qEVtIz?si=sORFjS-PSwy_gjcxrzO3Kw','SUP for the Soul'),
            seedLink('https://open.spotify.com/show/08zfWhMHxZ9H6oKLjU3tqY?si=4ZZpBLEUT5iAL43oML2Fig','The Serious Faith'),
            seedLink('https://open.spotify.com/show/5MDVKH8ybsAPqOAr3SM3rA?si=Axz4QD3JRfWUsBwZxUZFtg','Remember Jesus II'),
            seedLink('https://open.spotify.com/show/5AWTJaHJHSN6Wkx3oNH9Dy?si=LcpVeTS8SzuZRLHMT7-PBg','The Living Word Applied by Rev Malcolm')
          ]
        },
        {
          id:'su-about',
          name:'About Scripture Union Singapore',
          items:[
            seedLink('https://www.instagram.com/scriptureunionsg/reel/C9ziNzcSVcM/'),
            seedLink('https://www.instagram.com/scriptureunionsg/reel/C9__RrMyiix/'),
            seedLink('https://www.instagram.com/scriptureunionsg/reel/C-B-bTgSAc3/'),
            seedLink('https://www.instagram.com/scriptureunionsg/reel/DEPNGRXSDWp/','70th Anniversary')
          ]
        },
        {
          id:'su-ite-worship-video',
          name:'ITE Worship Night',
          items:[
            seedLink('https://www.instagram.com/scriptureunionsg/reel/C8xOAIwSsFC/')
          ]
        }
      ]
    },
    {
      id:'su-social',
      name:'Social Media',
      desc:'Social media content and campaigns',
      themeKey:'blue',
      icon:ICONS.share,
      isSocial:true,
      subs:[
        {
          id:'su-devotionals',
          name:'Devotionals',
          items:[
            seedLink('https://www.instagram.com/scriptureunionsg/reel/DPycHjxAZkE/'),
            seedLink('https://www.instagram.com/scriptureunionsg/reel/DPyafFrgcxw/'),
            seedLink('https://www.instagram.com/scriptureunionsg/reel/DM5Lx2ahU4F/')
          ]
        },
        {
          id:'su-agape',
          name:'Agape Series',
          items:[
            seedLink('https://www.instagram.com/scriptureunionsg/p/DTrypbggc-d/'),
            seedLink('https://www.instagram.com/scriptureunionsg/p/DT9NPQhgTrG/'),
            seedLink('https://www.instagram.com/scriptureunionsg/p/DUPLaYTAaV6/'),
            seedLink('https://www.instagram.com/scriptureunionsg/p/DUhLMD9gc2d/'),
            seedLink('https://www.instagram.com/scriptureunionsg/p/DVGguVCgYsV/'),
            seedLink('https://www.instagram.com/scriptureunionsg/p/DVXjLILgaKY/'),
            seedLink('https://www.instagram.com/scriptureunionsg/p/DVsCe6RAZoc/'),
            seedLink('https://www.instagram.com/scriptureunionsg/p/DV73JaEgdEk/'),
            seedLink('https://www.instagram.com/scriptureunionsg/p/DWNj077gYxr/'),
            seedLink('https://www.instagram.com/scriptureunionsg/p/DWgXBPFAZrL/'),
            seedLink('https://www.instagram.com/scriptureunionsg/p/DWyFWsXAcPa/'),
            seedLink('https://www.instagram.com/scriptureunionsg/p/DXEHm94gdkx/'),
            seedLink('https://www.instagram.com/scriptureunionsg/p/DXbPCm-gU8M/'),
            seedLink('https://www.instagram.com/scriptureunionsg/p/DXnsEyDgUUw/'),
            seedLink('https://www.instagram.com/scriptureunionsg/p/DX6Iqt7gX2B/'),
            seedLink('https://www.instagram.com/scriptureunionsg/p/DYMHyClgQ0y/'),
            seedLink('https://www.instagram.com/scriptureunionsg/p/DYhErHxARs4/'),
            seedLink('https://www.instagram.com/scriptureunionsg/p/DYwH3HVgYV3/'),
            seedLink('https://www.instagram.com/scriptureunionsg/p/DZDB2a1gfZ1/'),
            seedLink('https://www.instagram.com/scriptureunionsg/p/DZoWnVXAfpi/'),
            seedLink('https://www.instagram.com/scriptureunionsg/p/DaccGkQAeNg/'),
            seedLink('https://www.instagram.com/scriptureunionsg/p/Daud7eFgeND/'),
            seedLink('https://www.instagram.com/scriptureunionsg/p/DbAK1DSgSa3/'),
            seedLink('https://www.instagram.com/scriptureunionsg/p/DbRsrfpAYmU/'),
            seedLink('https://www.instagram.com/scriptureunionsg/p/DbnCmGXgXwy/')
          ]
        },
        {
          id:'su-great-expedition',
          name:'The Great Expedition',
          items:[
            seedLink('https://www.instagram.com/scriptureunionsg/p/DamLxkqgRKk/'),
            seedLink('https://www.instagram.com/scriptureunionsg/p/Da2PgyugfOT/'),
            seedLink('https://www.instagram.com/scriptureunionsg/p/DbCGnBEAeVg/'),
            seedLink('https://www.instagram.com/scriptureunionsg/p/DbRq9AMgZ2e/'),
            seedLink('https://www.instagram.com/scriptureunionsg/p/DbnFRZZgXZF/'),
            seedLink('https://www.instagram.com/scriptureunionsg/p/Db5pAO7AY2E/'),
            seedLink('https://www.instagram.com/scriptureunionsg/p/DcNzMrMgRM3/'),
            seedLink('https://www.instagram.com/scriptureunionsg/p/DckZKS_gfsI/')
          ]
        }
      ]
    },
    {
      id:'su-photography',
      name:'Photography',
      desc:'Photo shoots and visual stories',
      themeKey:'pink',
      icon:ICONS.camera,
      isSocial:false,
      subs:[
        { id:'su-youth-2025-photos', name:'Youth Camp 2025', items:[ seedLink('https://drive.google.com/drive/folders/1PjVPMA0n996_0iXogMBVKC00Kv4xNKmk?usp=sharing') ] },
        { id:'su-supa-2025-photos', name:'SUPA 2025', items:[ seedLink('https://drive.google.com/drive/folders/164iWff2vghT4HJfd0ex_0hob2Mww3Xiz?usp=sharing') ] },
        { id:'su-youth-2024-photos', name:'Youth Camp 2024', items:[ seedLink('https://drive.google.com/drive/folders/16B_lD7hBELmxGHOcICJpn-PokW35EK-A?usp=drive_link') ] },
        { id:'su-ite-worship-photos', name:'ITE Worship Night', items:[ seedLink('https://drive.google.com/drive/folders/1CH6_sKUxabipUFYIhD3ec1aWvcVQcPyM?usp=sharing') ] }
      ]
    },
    {
      id:'su-design',
      name:'Graphic Design',
      desc:'Design projects and creative assets',
      themeKey:'green',
      icon:ICONS.design,
      isSocial:false,
      subs:[
        {
          id:'su-namecard',
          name:'Ministry Namecard',
          items:[ seedLink('https://drive.google.com/file/d/1VUs-qmtOvsvFqLRvH8BDXdD9jovsOQZR/view?usp=sharing') ]
        },
        {
          id:'su-camp-logos',
          name:'Camp Logos',
          items:[
            seedLink('https://drive.google.com/file/d/1KSXl9MNXQtOPEcaORsuWFNy8gmM9ds1L/view?usp=drive_link'),
            seedLink('https://drive.google.com/file/d/1noIUAFq7Dc3DE_fxxHQdpfdNd1GHDtNa/view?usp=sharing'),
            seedLink('https://drive.google.com/file/d/1tWwOGF1W60HhFtCeYUuYMLerqjtWeVJG/view?usp=sharing'),
            seedLink('https://drive.google.com/file/d/19XhMQv_Cn45h3sklBobTxj61fKmto1YX/view?usp=drive_link'),
            seedLink('https://drive.google.com/file/d/1XPlA4hebYEjBFw9dQ-qiBjzyvYXj8mFl/view?usp=drive_link'),
            seedLink('https://drive.google.com/file/d/1acR69ATmJRPgCE0vjm3VR-jf4WRRbbck/view?usp=drive_link'),
            seedLink('https://drive.google.com/file/d/11XwxipkH7A6fMxbRNNKlcOiZVGFRc8d6/view?usp=drive_link'),
            seedLink('https://drive.google.com/file/d/1oiB1w-buQ4Lprv1iuPjy6mpQDT5Ipr9Q/view?usp=drive_link')
          ]
        }
      ]
    }
  ]
};


const NEW_CHARIS = {
  id:'new-charis-mission',
  name:'The New Charis Mission',
  desc:'Video, photography, design, and web work for The New Charis Mission.',
  themeKey:'orange',
  categories:[
    {
      id:'ncm-videography',
      name:'Videography',
      desc:'Video projects and motion content',
      themeKey:'purple',
      icon:ICONS.video,
      isSocial:false,
      subs:[
        {
          id:'ncm-unlabelled-run',
          name:'Unlabelled Run',
          items:[
            seedLink('https://www.instagram.com/unlabelledrun/reel/C2uBP45yaoN/','Kevin Tee Interview'),
            seedLink('https://www.instagram.com/unlabelledrun/reel/C2ua0RLSGYx/','Kevin Tee Interview'),
            seedLink('https://www.instagram.com/unlabelledrun/reel/C2zJjGtyfq6/','Kevin Tee Interview'),
            seedLink('https://www.instagram.com/unlabelledrun/reel/C23sYT4STh7/','Kevin Tee Interview'),
            seedLink('https://www.instagram.com/unlabelledrun/reel/C3t1y1TyPaF/','Cassandra Ansari Hie'),
            seedLink('https://www.instagram.com/unlabelledrun/reel/C3uwRZkyR-r/','Cassandra Ansari Hie'),
            seedLink('https://www.instagram.com/unlabelledrun/reel/C3zpgcISIWG/','Cassandra Ansari Hie'),
            seedLink('https://drive.google.com/file/d/1O-CXi8zc0EsQRuXGo_ZMHTSXuFNq4kCj/view?usp=sharing','Trophies of Grace 2023'),
            seedLink('https://drive.google.com/file/d/1bdmOblHfHEnbEAzuD-zgakWA54RW7bwv/view?usp=sharing','16th Anniversary'),
            seedLink('https://drive.google.com/file/d/1txpL7wWGoL3vQP3CFdY9tcFEy-tIWWj3/view?usp=sharing','Elderly Christmas Outreach'),
            seedLink('https://youtu.be/4XhIMcG42AQ','Golf Charity 2023'),
            seedLink('https://youtu.be/NnuNHnhY1AA','15th Anniversary'),
            seedLink('https://youtu.be/Q1v6tA5xgW0','Unlabelled Run 2023'),
            seedLink('https://youtu.be/jyDhB3dLgiY','PHOL — Project Heart of Love with Singapore Prison Services'),
            seedLink('https://youtu.be/-lglopP0XMg','Assoc Prof Dr Muhammad Faishal Ibrahim, Minister of State — Visit to TNCM 2023'),
            seedLink('https://youtu.be/ssTIBqfzQNo','Kaleidoscope by Joyce — Golf Charity 2023'),
            seedLink('https://youtu.be/H0CFJ71_qeg','Trophies of Grace 2023'),
            seedLink('https://youtu.be/-gx1yTEKUT0','CNY Outreach'),
            seedLink('https://www.facebook.com/share/v/1Cm2e8EUpP/','Project Heart of Love with Singapore Prison Services'),
            seedLink('https://www.instagram.com/unlabelledrun/reel/CsqZIqQOqe-/','Social Media'),
            seedLink('https://www.instagram.com/unlabelledrun/reel/CtvP__YOhr7/','Social Media'),
            seedLink('https://www.instagram.com/unlabelledrun/reel/CtxN46trtZq/','Social Media'),
            seedLink('https://www.instagram.com/unlabelledrun/reel/Ctzx38JRH_t/','Social Media'),
            seedLink('https://www.instagram.com/unlabelledrun/reel/C3AfavGx7Py/','Social Media')
          ]
        },
        {
          id:'ncm-charis-cuisines',
          name:'Charis Cuisines',
          items:[
            seedLink('https://www.instagram.com/chariscuisines.sg/reel/CqpK8Y9rvQH/'),
            seedLink('https://www.instagram.com/chariscuisines.sg/reel/Cq65k4gOwzM/'),
            seedLink('https://www.instagram.com/chariscuisines.sg/reel/Cqb7sy1MKLG/'),
            seedLink('https://www.instagram.com/chariscuisines.sg/reel/CqUsle0N8E6/'),
            seedLink('https://www.instagram.com/chariscuisines.sg/reel/CqCJ2aNMSgT/'),
            seedLink('https://www.instagram.com/chariscuisines.sg/reel/Cp4QoW1sLbC/'),
            seedLink('https://www.instagram.com/chariscuisines.sg/reel/Cpl5hYxPJqp/'),
            seedLink('https://www.instagram.com/chariscuisines.sg/reel/Cpg1KA7ri8k/'),
            seedLink('https://www.instagram.com/chariscuisines.sg/reel/CoeN_VXrrou/'),
            seedLink('https://www.instagram.com/chariscuisines.sg/reel/CoUKiAJs1hl/'),
            seedLink('https://www.instagram.com/chariscuisines.sg/reel/C1oQyumSQ6x/'),
            seedLink('https://www.instagram.com/chariscuisines.sg/reel/CyNLj3_yUiA/'),
            seedLink('https://www.instagram.com/chariscuisines.sg/reel/Ctvn5b6stEG/'),
            seedLink('https://www.instagram.com/chariscuisines.sg/reel/CtQFCzMLLws/'),
            seedLink('https://www.instagram.com/chariscuisines.sg/reel/Cs5bMr3L6mC/'),
            seedLink('https://www.instagram.com/chariscuisines.sg/reel/Cs-oC-irGt1/'),
            seedLink('https://www.instagram.com/chariscuisines.sg/reel/CssMKK0L2p0/'),
            seedLink('https://www.instagram.com/chariscuisines.sg/reel/CsaiY_RMHhu/'),
            seedLink('https://www.instagram.com/chariscuisines.sg/reel/CsSuKZYv2aI/'),
            seedLink('https://www.instagram.com/chariscuisines.sg/reel/CsA_oQ5Plng/'),
            seedLink('https://www.instagram.com/chariscuisines.sg/reel/Cr2MkAHu74I/'),
            seedLink('https://www.instagram.com/chariscuisines.sg/reel/Cru7QRKNOtZ/'),
            seedLink('https://www.instagram.com/chariscuisines.sg/reel/CrkM04-vyKw/')
          ]
        }
      ]
    },
    {
      id:'ncm-photography',
      name:'Photography',
      desc:'Photo shoots and visual stories',
      themeKey:'pink',
      icon:ICONS.camera,
      isSocial:false,
      subs:[
        { id:'ncm-photo-minister-visit', name:'Minister of State Visit to TNCM 2023', items:[ seedLink('https://drive.google.com/drive/folders/1-axOetaGGfrXI4l_D6aoU0vppinKBsED?usp=sharing') ] },
        { id:'ncm-photo-elderly-xmas-2022', name:'Elderly Christmas Outreach 2022', items:[ seedLink('https://drive.google.com/drive/folders/10DpNmSayjoIaXhjwQpfErGf_3l_YCA4U?usp=drive_link') ] },
        { id:'ncm-photo-futsal-2024', name:'Futsal Carnival 2024', items:[ seedLink('https://drive.google.com/drive/folders/10-23NGdQE0jo4zKs14YBZFmaD2IjVRrG?usp=sharing') ] },
        { id:'ncm-photo-golf-2022', name:'Golf Charity 2022', items:[ seedLink('https://drive.google.com/drive/folders/1YGXmmHvhBzG8QJZeOQwU9cQLEqQjK-4p?usp=sharing') ] },
        { id:'ncm-photo-cny-2024', name:'CNY Outreach 2024', items:[ seedLink('https://drive.google.com/drive/folders/101iHOzGHVzdHif6eQoM3txMSs87WYbAS?usp=sharing') ] },
        { id:'ncm-photo-golf-2023', name:'Golf Charity 2023', items:[ seedLink('https://drive.google.com/drive/folders/1X25gd8ZzLF5McSNTUR8_hexljOO81GFu?usp=sharing') ] },
        { id:'ncm-photo-trophies-2023', name:'Trophies of Grace 2023', items:[ seedLink('https://drive.google.com/drive/folders/1--abSTCWOUSEMi8XE-UvSxBE132iEv6n?usp=sharing') ] },
        { id:'ncm-photo-unlabelled-run-ruien', name:'Unlabelled Run with Rui En', items:[ seedLink('https://drive.google.com/drive/folders/10LQaIbuVlveVBFbCoT-Jpc5ZZzhRJcA4?usp=sharing') ] }
      ]
    },
    {
      id:'ncm-design',
      name:'Graphic Design',
      desc:'Design projects and creative assets',
      themeKey:'green',
      icon:ICONS.design,
      isSocial:false,
      subs:[
        { id:'ncm-design-golf-2023', name:'Golf Charity 2023', items:[ seedLink('https://drive.google.com/drive/folders/1raAI8ZL20-kQ499xK2OmNi3qWwt9MpEP?usp=sharing') ] }
      ]
    },
    {
      id:'ncm-web',
      name:'Web Design',
      desc:'Websites designed and built',
      themeKey:'teal',
      icon:ICONS.web,
      isSocial:false,
      subs:[
        {
          id:'ncm-web-live-sites',
          name:'Live Websites',
          items:[
            seedLink('https://www.thenewcharismission.org.sg/','Official Site'),
            seedLink('https://www.newcharis.com.sg/','Alternate Domain')
          ]
        }
      ]
    }
  ]
};


/* ---------- State ---------- */
let state = {
  page:'dashboard',
  previewMode:false,
  activeCompanyId:null,
  detailCategoryId:null,
  libraryFilter:'all',
  modal:null,

  profile:{ avatar:null },
  about:{ bio:'', focus:'' },
  contact:{ email:'', phone:'', location:'', website:'' },

  companies:[ SU_SINGAPORE, NEW_CHARIS ]
};


let pendingUploadTarget = null;

let uidCounter = 0;


/* ---------- Helpers ---------- */

function uid(prefix){
  uidCounter++;
  return prefix + '_' + uidCounter + '_' + Math.random().toString(36).slice(2,7);
}

function escapeHtml(str){
  return String(str ?? '').replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));
}

function formatBytes(bytes){
  if(!bytes) return '0 B';
  const units = ['B','KB','MB','GB'];
  let i = 0;
  let n = Number(bytes) || 0;
  while(n >= 1024 && i < units.length - 1){ n /= 1024; i++; }
  return (i === 0 ? n : n.toFixed(1)) + ' ' + units[i];
}

function classify(item){
  if(item.mime && item.mime.startsWith('video/')) return 'video';
  if(item.mime && item.mime.startsWith('image/')) return 'photo';
  const ext = String(item.ext || '').toUpperCase();
  if(['PDF','DOC','DOCX','TXT','PPT','PPTX','XLS','XLSX','RTF'].includes(ext)) return 'document';
  return 'design';
}

function typeBadgeIcon(type){
  return { video:ICONS.video, photo:ICONS.camera, design:ICONS.design, document:ICONS.doc }[type] || ICONS.doc;
}

function applyFilter(items,key){
  if(key === 'all') return items;
  return items.filter(it => classify(it) === key);
}


/* =========================================================
   PERSISTENCE — NETLIFY FUNCTION + NETLIFY BLOBS
   ========================================================= */

const TOKEN_KEY = 'portfolio_admin_token';

let authToken = null;

let saveTimer = null;

let hasPublishedData = false;

let lastPublishedAt = null;


function formatPublishTime(ts){
  if(!ts) return '';
  return new Date(ts).toLocaleTimeString([], { hour:'numeric', minute:'2-digit' });
}

function updateLiveStatusUI(){
  const el = document.getElementById('live-status');
  if(!el) return;
  if(lastPublishedAt){
    el.textContent = '● Live · Last published ' + formatPublishTime(lastPublishedAt);
    el.style.color = '#1f9c5a';
  }else if(hasPublishedData){
    el.textContent = '● Live';
    el.style.color = '#1f9c5a';
  }else{
    el.textContent = '○ Not published yet';
    el.style.color = 'var(--dim2)';
  }
}


function setSaveIndicator(status){
  const el = document.getElementById('save-indicator');
  if(!el) return;
  if(status === 'saving'){
    el.textContent = 'Saving…';
    el.className = 'save-indicator saving';
  }else if(status === 'saved'){
    el.textContent = 'Saved';
    el.className = 'save-indicator saved';
  }else{
    el.textContent = 'Save failed';
    el.className = 'save-indicator error';
  }
}


function buildPersistencePayload(){
  return {
    profile:{
      avatar: state.profile && typeof state.profile.avatar === 'string' ? state.profile.avatar : null
    },
    about:{
      bio: state.about && typeof state.about.bio === 'string' ? state.about.bio : '',
      focus: state.about && typeof state.about.focus === 'string' ? state.about.focus : ''
    },
    contact:{
      email: state.contact && typeof state.contact.email === 'string' ? state.contact.email : '',
      phone: state.contact && typeof state.contact.phone === 'string' ? state.contact.phone : '',
      location: state.contact && typeof state.contact.location === 'string' ? state.contact.location : '',
      website: state.contact && typeof state.contact.website === 'string' ? state.contact.website : ''
    },
    companies: Array.isArray(state.companies) ? state.companies : []
  };
}


async function persistStateNow(){

  if(window.APP_MODE !== 'admin'){ throw new Error('Not in admin mode.'); }
  if(!authToken){ throw new Error('Not authenticated.'); }

  const payload = buildPersistencePayload();

  const resp = await fetch('/api/data',{
    method:'POST',
    headers:{ 'Content-Type':'application/json', 'Authorization':'Bearer ' + authToken },
    body:JSON.stringify(payload)
  });

  const data = await resp.json().catch(() => ({}));

  if(resp.status === 401){
    authToken = null;
    localStorage.removeItem(TOKEN_KEY);
    renderLoginScreen('Your session expired. Please log in again to keep editing.');
    throw new Error('Session expired.');
  }

  if(!resp.ok){
    const message = data && (data.detail || data.error) ? (data.detail || data.error) : ('HTTP ' + resp.status);
    throw new Error(message);
  }

  hasPublishedData = true;
  lastPublishedAt = Date.now();
  updateLiveStatusUI();

  return data;
}


async function publishNow(){
  const btn = document.getElementById('publish-btn');
  if(btn){ btn.disabled = true; btn.textContent = 'Publishing…'; }
  setSaveIndicator('saving');
  try{
    await persistStateNow();
    setSaveIndicator('saved');
    render();
  }catch(err){
    console.error('Publish failed:', err);
    setSaveIndicator('error');
    alert('Could not publish your changes: ' + (err && err.message ? err.message : 'Unknown error'));
    if(btn){ btn.disabled = false; btn.textContent = 'Publish Changes'; }
  }
}


function persistState(){
  if(window.APP_MODE !== 'admin') return;
  if(!authToken) return;
  setSaveIndicator('saving');
  clearTimeout(saveTimer);
  saveTimer = setTimeout(async function(){
    try{
      await persistStateNow();
      setSaveIndicator('saved');
      const el = document.getElementById('save-indicator');
      if(el){ el.title = ''; }
    }catch(err){
      console.error('Portfolio save failed:', err);
      setSaveIndicator('error');
      const el = document.getElementById('save-indicator');
      if(el){ el.title = err && err.message ? err.message : 'Save failed'; }
    }
  },600);
}


async function loadRemoteState(){
  try{
    const resp = await fetch('/api/data',{ method:'GET', cache:'no-store' });
    if(!resp.ok){ console.warn('Could not load portfolio data:', resp.status); return; }

    const remote = await resp.json();
    if(!remote || typeof remote !== 'object'){ return; }

    hasPublishedData = true;

    if(remote.profile && typeof remote.profile === 'object'){
      state.profile = { ...state.profile, ...remote.profile };
    }
    if(remote.about && typeof remote.about === 'object'){
      state.about = { ...state.about, ...remote.about };
    }
    if(remote.contact && typeof remote.contact === 'object'){
      state.contact = { ...state.contact, ...remote.contact };
    }

    if(Array.isArray(remote.companies)){
      state.companies = remote.companies;
    }else if(Array.isArray(remote.categories)){
      /*
       * Legacy schema migration: older saves stored a flat
       * `categories` array with no company grouping. Wrap it
       * into a single company so nothing gets lost.
       */
      state.companies = [{
        id:'my-work',
        name:'My Work',
        desc:'',
        themeKey:'purple',
        categories: remote.categories
      }];
    }

  }catch(err){
    console.error('Failed to load portfolio data:', err);
  }
}


/* =========================================================
   LOGIN
   ========================================================= */

function renderLoginScreen(errorMsg){
  const app = document.getElementById('app');
  if(!app) return;

  app.innerHTML =
    '<div class="login-screen">' +
      '<form id="login-form" class="login-card">' +
        '<div class="login-logo">P</div>' +
        '<h2>Admin Login</h2>' +
        '<p class="s">Enter the admin password to edit this portfolio.</p>' +
        (errorMsg ? '<div class="login-error">' + escapeHtml(errorMsg) + '</div>' : '') +
        '<input type="password" id="login-password" placeholder="Password" autocomplete="current-password" autofocus required>' +
        '<button type="submit" class="btn btn-primary" style="width:100%;justify-content:center;">Log In</button>' +
      '</form>' +
    '</div>';

  const form = document.getElementById('login-form');
  if(!form) return;

  form.addEventListener('submit', async function(e){
    e.preventDefault();
    const btn = form.querySelector('button');
    const passwordEl = document.getElementById('login-password');
    const pw = passwordEl ? passwordEl.value : '';
    if(btn){ btn.disabled = true; btn.textContent = 'Logging in…'; }

    try{
      const resp = await fetch('/api/login',{
        method:'POST',
        headers:{ 'Content-Type':'application/json' },
        body:JSON.stringify({ password:pw })
      });
      const data = await resp.json().catch(() => ({}));

      if(!resp.ok){
        renderLoginScreen(data.error || data.detail || 'Incorrect password.');
        return;
      }
      if(!data.token){
        renderLoginScreen('Login succeeded but no session token was returned.');
        return;
      }

      authToken = data.token;
      localStorage.setItem(TOKEN_KEY, authToken);
      state.previewMode = false;

      await loadRemoteState();
      render();

    }catch(err){
      console.error('Login failed:', err);
      renderLoginScreen('Network error — please try again.');
    }
  });
}


function logout(){
  authToken = null;
  localStorage.removeItem(TOKEN_KEY);
  state.previewMode = false;
  renderLoginScreen();
}


/* =========================================================
   SHARING
   ========================================================= */

function copyShareLink(){
  const url = location.origin + '/';
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(url)
      .then(() => alert('Public view-only link copied:\n' + url))
      .catch(() => prompt('Copy this link:', url));
  }else{
    prompt('Copy this link:', url);
  }
}


/* =========================================================
   BOOTSTRAP
   ========================================================= */

async function bootstrap(){
  if(window.APP_MODE === 'admin'){
    const stored = localStorage.getItem(TOKEN_KEY);
    if(stored){
      authToken = stored;
      state.previewMode = false;
      await loadRemoteState();
      render();
    }else{
      renderLoginScreen();
    }
  }else{
    state.previewMode = true;
    await loadRemoteState();
    render();
  }
}


/* =========================================================
   MEDIA UPLOAD / DELETE
   ========================================================= */

function fileToBase64(file){
  return new Promise((resolve,reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = String(reader.result || '');
      resolve(result.split(',')[1] || '');
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function uploadFile(file){
  if(!authToken){ throw new Error('You are not logged in.'); }

  const dataBase64 = await fileToBase64(file);

  const resp = await fetch('/api/upload',{
    method:'POST',
    headers:{ 'Content-Type':'application/json', 'Authorization':'Bearer ' + authToken },
    body:JSON.stringify({ filename:file.name, mime:file.type || 'application/octet-stream', dataBase64 })
  });

  const data = await resp.json().catch(() => ({}));

  if(resp.status === 401){
    authToken = null;
    localStorage.removeItem(TOKEN_KEY);
    renderLoginScreen('Your session expired. Please log in again.');
    throw new Error('Session expired.');
  }

  if(!resp.ok){ throw new Error(data.error || data.detail || 'Upload failed'); }
  if(!data.url){ throw new Error('Upload succeeded but no file URL was returned.'); }

  return data;
}

async function deleteMedia(id){
  if(!id || !authToken) return;
  try{
    const resp = await fetch('/api/media?id=' + encodeURIComponent(id), {
      method:'DELETE',
      headers:{ 'Authorization':'Bearer ' + authToken }
    });
    if(resp.status === 401){
      authToken = null;
      localStorage.removeItem(TOKEN_KEY);
      renderLoginScreen('Your session expired. Please log in again.');
      return;
    }
    if(!resp.ok){
      const data = await resp.json().catch(() => ({}));
      console.error('Media delete failed:', data);
    }
  }catch(err){
    console.error('Media delete request failed:', err);
  }
}


/* =========================================================
   PLATFORM DETECTION
   ========================================================= */

function detectPlatform(rawUrl){
  let u;
  try{ u = new URL(rawUrl); }catch(e){ return null; }

  const host = u.hostname.toLowerCase().replace(/^www\./,'');

  if(host.includes('youtube.com') || host === 'youtu.be'){
    let id = null;
    if(host === 'youtu.be'){ id = u.pathname.slice(1).split('/')[0]; }
    else if(u.pathname.startsWith('/shorts/')){ id = u.pathname.split('/')[2]; }
    else if(u.pathname.startsWith('/embed/')){ id = u.pathname.split('/')[2]; }
    else{ id = u.searchParams.get('v'); }
    return { platform:'YouTube', embedUrl: id ? 'https://www.youtube.com/embed/' + id : null, domain:host };
  }

  if(host.includes('instagram.com')){
    const m = u.pathname.match(/\/(p|reel|reels|tv)\/([^\/?#]+)/);
    return {
      platform:'Instagram',
      embedUrl: m ? 'https://www.instagram.com/' + m[1] + '/' + m[2] + '/embed' : null,
      domain:host
    };
  }

  if(host.includes('tiktok.com')){
    const m = u.pathname.match(/\/video\/(\d+)/);
    return { platform:'TikTok', embedUrl: m ? 'https://www.tiktok.com/embed/v2/' + m[1] : null, domain:host };
  }

  if(host.includes('vimeo.com')){
    const m = u.pathname.match(/\/(\d+)/);
    return { platform:'Vimeo', embedUrl: m ? 'https://player.vimeo.com/video/' + m[1] : null, domain:host };
  }

  if(host === 'drive.google.com' || host === 'docs.google.com'){
    let id = null;
    const m = u.pathname.match(/\/file\/d\/([^\/]+)/);
    if(m){ id = m[1]; }
    else if(u.searchParams.get('id')){ id = u.searchParams.get('id'); }
    return {
      platform:'Google Drive',
      embedUrl: id ? 'https://drive.google.com/file/d/' + id + '/preview' : null,
      domain:host
    };
  }

  if(host === 'open.spotify.com'){
    const parts = u.pathname.split('/').filter(Boolean);
    let embedUrl = null;
    if(parts.length >= 2){
      embedUrl = 'https://open.spotify.com/embed/' + parts[0] + '/' + parts[1];
    }
    return { platform:'open.spotify.com', embedUrl, domain:host };
  }

  if(host.includes('twitter.com') || host === 'x.com'){
    return { platform:'X (Twitter)', embedUrl:null, domain:host };
  }

  if(host.includes('facebook.com') || host === 'fb.watch'){
    return { platform:'Facebook', embedUrl:null, domain:host };
  }

  return { platform:host, embedUrl:null, domain:host };
}


/* =========================================================
   FILE COLLECTION (across all companies)
   ========================================================= */

function getAllFileItems(){
  let arr = [];
  (state.companies || []).forEach(company => {
    (company.categories || []).forEach(cat => {
      if(cat.isSocial) return;
      (cat.subs || []).forEach(sub => {
        (sub.items || []).forEach(it => {
          if(it.type === 'link') return;
          arr.push(Object.assign({}, it, {
            companyId:company.id, companyName:company.name,
            catId:cat.id, catName:cat.name,
            subId:sub.id, subName:sub.name
          }));
        });
      });
    });
  });
  return arr;
}


/* =========================================================
   ADD FILES
   ========================================================= */

async function addFilesToSub(sub,fileList){
  const files = Array.from(fileList || []);
  if(!files.length) return;

  for(const file of files){
    try{
      const result = await uploadFile(file);
      const parts = file.name.split('.');
      const ext = parts.length > 1 ? parts.pop().toUpperCase() : '';

      sub.items = sub.items || [];
      sub.items.push({
        id:uid('item'),
        type:'file',
        name:file.name,
        mime: file.type || 'application/octet-stream',
        ext,
        url:result.url,
        mediaId: result.id || result.mediaId || null,
        size:file.size || 0,
        addedAt:Date.now()
      });

      await persistStateNow();
      render();
      setSaveIndicator('saved');

    }catch(e){
      console.error('Upload failed:', e);
      setSaveIndicator('error');
      alert('Upload failed for "' + file.name + '": ' + e.message);
    }
  }
}


/* =========================================================
   NAVIGATION
   ========================================================= */

function goToPage(key){
  state.page = key;
  state.activeCompanyId = null;
  state.detailCategoryId = null;
  render();
}

function goToCompanyDetail(companyId){
  state.page = 'companies';
  state.activeCompanyId = companyId;
  state.detailCategoryId = null;
  render();
}

function backToCompanyGrid(){
  state.activeCompanyId = null;
  state.detailCategoryId = null;
  render();
}

function goToCategoryDetail(companyId,catId){
  state.page = 'companies';
  state.activeCompanyId = companyId;
  state.detailCategoryId = catId;
  render();
}

function backToCategoryGrid(){
  state.detailCategoryId = null;
  render();
}

function togglePreview(){
  if(window.APP_MODE !== 'admin') return;
  state.previewMode = !state.previewMode;
  render();
}

function setLibraryFilter(key){
  state.libraryFilter = key;
  render();
}


/* =========================================================
   COMPANY CRUD
   ========================================================= */

function openAddCompanyModal(){
  state.modal = { type:'add-company' };
  render();
}

function openEditCompanyModal(companyId){
  state.modal = { type:'edit-company', id:companyId };
  render();
}

function closeModal(){
  state.modal = null;
  render();
}

async function submitAddCompany(){
  const nameEl = document.getElementById('modal-company-name');
  const descEl = document.getElementById('modal-company-desc');
  if(!nameEl || !descEl) return;

  const name = nameEl.value.trim();
  if(!name) return;
  const desc = descEl.value.trim();

  const themeKeys = Object.keys(THEMES);
  const themeKey = themeKeys[state.companies.length % themeKeys.length];

  state.companies.push({ id:uid('company'), name, desc, themeKey, categories:[] });

  state.modal = null;
  render();

  try{
    await persistStateNow();
    setSaveIndicator('saved');
  }catch(err){
    console.error('Failed to save company:', err);
    setSaveIndicator('error');
    alert('Company was created, but could not be saved to the server.');
  }
}

async function submitEditCompany(companyId){
  const company = state.companies.find(c => c.id === companyId);
  if(!company) return;

  const nameEl = document.getElementById('modal-company-name');
  const descEl = document.getElementById('modal-company-desc');
  if(!nameEl || !descEl) return;

  const name = nameEl.value.trim();
  if(name){ company.name = name; }
  company.desc = descEl.value.trim();

  state.modal = null;
  render();

  try{
    await persistStateNow();
    setSaveIndicator('saved');
  }catch(err){
    console.error('Failed to save company:', err);
    setSaveIndicator('error');
  }
}

async function deleteCompanyConfirm(companyId){
  const company = state.companies.find(c => c.id === companyId);
  if(!company) return;

  if(!confirm('Delete "' + company.name + '" and everything inside it? This can\'t be undone.')) return;

  for(const cat of (company.categories || [])){
    for(const sub of (cat.subs || [])){
      for(const it of (sub.items || [])){
        if(it.type === 'file' && it.mediaId){ await deleteMedia(it.mediaId); }
      }
    }
  }

  state.companies = state.companies.filter(c => c.id !== companyId);

  if(state.activeCompanyId === companyId){
    state.activeCompanyId = null;
    state.detailCategoryId = null;
  }

  render();

  try{
    await persistStateNow();
    setSaveIndicator('saved');
  }catch(err){
    console.error('Failed to save company deletion:', err);
    setSaveIndicator('error');
  }
}


/* =========================================================
   CATEGORY CRUD (scoped within a company)
   ========================================================= */

function openAddCategoryModal(companyId){
  state.modal = { type:'add-category', companyId };
  render();
}

function openEditCategoryModal(companyId,catId){
  state.modal = { type:'edit-category', companyId, id:catId };
  render();
}

async function submitAddCategory(){
  const companyId = state.modal && state.modal.companyId;
  const company = state.companies.find(c => c.id === companyId);
  if(!company) return;

  const nameEl = document.getElementById('modal-cat-name');
  const descEl = document.getElementById('modal-cat-desc');
  if(!nameEl || !descEl) return;

  const name = nameEl.value.trim();
  if(!name) return;
  const desc = descEl.value.trim();

  company.categories = company.categories || [];
  const themeKeys = Object.keys(THEMES);
  const themeKey = themeKeys[company.categories.length % themeKeys.length];

  company.categories.push({ id:uid('cat'), name, desc, themeKey, icon:ICONS.folder, isSocial:false, subs:[] });

  state.modal = null;
  render();

  try{
    await persistStateNow();
    setSaveIndicator('saved');
  }catch(err){
    console.error('Failed to save category:', err);
    setSaveIndicator('error');
    alert('Category was created, but could not be saved to the server.');
  }
}

async function submitEditCategory(){
  const companyId = state.modal && state.modal.companyId;
  const catId = state.modal && state.modal.id;
  const company = state.companies.find(c => c.id === companyId);
  if(!company) return;
  const cat = (company.categories || []).find(c => c.id === catId);
  if(!cat) return;

  const nameEl = document.getElementById('modal-cat-name');
  const descEl = document.getElementById('modal-cat-desc');
  if(!nameEl || !descEl) return;

  const name = nameEl.value.trim();
  if(name){ cat.name = name; }
  cat.desc = descEl.value.trim();

  state.modal = null;
  render();

  try{
    await persistStateNow();
    setSaveIndicator('saved');
  }catch(err){
    console.error('Failed to save category:', err);
    setSaveIndicator('error');
  }
}

async function deleteCategoryConfirm(companyId,catId){
  const company = state.companies.find(c => c.id === companyId);
  if(!company) return;
  const cat = (company.categories || []).find(c => c.id === catId);
  if(!cat) return;

  if(!confirm('Delete "' + cat.name + '" and everything inside it? This can\'t be undone.')) return;

  for(const sub of (cat.subs || [])){
    for(const it of (sub.items || [])){
      if(it.type === 'file' && it.mediaId){ await deleteMedia(it.mediaId); }
    }
  }

  company.categories = company.categories.filter(c => c.id !== catId);

  if(state.detailCategoryId === catId){ state.detailCategoryId = null; }

  render();

  try{
    await persistStateNow();
    setSaveIndicator('saved');
  }catch(err){
    console.error('Failed to save category deletion:', err);
    setSaveIndicator('error');
  }
}

async function addSubToCategory(companyId,catId){
  const input = document.getElementById('newsub_' + catId);
  if(!input) return;
  const name = input.value.trim();
  if(!name) return;

  const company = state.companies.find(c => c.id === companyId);
  if(!company) return;
  const cat = (company.categories || []).find(c => c.id === catId);
  if(!cat) return;

  cat.subs = cat.subs || [];
  cat.subs.push({ id:uid('sub'), name, items:[] });

  render();

  try{
    await persistStateNow();
    setSaveIndicator('saved');
  }catch(err){
    console.error('Failed to save subcategory:', err);
    setSaveIndicator('error');
  }
}

async function renameSub(companyId,catId,subId){
  const company = state.companies.find(c => c.id === companyId);
  if(!company) return;
  const cat = (company.categories || []).find(c => c.id === catId);
  if(!cat) return;
  const sub = (cat.subs || []).find(s => s.id === subId);
  if(!sub) return;

  const name = prompt('Rename subcategory:', sub.name);
  if(!name || !name.trim() || name.trim() === sub.name) return;

  sub.name = name.trim();
  render();

  try{
    await persistStateNow();
    setSaveIndicator('saved');
  }catch(err){
    console.error('Failed to save subcategory rename:', err);
    setSaveIndicator('error');
  }
}

async function removeSub(companyId,catId,subId){
  const company = state.companies.find(c => c.id === companyId);
  if(!company) return;
  const cat = (company.categories || []).find(c => c.id === catId);
  if(!cat) return;
  const sub = (cat.subs || []).find(s => s.id === subId);
  if(!sub) return;

  if(!confirm('Delete "' + sub.name + '" and everything inside it?')) return;

  for(const it of (sub.items || [])){
    if(it.type === 'file' && it.mediaId){ await deleteMedia(it.mediaId); }
  }

  cat.subs = cat.subs.filter(s => s.id !== subId);

  render();

  try{
    await persistStateNow();
    setSaveIndicator('saved');
  }catch(err){
    console.error('Failed to save subcategory:', err);
    setSaveIndicator('error');
  }
}


/* =========================================================
   FILE ITEMS
   ========================================================= */

function handleFiles(evt,companyId,catId,subId){
  const company = state.companies.find(c => c.id === companyId);
  if(!company) return;
  const cat = (company.categories || []).find(c => c.id === catId);
  if(!cat) return;
  const sub = (cat.subs || []).find(s => s.id === subId);
  if(!sub) return;

  addFilesToSub(sub, evt.target.files);
  evt.target.value = '';
}

async function removeFileItem(companyId,catId,subId,itemId){
  const company = state.companies.find(c => c.id === companyId);
  if(!company) return;
  const cat = (company.categories || []).find(c => c.id === catId);
  if(!cat) return;
  const sub = (cat.subs || []).find(s => s.id === subId);
  if(!sub) return;
  const item = (sub.items || []).find(i => i.id === itemId);
  if(!item) return;

  if(item.mediaId){ await deleteMedia(item.mediaId); }

  sub.items = sub.items.filter(i => i.id !== itemId);

  render();

  try{
    await persistStateNow();
    setSaveIndicator('saved');
  }catch(err){
    console.error('Failed to save file removal:', err);
    setSaveIndicator('error');
  }
}

function downloadFileItem(companyId,catId,subId,itemId){
  const company = state.companies.find(c => c.id === companyId);
  if(!company) return;
  const cat = (company.categories || []).find(c => c.id === catId);
  if(!cat) return;
  const sub = (cat.subs || []).find(s => s.id === subId);
  if(!sub) return;
  const item = (sub.items || []).find(i => i.id === itemId);
  if(!item || !item.url) return;

  const a = document.createElement('a');
  a.href = item.url;
  a.download = item.name || 'download';
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  document.body.appendChild(a);
  a.click();
  a.remove();
}


/* =========================================================
   MEDIA LIBRARY UPLOAD (Company -> Category -> Subcategory)
   ========================================================= */

function refreshLibraryCatSelect(){
  const compSel = document.getElementById('lib-company');
  const catSel = document.getElementById('lib-cat');
  if(!compSel || !catSel) return;

  const company = state.companies.find(c => c.id === compSel.value);
  const cats = company ? (company.categories || []).filter(c => !c.isSocial) : [];

  catSel.innerHTML = cats.map(c => '<option value="' + escapeHtml(c.id) + '">' + escapeHtml(c.name) + '</option>').join('');

  refreshLibrarySubSelect();
}

function refreshLibrarySubSelect(){
  const compSel = document.getElementById('lib-company');
  const catSel = document.getElementById('lib-cat');
  const subSel = document.getElementById('lib-sub');
  if(!compSel || !catSel || !subSel) return;

  const company = state.companies.find(c => c.id === compSel.value);
  const cat = company ? (company.categories || []).find(c => c.id === catSel.value) : null;
  const subs = cat ? (cat.subs || []) : [];

  let opts = subs.map(s => '<option value="' + escapeHtml(s.id) + '">' + escapeHtml(s.name) + '</option>').join('');
  opts += '<option value="__new__">+ New subcategory…</option>';

  subSel.innerHTML = opts;
}

function uploadLibraryClick(){
  const compSel = document.getElementById('lib-company');
  const catSel = document.getElementById('lib-cat');
  const subSel = document.getElementById('lib-sub');
  if(!compSel || !catSel || !subSel) return;

  const companyId = compSel.value;
  const catId = catSel.value;
  let subId = subSel.value;

  const company = state.companies.find(c => c.id === companyId);
  if(!company) return;
  const cat = (company.categories || []).find(c => c.id === catId);
  if(!cat) return;

  if(subId === '__new__' || !subId){
    const name = prompt('New subcategory name:');
    if(!name || !name.trim()) return;

    const sub = { id:uid('sub'), name:name.trim(), items:[] };
    cat.subs = cat.subs || [];
    cat.subs.push(sub);
    subId = sub.id;

    persistState();
  }

  pendingUploadTarget = { companyId, catId, subId };

  const input = document.getElementById('lib-file-input');
  if(input){ input.value = ''; input.click(); }
}

function handleLibraryFiles(evt){
  if(!pendingUploadTarget) return;

  const { companyId, catId, subId } = pendingUploadTarget;

  const company = state.companies.find(c => c.id === companyId);
  const cat = company && (company.categories || []).find(c => c.id === catId);
  const sub = cat && (cat.subs || []).find(s => s.id === subId);

  if(sub){ addFilesToSub(sub, evt.target.files); }

  pendingUploadTarget = null;
  evt.target.value = '';
}


/* =========================================================
   SOCIAL / EMBED ITEMS
   ========================================================= */

async function addSocialLink(companyId,catId,subId){
  const input = document.getElementById('link_' + subId);
  const labelInput = document.getElementById('linklabel_' + subId);
  if(!input) return;

  const raw = input.value.trim();
  if(!raw) return;
  const label = labelInput ? labelInput.value.trim() : '';

  const info = detectPlatform(raw);

  const company = state.companies.find(c => c.id === companyId);
  const cat = company && (company.categories || []).find(c => c.id === catId);
  const sub = cat && (cat.subs || []).find(s => s.id === subId);

  if(!info || !sub) return;
  if(!info.platform) return;

  sub.items = sub.items || [];
  sub.items.push({
    id:uid('item'), type:'link', url:raw,
    platform:info.platform, embedUrl:info.embedUrl, domain:info.domain,
    label: label || null,
    addedAt:Date.now()
  });

  input.value = '';
  if(labelInput){ labelInput.value = ''; }

  render();

  try{
    await persistStateNow();
    setSaveIndicator('saved');
  }catch(err){
    console.error('Failed to save social link:', err);
    setSaveIndicator('error');
    alert('The post was added, but could not be saved to the server.');
  }
}

async function removeSocialItem(companyId,catId,subId,itemId){
  const company = state.companies.find(c => c.id === companyId);
  if(!company) return;
  const cat = (company.categories || []).find(c => c.id === catId);
  if(!cat) return;
  const sub = (cat.subs || []).find(s => s.id === subId);
  if(!sub) return;

  sub.items = (sub.items || []).filter(i => i.id !== itemId);

  render();

  try{
    await persistStateNow();
    setSaveIndicator('saved');
  }catch(err){
    console.error('Failed to save social post removal:', err);
    setSaveIndicator('error');
  }
}


/* =========================================================
   EXPORT
   ========================================================= */

function sanitizeName(name){
  return String(name).replace(/[\/\\?%*:|"<>]/g, '-');
}

async function exportPortfolio(){
  if(typeof JSZip === 'undefined'){
    alert('Export needs an internet connection to load the zip library.');
    return;
  }

  const zip = new JSZip();
  const manifest = { companies:[] };

  for(const company of state.companies){
    const companyFolder = zip.folder(sanitizeName(company.name));
    const companyManifest = { name:company.name, categories:[], socialPosts:[] };

    for(const cat of (company.categories || [])){

      if(cat.isSocial){
        for(const sub of (cat.subs || [])){
          for(const item of (sub.items || [])){
            companyManifest.socialPosts.push({ subcategory:sub.name, url:item.url, platform:item.platform, label:item.label || null });
          }
        }
        continue;
      }

      const catFolder = companyFolder.folder(sanitizeName(cat.name));
      companyManifest.categories.push({
        name:cat.name,
        subcategories:(cat.subs || []).map(s => ({ name:s.name, itemCount:(s.items || []).length }))
      });

      for(const sub of (cat.subs || [])){
        const subFolder = catFolder.folder(sanitizeName(sub.name));

        for(const item of (sub.items || [])){
          if(item.type === 'link'){
            companyManifest.socialPosts.push({ subcategory:cat.name + ' / ' + sub.name, url:item.url, platform:item.platform, label:item.label || null });
            continue;
          }
          if(!item.url) continue;

          try{
            const resp = await fetch(item.url);
            if(!resp.ok) continue;
            const blob = await resp.blob();
            subFolder.file(item.name || 'file', blob);
          }catch(e){
            console.warn('Could not export:', item.name, e);
          }
        }
      }
    }

    manifest.companies.push(companyManifest);
  }

  zip.file('manifest.json', JSON.stringify(manifest, null, 2));

  const content = await zip.generateAsync({ type:'blob' });
  const url = URL.createObjectURL(content);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'portfolio-export.zip';
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 4000);
}

function exportPortfolioClick(){
  const btn = document.getElementById('export-btn');
  if(btn){ btn.disabled = true; btn.innerHTML = 'Exporting…'; }

  exportPortfolio()
    .catch(err => {
      console.error('Export failed:', err);
      alert('Export failed. Please try again.');
    })
    .finally(() => {
      if(btn){ btn.disabled = false; btn.innerHTML = ICONS.download + ' Export Portfolio'; }
    });
}


/* =========================================================
   ABOUT / CONTACT
   ========================================================= */

async function saveAbout(){
  const bioEl = document.getElementById('about-bio');
  const focusEl = document.getElementById('about-focus');
  if(!bioEl || !focusEl) return;

  state.about = { bio:bioEl.value, focus:focusEl.value };
  setSaveIndicator('saving');

  try{
    await persistStateNow();
    render();
    setSaveIndicator('saved');
  }catch(err){
    console.error('Failed to save About Me:', err);
    setSaveIndicator('error');
    const el = document.getElementById('save-indicator');
    if(el){ el.title = err && err.message ? err.message : 'Failed to save About Me'; }
    alert('About Me could not be saved. Please try again.');
  }
}

async function saveContact(){
  const emailEl = document.getElementById('contact-email');
  const phoneEl = document.getElementById('contact-phone');
  const locationEl = document.getElementById('contact-location');
  const websiteEl = document.getElementById('contact-website');
  if(!emailEl || !phoneEl || !locationEl || !websiteEl) return;

  state.contact = { email:emailEl.value, phone:phoneEl.value, location:locationEl.value, website:websiteEl.value };
  setSaveIndicator('saving');

  try{
    await persistStateNow();
    render();
    setSaveIndicator('saved');
  }catch(err){
    console.error('Failed to save Contact:', err);
    setSaveIndicator('error');
    const el = document.getElementById('save-indicator');
    if(el){ el.title = err && err.message ? err.message : 'Failed to save Contact'; }
    alert('Contact details could not be saved. Please try again.');
  }
}


/* =========================================================
   AVATAR
   ========================================================= */

async function handleAvatarChange(evt){
  const file = evt.target.files && evt.target.files[0];
  if(!file) return;

  if(!file.type || !file.type.startsWith('image/')){
    alert('Please select an image file.');
    return;
  }

  const reader = new FileReader();

  reader.onload = async function(e){
    state.profile.avatar = e.target.result;
    render();

    try{
      setSaveIndicator('saving');
      await persistStateNow();
      setSaveIndicator('saved');
    }catch(err){
      console.error('Failed to save profile picture:', err);
      setSaveIndicator('error');
      alert('Profile picture could not be saved. Please try again.');
    }
  };

  reader.onerror = function(){
    alert('Could not read the selected image.');
  };

  reader.readAsDataURL(file);
  evt.target.value = '';
}


/* =========================================================
   SIDEBAR
   ========================================================= */

function renderSidebar(){
  const items = NAV.map(n =>
    '<div class="nav-item ' + (state.page === n.key ? 'active' : '') + '" onclick="goToPage(\'' + n.key + '\')">' +
      n.icon +
      '<span>' + escapeHtml(n.label) + '</span>' +
    '</div>'
  ).join('');

  const avatarImg = state.profile.avatar
    ? '<img src="' + escapeHtml(state.profile.avatar) + '" alt="Profile picture">'
    : '';

  const logoInner = state.profile.avatar ? avatarImg : 'P';
  const avatarInner = state.profile.avatar ? avatarImg : 'B';

  const uploadHint = !state.previewMode
    ? '<input type="file" accept="image/*" style="display:none" id="avatar-input" onchange="handleAvatarChange(event)">'
    : '';

  const logoClick = !state.previewMode
    ? ' onclick="document.getElementById(\'avatar-input\').click()" title="Click to change profile picture"'
    : '';

  return (
    '<div class="sidebar">' +
      '<div class="brand">' +
        '<div class="logo"' + logoClick + '>' + logoInner + '</div>' +
        '<div class="name">Portfolio</div>' +
      '</div>' +
      '<div class="nav">' + items + '</div>' +
      '<div class="profile">' +
        '<div class="avatar"' + logoClick + '>' + avatarInner + '</div>' +
        '<div class="who"><div class="n">Basil</div><div class="r">Creative Portfolio</div></div>' +
      '</div>' +
      uploadHint +
    '</div>'
  );
}


/* =========================================================
   PAGE HEADER
   ========================================================= */

function renderPageHeader(){

  const titles = {
    dashboard:['My Portfolio','Manage and showcase your creative work'],
    companies:['Companies',"Your work grouped by the companies and clients you've worked with"],
    media:['Media Library','Every file across your companies, in one place'],
    social:['Social Posts',"All the posts you've connected, grouped by subcategory"],
    about:['About Me','What visitors see when they land on your portfolio'],
    contact:['Contact','How people can reach you']
  };

  const t = titles[state.page] || ['',''];

  const isAdmin = window.APP_MODE === 'admin';

  const liveStatusText = lastPublishedAt
    ? '● Live · Last published ' + formatPublishTime(lastPublishedAt)
    : (hasPublishedData ? '● Live' : '○ Not published yet');

  const liveStatusColor = (lastPublishedAt || hasPublishedData) ? '#1f9c5a' : 'var(--dim2)';

  const previewBtn = isAdmin
    ? ('<button class="btn btn-outline" onclick="togglePreview()">' + ICONS.eye + ' ' + (state.previewMode ? 'Exit Preview' : 'Preview Portfolio') + '</button>')
    : '';

  let headerAddBtn = '';
  if(!state.previewMode){
    if(state.page === 'dashboard'){
      headerAddBtn = '<button class="btn btn-primary" onclick="openAddCompanyModal()">' + ICONS.plus + ' Add New Company</button>';
    }else if(state.page === 'companies'){
      if(!state.activeCompanyId){
        headerAddBtn = '<button class="btn btn-primary" onclick="openAddCompanyModal()">' + ICONS.plus + ' Add New Company</button>';
      }else if(!state.detailCategoryId){
        headerAddBtn = '<button class="btn btn-primary" onclick="openAddCategoryModal(\'' + state.activeCompanyId + '\')">' + ICONS.plus + ' Add New Category</button>';
      }
    }
  }

  const adminTools = isAdmin
    ? (
      '<button id="publish-btn" class="btn btn-primary" onclick="publishNow()">Publish Changes</button>' +
      '<span id="live-status" class="save-indicator" style="min-width:auto;white-space:nowrap;color:' + liveStatusColor + ';">' + liveStatusText + '</span>' +
      '<span id="save-indicator" class="save-indicator"></span>' +
      '<button class="btn btn-outline" onclick="copyShareLink()">' + ICONS.share + ' Copy Public Link</button>' +
      '<button class="btn btn-outline" onclick="logout()">Log Out</button>'
    )
    : '';

  return (
    '<div class="page-head">' +
      '<div><h1>' + escapeHtml(t[0]) + '</h1><p>' + escapeHtml(t[1]) + '</p></div>' +
      '<div class="head-actions">' + adminTools + previewBtn + headerAddBtn + '</div>' +
    '</div>'
  );
}


/* =========================================================
   PAGE BODY
   ========================================================= */

function renderPageBody(){
  switch(state.page){
    case 'dashboard': return renderDashboard();
    case 'companies': return renderCompaniesPage();
    case 'media': return renderMediaLibraryPage();
    case 'social': return renderSocialPage();
    case 'about': return renderAboutPage();
    case 'contact': return renderContactPage();
    default: return '';
  }
}


/* =========================================================
   COMPANY CARD / GRID / DETAIL
   ========================================================= */

function renderCompanyCard(company){
  const theme = THEMES[company.themeKey] || THEMES.purple;
  const catCount = (company.categories || []).length;
  const itemCount = (company.categories || []).reduce((s,cat) => s + (cat.subs || []).reduce((s2,sub) => s2 + (sub.items || []).length, 0), 0);

  const tools = !state.previewMode
    ? (
      '<div class="cat-tools">' +
        '<button title="Edit" onclick="event.stopPropagation();openEditCompanyModal(\'' + company.id + '\')">' + ICONS.pencil + '</button>' +
        '<button title="Delete" onclick="event.stopPropagation();deleteCompanyConfirm(\'' + company.id + '\')">' + ICONS.kebab + '</button>' +
      '</div>'
    )
    : '';

  return (
    '<div class="cat-card" style="background:' + theme.bg + '" onclick="goToCompanyDetail(\'' + company.id + '\')">' +
      '<div class="top">' +
        '<div class="cat-icon" style="background:' + theme.ic + ';color:#fff;">' + ICONS.company + '</div>' +
        tools +
      '</div>' +
      '<h3>' + escapeHtml(company.name) + '</h3>' +
      '<p>' + escapeHtml(company.desc || '') + '</p>' +
      '<div class="cat-badges">' +
        '<span class="badge" style="color:' + theme.text + '">' + catCount + ' Categor' + (catCount === 1 ? 'y' : 'ies') + '</span>' +
        '<span class="badge" style="color:' + theme.text + '">' + itemCount + ' Items</span>' +
      '</div>' +
    '</div>'
  );
}

function renderCompanyGrid(){
  const cards = state.companies.map(renderCompanyCard).join('');

  const addCard = !state.previewMode
    ? (
      '<div style="margin-top:14px;">' +
        '<div class="add-cat-card" onclick="openAddCompanyModal()">' +
          ICONS.plus +
          '<div class="t">Add New Company</div>' +
          '<div class="s">Add a company or client you\'ve worked with</div>' +
        '</div>' +
      '</div>'
    )
    : '';

  const empty = !state.companies.length ? '<div class="empty">No companies yet. Add your first one below.</div>' : '';

  return '<div class="cat-grid">' + cards + '</div>' + empty + addCard;
}

function renderCompaniesPage(){
  if(state.activeCompanyId){
    const company = state.companies.find(c => c.id === state.activeCompanyId);
    if(company){
      if(state.detailCategoryId){
        const cat = (company.categories || []).find(c => c.id === state.detailCategoryId);
        if(cat){
          return renderCategoryDetailPage(company, cat, true);
        }
        state.detailCategoryId = null;
      }
      return renderCompanyDetailPage(company);
    }
    state.activeCompanyId = null;
  }
  return renderCompanyGrid();
}

function renderCompanyDetailPage(company){
  const cats = company.categories || [];
  const theme = THEMES[company.themeKey] || THEMES.purple;

  const cards = cats.map(cat => renderCategoryCard(company, cat)).join('');

  const addCatCard = !state.previewMode
    ? (
      '<div style="margin-top:14px;">' +
        '<div class="add-cat-card" onclick="openAddCategoryModal(\'' + company.id + '\')">' +
          ICONS.plus +
          '<div class="t">Add New Category</div>' +
          '<div class="s">e.g. Videography, Photography, Graphic Design</div>' +
        '</div>' +
      '</div>'
    )
    : '';

  const empty = !cats.length ? '<div class="empty">No categories yet. Create one below.</div>' : '';

  return (
    '<div class="detail-back" onclick="backToCompanyGrid()">← All Companies</div>' +
    '<div class="detail-header">' +
      '<div class="cat-icon" style="background:' + theme.ic + ';color:#fff;width:52px;height:52px;">' + ICONS.company + '</div>' +
      '<div>' +
        '<h2 style="margin:0 0 4px;font-size:20px;">' + escapeHtml(company.name) + '</h2>' +
        '<p style="margin:0;color:#8a8fa3;font-size:13.5px;">' + escapeHtml(company.desc || '') + '</p>' +
      '</div>' +
    '</div>' +
    '<div class="cat-grid">' + cards + '</div>' +
    empty +
    addCatCard
  );
}


/* =========================================================
   CATEGORY CARD (within a company)
   ========================================================= */

function renderCategoryCard(company,cat){
  const theme = THEMES[cat.themeKey] || THEMES.purple;
  const subCount = (cat.subs || []).length;
  const itemCount = (cat.subs || []).reduce((s,sub) => s + (sub.items || []).length, 0);
  const itemLabel = cat.isSocial ? 'Posts' : 'Items';

  const tools = !state.previewMode
    ? (
      '<div class="cat-tools">' +
        '<button title="Edit" onclick="event.stopPropagation();openEditCategoryModal(\'' + company.id + '\',\'' + cat.id + '\')">' + ICONS.pencil + '</button>' +
        '<button title="Delete" onclick="event.stopPropagation();deleteCategoryConfirm(\'' + company.id + '\',\'' + cat.id + '\')">' + ICONS.kebab + '</button>' +
      '</div>'
    )
    : '';

  return (
    '<div class="cat-card" style="background:' + theme.bg + '" onclick="goToCategoryDetail(\'' + company.id + '\',\'' + cat.id + '\')">' +
      '<div class="top">' +
        '<div class="cat-icon" style="background:' + theme.ic + ';color:#fff;">' + cat.icon + '</div>' +
        tools +
      '</div>' +
      '<h3>' + escapeHtml(cat.name) + '</h3>' +
      '<p>' + escapeHtml(cat.desc || '') + '</p>' +
      '<div class="cat-badges">' +
        '<span class="badge" style="color:' + theme.text + '">' + subCount + ' Subcategor' + (subCount === 1 ? 'y' : 'ies') + '</span>' +
        '<span class="badge" style="color:' + theme.text + '">' + itemCount + ' ' + itemLabel + '</span>' +
      '</div>' +
    '</div>'
  );
}


/* =========================================================
   MEDIA CARD
   ========================================================= */

function renderMediaCard(item,opts){
  opts = opts || {};

  let inner;
  if(item.mime && item.mime.startsWith('image/')){
    inner = '<img src="' + escapeHtml(item.url) + '" alt="' + escapeHtml(item.name) + '">';
  }else if(item.mime && item.mime.startsWith('video/')){
    inner = '<video src="' + escapeHtml(item.url) + '" muted preload="metadata"></video>';
  }else{
    inner = '<div class="filecard"><div class="ext">' + escapeHtml(item.ext || 'FILE') + '</div></div>';
  }

  const type = classify(item);

  const removeBtn = !state.previewMode
    ? ('<button title="Remove" onclick="event.stopPropagation();removeFileItem(\'' + item.companyId + '\',\'' + item.catId + '\',\'' + item.subId + '\',\'' + item.id + '\')">' + ICONS.close + '</button>')
    : '';

  const dlBtn = '<button title="Download" onclick="event.stopPropagation();downloadFileItem(\'' + item.companyId + '\',\'' + item.catId + '\',\'' + item.subId + '\',\'' + item.id + '\')">' + ICONS.download + '</button>';

  const catTag = opts.showCategoryTag
    ? ' · ' + escapeHtml(item.companyName || '') + ' / ' + escapeHtml(item.catName || '')
    : '';

  return (
    '<div class="media-item-wrap">' +
      '<div class="media-card">' +
        '<div class="type-badge">' + typeBadgeIcon(type) + '</div>' +
        '<div class="m-actions">' + dlBtn + removeBtn + '</div>' +
        inner +
      '</div>' +
      '<div class="media-caption">' +
        '<div class="n">' + escapeHtml(item.name) + '</div>' +
        '<div class="m">' + escapeHtml(item.ext || 'FILE') + ' • ' + formatBytes(item.size) + catTag + '</div>' +
      '</div>' +
    '</div>'
  );
}


/* =========================================================
   FILE SUBCATEGORY
   ========================================================= */

function renderFileSubcategory(company,cat,sub){
  const items = sub.items || [];
  const fileItems = items.filter(it => it.type !== 'link');
  const linkItems = items.filter(it => it.type === 'link');

  const fileGrid = fileItems.length
    ? ('<div class="grid-media">' + fileItems.map(it => renderMediaCard(Object.assign({}, it, { companyId:company.id, catId:cat.id, subId:sub.id, catName:cat.name, companyName:company.name }))).join('') + '</div>')
    : '';

  const embedGrid = linkItems.length
    ? ('<div class="grid-embed" style="margin-top:' + (fileItems.length ? '16px' : '0') + ';">' + linkItems.map(it => renderEmbedItem(company, cat, sub, it)).join('') + '</div>')
    : '';

  const emptyHtml = (!fileItems.length && !linkItems.length) ? '<div class="empty">No items yet.</div>' : '';

  const editing = !state.previewMode;

  return (
    '<div class="sub-section">' +
      '<div class="sub-head">' +
        '<div>' +
          '<span class="name">' + escapeHtml(sub.name) + '</span>' +
          '<span class="meta">' + items.length + ' ' + (items.length === 1 ? 'item' : 'items') + '</span>' +
        '</div>' +
        (editing
          ? (
            '<div class="sub-actions">' +
              '<button class="icon-btn" title="Add files" onclick="document.getElementById(\'file_' + sub.id + '\').click()">' + ICONS.plus + '</button>' +
              '<button class="icon-btn" title="Rename subcategory" onclick="renameSub(\'' + company.id + '\',\'' + cat.id + '\',\'' + sub.id + '\')">' + ICONS.pencil + '</button>' +
              '<button class="icon-btn danger" title="Delete subcategory" onclick="removeSub(\'' + company.id + '\',\'' + cat.id + '\',\'' + sub.id + '\')">' + ICONS.trash + '</button>' +
            '</div>'
          )
          : ''
        ) +
      '</div>' +
      emptyHtml +
      fileGrid +
      embedGrid +
      (editing
        ? (
          '<input type="file" multiple style="display:none" id="file_' + sub.id + '" onchange="handleFiles(event,\'' + company.id + '\',\'' + cat.id + '\',\'' + sub.id + '\')">' +
          '<div class="add-row" style="max-width:560px;margin-top:14px;">' +
            '<input type="text" placeholder="Label (optional)" id="linklabel_' + sub.id + '" style="max-width:150px;">' +
            '<input type="text" placeholder="Paste a YouTube, Vimeo, Instagram, Spotify, or Drive link…" id="link_' + sub.id + '" onkeydown="if(event.key===\'Enter\'){addSocialLink(\'' + company.id + '\',\'' + cat.id + '\',\'' + sub.id + '\')}">' +
            '<button class="primary" onclick="addSocialLink(\'' + company.id + '\',\'' + cat.id + '\',\'' + sub.id + '\')">Add</button>' +
          '</div>'
        )
        : ''
      ) +
    '</div>'
  );
}


/* =========================================================
   EMBED CARD / ITEM
   ========================================================= */

function renderEmbedCard(company,cat,sub,item){
  const removeBtn = !state.previewMode
    ? ('<button title="Remove" onclick="removeSocialItem(\'' + company.id + '\',\'' + cat.id + '\',\'' + sub.id + '\',\'' + item.id + '\')">' + ICONS.close + '</button>')
    : '';

  const wide = LANDSCAPE_PLATFORMS.includes(item.platform) ? ' wide' : '';

  if(item.embedUrl){
    return (
      '<div class="embed-card' + wide + '">' +
        '<div class="embed-actions">' + removeBtn + '</div>' +
        '<iframe src="' + escapeHtml(item.embedUrl) + '" loading="lazy" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen webkitallowfullscreen mozallowfullscreen frameborder="0"></iframe>' +
      '</div>'
    );
  }

  const bg = PLATFORM_COLORS[item.platform] || '#7c5cfc';
  const initial = item.platform ? item.platform.charAt(0) : '?';

  return (
    '<div class="embed-card' + wide + ' fallback" style="background:' + bg + '">' +
      '<div class="embed-actions">' + removeBtn + '</div>' +
      '<div class="mono">' + escapeHtml(initial) + '</div>' +
      '<div class="platname">' + escapeHtml(item.platform || 'Link') + '</div>' +
      '<a class="open" href="' + escapeHtml(item.url) + '" target="_blank" rel="noopener noreferrer">Open post ↗</a>' +
    '</div>'
  );
}

function renderEmbedItem(company,cat,sub,item){
  const card = renderEmbedCard(company, cat, sub, item);
  if(!item.label){
    return '<div class="media-item-wrap">' + card + '</div>';
  }
  return (
    '<div class="media-item-wrap">' +
      card +
      '<div class="media-caption">' +
        '<div class="n">' + escapeHtml(item.label) + '</div>' +
        '<div class="m">' + escapeHtml(item.platform || '') + '</div>' +
      '</div>' +
    '</div>'
  );
}


/* =========================================================
   SOCIAL SUBCATEGORY
   ========================================================= */

function renderSocialSubcategory(company,cat,sub){
  const items = sub.items || [];

  const itemsHtml = items.length
    ? ('<div class="grid-embed">' + items.map(it => renderEmbedItem(company, cat, sub, it)).join('') + '</div>')
    : '<div class="empty">No posts yet.</div>';

  const editing = !state.previewMode;

  return (
    '<div class="sub-section">' +
      '<div class="sub-head">' +
        '<div>' +
          '<span class="name">' + escapeHtml(sub.name) + '</span>' +
          '<span class="meta">' + items.length + ' ' + (items.length === 1 ? 'post' : 'posts') + '</span>' +
        '</div>' +
        (editing
          ? (
            '<div class="sub-actions">' +
              '<button class="icon-btn" title="Rename subcategory" onclick="renameSub(\'' + company.id + '\',\'' + cat.id + '\',\'' + sub.id + '\')">' + ICONS.pencil + '</button>' +
              '<button class="icon-btn danger" title="Delete subcategory" onclick="removeSub(\'' + company.id + '\',\'' + cat.id + '\',\'' + sub.id + '\')">' + ICONS.trash + '</button>' +
            '</div>'
          )
          : ''
        ) +
      '</div>' +
      itemsHtml +
      (editing
        ? (
          '<div class="add-row" style="max-width:520px;margin-top:12px;">' +
            '<input type="text" placeholder="Label (optional)" id="linklabel_' + sub.id + '" style="max-width:150px;">' +
            '<input type="text" placeholder="Paste a post link…" id="link_' + sub.id + '" onkeydown="if(event.key===\'Enter\'){addSocialLink(\'' + company.id + '\',\'' + cat.id + '\',\'' + sub.id + '\')}">' +
            '<button class="primary" onclick="addSocialLink(\'' + company.id + '\',\'' + cat.id + '\',\'' + sub.id + '\')">Add</button>' +
          '</div>'
        )
        : ''
      ) +
    '</div>'
  );
}


/* =========================================================
   CATEGORY DETAIL (within a company)
   ========================================================= */

function renderCategoryDetailPage(company,cat,showBack){
  const theme = THEMES[cat.themeKey] || THEMES.purple;
  const subs = cat.subs || [];

  const subsHtml = subs.length
    ? subs.map(sub => cat.isSocial ? renderSocialSubcategory(company, cat, sub) : renderFileSubcategory(company, cat, sub)).join('')
    : '<div class="empty">No subcategories yet. Create one below.</div>';

  const addSub = !state.previewMode
    ? (
      '<div class="new-sub">' +
        '<div class="label">New subcategory in ' + escapeHtml(cat.name) + '</div>' +
        '<div class="add-row">' +
          '<input type="text" placeholder="e.g. ' + (cat.isSocial ? 'Instagram Reels' : 'Client Shoots') + '" id="newsub_' + cat.id + '" onkeydown="if(event.key===\'Enter\'){addSubToCategory(\'' + company.id + '\',\'' + cat.id + '\')}">' +
          '<button class="primary" onclick="addSubToCategory(\'' + company.id + '\',\'' + cat.id + '\')">Create</button>' +
        '</div>' +
      '</div>'
    )
    : '';

  const back = showBack ? ('<div class="detail-back" onclick="backToCategoryGrid()">← ' + escapeHtml(company.name) + '</div>') : '';

  return (
    back +
    '<div class="detail-header">' +
      '<div class="cat-icon" style="background:' + theme.ic + ';color:#fff;width:52px;height:52px;">' + cat.icon + '</div>' +
      '<div>' +
        '<div style="font-size:12px;color:var(--dim2);font-weight:600;margin-bottom:2px;">' + escapeHtml(company.name) + '</div>' +
        '<h2 style="margin:0 0 4px;font-size:20px;">' + escapeHtml(cat.name) + '</h2>' +
        '<p style="margin:0;color:#8a8fa3;font-size:13.5px;">' + escapeHtml(cat.desc || '') + '</p>' +
      '</div>' +
    '</div>' +
    subsHtml +
    addSub
  );
}


/* =========================================================
   MEDIA LIBRARY PAGE
   ========================================================= */

function renderMediaLibraryPage(){
  const all = getAllFileItems().sort((a,b) => (b.addedAt || 0) - (a.addedAt || 0));
  const filtered = applyFilter(all, state.libraryFilter);

  const tabsHtml = FILTER_TABS.map(t =>
    '<span class="' + (state.libraryFilter === t.key ? 'active' : '') + '" onclick="setLibraryFilter(\'' + t.key + '\')">' + t.label + '</span>'
  ).join('');

  const gridHtml = filtered.length
    ? ('<div class="grid-media">' + filtered.map(it => renderMediaCard(it, { showCategoryTag:true })).join('') + '</div>')
    : '<div class="empty">No files match this filter yet.</div>';

  let uploadBlock = '';
  if(!state.previewMode){
    if(!state.companies.length){
      uploadBlock = '<div class="card" style="margin-top:20px;"><div class="empty">Add a company first from the Companies page, then you can upload files here.</div></div>';
    }else{
      uploadBlock = (
        '<div class="card" style="margin-top:20px;">' +
          '<div class="card-head">' +
            '<div><h3>Upload New Media</h3><div class="sub">Choose where it should live, then pick your files.</div></div>' +
          '</div>' +
          '<div class="upload-selects">' +
            '<select id="lib-company" onchange="refreshLibraryCatSelect()">' +
              state.companies.map(c => '<option value="' + escapeHtml(c.id) + '">' + escapeHtml(c.name) + '</option>').join('') +
            '</select>' +
            '<select id="lib-cat" onchange="refreshLibrarySubSelect()"></select>' +
            '<select id="lib-sub"></select>' +
            '<button class="btn btn-primary" onclick="uploadLibraryClick()">' + ICONS.cloudUpload + ' Upload</button>' +
          '</div>' +
          '<input type="file" multiple style="display:none" id="lib-file-input" onchange="handleLibraryFiles(event)">' +
        '</div>'
      );
    }
  }

  return (
    '<div class="card">' +
      '<div class="card-head">' +
        '<div><h3>All Media</h3><div class="sub">' + filtered.length + ' file' + (filtered.length === 1 ? '' : 's') + '</div></div>' +
        '<div class="filters">' + tabsHtml + '</div>' +
      '</div>' +
      gridHtml +
    '</div>' +
    uploadBlock
  );
}


/* =========================================================
   SOCIAL PAGE
   ========================================================= */

function renderSocialPage(){
  const blocks = [];
  (state.companies || []).forEach(company => {
    (company.categories || []).forEach(cat => {
      if(cat.isSocial){
        blocks.push(renderCategoryDetailPage(company, cat, false));
      }
    });
  });

  if(!blocks.length){
    return '<div class="empty">No social category yet.</div>';
  }

  return blocks.join('<div style="height:8px;"></div>');
}


/* =========================================================
   STATS BAR
   ========================================================= */

function renderStatsBar(){
  const allFiles = getAllFileItems();

  let allLinks = 0;
  let totalCategories = 0;

  (state.companies || []).forEach(company => {
    totalCategories += (company.categories || []).length;
    (company.categories || []).forEach(cat => {
      (cat.subs || []).forEach(sub => {
        allLinks += (sub.items || []).filter(it => it.type === 'link').length;
      });
    });
  });

  const totalItems = allFiles.length + allLinks;
  const totalBytes = allFiles.reduce((s,it) => s + (Number(it.size) || 0), 0);

  const quota = 10 * 1024 * 1024 * 1024;
  const pct = Math.min(100, (totalBytes / quota) * 100);

  return (
    '<div class="stats-bar">' +
      '<div class="stat"><div class="l">Companies</div><div class="v">' + state.companies.length + '</div></div>' +
      '<div class="stat"><div class="l">Categories</div><div class="v">' + totalCategories + '</div></div>' +
      '<div class="stat"><div class="l">Total Items</div><div class="v">' + totalItems + '</div></div>' +
      '<div class="stat storage">' +
        '<div class="l">Storage Used</div>' +
        '<div class="v" style="font-size:14px;">' + formatBytes(totalBytes) + ' / 10 GB</div>' +
        '<div class="bar"><i style="width:' + pct + '%"></i></div>' +
      '</div>' +
      '<button class="btn-white" id="export-btn" onclick="exportPortfolioClick()">' + ICONS.download + ' Export Portfolio</button>' +
    '</div>'
  );
}


/* =========================================================
   DASHBOARD
   ========================================================= */

function renderDashboard(){
  return renderCompanyGrid() + renderStatsBar();
}


/* =========================================================
   ABOUT PAGE
   ========================================================= */

function renderAboutPage(){
  const dis = state.previewMode ? 'disabled' : '';

  return (
    '<div class="card">' +
      '<div class="card-head"><div><h3>About Me</h3><div class="sub">Tell visitors who you are and what you do.</div></div></div>' +
      '<div class="field"><label>Bio</label><textarea id="about-bio" rows="5" ' + dis + '>' + escapeHtml(state.about.bio) + '</textarea></div>' +
      '<div class="field"><label>Focus / Specialty</label><input type="text" id="about-focus" value="' + escapeHtml(state.about.focus) + '" ' + dis + '></div>' +
      (!state.previewMode ? '<button class="btn btn-primary" onclick="saveAbout()">Save Changes</button>' : '') +
    '</div>'
  );
}


/* =========================================================
   CONTACT PAGE
   ========================================================= */

function renderContactPage(){
  const c = state.contact || {};
  const dis = state.previewMode ? 'disabled' : '';

  return (
    '<div class="card">' +
      '<div class="card-head"><div><h3>Contact</h3><div class="sub">How people can reach you</div></div></div>' +
      '<div class="field"><label>Email</label><input type="text" id="contact-email" value="' + escapeHtml(c.email || '') + '" ' + dis + '></div>' +
      '<div class="field"><label>Phone</label><input type="text" id="contact-phone" value="' + escapeHtml(c.phone || '') + '" ' + dis + '></div>' +
      '<div class="field"><label>Location</label><input type="text" id="contact-location" value="' + escapeHtml(c.location || '') + '" ' + dis + '></div>' +
      '<div class="field"><label>Website</label><input type="text" id="contact-website" value="' + escapeHtml(c.website || '') + '" ' + dis + '></div>' +
      (!state.previewMode ? '<button class="btn btn-primary" onclick="saveContact()">Save Changes</button>' : '') +
    '</div>'
  );
}


/* =========================================================
   MODAL
   ========================================================= */

function renderModal(){
  if(!state.modal) return '';
  const m = state.modal;

  if(m.type === 'add-company' || m.type === 'edit-company'){
    const isEdit = m.type === 'edit-company';
    const company = isEdit ? state.companies.find(c => c.id === m.id) : null;
    if(isEdit && !company) return '';

    return (
      '<div class="modal-overlay" onclick="if(event.target===this)closeModal()">' +
        '<div class="modal">' +
          '<h3>' + (isEdit ? 'Edit Company' : 'New Company') + '</h3>' +
          '<div class="field"><label>Name</label><input type="text" id="modal-company-name" placeholder="e.g. Scripture Union Singapore" value="' + (isEdit ? escapeHtml(company.name) : '') + '"></div>' +
          '<div class="field"><label>Description (optional)</label><input type="text" id="modal-company-desc" placeholder="A short description" value="' + (isEdit ? escapeHtml(company.desc || '') : '') + '"></div>' +
          '<div class="modal-actions">' +
            '<button class="btn btn-outline" onclick="closeModal()">Cancel</button>' +
            '<button class="btn btn-primary" onclick="' + (isEdit ? ('submitEditCompany(\'' + company.id + '\')') : 'submitAddCompany()') + '">' + (isEdit ? 'Save Changes' : 'Create Company') + '</button>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  }

  if(m.type === 'add-category' || m.type === 'edit-category'){
    const isEdit = m.type === 'edit-category';
    const company = state.companies.find(c => c.id === m.companyId);
    if(!company) return '';
    const cat = isEdit ? (company.categories || []).find(c => c.id === m.id) : null;
    if(isEdit && !cat) return '';

    return (
      '<div class="modal-overlay" onclick="if(event.target===this)closeModal()">' +
        '<div class="modal">' +
          '<h3>' + (isEdit ? 'Edit Category' : ('New Category in ' + escapeHtml(company.name))) + '</h3>' +
          '<div class="field"><label>Name</label><input type="text" id="modal-cat-name" placeholder="e.g. Illustration" value="' + (isEdit ? escapeHtml(cat.name) : '') + '"></div>' +
          '<div class="field"><label>Description (optional)</label><input type="text" id="modal-cat-desc" placeholder="A short description" value="' + (isEdit ? escapeHtml(cat.desc || '') : '') + '"></div>' +
          '<div class="modal-actions">' +
            '<button class="btn btn-outline" onclick="closeModal()">Cancel</button>' +
            '<button class="btn btn-primary" onclick="' + (isEdit ? 'submitEditCategory()' : 'submitAddCategory()') + '">' + (isEdit ? 'Save Changes' : 'Create Category') + '</button>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  }

  return '';
}


/* =========================================================
   MAIN RENDER
   ========================================================= */

function render(){
  const app = document.getElementById('app');
  if(!app) return;

  app.innerHTML =
    '<div class="app-shell">' +
      renderSidebar() +
      '<div class="main">' +
        renderPageHeader() +
        renderPageBody() +
      '</div>' +
    '</div>' +
    renderModal();

  if(state.page === 'media'){
    refreshLibraryCatSelect();
  }
}


/* =========================================================
   START APPLICATION
   ========================================================= */

bootstrap();
