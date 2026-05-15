function showMain() {
    document.getElementById('info-title').innerText = mainData.title;
    
    document.getElementById('content').innerHTML = `
        <div class="user-guide">
            <span class="guide-icon">🛈</span>
            <p>Нажимайте на <b>точки</b> на карте или выбирайте <b>разделы</b> ниже</p>
        </div>
        <div class="accordion-item">
            <div class="accordion-header" onclick="toggleAccordion(this)">Основная информация</div>
            <div class="accordion-content">
                <div style='display: flex; gap: 10px;'>
                <figure style="margin: 0; width: 66%; text-align: center;">
                    <img src='./docs/img/flag.png' style='width: 100%; border-radius: 8px;'>
                    <figcaption style="font-size: 11px; color: #868e96; font-style: italic;">Государственный флаг</figcaption>
                </figure>
                <figure style="margin: 0; width: 32%; text-align: center;">
                    <img src='./docs/img/gerb.png' style='width: 100%; border-radius: 8px;'>
                    <figcaption style="font-size: 11px; color: #868e96; font-style: italic;">Герб республики</figcaption>
                </figure>
                </div>${mainData.info}</div>
        </div>
        <div class="accordion-item">
            <div class="accordion-header" onclick="toggleAccordion(this)">Природа</div>
            <div class="accordion-content">${mainData.nature}<div style='display: flex; gap: 10px;'>
                <figure style="margin: 0; width: 46%; text-align: center;">
                    <img src='./docs/img/nature2.jpg' style='width: 100%; border-radius: 8px;'>
                    <figcaption style="font-size: 11px; color: #868e96; font-style: italic;">Карельский олень</figcaption>
                </figure>
                <figure style="margin: 0; width: 55%; text-align: center;">
                    <img src='./docs/img/nature3.jpg' style='width: 100%; border-radius: 8px;'>
                    <figcaption style="font-size: 11px; color: #868e96; font-style: italic;">Карельский медведь</figcaption>
                </figure>
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <div class="accordion-header" onclick="toggleAccordion(this)">Достопримечательности</div>
            <div class="accordion-content">${mainData.sights}</div>
        </div>
            <footer class="copyright">
                &copy; 2026 Артемьев Марк
            </footer>
        <div>
        </div>
    `;
}

function showInfo(id) {
    const item = data[id];
    document.getElementById('info-title').innerText = item.title;
    
    let html = `
        <button onclick="showMain()" class="exit-btn">⮜ На главную</button>
        <div class="city-description">
            <p>${item.text}</p> 
        </div>
    `;

    html += `
        <div class="info-divider"></div>
        <h4>Фотогалерея:</h4>
        <div class="photo-gallery">
        ${item.images.map(img => `<img src="${img}" class="gallery-item" onclick="openFull(this.src)">`).join('')}
        </div>`;
    
    document.getElementById('content').innerHTML = html;
}

function showSimpleText(id) {
    const item = data[id];
    
    document.getElementById('info-title').innerText = item.title;
    document.getElementById('content').innerHTML = `
        <button onclick="showMain()" class="exit-btn" style="margin-top:20px;">⮜ Назад</button>
        <div class="city-description">
            <p>${item.text}</p>
        </div>
    `;
}

function toggleAccordion(header) {
    header.parentElement.classList.toggle('active');
}

function openFull(src) {
    const modal = document.getElementById('modal');
    document.getElementById('modal-img').src = src;
    modal.style.display = 'flex';
}

window.onload = showMain;
