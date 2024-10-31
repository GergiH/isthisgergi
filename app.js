const pageTags = {
  home: ["home"],
  text: ["text", "about", "career", "links", "github", "linkedin"],
  terminal: ["terminal", "about", "career", "links", "github", "linkedin"],
  game: ["game", "keyboard", "dpad"],
};
const welcomePhrases = [
  "Hi, I am",
  "Szia, én vagyok",
  "Hei, jeg er",
  "Ciao, sono",
  "Hola, soy",
  "Bonjour, je suis",
  "Hallo, ich bin",
  "こんにちは、私は",
  "你好，我是",
  "हाय मैं हूँ",
];
const age = new Date().getFullYear() - 1990;
const careerAge = new Date().getFullYear() - 2016;
const emojiTexts = {
  old: ["old", "&#x1F9D3;"],
  hungary: ["Hungary", "&#x1F1ED;&#x1F1FA;"],
  it: ["IT", "&#x1F4BB;"],
};
const links = [
  ["https://github.com/GergiH/", "GergiH", "<i class='uil uil-github'></i>"],
  [
    "https://www.linkedin.com/in/gergi-hrv/",
    "Gergely Horvath",
    "<i class='uil uil-linkedin'></i>",
  ],
  [
    "https://github.com/IFRCGo/go-api/",
    "IFRC Go - API <small>[Django] (contributor)</small>",
    "<i class='uil uil-github-alt'></i>",
  ],
  [
    "https://github.com/IFRCGo/go-frontend/",
    "IFRC Go - Frontend <small>[React] (contributor)</small>",
    "<i class='uil uil-github-alt'></i>",
  ],
  [
    "https://gergih.github.io/portfolio-terminal/",
    "Old terminal personal page",
    "<i class='uil uil-window'></i>",
  ],
];
const skills = [
  "C#",
  ".NET (v4.5 -> current)",
  "JavaScript",
  "Python",
  "MSSQL",
  "Blazor",
  "PostgreSQL",
  "React",
  "Django",
  "TypeScript",
  "Angular",
  "Vue",
  "Visual Studio",
  "VSCode",
  "Vim",
  "GitHub",
  "TFS",
  "Azure DevOps",
];

const particlesConfig = {
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#fff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 500,
      color: "#ffffff",
      opacity: 0.4,
      width: 2,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "bottom",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 0,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse", // was bubble
      },
      onclick: {
        enable: false, // was true
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 0.5,
        },
      },
      bubble: {
        distance: 400,
        size: 3,
        duration: 0.3,
        opacity: 1,
        speed: 3,
      },
      repulse: {
        distance: 100,
        duration: 0.2,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};

const typewriterElement =
  document.getElementsByClassName("welcome-typewriter")[0];
// Speed settings
const typingSpeed = 200;
const pauseDuration = 2000;
const deletingSpeed = 70;

