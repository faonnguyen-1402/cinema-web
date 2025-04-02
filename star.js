function isBooked() {
  const optionBook = document.querySelectorAll('.option_to_book');
  if (!optionBook) return;

  const optionBookList = Array.from(optionBook);
  if (!optionBookList) return;

  const optionDefaultList = ['Rạp', 'Ngày chiếu', 'Suất chiếu', 'Phim'];
  let count = 0;

  optionBookList.forEach((item) => {
    const value = item.options[item.selectedIndex].text;
    console.log(value, 'value');
    for (let i = 0; i < optionBookList.length; i++) {
      // const selectCard = document.getElementById(`option${i + 1}`);
      // if (!selectCard) console.log('error');
      // selectCard.addEventListener('change', () => {
      //   if (selectCard.value !== '0') {
      //     console.log('zoooo');

      //     const nextSelectCard = document.getElementById(`option${i + 2}`);
      //     nextSelectCard.disabled = false;
      //   }
      // });

      if (value.toUpperCase() === optionDefaultList[i].toUpperCase()) {
        count++;
        // console.log(optionDefaultList[i], 'option');
      }
    }
  });

  return count === 0;
}

function checkOptionSelected() {
  const optionBook = document.querySelectorAll('.option_to_book');
  if (!optionBook) return;

  const optionBookList = Array.from(optionBook);
  if (!optionBookList) return;

  for (let i = 0; i < optionBookList.length; i++) {
    const selectCard = document.getElementById(`option${i + 1}`);
    if (!selectCard) console.log('error');
    selectCard.addEventListener('change', () => {
      if (selectCard.value !== '0') {
        console.log('zoooo');

        const nextSelectCard = document.getElementById(`option${i + 2}`);
        nextSelectCard.disabled = false;
      }
    });
  }
}

function showOptionBook() {
  const bookBoard = document.getElementById('option_ticket');
  if (!bookBoard) return;

  const bookTicket = document.getElementById('book_ticket');
  if (!bookTicket) return;

  let count = 0;

  bookTicket.addEventListener('click', () => {
    count++;

    if (count % 2 == 1) {
      bookBoard.style.display = 'flex';
    } else {
      bookBoard.style.display = 'none';
    }
  });
}

function statusFilm() {
  const film = document.getElementById('parent_status_film');
  if (!film) return;

  const statusFilm = document.querySelectorAll('.status_film');
  const containerStatusFilm = document.getElementsByClassName(
    'container_status_film'
  );
  if (!statusFilm) console.log('mistake');

  const statusArray = Array.from(statusFilm);
  if (!statusArray) console.log('looo');

  let count = 0;
  const arrow = document.getElementById('arrow');
  if (!arrow) return;

  film.addEventListener('click', () => {
    count++;
    if (count % 2 == 1) {
      containerStatusFilm[0].style.visibility = 'visible';
      containerStatusFilm[0].style.height = '64px';

      arrow.style.transform = 'rotate(90deg)';
    } else {
      containerStatusFilm[0].style.visibility = 'hidden';
      containerStatusFilm[0].style.height = '0';

      arrow.style.transform = 'rotate(0deg)';
    }
  });
}

function appearButton() {
  const myButton = document.getElementById('myBtn');
  if (!myButton) return;

  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    // myButton.style.display = 'block';
    myButton.style.opacity = `${100}%`;
  } else {
    // myButton.style.display = 'none';
    myButton.style.opacity = `${0}%`;
  }
}

(() => {
  // setInterval(() => {
  //   const now = new Date();

  //   const seconds = now.getSeconds();
  //   console.log(seconds, 'seconds');
  // }, 1000);

  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  // console.log(hours, 'hours');
  // console.log(minutes, 'minutes');
  //  method 2
  // const formatTime = `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;

  const formatTime = `${hours}:${minutes}`;
  // if (minutes < 10) {
  //   formatTime = `${hours}:${0 + minutes}`;
  // }

  // Select all span elements within the div with class 'show_times'
  const spans = document.querySelectorAll(
    '.show_times .time_film .outline span'
  );

  // Extract the text content from each span and store it in an array
  const timesArray = Array.from(spans).map((span) => span.textContent);

  // Output the array to the console

  for (let i = 0; i < timesArray.length; i++) {
    if (timesArray[i] >= formatTime) {
      const timeFilms = document.querySelectorAll('.show_times .time_film ');
      const timeFilmsElement = Array.from(timeFilms)[i];
      timeFilmsElement.classList.add('time_film_open');
    }
  }

  const headerBar = document.getElementById('header_bars');
  if (!headerBar) {
    console.log('ERRORRR');
    return;
  }

  const content_mobile = document.getElementById('content_mobile');
  if (!content_mobile) return;

  const classContentMobile = document.getElementsByClassName(
    'navigation_content_mobile'
  );
  if (!classContentMobile) {
    return;
  }

  let count = 0;

  headerBar.addEventListener('click', () => {
    content_mobile.classList.remove('hide_bars');
    content_mobile.classList.add('navigation_content_mobile');

    count++;

    if (count % 2 == 1) {
      classContentMobile[0].style.height = '270px';
      classContentMobile[0].style.visibility = 'visible';
    } else {
      classContentMobile[0].style.height = '0';
      classContentMobile[0].style.visibility = 'hidden';
    }
  });
  // add event for scroll button
  const myButton = document.getElementById('myBtn');
  if (!myButton) return;

  myButton.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

  // scroll to show button
  window.addEventListener('scroll', () => {
    appearButton();
  });

  const bookTicketButton = document.getElementById('book_ticket_now');
  if (!bookTicketButton) return;

  bookTicketButton.addEventListener('click', () => {
    console.log(isBooked());
    if (!isBooked()) return;

    window.location.assign(
      'https://www.starlight.vn//dat-ve.html?film_name=D%E1%BB%B0%20%C3%81N%20M%E1%BA%ACT:%20TH%E1%BA%A2M%20HO%E1%BA%A0%20TR%C3%8AN%20C%E1%BA%A6U%20(T16)&time_id=23ce98b6-2135-40f6-b1ed-c7ed548d8549&date=22/07/2024&format=2D&room=01&image=https://starlight.vn/Areas/Admin/Content/Fileuploads/images/POSTER/tham-hoa-tren-cau.jpg&time=22:40&server_id=1'
    );
  });

  statusFilm();
  showOptionBook();
  checkOptionSelected();
})();

window.addEventListener('resize', function () {
  const currentSizeWindow = screen.width - 60;
  const containerMobile = document.getElementsByClassName(
    'container_mobile_header '
  );

  containerMobile[0].style.maxWidth = `${currentSizeWindow}px`;
});
