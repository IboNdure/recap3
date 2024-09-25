



export function CharacterCard() {
    const cardElement = document.createElement('li');
    cardElement.classList.add('card');
    cardElement.innerHTML = ` <div class="card__image-container">
            <img
              class="card__image"
              src="${picSource}"
              alt="${charName}"
            />
            <div class="card__image-gradient"></div>
          </div>
          <div class="card__content">
            <h2 class="card__title">${charName}</h2>
            <dl class="card__info">
              <dt class="card__info-title">${charStatusTitle}</dt>
              <dd class="card__info-description">${charStatus}</dd>
              <dt class="card__info-title">${charTypeTitle}</dt>
              <dd class="card__info-description">${charType}</dd>
              <dt class="card__info-title">${charOccurrencesTitle}</dt>
              <dd class="card__info-description">${charOccurrences}</dd>
            </dl>
          </div>`;
          return cardElement;
};

CharacterCard();

