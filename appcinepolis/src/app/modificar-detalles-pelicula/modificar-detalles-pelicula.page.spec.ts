import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModificarDetallesPeliculaPage } from './modificar-detalles-pelicula.page';

describe('ModificarDetallesPeliculaPage', () => {
  let component: ModificarDetallesPeliculaPage;
  let fixture: ComponentFixture<ModificarDetallesPeliculaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarDetallesPeliculaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModificarDetallesPeliculaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
