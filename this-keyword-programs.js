var guide = {                                   // This var is an object, or basically a library format. similar to the schemas in flask
    title: 'Guide to Programming',
    content: 'Content goes here...',
    visibleToUser: function (viewingUserRole) {
        if (viewingUserRole === 'paid') {          // '===' must be paid and a string
            return true;
        }
    },
    renderContent: function (userRole) {
        if (this.visibleToUser(userRole)) {
            console.log(this.title + " - " + this.content);
        } else {
            this.content = '';
            console.log(this.title + " - " + this.content);
        }
    }
};

user = { role: 'paid' };
guide.renderContent(user.role);

user = { role: 'free' };
guide.renderContent(user.role);