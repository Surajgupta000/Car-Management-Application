module.exports = {
    formatDate: (date) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Intl.DateTimeFormat('en-US', options).format(date);
    },
    generateId: () => {
        return 'id-' + Math.random().toString(36).substr(2, 9);
    }
};