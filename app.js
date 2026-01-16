 document.querySelectorAll('.btn-ler').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const id = e.currentTarget.dataset.relato;
          const img = document.querySelector(`.relatos-grid img[data-id="${id}"]`);
          const title = img ? img.alt : 'Relato';
          const modal = document.getElementById('relato-modal');
          document.getElementById('modal-title').textContent = title;
          document.getElementById('modal-body').textContent = 'Aqui vai o texto completo do relato — coloque o conteúdo real aqui.';
          if (typeof modal.showModal === 'function') modal.showModal(); else modal.style.display = 'block';
        });
      });
      document.getElementById('modal-close').addEventListener('click', () => {
        const modal = document.getElementById('relato-modal');
        if (typeof modal.close === 'function') modal.close(); else modal.style.display = 'none';
      });