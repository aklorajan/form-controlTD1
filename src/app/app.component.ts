import {Component, ViewChild} from '@angular/core';
import {Form, NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') formControl:NgForm
  selectedQuestion = 'pet'
  answerQuestion = ''
  genders = ['male', 'female'];
  user={
    username: '',
    email: '',
    secret : '',
    answer: '',
    gender: ''
  };
  showData = false

suggestedName = 'superName'
  suggestUserName() {
    // this.formControl.setValue({
    //   userData:{
    //     username: this.suggestedName,
    //     email: ''},
    //   secret: 'pet',
    //   answer: '',
    //   gender: 'male',
    //
    // })
    this.formControl.form.patchValue({
      userData:{
        username: this.suggestedName
      }
    })
  }

  onSubmit(){
    this.showData = true;
    this.user.username = this.formControl.value.userData.username;
    this.user.email  = this.formControl.value.userData.email;
    this.user.secret  = this.formControl.value.secret;
    this.user.answer  = this.formControl.value.answer;
    this.user.gender  = this.formControl.value.gender;

    this.formControl.reset()
  }

}
