const containerContainer = document.querySelector(".container-div");

window.addEventListener("mousemove", (event) => {
  containerContainer.innerHTML = `
        <div class="mouse-event-div">
        ${event.clientX}
        <h4>Mouse X Prosition(px)</h4>
      </div>
      <div class="mouse-event-div">
        ${event.clientY}
        <h4>Mouse Y Prosition(px)</h4>
      </div>
  `;
});