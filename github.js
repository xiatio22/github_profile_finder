  class Github{
      constructor(){
          this.client_id = 'b135e7930a0c7075af01';
          this.client_secret = 'deea6e32eaaace11f8b90d9e931ff38de81eb1e2'
          this.repos_count = 5
          this.repos_sort = 'created: asc'
      }

  async getUser(user){
      const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
      const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

      const profile = await profileResponse.json();
      const repos = await repoResponse.json();

      return{
          profile,
          repos
      }

  }
}