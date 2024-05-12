import { Component } from '@angular/core';
import { SupabaseService } from '../../../services/auth.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrl: './sing-up.component.css'
})
export class SingUpComponent {
  loading = false

  signUpForm = this.formBuilder.group({
    email: '',
    password: '',
    user_name: ''
  })

  constructor(
    private readonly supabase: SupabaseService,
    private readonly formBuilder: FormBuilder
  ) {}

  async onSubmit(): Promise<void> {
    try {
      this.loading = true
      const email = this.signUpForm.value.email as string
      const password = this.signUpForm.value.password as string
      const user_name = this.signUpForm.value.user_name as  string

      const { error } = await this.supabase.signUp(user_name, email, password)
      if (error) throw error
      alert('Check your email for the login link!')
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      this.signUpForm.reset()
      this.loading = false
    }
  }
}
