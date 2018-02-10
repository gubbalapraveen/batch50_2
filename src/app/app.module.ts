import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'
import {RouterModule, Routes} from '@angular/router';

const appRoutes:Routes = [
// {
	// path: 'subjects', component: SubjectsComponent,
	// children:[		
		// {path: 'subjectDetails/:praveen', component: SubjectDetailsComponent},
		// {path: 'subjectDetails', component: SubjectDetailsComponent}		
	// ]
// },
//{path: 'courses', component: CoursesComponent},
//{path: 'home', component: HomeComponent,
//	children:[{path: 'courses', component: CoursesComponent},{path: 'fourth', component: FourthComponent}]
//},
//{path: '**', component: DefaultComponent, pathMatch:"full"}
];

import { FirstComponent } from './first/first.component';
import { DataService } from './data.service';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { HomeComponent } from './home/home.component';
import { DefaultComponent } from './default/default.component';
import { CoursesComponent } from './courses/courses.component';
import { FifthComponent } from './fifth/fifth.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { SubjectDetailsComponent } from './subject-details/subject-details.component';
import { EigthComponent } from './eigth/eigth.component';
import { HttpClientModule } from '@angular/common/http';

import { ArthService } from './arth.service';
import { AbcService } from './abc.service';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
@NgModule({
  declarations: [
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    HomeComponent,
    DefaultComponent,
    CoursesComponent,
    FifthComponent,
    SubjectsComponent,
    SubjectDetailsComponent,
    EigthComponent,
    TemplateFormsComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,
	RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService,ArthService,AbcService],
  bootstrap: [TemplateFormsComponent]
})
export class AppModule { }
