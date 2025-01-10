import { Component } from '@angular/core';
import { ReactiveFormsModule,FormBuilder,FormGroup,Validators } from '@angular/forms';
import { PosthomeService } from '../../service/posthome.service';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-createpost',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './createpost.component.html',
  styleUrl: './createpost.component.css'
})
export class CreatepostComponent {
  postForm: FormGroup;
  imagePreview: string|null = null;

  constructor(private formB: FormBuilder, private postHomeService: PosthomeService,){
    this.postForm = this.formB.group({
      tittle: ['', [Validators.required, Validators.minLength(5)]],
      image: [null, Validators.required],
    });
  }
  onImageSelected(event:Event){
    const file = (event.target as HTMLInputElement).files?.[0];
    if(file){
      this.postForm.patchValue({image: file});
      const reader = new FileReader();
      reader.onload = ()=>{
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
  onSubmit() {
    if (this.postForm.valid) {
      const formData = new FormData();
      formData.append('title', this.postForm.value.title);
      formData.append('image', this.postForm.value.image);

      this.postHomeService.createPost(formData).subscribe(
        () => {
          alert('Post creado exitosamente');
        },
        (error) => {
          alert(`Error al crear el post: ${error.message}`);
        }
      );
    }
  }
}
