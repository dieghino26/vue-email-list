// create Vue app
console.log("Vue ok", Vue)
const endpoint = "https://flynn.boolean.careers/exercises/api/random/mail";

const app = Vue.createApp({
    data() {
        return {
            emails: []
        }
    },
    created() {
        for (let i = 1; i <= 10; i++) {
            axios.get(endpoint).then((res) => {
                const email = res.data.response
                this.emails.push(email)
            })
        }
    }
});
app.mount("#root");