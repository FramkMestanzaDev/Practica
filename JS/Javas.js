document.addEventListener("DOMContentLoaded", function () {
  const ownerForm = document.getElementById("owner-form");
  const petCountSelect = document.getElementById("pet-count");
  const petsContainer = document.getElementById("pets-container");
  const dataTable = document.getElementById("data-table");
  const jsonData = document.getElementById("json-data");
  const data = [];

 ownerForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const ownerId = document.getElementById("owner-id").value;
      const ownerName = document.getElementById("owner-name").value;
      const ownerEmail = document.getElementById("owner-email").value;
      const ownerPhone = document.getElementById("owner-phone").value;
      const petCount = parseInt(petCountSelect.value);

      const pets = [];
      for (let i = 1; i <= petCount; i++) {
          const petName = document.getElementById(`pet-name-${i}`).value;
          const petBreed = document.getElementById(`pet-breed-${i}`).value;
          const petAge = document.getElementById(`pet-age-${i}`).value;
          pets.push({ nombre: petName, raza: petBreed, años: petAge });
      }


      data.push({ id: ownerId, nombre: ownerName, correo: ownerEmail, teléfono: ownerPhone, mascotas: pets });

      const newRow = dataTable.insertRow();
      const cells = [
          ownerId, ownerName, ownerEmail, ownerPhone, JSON.stringify(pets)
      ];
      for (let i = 0; i < cells.length; i++) {
          const cell = newRow.insertCell(i);
          cell.innerHTML = cells[i];
      }

      jsonData.textContent = JSON.stringify(data, null, 2);

      ownerForm.reset();
      petsContainer.innerHTML = "";
  });

 petCountSelect.addEventListener("change", function () {
      const petCount = parseInt(petCountSelect.value);
      petsContainer.innerHTML = "";

      for (let i = 1; i <= petCount; i++) {
          const petFields = `
              <div class="form-group">
                  <label for="pet-name-${i}">Nombre de la Mascota ${i}:</label>
                  <input type="text" id="pet-name-${i}" name="pet-name-${i}" required>
              </div>
              <div class="form-group">
                  <label for="pet-breed-${i}">Raza de la Mascota ${i}:</label>
                  <input type="text" id="pet-breed-${i}" name="pet-breed-${i}" required>
              </div>
              <div class="form-group">
                  <label for="pet-age-${i}">Edad de la Mascota ${i}:</label>
                  <input type="number" id="pet-age-${i}" name="pet-age-${i}" required>
              </div>
          `;

          petsContainer.innerHTML += petFields;
      }
  });
});

