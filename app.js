//init github
const github = new Github;
const ui = new DisplayUI;

//search input

const searchUser = document.getElementById('searchUser');
const nameUser = document.getElementById('nameUser');

//Search input event listener
searchUser.addEventListener('keyup', (e) => {
    //get input text
    const userText = e.target.value;
    if (userText !== '') {
        console.log(userText);
        //Make Http Call
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    ui.showAlert('User not Found', 'alert alert-danger');
                } else {
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos)
                }

            })
    } else {
        ui.clearProfile()
    }
});

/* nameUser.addEventListener('keyup', (e) => {
    usertext = e.target.value;
    console.log(usertext);
}); */