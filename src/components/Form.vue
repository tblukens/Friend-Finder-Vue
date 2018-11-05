<template>
    <form @submit.prevent="checkForm">
        <div>
            <div class="field is-grouped">
                <div class="control has-icons-left has-icons-right column is-half">
                    <input class="input is-primary" type="name" placeholder="First and Last name" v-model="name">
                    <span class="icon is-medium is-left">
                        <font-awesome-icon icon="user" />
                    </span>
                    <span class="icon is-medium is-right">
                        <font-awesome-icon icon="check" class="fa-xs" />
                    </span>
                </div>
                <div class="control has-icons-left has-icons-right column is-half">
                    <input class="input is-primary" type="url" placeholder="Image link" v-model="image">
                    <span class="icon is-medium is-left">
                        <font-awesome-icon icon="image" />
                    </span>
                    <span class="icon is-medium is-right">
                        <font-awesome-icon icon="check" />
                    </span>
                </div>
            </div>
            <div class="field column is-half">
                <div class="left-align col s12">
                    <h5>1. How comfortable are you with surveys?</h5>
                </div>
                <div class="control">
                    <div class="select is-primary">
                        <select v-model="questions.a1">
                            <option value="select">Please select...</option>
                            <option value="1">1 ( least comfortable )</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5 ( most comfortable )</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="field column is-half">
                <div class="left-align col s12">
                    <h5>2. How comfortable are you with repeat questions?</h5>
                </div>
                <div class="control">
                    <div class="select is-primary">
                        <select v-model="questions.a2">
                            <option value="select">Please select...</option>
                            <option value="1">1 ( least comfortable )</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5 ( most comfortable )</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="field column is-half">
                <div class="left-align col s12">
                    <h5>3. How comfortable are you with dogs?</h5>
                </div>
                <div class="control">
                    <div class="select is-primary">
                        <select v-model="questions.a3">
                            <option value="select">Please select...</option>
                            <option value="1">1 ( least comfortable )</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5 ( most comfortable )</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="field column is-half">
                <div class="left-align col s12">
                    <h5>4. How comfortable are you with cats?</h5>
                </div>
                <div class="control">
                    <div class="select is-primary">
                        <select v-model="questions.a4">
                            <option value="select">Please select...</option>
                            <option value="1">1 ( least comfortable )</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5 ( most comfortable )</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="field column is-half">
                <div class="left-align col s12">
                    <h5>5. How comfortable are you with repeat questions?</h5>
                </div>
                <div class="control">
                    <div class="select is-primary">
                        <select v-model="questions.a5">
                            <option value="select">Please select...</option>
                            <option value="1">1 ( least comfortable )</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5 ( most comfortable )</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="field column is-half">
                <div class="left-align col s12">
                    <h5>6. How comfortable are you with reptiles?</h5>
                </div>
                <div class="control">
                    <div class="select is-primary">
                        <select v-model="questions.a6">
                            <option value="select">Please select...</option>
                            <option value="1">1 ( least comfortable )</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5 ( most comfortable )</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="field column is-half">
                <div class="left-align col s12">
                    <h5>7. How comfortable are you with heights?</h5>
                </div>
                <div class="control">
                    <div class="select is-primary">
                        <select v-model="questions.a7">
                            <option value="select">Please select...</option>
                            <option value="1">1 ( least comfortable )</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5 ( most comfortable )</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="field column is-half">
                <div class="left-align col s12">
                    <h5>8. How comfortable are you with dark places?</h5>
                </div>
                <div class="control">
                    <div class="select is-primary">
                        <select v-model="questions.a8">
                            <option value="select">Please select...</option>
                            <option value="1">1 ( least comfortable )</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5 ( most comfortable )</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="field column is-half">
                <div class="left-align col s12">
                    <h5>9. How comfortable are you with tight spaces?</h5>
                </div>
                <div class="control">
                    <div class="select is-primary">
                        <select v-model="questions.a9">
                            <option value="select">Please select...</option>
                            <option value="1">1 ( least comfortable )</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5 ( most comfortable )</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="field column is-half">
                <div class="left-align col s12">
                    <h5>10. How comfortable are you with beer?</h5>
                </div>
                <div class="control">
                    <div class="select is-primary">
                        <select v-model="questions.a10">
                            <option value="select">Please select...</option>
                            <option value="1">1 ( least comfortable )</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5 ( most comfortable )</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="control">
                <button class="button is-primary">Submit</button>
            </div>
            <p v-if="errors.length">
                <b class="has-text-danger">Please correct the following error(s):</b>
                <ul>
                    <li v-for="error in errors" :key="error">{{ error }}</li>
                </ul>
            </p>
        </div>
        <div class="modal" v-bind:class="{ 'is-active' : showModal}">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Your new friend:</p>
                    <button class="delete" aria-label="close" @click="showModal = false"></button>
                </header>
                <section class="modal-card-body">
                    <div v-if="bestMatch">
                        <h1> {{bestMatch.name}} </h1>
                        <img v-bind:src="bestMatch.photo" />
                    </div>
                </section>
            </div>
        </div>
    </form>

</template>

<script>
import axios from 'axios'

export default {
    name: "Form",
    data: () => {
        return {
            errors: [],
            selected: null,
            name: null,
            showModal: false,
            image: null,
            questions: { a1: "select", a2: "select", a3: "select", a4: "select", a5: "select", a6: "select", a7: "select", a8: "select", a9: "select", a10: "select" },
            bestMatch: null
        }
    },
    methods: {
        checkForm: function (e) {
            this.errors = [];
            if (!this.name) {
                this.errors.push('Name required.');
            }
            if (!this.image) {
                this.errors.push('Image required.');
            }
            let answers = Object.values(this.questions);
            // console.log(answers)
            answers.forEach((element, i) => {
                i++
                if (element === "select") {
                    return this.errors.push(`Please select an option for question ${i}`)
                } else {
                    // console.log(element)
                }
            });

            if (this.errors.length === 0) {
                this.sendForm();
                return true;
            }
            e.preventDefault();
        },
        sendForm: function () {
            let answerArr = Object.values(this.questions)
            answerArr.forEach(element => {
                element = parseInt(element)
            });
            let postBody = {
                name: this.name,
                photo: this.image,
                scores: answerArr
            }
            axios.post(process.env.API_URL, postBody)
                .then(response => {
                    console.log(response)
                    if (response.status === 200) {
                        this.bestMatch = response.data
                        console.log(this.bestMatch)
                        this.showModal = true;
                        this.name = null
                        this.image = null
                        this.questions = { a1: "select", a2: "select", a3: "select", a4: "select", a5: "select", a6: "select", a7: "select", a8: "select", a9: "select", a10: "select" };
                        return false;
                    } else {
                        console.log()
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
};
</script>

<style>
/* .inline-form {
    display: inline-block;
} */
</style>
