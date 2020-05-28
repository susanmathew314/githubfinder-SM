class DisplayUI {
    constructor() {
        this.displayProfile = document.getElementById('displayProfile');
    }

    showProfile(user) {
        this.displayProfile.innerHTML = `
       <div class="card card-body mb3">
       <div class="row">
        <div class="col-md-3">
                <img class="img-fluid mb-2" src="${user.avatar_url}">
                <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
        </div>
        <div class="col-md-9">
            <span class="badge badge-primary">Public repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>

            <br/><br/>
            <ul class="list-group">
                <li class="list-group-item">Company:${user.company}</li>
                <li class="list-group-item">Website/Blog: ${user.blog}</li>
                <li class="list-group-item">User Email: ${user.email}</li>
                <li class="list-group-item">User Location: ${user.location}</li>
                <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
        </div>
        </div>
        </div>  
        <h3 class="page-heading mb-3"> Latest Repos</h3>
        <div id="repos"></div>    
        `;
    }

    showRepos(repos) {
        let output = '';
        repos.forEach(function (repo) {
            output += `
            <div class="card card-body mb-2">
            <div class="row">
            <div class="col-md-6"><a href="${repo.html_url}">${repo.name}</a></div>
            <div class="col-md-6">
            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
            <span class="badge badge-secondary">Watchers: ${repo.watchers}</span>
            <span class="badge badge-success">Forks: ${repo.forks_count}</span>
           </div>
            </div>
            </div>
            `;
        });
        //output repos
        document.getElementById('repos').innerHTML = output;
    }



    //Show alert Message
    showAlert(message, className) {
        //Remove if there is any alert
        this.clearAlert()
        //create div
        const div = document.createElement('div');
        //Add classes
        div.className = className;
        //Add text
        div.appendChild(document.createTextNode(message));
        //Get Parent
        const container = document.querySelector(".searchContainer");
        //Get Search Box
        const search = document.querySelector('.search');
        //insert alert
        container.insertBefore(div, search);

        setTimeout(() => {
            this.clearAlert().remove();
        }, 3000);

    }
    clearAlert() {
        const alertmessage = document.querySelector('.alert');
        if (alertmessage) {
            alertmessage.remove();
        }

    }

    // Clear profile
    clearProfile() {
        this.displayProfile.innerHTML = '';
    }
}