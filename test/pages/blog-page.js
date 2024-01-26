class BlogPage {
    open() {
        return browser.url('/blog');
    }

    get recentPosts(){
        // return $$('//*[@id="recent-posts-3"]/ul/li/');
        return $$('#recent-posts-3 ul li');
    }


}

export default new BlogPage();