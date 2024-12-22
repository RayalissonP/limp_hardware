document.addEventListener("DOMContentLoaded", () => {
   const modal = document.getElementById("modal");
   const modalTitle = document.getElementById("modalTitle");
   const modalImage = document.getElementById("modalImage");
   const closeModal = document.querySelector(".close");

   // Botões para abrir o modal
   const openModalPlacas = document.getElementById("openModalPlacas");
   const openModalGabinetes = document.getElementById("openModalGabinetes");

   openModalPlacas.addEventListener("click", () => {
      modal.style.display = "flex";
      modalTitle.textContent = "Tamanhos de Placas-mãe";
      modalImage.src = "assets/images/Tamanhos de Placas.png";
      modalImage.alt = "Tamanhos de Placas-mãe";
   });

   openModalGabinetes.addEventListener("click", () => {
      modal.style.display = "flex";
      modalTitle.textContent = "Tamanhos de Gabinetes";
      modalImage.src = "assets/images/Tamanhos Gabinetes.jpg";
      modalImage.alt = "Tamanhos de Gabinetes";
   });

   // Fechar o modal
   closeModal.addEventListener("click", () => {
      modal.style.display = "none";
   });

   window.addEventListener("click", (e) => {
      if (e.target === modal) {
         modal.style.display = "none";
      }
   });
});
