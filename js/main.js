const refs = {
  collapsibleContainer: document.querySelector(".js-collapsible_container"),
  collapsibleBtn: document.querySelector(".js-collapsible_btn"),
  collapsibleContent: document.querySelector(".js-collapsible_content"),
  collapsibleGradientContainer: document.querySelector(
    ".js-collapsible_container--gradient"
  ),
  video: document.querySelector(".js-video"),
  videoPlayBtn: document.querySelector(".js-play_button"),
  calendarBtn: document.querySelector(".js-calendar_button"),
  desktopCalendarBtn: document.querySelector(".js-calendar_button--desktop"),
  calendarPopup: document.querySelector(".calendar_popup"),
  closeCalendarBtn: document.querySelector("#close_calendar_button"),
  closeCorporateBtn: document.querySelector("#close_corporate_booking_button"),
  corporateBookingPopup: document.querySelector(".corporate_booking_popup"),
  corporateBookingBtn: document.querySelector(".js-corporate_button"),
};

const collapseInfo = () => {
  const baseContainerHeight = refs.collapsibleContainer.clientHeight;
  const contentHeight = refs.collapsibleContent.clientHeight;
  const buttonTextElement = refs.collapsibleBtn.querySelector(".button_text");
  const buttonArrowElement =
    refs.collapsibleBtn.querySelector(".js-button_arrow");
  const baseBtnText = buttonTextElement.textContent;
  const hideText = "hide";

  return () => {
    if (refs.collapsibleContainer.clientHeight === baseContainerHeight) {
      refs.collapsibleContainer.style.height = `${contentHeight}px`;
      buttonTextElement.textContent = hideText;
    } else {
      refs.collapsibleContainer.style.height = `${baseContainerHeight}px`;
      buttonTextElement.textContent = baseBtnText;
    }

    refs.collapsibleGradientContainer.classList.toggle(
      "collapsible_container_gradient--hide"
    );
    buttonArrowElement.classList.toggle("button_arrow--rotate");
  };
};

const playVideo = () => {
  refs.video.play();
  refs.videoPlayBtn.classList.add("video_button__play--inactive");
};

const showCalendar = () => {
  refs.calendarPopup.classList.remove("hide");
};

const hideCalendar = () => {
  refs.calendarPopup.classList.add("hide");
};

const showCorporateBooking = () => {
  refs.corporateBookingPopup.classList.remove("hide");
};

const hideCorporateBooking = () => {
  refs.corporateBookingPopup.classList.add("hide");
};

refs.collapsibleBtn.addEventListener("click", collapseInfo());
refs.videoPlayBtn.addEventListener("click", playVideo);
refs.calendarBtn.addEventListener("click", showCalendar);
refs.desktopCalendarBtn.addEventListener("click", showCalendar);
refs.closeCalendarBtn.addEventListener("click", hideCalendar);
refs.closeCorporateBtn.addEventListener("click", hideCorporateBooking);
refs.corporateBookingBtn.addEventListener("click", showCorporateBooking);
