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
    doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4"/><line x1="9.5" y1="12" x2="14.5" y2="12"/><line x1="9.5" y1="15.5" x2="14.5" y2="15.5"/></svg>'
  };

  const THEMES = {
    purple:{bg:'#efe9fe', ic:'#8b6cf1', text:'#6d4fd6'},
    pink:{bg:'#fdeaf0', ic:'#ec5e8e', text:'#d43f72'},
    green:{bg:'#e8f7ee', ic:'#2fbf71', text:'#1f9c5a'},
    blue:{bg:'#e8f2fe', ic:'#3b82f6', text:'#2563eb'},
    orange:{bg:'#fdf1e5', ic:'#f0983c', text:'#c9791f'},
    teal:{bg:'#e6f7f6', ic:'#2bb3ab', text:'#1f8f88'}
  };

  const PLATFORM_COLORS = {
    'YouTube':'#e0524f',
    'Instagram':'linear-gradient(135deg,#d6409f,#f0a262)',
    'TikTok':'#25262b',
    'Vimeo':'#1fb6c9',
    'X (Twitter)':'#232733',
    'Facebook':'#3b5fa4',
    'Google Drive':'linear-gradient(135deg,#1a73e8,#0f9d58)'
  };
  // Platforms whose embeds are landscape video players rather than vertical social posts.
  const LANDSCAPE_PLATFORMS = ['YouTube','Vimeo','Google Drive'];

  const NAV = [
    {key:'dashboard', label:'Dashboard', icon:ICONS.grid},
    {key:'categories', label:'Categories', icon:ICONS.folder},
    {key:'media', label:'Media Library', icon:ICONS.library},
    {key:'social', label:'Social Posts', icon:ICONS.share},
    {key:'about', label:'About Me', icon:ICONS.user},
    {key:'contact', label:'Contact', icon:ICONS.mail}
  ];

  const FILTER_TABS = [
    {key:'all', label:'All'},
    {key:'video', label:'Videos'},
    {key:'photo', label:'Photos'},
    {key:'design', label:'Designs'},
    {key:'document', label:'Documents'}
  ];

  /* ---------- State ---------- */
  let state = {
    page: 'dashboard',
    previewMode: false,
    detailCategoryId: null,
    libraryFilter: 'all',
    recentFilter: 'all',
    expandedSocialId: null,
    modal: null,
    profile: { avatar: null },
    about: { bio:'', focus:'' },
    contact: { email:'', phone:'', location:'', website:'' },
    categories: [
      {id:'videography', name:'Videography', desc:'Video projects and motion content', themeKey:'purple', icon:ICONS.video, isSocial:false, subs:[]},
      {id:'photography', name:'Photography', desc:'Photo shoots and visual stories', themeKey:'pink', icon:ICONS.camera, isSocial:false, subs:[]},
      {id:'design', name:'Graphic Design', desc:'Design projects and creative assets', themeKey:'green', icon:ICONS.design, isSocial:false, subs:[]},
      {id:'social', name:'Social Media', desc:'Social media content and campaigns', themeKey:'blue', icon:ICONS.share, isSocial:true, subs:[]}
    ]
  };
  let pendingUploadTarget = null;
  let uidCounter = 0;
  function uid(prefix){ uidCounter++; return prefix+'_'+uidCounter+'_'+Math.random().toString(36).slice(2,7); }

  /* ---------- Persistence (Netlify Function + Blobs) ---------- */
  const TOKEN_KEY = 'portfolio_admin_token';
  let authToken = null;
  let saveTimer = null;

  function setSaveIndicator(status){
    const el = document.getElementById('save-indicator');
    if(!el) return;
    if(status==='saving'){ el.textContent = 'Saving…'; el.className = 'save-indicator saving'; }
    else if(status==='saved'){ el.textContent = 'Saved'; el.className = 'save-indicator saved'; }
    else { el.textContent = 'Save failed'; el.className = 'save-indicator error'; }
  }

  function persistState(){
    if(window.APP_MODE!=='admin' || !authToken) return;
    const payload = { profile: state.profile, about: state.about, contact: state.contact, categories: state.categories };
    fetch('/api/data', {
      method:'POST',
      headers: { 'Content-Type':'application/json', 'Authorization':'Bearer '+authToken },
      body: JSON.stringify(payload)
    }).then(async (resp)=>{
      if(resp.status===401){
        authToken = null;
        localStorage.removeItem(TOKEN_KEY);
        renderLoginScreen('Your session expired. Please log in again to keep editing.');
        return;
      }
      setSaveIndicator(resp.ok ? 'saved' : 'error');
    }).catch(()=> setSaveIndicator('error'));
  }
  function persistStateDebounced(){
    setSaveIndicator('saving');
    clearTimeout(saveTimer);
    saveTimer = setTimeout(persistState, 600);
  }

  async function loadRemoteState(){
    try{
      const resp = await fetch('/api/data');
      if(resp.ok){
        const remote = await resp.json();
        if(remote){
          state.profile = remote.profile || state.profile;
          state.about = remote.about || state.about;
          state.contact = remote.contact || state.contact;
          if(Array.isArray(remote.categories) && remote.categories.length) state.categories = remote.categories;
        }
      }
    }catch(e){ console.error('Failed to load portfolio data', e); }
  }

  function renderLoginScreen(errorMsg){
    const app = document.getElementById('app');
    app.innerHTML =
      '<div class="login-screen"><form id="login-form" class="login-card">'+
      '<div class="login-logo">P</div>'+
      '<h2>Admin Login</h2>'+
      '<p class="s">Enter the admin password to edit this portfolio.</p>'+
      (errorMsg ? '<div class="login-error">'+escapeHtml(errorMsg)+'</div>' : '')+
      '<input type="password" id="login-password" placeholder="Password" autocomplete="current-password" autofocus required>'+
      '<button type="submit" class="btn btn-primary" style="width:100%;justify-content:center;">Log In</button>'+
      '</form></div>';
    document.getElementById('login-form').addEventListener('submit', async function(e){
      e.preventDefault();
      const btn = e.target.querySelector('button');
      const pw = document.getElementById('login-password').value;
      btn.disabled = true; btn.textContent = 'Logging in…';
      try{
        const resp = await fetch('/api/login', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({password:pw}) });
        const data = await resp.json().catch(()=>({}));
        if(!resp.ok){ renderLoginScreen(data.error || 'Incorrect password.'); return; }
        authToken = data.token;
        localStorage.setItem(TOKEN_KEY, authToken);
        state.previewMode = false;
        render();
      }catch(err){ renderLoginScreen('Network error — please try again.'); }
    });
  }

  function logout(){
    authToken = null;
    localStorage.removeItem(TOKEN_KEY);
    renderLoginScreen();
  }

  function copyShareLink(){
    const url = location.origin + '/';
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(url).then(()=> alert('Public view-only link copied:\n'+url)).catch(()=> prompt('Copy this link:', url));
    } else { prompt('Copy this link:', url); }
  }

  async function bootstrap(){
    await loadRemoteState();
    if(window.APP_MODE==='admin'){
      const stored = localStorage.getItem(TOKEN_KEY);
      if(stored){ authToken = stored; state.previewMode = false; render(); }
      else{ renderLoginScreen(); }
    } else {
      state.previewMode = true;
      render();
    }
  }

  /* ---------- Media upload/delete via API ---------- */
  function fileToBase64(file){
    return new Promise((resolve,reject)=>{
      const reader = new FileReader();
      reader.onload = ()=> resolve(String(reader.result).split(',')[1] || '');
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }
  async function uploadFile(file){
    const dataBase64 = await fileToBase64(file);
    const resp = await fetch('/api/upload', {
      method:'POST',
      headers: { 'Content-Type':'application/json', 'Authorization':'Bearer '+authToken },
      body: JSON.stringify({ filename:file.name, mime:file.type||'application/octet-stream', dataBase64 })
    });
    const data = await resp.json().catch(()=>({}));
    if(!resp.ok) throw new Error(data.error || 'Upload failed');
    return data;
  }
  function deleteMedia(id){
    if(!id || !authToken) return Promise.resolve();
    return fetch('/api/media?id='+encodeURIComponent(id), { method:'DELETE', headers:{'Authorization':'Bearer '+authToken} }).catch(()=>{});
  }

  function escapeHtml(str){
    return String(str).replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));
  }
  function formatBytes(bytes){
    if(!bytes) return '0 B';
    const units=['B','KB','MB','GB']; let i=0; let n=bytes;
    while(n>=1024 && i<units.length-1){ n/=1024; i++; }
    return (i===0? n : n.toFixed(1)) + ' ' + units[i];
  }
  function classify(item){
    if(item.mime && item.mime.startsWith('video/')) return 'video';
    if(item.mime && item.mime.startsWith('image/')) return 'photo';
    const ext = (item.ext||'').toUpperCase();
    if(['PDF','DOC','DOCX','TXT','PPT','PPTX','XLS','XLSX','RTF'].includes(ext)) return 'document';
    return 'design';
  }
  function typeBadgeIcon(type){ return {video:ICONS.video, photo:ICONS.camera, design:ICONS.design, document:ICONS.doc}[type] || ICONS.doc; }
  function applyFilter(items, key){ if(key==='all') return items; return items.filter(it=>classify(it)===key); }

  function detectPlatform(rawUrl){
    let u;
    try{ u = new URL(rawUrl); } catch(e){ return null; }
    const host = u.hostname.replace('www.','');
    if(host.includes('youtube.com') || host==='youtu.be'){
      let id=null;
      if(host==='youtu.be'){ id = u.pathname.slice(1); }
      else if(u.pathname.startsWith('/shorts/')){ id = u.pathname.split('/')[2]; }
      else { id = u.searchParams.get('v'); }
      return { platform:'YouTube', embedUrl: id ? ('https://www.youtube.com/embed/'+id) : null, domain: host };
    }
    if(host.includes('instagram.com')){
      const m = u.pathname.match(/\/(p|reel|reels|tv)\/([^\/]+)/);
      return { platform:'Instagram', embedUrl: m ? ('https://www.instagram.com/'+m[1]+'/'+m[2]+'/embed') : null, domain: host };
    }
    if(host.includes('tiktok.com')){
      const m = u.pathname.match(/\/video\/(\d+)/);
      return { platform:'TikTok', embedUrl: m ? ('https://www.tiktok.com/embed/v2/'+m[1]) : null, domain: host };
    }
    if(host.includes('vimeo.com')){
      const m = u.pathname.match(/\/(\d+)/);
      return { platform:'Vimeo', embedUrl: m ? ('https://player.vimeo.com/video/'+m[1]) : null, domain: host };
    }
    if(host==='drive.google.com' || host==='docs.google.com'){
      let id = null;
      const m = u.pathname.match(/\/file\/d\/([^\/]+)/);
      if(m) id = m[1];
      else if(u.searchParams.get('id')) id = u.searchParams.get('id');
      return { platform:'Google Drive', embedUrl: id ? ('https://drive.google.com/file/d/'+id+'/preview') : null, domain: host };
    }
    if(host.includes('twitter.com') || host==='x.com'){ return { platform:'X (Twitter)', embedUrl:null, domain: host }; }
    if(host.includes('facebook.com') || host==='fb.watch'){ return { platform:'Facebook', embedUrl:null, domain: host }; }
    return { platform: host, embedUrl:null, domain: host };
  }

  function getAllFileItems(){
    let arr = [];
    state.categories.forEach(cat=>{
      if(cat.isSocial) return;
      cat.subs.forEach(sub=>{
        sub.items.forEach(it=> { if(it.type==='link') return; arr.push(Object.assign({}, it, {catId:cat.id, catName:cat.name, subId:sub.id, subName:sub.name})); });
      });
    });
    return arr;
  }
  async function addFilesToSub(sub, fileList){
    const files = Array.from(fileList||[]);
    for(const file of files){
      try{
        const result = await uploadFile(file);
        const parts = file.name.split('.');
        const ext = parts.length>1 ? parts.pop().toUpperCase() : '';
        sub.items.push({ id: uid('item'), type:'file', name:file.name, mime:file.type||'application/octet-stream', ext, url:result.url, mediaId:result.id, size:file.size, addedAt:Date.now() });
        render();
      }catch(e){
        alert('Upload failed for "'+file.name+'": '+e.message);
      }
    }
  }

  /* ---------- Navigation ---------- */
  function goToPage(key){ state.page = key; state.detailCategoryId = null; render(); }
  function goToCategoryDetail(id){ state.page='categories'; state.detailCategoryId=id; render(); }
  function backToCategoryGrid(){ state.detailCategoryId = null; render(); }
  function togglePreview(){ if(window.APP_MODE!=='admin') return; state.previewMode = !state.previewMode; render(); }
  function setLibraryFilter(key){ state.libraryFilter = key; render(); }
  function setRecentFilter(key){ state.recentFilter = key; render(); }
  function toggleExpandSocial(id){ state.expandedSocialId = state.expandedSocialId===id ? null : id; render(); }

  /* ---------- Category CRUD ---------- */
  function openAddCategoryModal(){ state.modal = {type:'add'}; render(); }
  function openEditCategoryModal(id){ state.modal = {type:'edit', id}; render(); }
  function closeModal(){ state.modal = null; render(); }

  function submitAddCategory(){
    const nameEl = document.getElementById('modal-cat-name');
    const name = nameEl.value.trim();
    if(!name) return;
    const desc = document.getElementById('modal-cat-desc').value.trim();
    const themeKeys = Object.keys(THEMES);
    const themeKey = themeKeys[state.categories.length % themeKeys.length];
    state.categories.push({ id: uid('cat'), name, desc, themeKey, icon: ICONS.folder, isSocial:false, subs: [] });
    state.modal = null;
    render();
  }
  function submitEditCategory(id){
    const cat = state.categories.find(c=>c.id===id); if(!cat) return;
    const name = document.getElementById('modal-cat-name').value.trim();
    if(name) cat.name = name;
    cat.desc = document.getElementById('modal-cat-desc').value.trim();
    state.modal = null;
    render();
  }
  function deleteCategoryConfirm(id){
    const cat = state.categories.find(c=>c.id===id); if(!cat) return;
    if(!confirm('Delete "'+cat.name+'" and everything inside it? This can\'t be undone.')) return;
    cat.subs.forEach(sub=>sub.items.forEach(it=>{ if(it.type==='file' && it.mediaId) deleteMedia(it.mediaId); }));
    state.categories = state.categories.filter(c=>c.id!==id);
    if(state.detailCategoryId===id) state.detailCategoryId = null;
    render();
  }
  function addSubToCategory(catId){
    const input = document.getElementById('newsub_'+catId);
    const name = input.value.trim(); if(!name) return;
    const cat = state.categories.find(c=>c.id===catId); if(!cat) return;
    cat.subs.push({ id: uid('sub'), name, items: [] });
    render();
  }
  function removeSub(catId, subId){
    const cat = state.categories.find(c=>c.id===catId); if(!cat) return;
    const sub = cat.subs.find(s=>s.id===subId);
    if(sub) sub.items.forEach(it=>{ if(it.type==='file' && it.mediaId) deleteMedia(it.mediaId); });
    cat.subs = cat.subs.filter(s=>s.id!==subId);
    render();
  }

  /* ---------- File items ---------- */
  function handleFiles(evt, catId, subId){
    const cat = state.categories.find(c=>c.id===catId); if(!cat) return;
    const sub = cat.subs.find(s=>s.id===subId); if(!sub) return;
    addFilesToSub(sub, evt.target.files);
    render();
  }
  function removeFileItem(catId, subId, itemId){
    const cat = state.categories.find(c=>c.id===catId); if(!cat) return;
    const sub = cat.subs.find(s=>s.id===subId); if(!sub) return;
    const item = sub.items.find(i=>i.id===itemId);
    if(item && item.mediaId) deleteMedia(item.mediaId);
    sub.items = sub.items.filter(i=>i.id!==itemId);
    render();
  }
  function downloadFileItem(catId, subId, itemId){
    const cat = state.categories.find(c=>c.id===catId); if(!cat) return;
    const sub = cat.subs.find(s=>s.id===subId); if(!sub) return;
    const item = sub.items.find(i=>i.id===itemId); if(!item) return;
    const a=document.createElement('a'); a.href=item.url; a.download=item.name; document.body.appendChild(a); a.click(); a.remove();
  }
  function handleDashFiles(evt){
    const files = Array.from(evt.target.files||[]);
    files.forEach(file=>{
      let catId;
      if(file.type.startsWith('video/')) catId='videography';
      else if(file.type.startsWith('image/')) catId='photography';
      else catId='design';
      let cat = state.categories.find(c=>c.id===catId) || state.categories.find(c=>!c.isSocial);
      if(!cat) return;
      let sub = cat.subs.find(s=>s.name==='Quick Uploads');
      if(!sub){ sub = {id:uid('sub'), name:'Quick Uploads', items:[]}; cat.subs.push(sub); }
      addFilesToSub(sub, [file]);
    });
    render();
  }
  function uploadLibraryClick(){
    const catSel = document.getElementById('lib-cat');
    const subSel = document.getElementById('lib-sub');
    if(!catSel || !subSel) return;
    const catId = catSel.value;
    let subId = subSel.value;
    const cat = state.categories.find(c=>c.id===catId); if(!cat) return;
    if(subId === '__new__' || !subId){
      const name = prompt('New subcategory name:');
      if(!name || !name.trim()) return;
      const sub = { id: uid('sub'), name: name.trim(), items: [] };
      cat.subs.push(sub);
      subId = sub.id;
    }
    pendingUploadTarget = { catId, subId };
    document.getElementById('lib-file-input').click();
  }
  function handleLibraryFiles(evt){
    if(!pendingUploadTarget) return;
    const { catId, subId } = pendingUploadTarget;
    const cat = state.categories.find(c=>c.id===catId);
    const sub = cat && cat.subs.find(s=>s.id===subId);
    if(sub) addFilesToSub(sub, evt.target.files);
    pendingUploadTarget = null;
    render();
  }
  function refreshLibrarySubSelect(){
    const catSel = document.getElementById('lib-cat'); if(!catSel) return;
    const cat = state.categories.find(c=>c.id===catSel.value);
    const subSel = document.getElementById('lib-sub'); if(!subSel) return;
    let opts = (cat? cat.subs:[]).map(s=>'<option value="'+s.id+'">'+escapeHtml(s.name)+'</option>').join('');
    opts += '<option value="__new__">+ New subcategory…</option>';
    subSel.innerHTML = opts;
  }

  /* ---------- Social items ---------- */
  function addSocialLink(catId, subId){
    const input = document.getElementById('link_'+subId);
    const raw = input.value.trim(); if(!raw) return;
    const info = detectPlatform(raw);
    const cat = state.categories.find(c=>c.id===catId);
    const sub = cat && cat.subs.find(s=>s.id===subId);
    if(!info || !sub) return;
    sub.items.push({ id: uid('item'), type:'link', url: raw, platform: info.platform, embedUrl: info.embedUrl, domain: info.domain, addedAt: Date.now() });
    render();
  }
  function dashConnectSocial(){
    const input = document.getElementById('dash-social-link');
    const raw = input.value.trim(); if(!raw) return;
    const info = detectPlatform(raw);
    if(!info){ alert("That link doesn't look valid."); return; }
    const cat = state.categories.find(c=>c.isSocial); if(!cat) return;
    let sub = cat.subs.find(s=>s.name==='Quick Links');
    if(!sub){ sub = {id:uid('sub'), name:'Quick Links', items:[]}; cat.subs.push(sub); }
    sub.items.push({ id: uid('item'), type:'link', url: raw, platform: info.platform, embedUrl: info.embedUrl, domain: info.domain, addedAt: Date.now() });
    render();
  }
  function removeSocialItem(catId, subId, itemId){
    const cat = state.categories.find(c=>c.id===catId); if(!cat) return;
    const sub = cat.subs.find(s=>s.id===subId); if(!sub) return;
    sub.items = sub.items.filter(i=>i.id!==itemId);
    if(state.expandedSocialId===itemId) state.expandedSocialId = null;
    render();
  }

  /* ---------- Export ---------- */
  function sanitizeName(name){ return String(name).replace(/[\/\\?%*:|"<>]/g,'-'); }
  async function exportPortfolio(){
    if(typeof JSZip === 'undefined'){ alert('Export needs an internet connection to load the zip library.'); return; }
    const zip = new JSZip();
    const manifest = { categories: [], socialPosts: [] };
    for(const cat of state.categories){
      if(cat.isSocial){
        for(const sub of cat.subs){
          for(const item of sub.items){ manifest.socialPosts.push({ subcategory: sub.name, url: item.url, platform: item.platform }); }
        }
        continue;
      }
      const catFolder = zip.folder(sanitizeName(cat.name));
      manifest.categories.push({ name: cat.name, subcategories: cat.subs.map(s=>({name:s.name, itemCount:s.items.length})) });
      for(const sub of cat.subs){
        const subFolder = catFolder.folder(sanitizeName(sub.name));
        for(const item of sub.items){
          if(item.type==='link'){ manifest.socialPosts.push({ subcategory: cat.name+' / '+sub.name, url: item.url, platform: item.platform }); continue; }
          try{ const resp = await fetch(item.url); const blob = await resp.blob(); subFolder.file(item.name, blob); } catch(e){}
        }
      }
    }
    zip.file('manifest.json', JSON.stringify(manifest, null, 2));
    const content = await zip.generateAsync({type:'blob'});
    const url = URL.createObjectURL(content);
    const a = document.createElement('a'); a.href = url; a.download = 'portfolio-export.zip'; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(()=>URL.revokeObjectURL(url), 4000);
  }
  function exportPortfolioClick(){
    const btn = document.getElementById('export-btn');
    if(btn){ btn.disabled = true; btn.innerHTML = 'Exporting…'; }
    exportPortfolio().catch(()=>{ alert('Export failed. Please try again.'); }).finally(()=>{
      if(btn){ btn.disabled = false; btn.innerHTML = ICONS.download + ' Export Portfolio'; }
    });
  }

  /* ---------- About / Contact ---------- */
  function saveAbout(){
    state.about.bio = document.getElementById('about-bio').value;
    state.about.focus = document.getElementById('about-focus').value;
    render();
  }
  function saveContact(){
    state.contact = {
      email: document.getElementById('contact-email').value,
      phone: document.getElementById('contact-phone').value,
      location: document.getElementById('contact-location').value,
      website: document.getElementById('contact-website').value
    };
    render();
  }

  /* ---------- Renderers ---------- */
  function handleAvatarChange(evt){
    const file = evt.target.files && evt.target.files[0];
    if(!file) return;
    const reader = new FileReader();
    reader.onload = function(e){
      state.profile.avatar = e.target.result;
      render();
    };
    reader.readAsDataURL(file);
  }

  function renderSidebar(){
    const items = NAV.map(n=>'<div class="nav-item '+(state.page===n.key?'active':'')+'" onclick="goToPage(\''+n.key+'\')">'+n.icon+'<span>'+n.label+'</span></div>').join('');
    const avatarImg = state.profile.avatar ? '<img src="'+state.profile.avatar+'" alt="Profile picture">' : '';
    const logoInner = state.profile.avatar ? avatarImg : 'P';
    const avatarInner = state.profile.avatar ? avatarImg : 'B';
    const uploadHint = !state.previewMode ? '<input type="file" accept="image/*" style="display:none" id="avatar-input" onchange="handleAvatarChange(event)">' : '';
    const logoClick = !state.previewMode ? ' onclick="document.getElementById(\'avatar-input\').click()" title="Click to change profile picture"' : '';
    return '<div class="sidebar"><div class="brand"><div class="logo"'+logoClick+'>'+logoInner+'</div><div class="name">Portfolio</div></div><div class="nav">'+items+'</div><div class="profile"><div class="avatar"'+logoClick+'>'+avatarInner+'</div><div class="who"><div class="n">Basil</div><div class="r">Creative Portfolio</div></div></div>'+uploadHint+'</div>';
  }

  function renderPageHeader(){
    const titles = {
      dashboard: ['My Portfolio','Manage and showcase your creative work'],
      categories: ['Categories','Organise your work into categories and subcategories'],
      media: ['Media Library',"Every file across your categories, in one place"],
      social: ['Social Posts',"All the posts you've connected, grouped by subcategory"],
      about: ['About Me','What visitors see when they land on your portfolio'],
      contact: ['Contact','How people can reach you']
    };
    const t = titles[state.page] || ['',''];
    const isAdmin = window.APP_MODE==='admin';
    const previewBtn = isAdmin ? ('<button class="btn btn-outline" onclick="togglePreview()">'+ICONS.eye+' '+(state.previewMode?'Exit Preview':'Preview Portfolio')+'</button>') : '';
    const addCatBtn = (!state.previewMode && (state.page==='dashboard'||state.page==='categories')) ? '<button class="btn btn-primary" onclick="openAddCategoryModal()">'+ICONS.plus+' Add New Category</button>' : '';
    const adminTools = isAdmin ? (
      '<span id="save-indicator" class="save-indicator"></span>'+
      '<button class="btn btn-outline" onclick="copyShareLink()">'+ICONS.share+' Copy Public Link</button>'+
      '<button class="btn btn-outline" onclick="logout()">Log Out</button>'
    ) : '';
    return '<div class="page-head"><div><h1>'+t[0]+'</h1><p>'+t[1]+'</p></div><div class="head-actions">'+adminTools+previewBtn+addCatBtn+'</div></div>';
  }

  function renderPageBody(){
    switch(state.page){
      case 'dashboard': return renderDashboard();
      case 'categories': return renderCategoriesPage();
      case 'media': return renderMediaLibraryPage();
      case 'social': return renderSocialPage();
      case 'about': return renderAboutPage();
      case 'contact': return renderContactPage();
      default: return '';
    }
  }

  function renderCategoryCard(cat){
    const theme = THEMES[cat.themeKey] || THEMES.purple;
    const subCount = cat.subs.length;
    const itemCount = cat.subs.reduce((s,sub)=>s+sub.items.length,0);
    const itemLabel = cat.isSocial ? 'Posts' : 'Items';
    const tools = !state.previewMode ? (
      '<div class="cat-tools">'+
      '<button title="Edit" onclick="event.stopPropagation();openEditCategoryModal(\''+cat.id+'\')">'+ICONS.pencil+'</button>'+
      '<button title="Delete" onclick="event.stopPropagation();deleteCategoryConfirm(\''+cat.id+'\')">'+ICONS.kebab+'</button>'+
      '</div>'
    ) : '';
    return '<div class="cat-card" style="background:'+theme.bg+'" onclick="goToCategoryDetail(\''+cat.id+'\')">'+
      '<div class="top"><div class="cat-icon" style="background:'+theme.ic+';color:#fff;">'+cat.icon+'</div>'+tools+'</div>'+
      '<h3>'+escapeHtml(cat.name)+'</h3>'+
      '<p>'+escapeHtml(cat.desc||'')+'</p>'+
      '<div class="cat-badges">'+
      '<span class="badge" style="color:'+theme.text+'">'+subCount+' Subcategor'+(subCount===1?'y':'ies')+'</span>'+
      '<span class="badge" style="color:'+theme.text+'">'+itemCount+' '+itemLabel+'</span>'+
      '</div></div>';
  }

  function renderCategoryGrid(){
    const cards = state.categories.map(renderCategoryCard).join('');
    const addCard = !state.previewMode ? (
      '<div style="margin-top:14px;"><div class="add-cat-card" onclick="openAddCategoryModal()">'+ICONS.plus+
      '<div class="t">Add New Category</div><div class="s">Create a new category for your work</div></div></div>'
    ) : '';
    return '<div class="cat-grid">'+cards+'</div>'+addCard;
  }

  function renderCategoriesPage(){
    if(state.detailCategoryId){
      const cat = state.categories.find(c=>c.id===state.detailCategoryId);
      if(cat) return renderCategoryDetailPage(cat, true);
      state.detailCategoryId = null;
    }
    return renderCategoryGrid();
  }

  function renderMediaCard(item, opts){
    opts = opts || {};
    let inner;
    if(item.mime.startsWith('image/')) inner = '<img src="'+item.url+'" alt="'+escapeHtml(item.name)+'">';
    else if(item.mime.startsWith('video/')) inner = '<video src="'+item.url+'" muted preload="metadata"></video>';
    else inner = '<div class="filecard"><div class="ext">'+escapeHtml(item.ext||'FILE')+'</div></div>';
    const type = classify(item);
    const removeBtn = (!state.previewMode) ? '<button title="Remove" onclick="event.stopPropagation();removeFileItem(\''+item.catId+'\',\''+item.subId+'\',\''+item.id+'\')">'+ICONS.close+'</button>' : '';
    const dlBtn = '<button title="Download" onclick="event.stopPropagation();downloadFileItem(\''+item.catId+'\',\''+item.subId+'\',\''+item.id+'\')">'+ICONS.download+'</button>';
    const catTag = opts.showCategoryTag ? (' · '+escapeHtml(item.catName)) : '';
    return '<div class="media-item-wrap"><div class="media-card">'+
      '<div class="type-badge">'+typeBadgeIcon(type)+'</div>'+
      '<div class="m-actions">'+dlBtn+removeBtn+'</div>'+
      inner+'</div>'+
      '<div class="media-caption"><div class="n">'+escapeHtml(item.name)+'</div>'+
      '<div class="m">'+escapeHtml(item.ext||'FILE')+' • '+formatBytes(item.size)+catTag+'</div></div></div>';
  }

  function renderFileSubcategory(cat, sub){
    const fileItems = sub.items.filter(it=>it.type!=='link');
    const linkItems = sub.items.filter(it=>it.type==='link');
    const fileGrid = fileItems.length
      ? '<div class="grid-media">'+fileItems.map(it=>renderMediaCard(Object.assign({},it,{catId:cat.id, subId:sub.id, catName:cat.name}))).join('')+'</div>'
      : '';
    const embedGrid = linkItems.length
      ? '<div class="grid-embed" style="margin-top:'+(fileItems.length?'16px':'0')+';">'+linkItems.map(it=>renderEmbedCard(cat,sub,it)).join('')+'</div>'
      : '';
    const emptyHtml = (!fileItems.length && !linkItems.length) ? '<div class="empty">No items yet.</div>' : '';
    const editing = !state.previewMode;
    return '<div class="sub-section"><div class="sub-head">'+
      '<div><span class="name">'+escapeHtml(sub.name)+'</span><span class="meta">'+sub.items.length+' '+(sub.items.length===1?'item':'items')+'</span></div>'+
      (editing? ('<div class="sub-actions"><button class="icon-btn" title="Add files" onclick="document.getElementById(\'file_'+sub.id+'\').click()">'+ICONS.plus+'</button>'+
      '<button class="icon-btn danger" title="Delete subcategory" onclick="removeSub(\''+cat.id+'\',\''+sub.id+'\')">'+ICONS.trash+'</button></div>') : '')+
      '</div>'+emptyHtml+fileGrid+embedGrid+
      (editing? (
        '<input type="file" multiple style="display:none" id="file_'+sub.id+'" onchange="handleFiles(event,\''+cat.id+'\',\''+sub.id+'\')">'+
        '<div class="add-row" style="max-width:420px;margin-top:14px;"><input type="text" placeholder="Paste a YouTube, Vimeo, or Google Drive video link…" id="link_'+sub.id+'" onkeydown="if(event.key===\'Enter\'){addSocialLink(\''+cat.id+'\',\''+sub.id+'\')}"><button class="primary" onclick="addSocialLink(\''+cat.id+'\',\''+sub.id+'\')">Add</button></div>'
      ) : '')+
      '</div>';
  }

  function renderEmbedCard(cat, sub, item){
    const removeBtn = !state.previewMode ? '<button title="Remove" onclick="removeSocialItem(\''+cat.id+'\',\''+sub.id+'\',\''+item.id+'\')">'+ICONS.close+'</button>' : '';
    const wide = LANDSCAPE_PLATFORMS.includes(item.platform) ? ' wide' : '';
    if(item.embedUrl){
      return '<div class="embed-card'+wide+'"><div class="embed-actions">'+removeBtn+'</div><iframe src="'+item.embedUrl+'" loading="lazy" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe></div>';
    }
    const bg = PLATFORM_COLORS[item.platform] || '#7c5cfc';
    return '<div class="embed-card'+wide+' fallback" style="background:'+bg+'"><div class="embed-actions">'+removeBtn+'</div>'+
      '<div class="mono">'+escapeHtml(item.platform.charAt(0))+'</div>'+
      '<div class="platname">'+escapeHtml(item.platform)+'</div>'+
      '<a class="open" href="'+escapeHtml(item.url)+'" target="_blank" rel="noopener noreferrer">Open post ↗</a></div>';
  }

  function renderSocialSubcategory(cat, sub){
    const itemsHtml = sub.items.length
      ? '<div class="grid-embed">'+sub.items.map(it=>renderEmbedCard(cat,sub,it)).join('')+'</div>'
      : '<div class="empty">No posts yet.</div>';
    const editing = !state.previewMode;
    return '<div class="sub-section"><div class="sub-head">'+
      '<div><span class="name">'+escapeHtml(sub.name)+'</span><span class="meta">'+sub.items.length+' '+(sub.items.length===1?'post':'posts')+'</span></div>'+
      (editing? ('<div class="sub-actions"><button class="icon-btn danger" title="Delete subcategory" onclick="removeSub(\''+cat.id+'\',\''+sub.id+'\')">'+ICONS.trash+'</button></div>') : '')+
      '</div>'+itemsHtml+
      (editing? ('<div class="add-row" style="max-width:380px;margin-top:12px;"><input type="text" placeholder="Paste a post link…" id="link_'+sub.id+'" onkeydown="if(event.key===\'Enter\'){addSocialLink(\''+cat.id+'\',\''+sub.id+'\')}"><button class="primary" onclick="addSocialLink(\''+cat.id+'\',\''+sub.id+'\')">Add</button></div>') : '')+
      '</div>';
  }

  function renderCategoryDetailPage(cat, showBack){
    const theme = THEMES[cat.themeKey] || THEMES.purple;
    const subsHtml = cat.subs.length
      ? cat.subs.map(sub=> cat.isSocial ? renderSocialSubcategory(cat,sub) : renderFileSubcategory(cat,sub)).join('')
      : '<div class="empty">No subcategories yet. Create one below.</div>';
    const addSub = !state.previewMode ? (
      '<div class="new-sub"><div class="label">New subcategory in '+escapeHtml(cat.name)+'</div>'+
      '<div class="add-row"><input type="text" placeholder="e.g. '+(cat.isSocial?'Instagram Reels':'Client Shoots')+'" id="newsub_'+cat.id+'" onkeydown="if(event.key===\'Enter\'){addSubToCategory(\''+cat.id+'\')}">'+
      '<button class="primary" onclick="addSubToCategory(\''+cat.id+'\')">Create</button></div></div>'
    ) : '';
    const back = showBack ? '<div class="detail-back" onclick="backToCategoryGrid()">← All Categories</div>' : '';
    return back+
      '<div class="detail-header"><div class="cat-icon" style="background:'+theme.ic+';color:#fff;width:52px;height:52px;">'+cat.icon+'</div>'+
      '<div><h2 style="margin:0 0 4px;font-size:20px;">'+escapeHtml(cat.name)+'</h2><p style="margin:0;color:#8a8fa3;font-size:13.5px;">'+escapeHtml(cat.desc||'')+'</p></div></div>'+
      subsHtml+addSub;
  }

  function renderMediaLibraryPage(){
    const all = getAllFileItems().sort((a,b)=>b.addedAt-a.addedAt);
    const filtered = applyFilter(all, state.libraryFilter);
    const tabsHtml = FILTER_TABS.map(t=>'<span class="'+(state.libraryFilter===t.key?'active':'')+'" onclick="setLibraryFilter(\''+t.key+'\')">'+t.label+'</span>').join('');
    const gridHtml = filtered.length
      ? '<div class="grid-media">'+filtered.map(it=>renderMediaCard(it,{showCategoryTag:true})).join('')+'</div>'
      : '<div class="empty">No files match this filter yet.</div>';
    const nonSocialCats = state.categories.filter(c=>!c.isSocial);
    const uploadBlock = !state.previewMode ? (
      '<div class="card" style="margin-top:20px;"><div class="card-head"><div><h3>Upload New Media</h3><div class="sub">Choose where it should live, then pick your files.</div></div></div>'+
      '<div class="upload-selects"><select id="lib-cat" onchange="refreshLibrarySubSelect()">'+nonSocialCats.map(c=>'<option value="'+c.id+'">'+escapeHtml(c.name)+'</option>').join('')+'</select>'+
      '<select id="lib-sub"></select>'+
      '<button class="btn btn-primary" onclick="uploadLibraryClick()">'+ICONS.cloudUpload+' Upload</button></div>'+
      '<input type="file" multiple style="display:none" id="lib-file-input" onchange="handleLibraryFiles(event)"></div>'
    ) : '';
    return '<div class="card"><div class="card-head"><div><h3>All Media</h3><div class="sub">'+filtered.length+' file'+(filtered.length===1?'':'s')+'</div></div>'+
      '<div class="filters">'+tabsHtml+'</div></div>'+gridHtml+'</div>'+uploadBlock;
  }

  function renderSocialPage(){
    const socialCats = state.categories.filter(c=>c.isSocial);
    if(!socialCats.length) return '<div class="empty">No social category yet.</div>';
    return socialCats.map(cat=>renderCategoryDetailPage(cat, false)).join('');
  }

  function renderSocialTile(catId, item){
    const bg = PLATFORM_COLORS[item.platform] || '#7c5cfc';
    const rm = !state.previewMode ? '<div class="rm" onclick="event.stopPropagation();removeSocialItem(\''+catId+'\',\''+item.subId+'\',\''+item.id+'\')">'+ICONS.close+'</div>' : '';
    return '<div class="social-tile" style="background:'+bg+'" onclick="toggleExpandSocial(\''+item.id+'\')">'+
      '<div class="mono">'+escapeHtml(item.platform.charAt(0))+'</div>'+
      '<div class="label">'+escapeHtml(item.platform)+'</div>'+rm+'</div>';
  }

  function renderExpandedSocial(socialCat){
    if(!state.expandedSocialId || !socialCat) return '';
    for(const sub of socialCat.subs){
      const item = sub.items.find(i=>i.id===state.expandedSocialId);
      if(item) return '<div style="margin-top:14px;max-width:260px;">'+renderEmbedCard(socialCat,sub,item)+'</div>';
    }
    return '';
  }

  function renderRecentWorkCard(){
    const all = getAllFileItems().sort((a,b)=>b.addedAt-a.addedAt).slice(0,8);
    const filtered = applyFilter(all, state.recentFilter);
    const tabsHtml = FILTER_TABS.map(t=>'<span class="'+(state.recentFilter===t.key?'active':'')+'" onclick="setRecentFilter(\''+t.key+'\')">'+t.label+'</span>').join('');
    const gridHtml = filtered.length
      ? '<div class="grid-media">'+filtered.map(it=>renderMediaCard(it,{showCategoryTag:false})).join('')+'</div>'
      : '<div class="empty">No uploads yet — add your first piece below.</div>';
    const dropzone = !state.previewMode ? (
      '<div class="dropzone" onclick="document.getElementById(\'dash-file-input\').click()"><div class="t">'+ICONS.cloudUpload+' Upload New Media</div>'+
      '<div class="s">We\'ll auto-sort by type into "Quick Uploads" — refine later in Categories</div></div>'+
      '<input type="file" multiple style="display:none" id="dash-file-input" onchange="handleDashFiles(event)">'
    ) : '';
    return '<div class="card"><div class="card-head"><div><h3>Recent Work</h3><div class="sub">Your latest uploaded projects</div></div>'+
      '<div class="filters">'+tabsHtml+'</div>'+
      '<a class="link-more" href="#" onclick="event.preventDefault();goToPage(\'media\')">View All Media →</a></div>'+
      gridHtml+dropzone+'</div>';
  }

  function renderSocialWidgetCard(){
    const socialCat = state.categories.find(c=>c.isSocial);
    let allSocial = [];
    if(socialCat){ socialCat.subs.forEach(s=> s.items.forEach(it=> allSocial.push(Object.assign({},it,{subId:s.id})))); }
    const recent = allSocial.slice(-9).reverse();
    const connectRow = !state.previewMode ? (
      '<div class="connect-row"><input type="text" placeholder="https://instagram.com/yourpost" id="dash-social-link" onkeydown="if(event.key===\'Enter\'){dashConnectSocial()}">'+
      '<button class="btn btn-primary" onclick="dashConnectSocial()">'+ICONS.share+' Connect</button></div>'
    ) : '';
    const tilesHtml = recent.length
      ? '<div class="social-grid">'+recent.map(it=>renderSocialTile(socialCat.id, it)).join('')+'</div>'
      : '<div class="empty">No posts connected yet.</div>';
    const expandedHtml = renderExpandedSocial(socialCat);
    return '<div class="card"><div class="card-head"><div><h3>Social Media Posts</h3><div class="sub">Connect your social media to display posts</div></div></div>'+
      connectRow+tilesHtml+expandedHtml+
      '<a class="link-more" href="#" style="display:inline-flex;margin-top:14px;" onclick="event.preventDefault();goToPage(\'social\')">View All Posts →</a></div>';
  }

  function renderStatsBar(){
    const allFiles = getAllFileItems();
    let allSocial = [];
    state.categories.filter(c=>c.isSocial).forEach(c=> c.subs.forEach(s=> allSocial = allSocial.concat(s.items)));
    let allOtherLinks = [];
    state.categories.filter(c=>!c.isSocial).forEach(c=> c.subs.forEach(s=> allOtherLinks = allOtherLinks.concat(s.items.filter(it=>it.type==='link'))));
    const totalItems = allFiles.length + allSocial.length + allOtherLinks.length;
    const totalBytes = allFiles.reduce((s,it)=>s+(it.size||0),0);
    const quota = 10*1024*1024*1024;
    const pct = Math.min(100, (totalBytes/quota)*100);
    return '<div class="stats-bar"><div class="stat"><div class="l">Total Items</div><div class="v">'+totalItems+'</div></div>'+
      '<div class="stat"><div class="l">Total Categories</div><div class="v">'+state.categories.length+'</div></div>'+
      '<div class="stat storage"><div class="l">Storage Used</div><div class="v" style="font-size:14px;">'+formatBytes(totalBytes)+' / 10 GB</div><div class="bar"><i style="width:'+pct+'%"></i></div></div>'+
      '<button class="btn-white" id="export-btn" onclick="exportPortfolioClick()">'+ICONS.download+' Export Portfolio</button></div>';
  }

  function renderDashboard(){
    return renderCategoryGrid()+'<div class="dash-cols">'+renderRecentWorkCard()+renderSocialWidgetCard()+'</div>'+renderStatsBar();
  }

  function renderAboutPage(){
    const dis = state.previewMode ? 'disabled' : '';
    return '<div class="card"><div class="card-head"><div><h3>About Me</h3><div class="sub">Tell visitors who you are and what you do.</div></div></div>'+
      '<div class="field"><label>Bio</label><textarea id="about-bio" rows="5" '+dis+'>'+escapeHtml(state.about.bio)+'</textarea></div>'+
      '<div class="field"><label>Focus / Specialty</label><input type="text" id="about-focus" value="'+escapeHtml(state.about.focus)+'" '+dis+'></div>'+
      (!state.previewMode? '<button class="btn btn-primary" onclick="saveAbout()">Save Changes</button>' : '')+
      '</div>';
  }
  function renderContactPage(){
    const c = state.contact;
    const dis = state.previewMode ? 'disabled' : '';
    return '<div class="card"><div class="card-head"><div><h3>Contact</h3><div class="sub">How people can reach you</div></div></div>'+
      '<div class="field"><label>Email</label><input type="text" id="contact-email" value="'+escapeHtml(c.email)+'" '+dis+'></div>'+
      '<div class="field"><label>Phone</label><input type="text" id="contact-phone" value="'+escapeHtml(c.phone)+'" '+dis+'></div>'+
      '<div class="field"><label>Location</label><input type="text" id="contact-location" value="'+escapeHtml(c.location)+'" '+dis+'></div>'+
      '<div class="field"><label>Website</label><input type="text" id="contact-website" value="'+escapeHtml(c.website)+'" '+dis+'></div>'+
      (!state.previewMode? '<button class="btn btn-primary" onclick="saveContact()">Save Changes</button>' : '')+
      '</div>';
  }

  function renderModal(){
    if(!state.modal) return '';
    if(state.modal.type==='add'){
      return '<div class="modal-overlay" onclick="if(event.target===this)closeModal()"><div class="modal"><h3>New Category</h3>'+
        '<div class="field"><label>Name</label><input type="text" id="modal-cat-name" placeholder="e.g. Illustration"></div>'+
        '<div class="field"><label>Description (optional)</label><input type="text" id="modal-cat-desc" placeholder="A short description"></div>'+
        '<div class="modal-actions"><button class="btn btn-outline" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="submitAddCategory()">Create Category</button></div>'+
        '</div></div>';
    }
    if(state.modal.type==='edit'){
      const cat = state.categories.find(c=>c.id===state.modal.id);
      if(!cat) return '';
      return '<div class="modal-overlay" onclick="if(event.target===this)closeModal()"><div class="modal"><h3>Edit Category</h3>'+
        '<div class="field"><label>Name</label><input type="text" id="modal-cat-name" value="'+escapeHtml(cat.name)+'"></div>'+
        '<div class="field"><label>Description</label><input type="text" id="modal-cat-desc" value="'+escapeHtml(cat.desc||'')+'"></div>'+
        '<div class="modal-actions"><button class="btn btn-outline" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="submitEditCategory(\''+cat.id+'\')">Save Changes</button></div>'+
        '</div></div>';
    }
    return '';
  }

  function render(){
    const app = document.getElementById('app');
    app.innerHTML = '<div class="app-shell">'+renderSidebar()+'<div class="main">'+renderPageHeader()+renderPageBody()+'</div></div>'+renderModal();
    if(state.page==='media') refreshLibrarySubSelect();
    if(window.APP_MODE==='admin' && authToken) persistStateDebounced();
  }

  bootstrap();
