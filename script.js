
(function(){
  const root=document.documentElement;
  const btnTheme=document.getElementById('btnTheme');
  const btnPrint=document.getElementById('btnPrint');
  const btnClear=document.getElementById('btnClear');
  const active=document.getElementById('activeFilter');

  const THEME_KEY='resume_theme';
  const saved=localStorage.getItem(THEME_KEY);
  if(saved){ root.setAttribute('data-theme', saved); }

  btnTheme.addEventListener('click', ()=>{
    const cur=root.getAttribute('data-theme') || 'dark';
    const next=(cur==='light') ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    localStorage.setItem(THEME_KEY, next);
  });

  btnPrint.addEventListener('click', ()=> window.print());

  let currentSkill=null;

  function setActiveText(){
    active.textContent = currentSkill ? ('Filter: ' + currentSkill) : '';
  }

  function clearActiveClasses(){
    document.querySelectorAll('[data-skill].is-active').forEach(el=>el.classList.remove('is-active'));
  }

  function applyFilter(skill){
    currentSkill=skill || null;
    setActiveText();
    const cards=[...document.querySelectorAll('#timeline .card')];
    if(!currentSkill){
      cards.forEach(c=>c.classList.remove('is-hidden'));
      clearActiveClasses();
      return;
    }
    cards.forEach(card=>{
      const tags=[...card.querySelectorAll('[data-skill]')].map(x=>x.getAttribute('data-skill'));
      card.classList.toggle('is-hidden', !tags.includes(currentSkill));
    });
    clearActiveClasses();
    document.querySelectorAll('[data-skill]').forEach(el=>{
      if(el.getAttribute('data-skill')===currentSkill){ el.classList.add('is-active'); }
    });
  }

  function onSkillClick(e){
    const skill=e.target.getAttribute('data-skill');
    if(!skill) return;
    applyFilter(currentSkill===skill ? null : skill);
  }

  document.getElementById('skillCloud').addEventListener('click', onSkillClick);
  document.getElementById('timeline').addEventListener('click', (e)=>{
    if(e.target.matches('button.tag')) onSkillClick(e);
  });

  btnClear.addEventListener('click', ()=> applyFilter(null));
  setActiveText();
})();
