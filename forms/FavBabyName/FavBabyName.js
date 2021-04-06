let babyNames = ['Olivia', 'Emma', 'Ava', 'Sophia', 'Isabella', 'Charlotte', 'Amelia', 'Mia', 'Harper', 'Evelyn', 'Abigail', 'Emily', 'Ella', 'Elizabeth', 'Camila', 'Luna', 'Sofia', 'Avery', 'Mila', 'Aria']

drpNames.onshow = function() {
    imgPic.hidden = true
    drpNames.clear()
    for (i = 0; i < babyNames.length; i++)
        drpNames.addItem(babyNames[i])
}
drpNames.onclick = function(s) {
    if (typeof(s) == "object") {
        return
    } else {
        drpNames.value = s
        lblOutput.value = `Your favorite baby name is ${s}.`
       imgPic.hidden = false
    }
}