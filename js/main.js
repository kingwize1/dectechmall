/* Direction 1 — ProSport Metallic Crest (IMPLEMENTED).
   Behavior only: menu, section marker, and the mailto application.
   See ideas.md. */
(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  var label = toggle ? toggle.querySelector(".nav-toggle-label") : null;

  function setNav(open) {
    if (!toggle || !nav) return;
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    nav.classList.toggle("is-open", open);
    if (label) label.textContent = open ? "Close" : "Menu";
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      setNav(!open);
      if (!open) {
        var first = nav.querySelector("a");
        if (first) first.focus();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setNav(false);
        toggle.focus();
      }
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setNav(false);
      });
    });
  }

  var sections = Array.prototype.slice.call(document.querySelectorAll("main section[id]"));
  var navLinks = nav ? Array.prototype.slice.call(nav.querySelectorAll("a[href^='#']")) : [];

  function markCurrent() {
    if (!navLinks.length || !sections.length) return;
    var line = window.scrollY + 120;
    var current = sections[0].id;
    sections.forEach(function (section) {
      if (section.offsetTop <= line) current = section.id;
    });
    navLinks.forEach(function (link) {
      var on = link.getAttribute("href") === "#" + current;
      if (on) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
  }

  markCurrent();
  window.addEventListener("scroll", markCurrent, { passive: true });

  document.querySelectorAll("[data-role]").forEach(function (link) {
    link.addEventListener("click", function () {
      var role = link.getAttribute("data-role");
      var input = document.querySelector('input[name="role"][value="' + role + '"]');
      if (input) input.checked = true;
    });
  });

  function readForm(form) {
    var data = new FormData(form);
    return {
      role: (data.get("role") || "").toString().trim(),
      name: (data.get("name") || "").toString().trim(),
      project: (data.get("project") || "").toString().trim(),
      category: (data.get("category") || "").toString().trim(),
      message: (data.get("message") || "").toString().trim()
    };
  }

  function validate(data) {
    var errors = [];
    if (data.role !== "Founder" && data.role !== "Vendor") {
      errors.push({ field: "role", text: "Choose Founder or Vendor." });
    }
    if (data.name.length < 2) {
      errors.push({ field: "name", text: "Enter your name." });
    }
    if (!data.project) {
      errors.push({ field: "project", text: "Name the project or storefront." });
    }
    if (!data.category) {
      errors.push({ field: "category", text: "Choose a category." });
    }
    if (!data.message) {
      errors.push({ field: "message", text: "Add a short note about the project." });
    }
    return errors;
  }

  function buildMailto(data) {
    var message = data.message;
    var trimmed = false;
    if (message.length > 1200) {
      message = message.slice(0, 1200);
      trimmed = true;
    }
    var lines = [
      "Role: " + data.role,
      "Name: " + data.name,
      "Project: " + data.project,
      "Category: " + data.category,
      "Message:",
      message,
      "",
      "Sent from the DecTechMall apply form.",
      "An application is not a funding commitment."
    ];
    if (trimmed) lines.push("The message was shortened to fit an email link.");
    var subject = "DecTechMall application — " + data.role;
    return "mailto:coachg@vfoxisland.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(lines.join("\r\n"));
  }

  function showErrors(form, errors) {
    var summary = document.getElementById("form-errors");
    var list = summary.querySelector("ul");
    list.innerHTML = "";
    ["role", "name", "project", "category", "message"].forEach(function (name) {
      var field = form.querySelector('[name="' + name + '"]');
      if (!field) return;
      field.removeAttribute("aria-invalid");
    });
    if (!errors.length) {
      summary.hidden = true;
      return;
    }
    errors.forEach(function (error) {
      var item = document.createElement("li");
      item.textContent = error.text;
      list.appendChild(item);
      var field = form.querySelector('[name="' + error.field + '"]');
      if (field) field.setAttribute("aria-invalid", "true");
    });
    summary.hidden = false;
  }

  var form = document.getElementById("apply-form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var data = readForm(form);
      var errors = validate(data);
      showErrors(form, errors);
      var summary = document.getElementById("form-errors");
      if (errors.length) {
        summary.focus();
        return;
      }
      var href = buildMailto(data);
      var status = document.getElementById("form-status");
      var fallback = document.getElementById("mailto-fallback");
      fallback.href = href;
      status.hidden = false;
      window.location.href = href;
    });
  }

  window.DecTechMall = {
    buildMailto: buildMailto,
    validate: validate
  };
})();
