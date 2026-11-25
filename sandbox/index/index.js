(function () {
  "use strict";
  const DATA_URL = "./index.json";
  const $ = (selector, root = document) => root.querySelector(selector);
  const escapeHTML = (value = "") => String(value).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
  const external = url => /^https?:\/\//i.test(url) && !/joeldom\.github\.io|joeldombek\.com/i.test(url);
  const anchor = (item, label = item.title) => {
    const isExternal = external(item.url);
    const target = isExternal ? '_blank' : '_self';
    const rel = isExternal ? ' rel="noopener noreferrer"' : '';
    const title = item.title || label;
    const aria = item.ariaLabel || (isExternal ? title + " — opens in a new tab" : title);
    return '<a href="' + escapeHTML(item.url) + '" target="' + target + '"' + rel +
      ' title="' + escapeHTML(title) + '" aria-label="' + escapeHTML(aria) + '">' + escapeHTML(label) + '</a>';
  };
  function renderPages(data) {
    const pages = data.navigation || [];
    $("#page-count").textContent = pages.length + " destinations";
    $("#site-map").innerHTML = pages.map(item =>
      '<article class="directory-card"><p class="eyebrow">' + escapeHTML(item.type || "page") + '</p><h3>' +
      anchor(item) + '</h3><p>' + escapeHTML(item.description) + '</p><small>' +
      escapeHTML((item.audience || []).join(" · ")) + '</small></article>'
    ).join("");
  }
  function renderJourneys(data) {
    const pages = new Map((data.navigation || []).map(item => [item.id, item]));
    $("#journeys").innerHTML = (data.journeys || []).map(path =>
      '<article class="journey-card"><p class="eyebrow">' + escapeHTML(path.id) + '</p><h3>' +
      escapeHTML(path.title) + '</h3><p>' + escapeHTML(path.description) + '</p><div class="journey-steps">' +
      path.steps.map((id, index) => (index ? '<span aria-hidden="true">→</span>' : '') +
        (pages.has(id) ? anchor(pages.get(id), pages.get(id).title) : '<span>' + escapeHTML(id) + '</span>')
      ).join("") + '</div></article>'
    ).join("");
  }
  function renderSandbox(data) {
    const items = data.sandbox.items || [];
    $("#sandbox-count").textContent = items.length + " entries";
    $("#sandbox-list").innerHTML = items.map(item =>
      '<a class="sandbox-item" data-search="' + escapeHTML((item.title + " " + item.type + " " + item.description).toLowerCase()) +
      '" href="' + escapeHTML(item.url) + '" title="' + escapeHTML(item.title + " — " + item.description) +
      '" aria-label="' + escapeHTML(item.title + " — " + item.type) + '"><span>' + escapeHTML(item.title) +
      '</span><small>' + escapeHTML(item.type) + '</small></a>'
    ).join("");
    const filter = $("#sandbox-filter");
    const count = $("#sandbox-filter-count");
    filter.addEventListener("input", () => {
      const query = filter.value.trim().toLowerCase();
      let visible = 0;
      $("#sandbox-list").querySelectorAll(".sandbox-item").forEach(link => {
        const match = !query || link.dataset.search.includes(query);
        link.hidden = !match;
        if (match) visible++;
      });
      count.textContent = visible + " of " + items.length + " shown";
    });
    count.textContent = items.length + " entries";
  }
  function renderAffiliates(data) {
    const profiles = data.affiliates.profiles || [];
    $("#affiliates").innerHTML = profiles.map(profile => {
      const placeholder = profile.status === "placeholder" || profile.status === "suggested";
      const isExternal = external(profile.url);
      return '<a class="affiliate-link' + (placeholder ? ' placeholder' : '') + '" href="' + escapeHTML(profile.url) +
        '" target="_blank" rel="noopener noreferrer" title="' + escapeHTML(profile.title) +
        '" aria-label="' + escapeHTML(profile.title + " — opens in a new tab") + '"><span>' +
        escapeHTML(profile.platform) + ' ↗</span><small>' + escapeHTML(profile.description) +
        '</small><span class="status">' + escapeHTML(profile.status.replace("-", " ")) + '</span></a>';
    }).join("");
  }
  function renderStructuredData(data) {
    const site = data.catalog;
    const profiles = (data.affiliates.profiles || []).filter(profile => profile.sameAs && profile.status !== "placeholder");
    const graph = [
      {"@type":"WebSite","@id":"https://joeldom.github.io/#website","url":"https://joeldom.github.io/","name":site.siteName,"description":site.description,"inLanguage":"en-US"},
      {"@type":"Person","@id":"https://joeldom.github.io/#person","name":site.author,"url":"https://joeldom.github.io/","sameAs":profiles.map(profile => profile.url)},
      {"@type":"CollectionPage","@id":site.canonical+"#webpage","url":site.canonical,"name":site.title,"description":site.description,"isPartOf":{"@id":"https://joeldom.github.io/#website"},"about":{"@id":"https://joeldom.github.io/#person"},"primaryImageOfPage":{"@type":"ImageObject","url":site.socialImage}},
      {"@type":"ItemList","name":"Site destinations","itemListElement":(data.navigation || []).map((item,index)=>({"@type":"ListItem","position":index+1,"name":item.title,"url":item.url}))}
    ];
    $("#site-structured-data").textContent = JSON.stringify({"@context":"https://schema.org","@graph":graph});
  }
  fetch(DATA_URL, {credentials:"same-origin"})
    .then(response => { if (!response.ok) throw new Error("Catalog data unavailable (" + response.status + ")"); return response.json(); })
    .then(data => {
      renderPages(data); renderJourneys(data); renderSandbox(data); renderAffiliates(data); renderStructuredData(data);
      $("#year").textContent = new Date().getFullYear();
      document.documentElement.dataset.catalogLoaded = "true";
    })
    .catch(error => {
      console.error("Site index:", error);
      $("#page-count").textContent = "Catalog unavailable";
      $("#sandbox-count").textContent = "See sandbox README";
    });
}());
