(() => {
  const rooms = {
    bulka: {
      number: "01",
      name: "Булка",
      location: "Зал «Булка» · Куйбышева 13а",
      caption: "Светлая пауза · настроение концепта",
      note: "мягкий<br>дневной<br>ритм",
      image: "assets/bulka-portrait.jpg",
      alt: "Портретный кадр из публичной витрины фотостудии Búlka"
    },
    brownie: {
      number: "02",
      name: "Брауни",
      location: "Зал «Брауни» · Интернациональная 5а",
      caption: "Графичная сцена · настроение концепта",
      note: "точный<br>световой<br>акцент",
      image: "assets/bulka-studio.jpg",
      alt: "Кадр студийного пространства из публичной витрины Búlka"
    },
    eclair: {
      number: "03",
      name: "Эклер",
      location: "Зал «Эклер» · Интернациональная 5а",
      caption: "Цветовой импульс · настроение концепта",
      note: "смелый<br>розовый<br>штрих",
      image: "assets/bulka-graphic.jpg",
      alt: "Портретный кадр с розовыми графичными акцентами из публичной витрины Búlka"
    },
    baguette: {
      number: "04",
      name: "Багет",
      location: "Зал «Багет» · Интернациональная 5а",
      caption: "Воздушная история · настроение концепта",
      note: "белый<br>светлый<br>угол",
      image: "assets/bulka-bedroom.jpg",
      alt: "Светлый портретный кадр из публичной витрины Búlka"
    }
  };

  const body = document.body;
  const buttons = [...document.querySelectorAll("[data-room-choice]")];
  const photo = document.querySelector("#hero-photo");
  const name = document.querySelector("#scene-name");
  const caption = document.querySelector("#scene-caption");
  const note = document.querySelector("#visual-note");
  const location = document.querySelector("#room-location");

  function selectRoom(roomKey) {
    const room = rooms[roomKey];
    if (!room || body.dataset.room === roomKey && !photo.classList.contains("is-changing")) return;

    buttons.forEach((button) => {
      const selected = button.dataset.roomChoice === roomKey;
      button.classList.toggle("is-active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });

    photo.classList.add("is-changing");
    body.dataset.room = roomKey;
    name.textContent = `${room.number} / ${room.name}`;
    caption.textContent = room.caption;
    note.innerHTML = room.note;
    location.textContent = room.location;

    window.setTimeout(() => {
      photo.src = room.image;
      photo.alt = room.alt;
      photo.classList.remove("is-changing");
    }, 160);
  }

  buttons.forEach((button) => button.addEventListener("click", () => selectRoom(button.dataset.roomChoice)));
})();
