let showCreate = false;

function handlePlusPress() {
  showCreate = !showCreate;

  const createBtn = document.getElementById('createButton');
  if (createBtn) {
    createBtn.style.display = showCreate ? 'flex' : 'none';
  }
}