function app() {
  return {
    currentPage: "home",
    searchTerm: "",
    darkMode: false,
    isEmoji: true,
    terminalLines: [],
    commandInput: "",
    canMove: true,
    playerPosition: { row: 1, col: 2 },
    gameMap: [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 0, 0, 0, 0],
      [0, 0, 1, 1, 0, 0, 0, 0],
      [0, 1, 1, 1, 0, 0, 0, 0],
      [0, 1, 1, 1, 0, 0, 0, 0],
      [0, 1, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 0],
      [0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 1, 1, 1, 1, 0, 0],
      [0, 0, 1, 0, 1, 1, 0, 0],
      [0, 0, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ],
    descriptions: {
      about(old, flag) {
        return `A <strong>${age} years</strong> ${old} software developer from ${flag}. Basically interested in any topic, just to name a few: programming (obviously), cooking, fitness, astrology, languages, psychology.<br/><br/>When not coding, he's either watching random animal videos, gaming, having a drink with friends, or watching sports.`;
      },
      career(it, isSkillCard) {
        const skillsStr = isSkillCard
          ? "<span class='skillcard-container'>" +
            skills
              .map((skill) => `<span class='skillcard'>${skill}</span>`)
              .join("") +
            "</span>"
          : skills.join(", ");

        if (isSkillCard) {
          return `<div class='career-text'><div><strong>${careerAge} years</strong> of ${it} experience, mainly developing web applications, web services, console applications, REST APIs - using the following languages, frameworks, tools (stronger to weaker + tools)</div><div>${skillsStr}</div></div>`;
        }

        return `<strong>${careerAge} years</strong> of ${it} experience, mainly developing web applications, web services, console applications, REST APIs - using the following languages, frameworks, tools (stronger to weaker + tools)<br/><strong>${skillsStr}</strong>`;
      },
    },
    setPage(page) {
      this.currentPage = page;
      this.isEmoji = page !== "terminal" && page !== "game";
    },
    get aboutDescription() {
      // Need to handle emoji texts here because 'this' has a different scope inside the 'descriptions' functions
      const old = this.isEmoji ? emojiTexts.old[1] : emojiTexts.old[0];
      const flag = this.isEmoji ? emojiTexts.hungary[1] : emojiTexts.hungary[0];
      return this.descriptions.about(old, flag);
    },
    get careerDescription() {
      const it = this.isEmoji ? emojiTexts.it[1] : emojiTexts.it[0];
      const isSkillCard =
        this.currentPage !== "terminal" && this.currentPage !== "game";
      return this.descriptions.career(it, isSkillCard);
    },
    get linksForTerminal() {
      let html = "<ul>";
      links.forEach((link) => {
        html += `<li><a href="${link[0]}" target="_blank">${link[1]}</a></li>`;
      });
      html += "</ul>";

      return html;
    },
    gameMessages(coordinates) {
      switch (coordinates) {
        case "5,1":
          return this.aboutDescription;
        case "7,6":
          return this.careerDescription;
        case "13,5":
          return this.linksForTerminal;
      }
    },
    handleCommand() {
      const command = this.commandInput.trim();

      if (command === "clear") {
        this.terminalLines = [];
      } else if (command) {
        this.terminalLines.push(`> ${command}`);
        this.processCommand(command);
      }

      this.commandInput = "";
    },
    processCommand(command) {
      switch (command) {
        case "help":
          this.terminalLines.push(
            "Available commands: <strong>about, career, links, help, clear</strong>"
          );
          break;
        case "about":
          this.terminalLines.push(this.aboutDescription);
          break;
        case "career":
          this.terminalLines.push(this.careerDescription);
          break;
        case "links":
          this.terminalLines.push(this.linksForTerminal);
          break;
        default:
          this.terminalLines.push(`Unknown command: ${command}`);
      }
    },
    isVisible(page) {
      const tags = pageTags[page] || [];
      return tags.some((tag) => tag.includes(this.searchTerm.toLowerCase()));
    },
    clearSearch() {
      this.searchTerm = "";
    },
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      particlesConfig.particles.color.value = this.darkMode
        ? "#fff"
        : "#03332a";
      particlesJS("particles-js", particlesConfig);
    },
    initializeGameMap() {
      this.renderMap();
    },
    renderMap() {
      const mapContainer = document.getElementById("map");
      mapContainer.innerHTML = ""; // Clear the map

      this.gameMap.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
          const mapCell = document.createElement("div");
          mapCell.classList.add("map-cell");

          if (
            rowIndex === this.playerPosition.row &&
            colIndex === this.playerPosition.col
          ) {
            const posKey = `${rowIndex},${colIndex}`;
            const message = this.gameMessages(posKey);
            mapCell.innerHTML = `<div class="player-message">${message ? `<span class="message">${message}</span>` : ""}<i class="uil uil-car-sideview player"></i></div>`;
          } else if (cell === 0) {
            mapCell.innerHTML = '<i class="uil uil-trees tree"></i>';
          } else if (rowIndex === 5 && colIndex === 1) {
            mapCell.innerHTML =
              '<i class="uil uil-user-square player-station"></i>';
          } else if (rowIndex === 7 && colIndex === 6) {
            mapCell.innerHTML = '<i class="uil uil-bag player-station"></i>';
          } else if (rowIndex === 13 && colIndex === 5) {
            mapCell.innerHTML = '<i class="uil uil-link player-station"></i>';
          }

          mapContainer.appendChild(mapCell);
        });
      });
    },
    isWalkable(row, col) {
      return this.gameMap[row] && this.gameMap[row][col] === 1;
    },
    movePlayer(event) {
      if (
        ["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)
      ) {
        return;
      }

      if (
        !this.canMove &&
        !event.key != "ArrowUp" &&
        !event.key != "ArrowDown" &&
        !event.key != "ArrowLeft" &&
        !event.key != "ArrowRight"
      ) {
        return;
      }

      this.canMove = false; // Block movement until keyup event

      let newRow = this.playerPosition.row;
      let newCol = this.playerPosition.col;

      switch (event.key) {
        case "ArrowUp":
          newRow -= 1;
          break;
        case "ArrowDown":
          newRow += 1;
          break;
        case "ArrowLeft":
          newCol -= 1;
          break;
        case "ArrowRight":
          newCol += 1;
          break;
        default:
          setTimeout(() => {
            this.canMove = true;
          }, 100);
          return;
      }

      event.preventDefault();

      if (this.isWalkable(newRow, newCol)) {
        this.playerPosition = { row: newRow, col: newCol };
        // TODO: improve handling of the player movement
        // Not optimal to always re-render the whole game, but it will do for now...
        this.renderMap();
      }

      // Re-enable movement after the key is released
      setTimeout(() => {
        this.canMove = true;
      }, 100);
    },
    movePlayerDpad(direction) {
      this.canMove = false;
      let newRow = this.playerPosition.row;
      let newCol = this.playerPosition.col;

      switch (direction) {
        case "up":
          newRow -= 1;
          break;
        case "down":
          newRow += 1;
          break;
        case "left":
          newCol -= 1;
          break;
        case "right":
          newCol += 1;
          break;
        default:
          return;
      }

      if (this.isWalkable(newRow, newCol)) {
        this.playerPosition = { row: newRow, col: newCol };
        // TODO: improve handling of the player movement
        // Not optimal to always re-render the whole game, but it will do for now...
        this.renderMap();
      }

      // Re-enable movement after the key is released
      setTimeout(() => {
        this.canMove = true;
      }, 100);
    },
    async typeText(text) {
      for (let i = 0; i <= text.length; i++) {
        typewriterElement.textContent = text.slice(0, i);
        await new Promise((resolve) => setTimeout(resolve, typingSpeed));
      }
    },
    async deleteText(text) {
      for (let i = text.length; i >= 0; i--) {
        typewriterElement.textContent = text.slice(0, i);
        await new Promise((resolve) => setTimeout(resolve, deletingSpeed));
      }
    },
    async typewriter() {
      let phraseIndex = 0;

      while (true) {
        const phrase = welcomePhrases[phraseIndex];
        typewriterElement.classList.remove("blinking");
        await this.typeText(phrase);
        typewriterElement.classList.add("blinking");
        await new Promise((resolve) => setTimeout(resolve, pauseDuration));
        typewriterElement.classList.remove("blinking");
        await this.deleteText(phrase);

        phraseIndex = (phraseIndex + 1) % welcomePhrases.length;
      }
    },
    init() {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        this.darkMode = true;
      }

      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          this.clearSearch();
        }
      });

      // Particles.js
      particlesConfig.particles.color.value = this.darkMode ? "#fff" : "#888";
      particlesJS("particles-js", particlesConfig);

      this.typewriter();
    },
  };
}
