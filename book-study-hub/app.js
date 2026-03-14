function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

function qsa(selector, parent = document) {
  return [...parent.querySelectorAll(selector)];
}

function getCurrentStudy() {
  return siteData.studies.find(study => study.status === 'current') || siteData.studies[0];
}

function getStudyBySlug(slug) {
  return siteData.studies.find(study => study.slug === slug) || getCurrentStudy();
}

function createStudyLink(slug) {
  return `study.html?study=${encodeURIComponent(slug)}`;
}

function renderSharedShell() {
  qs('#siteTitle') && (qs('#siteTitle').textContent = siteData.siteName);
  qs('#brandKicker') && (qs('#brandKicker').textContent = siteData.brandKicker);
  qs('#footerTitle') && (qs('#footerTitle').textContent = siteData.siteName);
  qs('#footerCopy') && (qs('#footerCopy').textContent = siteData.footerCopy);

  const menuToggle = qs('#menuToggle');
  const nav = qs('#siteNav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('is-open');
    });

    qsa('a', nav).forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }));
  }
}

function createMetaItem(label, value) {
  return `<li><span>${label}</span><span>${value}</span></li>`;
}

function createResourceItem(resource) {

  let thumbnail = "";

  if (resource.link.includes("youtube.com") || resource.link.includes("youtu.be")) {
    const videoId = resource.link.split("v=")[1]?.split("&")[0];
    if (videoId) {
      thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    }
  }

  return `
    <article class="resource-item">
      ${thumbnail ? `<img class="resource-thumb" src="${thumbnail}" alt="${resource.title}">` : ""}
      <div class="resource-head">
        <h3>${resource.title}</h3>
      </div>
      <p>${resource.description}</p>
      <a href="${resource.link}" target="_blank">${resource.linkText}</a>
    </article>
  `;
}

function createStudyCard(study, isCurrent = false) {
  return `
    <article class="study-card">
      <div class="study-card-header">
        <span class="status-pill">${study.status}</span>
        <span class="length-pill">${study.durationLabel}</span>
      </div>
      <h3>${study.title}</h3>
      <p><strong>${study.author}</strong> · ${study.dateLabel}</p>
      <p>${study.summary}</p>
      <ul class="meta-list">
        ${createMetaItem('Meeting', study.meetingDay)}
        ${createMetaItem('Length', study.durationLabel)}
      </ul>
      <div class="study-card-footer">
        <a class="button ${isCurrent ? 'button-primary' : 'button-secondary'}" href="${createStudyLink(study.slug)}">Open Study</a>
      </div>
    </article>
  `;
}

function renderHomePage() {
  const currentStudy = getCurrentStudy();
  document.title = `${siteData.siteName} | Men’s Book Study Hub`;

  qs('#heroEyebrow').textContent = siteData.home.eyebrow;
  qs('#heroTitle').textContent = siteData.home.title;
  qs('#heroCopy').textContent = siteData.home.copy;
  qs('#heroCurrentLink').href = createStudyLink(currentStudy.slug);
  qs('#heroCurrentStudy').textContent = currentStudy.title;
  qs('#heroMeta').innerHTML = [
    createMetaItem('Author', currentStudy.author),
    createMetaItem('Length', currentStudy.durationLabel),
    createMetaItem('Season', currentStudy.dateLabel)
  ].join('');
  qs('#heroFocus').textContent = currentStudy.thisWeekFocus;

  qs('#currentStudyCard').innerHTML = createStudyCard(currentStudy, true);

  qs('#studyLibrary').innerHTML = siteData.studies
    .map(study => createStudyCard(study, false))
    .join('');

  qs('#sharedResources').innerHTML = siteData.home.sharedResources
    .map(createResourceItem)
    .join('');

  qs('#footerCurrentLink').href = createStudyLink(currentStudy.slug);
}

function createGuideHtml(guide) {
  return `
    <div class="sub-card">
      <h4>${guide.title}</h4>
      <ul class="clean-list">
        ${guide.items.map(item => `<li>${item}</li>`).join('')}
      </ul>
    </div>
  `;
}

function createWeekCard(week) {
  return `
    <article class="week-card">
      <div class="study-card-header">
        <span class="inline-pill">${week.label}</span>
      </div>
      <div>
        <h3>${week.title}</h3>
        <p>${week.focus}</p>
      </div>
      <div class="week-grid">
        <div class="sub-card">
          <h4>Reading</h4>
          <p>${week.reading}</p>
        </div>
        <div class="sub-card">
          <h4>Main takeaway</h4>
          <p>${week.takeaway}</p>
        </div>
      </div>
      <div class="sub-card">
        <h4>Discussion prompts</h4>
        <ul class="question-list">
          ${week.questions.map(question => `<li>${question}</li>`).join('')}
        </ul>
      </div>
    </article>
  `;
}

function renderStudyPage() {
  const params = new URLSearchParams(window.location.search);
  const study = getStudyBySlug(params.get('study'));
  document.title = `${study.title} | ${siteData.siteName}`;

  qs('#studyStatus').textContent = `${study.status} study`;
  qs('#studyTitle').textContent = study.title;
  qs('#studySummary').textContent = study.summary;
  qs('#studyAudience').textContent = study.audience;
  qs('#studyAim').textContent = study.aim;

  qs('#studyMeta').innerHTML = [
    createMetaItem('Author', study.author),
    createMetaItem('Length', study.durationLabel),
    createMetaItem('When', study.dateLabel),
    createMetaItem('Meeting', study.meetingDay)
  ].join('');

  qs('#themeList').innerHTML = study.themes.map(theme => `<li>${theme}</li>`).join('');
  qs('#weeksList').innerHTML = study.weeks.map(createWeekCard).join('');

  // Remove the redundant standalone discussion tools/questions section
  const discussionQuestionsEl = qs('#discussionQuestions');
  if (discussionQuestionsEl) {
    const discussionSection =
      discussionQuestionsEl.closest('section') ||
      discussionQuestionsEl.parentElement;
    if (discussionSection) {
      discussionSection.style.display = 'none';
    }
  }

  qs('#referenceGuides').innerHTML = (study.guides && study.guides.length)
    ? study.guides.map(createGuideHtml).join('')
    : '<div class="empty-state">Add guides in studies-data.js.</div>';

  qs('#studyResources').innerHTML = (study.resources && study.resources.length)
    ? study.resources.map(createResourceItem).join('')
    : '<div class="empty-state">Add resources for this study.</div>';

  qs('#meetingNotes').innerHTML = `
    <ul class="question-list">
      ${study.meetingNotes.map(note => `<li>${note}</li>`).join('')}
    </ul>
  `;
}

renderSharedShell();

if (document.body.dataset.page === 'home') {
  renderHomePage();
}

if (document.body.dataset.page === 'study') {
  renderStudyPage();
}
