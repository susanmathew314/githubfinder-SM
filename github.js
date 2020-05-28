class Github {
    constructor() {
        this.client_id = '4cbdf803f53e22276d6b';
        this.client_secret = 'da3eefcf8c9a6ac779bb6b3b139fa48983cefd95'
        this.repos_count = 10;
        this.repos_sort = 'created:asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profileData = await profileResponse.json();
        const reposData = await reposResponse.json();
        return {
            repos: reposData,
            profile: profileData
        }
    }
}