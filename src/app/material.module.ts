import { NgModule } from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from "@angular/common";
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule} from '@angular/material/chips';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatExpansionModule} from '@angular/material/expansion';
import { ReactiveFormsModule } from "@angular/forms";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {MatButtonToggleModule} from '@angular/material/button-toggle';





const myModules=[
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatChipsModule,
    MatPaginatorModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatDatepickerModule,
   // MatNativeDateModule,
   MatMomentDateModule,
    MatButtonToggleModule

];

@NgModule({
    imports: [
        CommonModule,
        myModules],
    exports: [myModules] })

    export class MaterialModule {}
