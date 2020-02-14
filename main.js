const app = new Vue({
    el: '#app',
    data: {
        books: [
            {
                name: 'love99',
                price: 99,
                date: '2019-11',
                count: 1
            },
            {
                name: 'machine learning',
                price: 66,
                date: '2020-1',
                count: 1
            },
            {
                name: 'learn vue.js',
                price: 22,
                date: '2020-2',
                count: 100
            },
            {
                name: 'TOFEL',
                price: 77,
                date: '2018-12',
                count: 108
            }
        ]
    },
    methods: {
        // getFinalPrice(price) {
        //     return '$' + price.toFixed(2);
        // }
        increment(index) {
            this.books[index].count++;
        },
        decrement(index) {
            this.books[index].count--;
        },
        remove(index) {
            this.books.splice(index, 1);
            //delete the index position variable
        }
    },
    computed: {
        totalPrice() {
            let ans = 0;
            for (let item of this.books)
            {
                ans += item.price;
            }
            return ans;
        }
    },
    filters: { // 过滤器, the essence is a function
        // handle it and return a new one
        // through '|' {{ item | filters }} to use
        showPrice(price) {
            return '$' + price.toFixed(2);
        }
    }
});