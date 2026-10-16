(function () {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const panel = document.querySelector(".nav-panel");
  const form = document.querySelector("#inquiry-form");
  const interest = document.querySelector("#interest");
  const message = document.querySelector("#message");
  const note = document.querySelector("#inquiry-note");
  const error = document.querySelector("#form-error");
  const success = document.querySelector("#form-success");
  const year = document.querySelector("#year");
  const desktop = window.matchMedia("(min-width: 960px)");

  if (year) year.textContent = String(new Date().getFullYear());

  function setMenu(open) {
    if (!toggle || !panel) return;
    document.body.classList.toggle("nav-open", open);
    panel.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    if (desktop.matches) {
      panel.inert = false;
      panel.removeAttribute("aria-hidden");
      return;
    }
    panel.inert = !open;
    panel.setAttribute("aria-hidden", open ? "false" : "true");
    if (open) {
      const first = panel.querySelector("a");
      if (first) first.focus();
    }
  }

  function syncMenu() {
    if (desktop.matches) {
      setMenu(false);
      if (panel) {
        panel.inert = false;
        panel.removeAttribute("aria-hidden");
        panel.classList.remove("is-open");
      }
    } else if (!document.body.classList.contains("nav-open")) {
      if (panel) {
        panel.inert = true;
        panel.setAttribute("aria-hidden", "true");
      }
    }
  }

  if (toggle && panel) {
    toggle.addEventListener("click", function () {
      setMenu(!panel.classList.contains("is-open"));
    });

    panel.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        if (!desktop.matches) setMenu(false);
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && panel.classList.contains("is-open")) {
        setMenu(false);
        toggle.focus();
      }
    });

    desktop.addEventListener("change", syncMenu);
    syncMenu();
  }

  function scrollToContact() {
    const contact = document.querySelector("#contact");
    if (!contact) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    contact.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  }

  document.querySelectorAll("[data-inquiry]").forEach(function (button) {
    button.addEventListener("click", function () {
      const home = button.getAttribute("data-inquiry");
      if (interest) interest.value = home;
      if (message && !message.value.trim()) {
        message.value = "I would like to know more about " + home + ".";
      }
      if (note) {
        note.hidden = false;
        note.textContent = "This note is about " + home + ".";
      }
      scrollToContact();
      window.setTimeout(function () {
        if (message) message.focus({ preventScroll: true });
      }, 400);
    });
  });

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (success) success.hidden = true;

      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const email = String(data.get("email") || "").trim();
      const phone = String(data.get("phone") || "").trim();
      const topic = String(data.get("interest") || "").trim();
      const bodyText = String(data.get("message") || "").trim();

      if (!name || !email || !bodyText || !email.includes("@")) {
        if (error) {
          error.hidden = false;
          error.textContent = "Please add your name, a valid email, and a short message.";
        }
        return;
      }

      if (error) error.hidden = true;

      const subject = "Website inquiry from " + name + " — " + topic;
      const lines = [
        "Name: " + name,
        "Email: " + email,
        "Phone: " + (phone || "Not provided"),
        "Regarding: " + topic,
        "",
        bodyText
      ];
      const mailto =
        "mailto:sweetmanrealestate@gmail.com?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(lines.join("\n"));

      if (success) {
        success.hidden = false;
        success.textContent =
          "Your email app should open with this message. If it does not, email sweetmanrealestate@gmail.com or call (954) 614-2754.";
      }

      window.location.href = mailto;
    });
  }

  if (header) {
    const onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }
})();
