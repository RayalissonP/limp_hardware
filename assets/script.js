        // Função de cálculo e limpeza dos valores
        function calcularTotal() {
         let total = 0;

         // Somar os valores de todas as seleções
         const ids = ["fonte", "placa", "armazenamento", "memoria", "airCooler", "waterCooler", "gabinete", "placaVideo"];
         ids.forEach(id => {
             const select = document.getElementById(id);
             total += parseFloat(select.value) || 0;
         });

         // Adicionar o preço dos fans extras no Watercooler
         const fansExtras = parseInt(document.getElementById("fansExtras").value) || 0;
         total += fansExtras * 5; // Cada fan extra custa R$5

         // Adicionar valor extra se a memória tiver dissipador
         const memoriaComDissipador = document.getElementById("dissipador").checked;
         if (memoriaComDissipador) {
             total += 5;
         }

         // Somar valores dos extras marcados
         const extras = document.querySelectorAll(".extra:checked");
         extras.forEach(extra => {
             total += parseFloat(extra.value) || 0;
         });

         // Adicionar fans extras na seção de Extras
         const fansExtrasExtras = parseInt(document.getElementById("fansExtrasExtras").value) || 0;
         total += fansExtrasExtras * 5; // Cada fan extra custa R$5

         /*document.getElementById("total").textContent = `Total: R$ ${total.toFixed(2)}`;*/
         // Formatar total com vírgula como separador decimal
         document.getElementById("total").textContent = `Total: R$ ${total.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
     }

     // Função para limpar as seleções
     function limparSelecoes() {
         // Zerar seleções dos menus dropdown
         const selects = document.querySelectorAll("select");
         selects.forEach(select => select.value = "0");

         // Desmarcar checkboxes dos extras
         const checkboxes = document.querySelectorAll(".extra");
         checkboxes.forEach(checkbox => checkbox.checked = false);

         // Zerar quantidade de fans extras
         document.getElementById("fansExtras").value = "0";
         document.getElementById("fansExtrasExtras").value = "0";

         // Desmarcar dissipador
         document.getElementById("dissipador").checked = false;

         // Atualizar total
         calcularTotal();
     }