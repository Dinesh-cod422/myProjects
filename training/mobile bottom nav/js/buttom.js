function touch(item) {
    const icon = document.querySelectorAll('i');
    icon.forEach((e) => {
      e.classList.remove('active');
    });
    item.classList.add('active')
}