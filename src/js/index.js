const characters = document.querySelectorAll('.character');
characters.forEach((character) => {
    character.addEventListener('mouseenter', () => {

    if(window.innerWidth < 450){
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

        removeSelection(character);
        character.classList.add('selected');

        changeCharacterImage(character);

        changeCharacterName(character);

        changeCharacterInfo(character);

    })
})

function removeSelection(character) {
    const selectedCharacter = document.querySelector('.selected');
    selectedCharacter.classList.remove('selected');
}

function changeCharacterImage(character){
    const characterImage = document.querySelector('.character-png');
    const characterId = character.attributes.id.value
    characterImage.src = `./src/img/card-${characterId}.png`
}

function changeCharacterName(character) {
    const characterName = document.getElementById('character-name');
    characterName.innerText = character.getAttribute('data-name');
}

function changeCharacterInfo(character){
    const characterInfo = document.getElementById('character-description');
    characterInfo.innerText = character.getAttribute('data-description')
}