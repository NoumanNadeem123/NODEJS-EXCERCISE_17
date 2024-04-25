// Question # 17
// // Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the 
// dinner, and you have space for only two guests. 
// " Start with your program from Exercise 16. Add a new line that prints a message saying that you can 
// invite only two people for dinner. 
// " Remove guests from your list one at a time until only two names remain in your list. Each time you pop 
// a name from your list, print a message to that person letting them know you’re sorry you can’t invite 
// them to dinner. 
// " Print a message to each of the two people still on your list, letting them know they’re still invited.
// " Remove the last two names from your list, so you have an empty list. Print your list to make sure you 
// actually have an empty list at the end of your program.
var quest_list = ['Aliha', 'Alishma', 'Fatima', 'Nouman', 'Talha'];
// for(let i=0; i<quest_list.length; i++){
//     console.log('Respected Sir/Madam ' +  quest_list[i] + ',\n we invited you on dinner tomorrow.\nThank you\n')
// }
var not_present = 'Talha';
var new_quest = 'Aysha';
quest_list[5] = new_quest;
// for(let i=0; i<quest_list.length; i++){
//     console.log('Respected Sir/Madam ' +  quest_list[i] + ',\n we invited you on dinner tomorrow.\nThank you\n')
// }
quest_list.unshift("Muhammad Hussain Ali", "Nouman Nadeem");
// for(let i=0; i<quest_list.length; i++){
//     console.log('Respected Sir/Madam ' +  quest_list[i] + ',\n we invited you on dinner tomorrow,But we found bigger dinner table so we invite more 3 spacial quest.\nThank you\n')
// }
console.log('\nUnfortunatly we can not arrange big table , only two people will allow.');
while (quest_list.length > 2) {
    var remove_quest = quest_list.pop();
    console.log("Sorry Sir/Madam. ".concat(remove_quest, " you are not invited for dinner"));
}
for (var i = 0; i < quest_list.length; i++) {
    console.log('Respected Sir/Madam ' + quest_list[i] + ',\n Yes you are still invited on tomorrow for dinner.\nThank you\n');
}
quest_list.splice(0, 2);
console.log(quest_list);
