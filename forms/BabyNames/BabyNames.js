let babyNames = ['Olivia', 'Emma', 'Ava', 'Sophia', 'Isabella', 'Charlotte', 'Amelia', 'Mia', 'Harper', 'Evelyn', 'Abigail', 'Emily', 'Ella', 'Elizabeth', 'Camila', 'Luna', 'Sofia', 'Avery', 'Mila', 'Aria']
btnNext.onclick = function() {
    if (babyNames.length == 5)
        lblNames.value = 'Pick 5 of your favorite names.'
    else
        babyNames.push(selBabyNames.text)
}
btnFavBaby.onclick = function() {
    ChangeForm(FavBabyName)
}