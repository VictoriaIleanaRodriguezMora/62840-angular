import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addAction, substractAction } from '../../../../store/counter.actions';
import { RootState } from '../../../../store';
import { selectCounterState, selectCounterValue } from '../../../../store/counter.selector';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-counter',
  standalone: false,

  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  value$: Observable<number> ;
  value = 0; // 3°
  
  constructor(private store: Store<RootState>) {
    this.value$ = this.store.select(selectCounterValue)
     // DEBUG: Esto debe imprimir el valor actual del contador
  this.value$.subscribe(value => console.log('Valor del contador:', value));
     // this.store.subscribe({ // 1° forma - eficiente
     // this.store.select(selectCounterState).subscribe({ // 2° forma. retorna {value: 0}
     /* this.store.select(selectCounterValue).subscribe({ // 3° forma
       next: (state) => {
         console.log("Se modificó el estado del contador", state);
         // this.value = state.counterFK.value 1° forma - eficiente
         // this.value = state.value // 2° forma. retorna {value: 0}
         this.value = state // 3° forma. retorna  el valor de {value: 0}
       }
  }) */
  }

  onAdd() {
    // Disparo la accion: addAction
    this.store.dispatch(addAction())
  }

  onSubstract() {
    // Disparo la accion: substractAction
    this.store.dispatch(substractAction())
  }

}
