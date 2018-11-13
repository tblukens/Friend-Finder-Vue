<template>
    <form @submit.prevent="checkForm">
        <div>
            <div class="field is-grouped">
                <div class="control has-icons-left has-icons-right column is-half">
                    <label for="name">Full Name:</label>
                    <input class="input is-primary" type="name" name="name" placeholder="First and Last name" v-model="name">
                </div>
                <div class="control has-icons-left has-icons-right column is-half">
                    <label for="image">Image Link:</label>
                    <input class="input is-primary" type="url" name="image" placeholder="Image link" v-model="image">
                </div>
            </div>
            <div class="field column is-half" v-for="(question, i) in questionList" :key="i">
                <div class="left-align col s12">
                    <h5>{{ question }}</h5>
                </div>
                <div class="control">
                    <div class="select is-primary">
                        <select v-model="questions[i]">
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
                    <button class="delete" aria-label="close" @click.prevent="showModal = false"></button>
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
import axios from "axios";

export default {
  name: "Form",
  data: () => {
    return {
      errors: [],
      selected: null,
      name: null,
      showModal: false,
      image: null,
      questions: {
        0: "select",
        1: "select",
        2: "select",
        3: "select",
        4: "select",
        5: "select",
        6: "select",
        7: "select",
        8: "select",
        9: "select"
      },
      bestMatch: null,
      questionList: [
        "1. How comfortable are you with surveys?",
        "2. How comfortable are you with repeat questions?",
        "3. How comfortable are you with dogs?",
        "4. How comfortable are you with cats?",
        "5. How comfortable are you with repeat questions?",
        "6. How comfortable are you with reptiles?",
        "7. How comfortable are you with heights?",
        "8. How comfortable are you with dark places?",
        "9. How comfortable are you with tight spaces?",
        "10. How comfortable are you with beer?"
      ]
    };
  },
  methods: {
    checkForm: function(e) {
      this.errors = [];
      if (!this.name) {
        this.errors.push("Name required.");
      }
      if (!this.image) {
        this.errors.push("Image required.");
      }
      let answers = Object.values(this.questions);
      // console.log(answers)
      answers.forEach((element, i) => {
        i++;
        if (element === "select") {
          return this.errors.push(`Please select an option for question ${i}`);
        } else {
          // console.log(element)
        }
      });

      if (this.errors.length === 0) {
        this.sendForm();
        return false;
      }
    },
    sendForm: function() {
      let answerArr = Object.values(this.questions);
      answerArr.forEach(element => {
        element = parseInt(element);
      });
      let postBody = {
        name: this.name,
        photo: this.image,
        scores: answerArr
      };
      axios
        .post("/api/friends", postBody)
        .then(response => {
          console.log(response);
          if (response.status === 200) {
            this.bestMatch = response.data;
            console.log(this.bestMatch);
            this.showModal = true;
            this.name = null;
            this.image = null;
            this.questions = {
                0: "select",
              1: "select",
              2: "select",
              3: "select",
              4: "select",
              5: "select",
              6: "select",
              7: "select",
              8: "select",
              9: "select"
            };
            this.errors = [];
            return false;
          } else {
            console.log();
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
/* .inline-form {
    display: inline-block;
} */
</style>
